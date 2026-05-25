// server-only. claims the next available Jam waitlist code for an email,
// upserts a juuk `person` row, and stamps the code into person.bio so the
// pairing (email ↔ code) is queryable later.
//
// degradation: if SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing, this
// returns { code: null, reason: 'unconfigured' } and the caller falls back
// to the existing email-only behavior. nothing breaks when juuk isn't wired.
//
// race: we count + claim in two round-trips (no transaction). two simultaneous
// signups at slot 19/20 can in theory both grab the same code. for a 20-code
// campaign on a youth tournament waitlist, the cost is "ops manually rotates
// one code." not worth a stored proc.

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import {
  JAM_WAITLIST_BIO_PREFIX,
  JAM_WAITLIST_CODES,
} from './codes';

// minimal shape of the slice of juuk's schema we touch — avoids pulling in
// generated types from the juuk repo. extend only if we read more columns.
type PersonRow = {
  id: string;
  email: string | null;
  display_name: string;
  phone: string | null;
  bio: string | null;
};
type PersonInsert = {
  email: string;
  display_name: string;
  phone?: string | null;
  bio?: string | null;
};
type PersonUpdate = {
  phone?: string | null;
  bio?: string | null;
};
type JamDb = {
  public: {
    Tables: {
      person: {
        Row: PersonRow;
        Insert: PersonInsert;
        Update: PersonUpdate;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type IssueResult =
  | { code: string; reason: 'issued' | 'already_issued' }
  | { code: null; reason: 'cap_reached' | 'unconfigured' | 'error' };

export interface IssueInput {
  email: string;
  contactName?: string;
  phone?: string;
}

let cachedClient: SupabaseClient<JamDb> | null = null;

function getClient(): SupabaseClient<JamDb> | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  if (cachedClient) return cachedClient;
  cachedClient = createClient<JamDb>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cachedClient;
}

function existingCodeFromBio(bio: string | null | undefined): string | null {
  if (!bio) return null;
  // pull the first JAM-XXXXX following our prefix marker.
  const re = new RegExp(
    `${JAM_WAITLIST_BIO_PREFIX.replace(/[[\]]/g, '\\$&')}[^A-Z]*(JAM-[A-Z0-9]{5})`,
  );
  const m = bio.match(re);
  return m ? m[1] : null;
}

function bioWithCode(prev: string | null | undefined, code: string): string {
  const stamp = `${JAM_WAITLIST_BIO_PREFIX} ${code}`;
  const trimmed = (prev || '').trim();
  return trimmed ? `${trimmed}\n${stamp}` : stamp;
}

export async function issueJamWaitlistCode(input: IssueInput): Promise<IssueResult> {
  const email = input.email.trim().toLowerCase();
  if (!email) return { code: null, reason: 'error' };

  const supabase = getClient();
  if (!supabase) return { code: null, reason: 'unconfigured' };

  try {
    // 1. lookup existing person by email
    const { data: existing, error: lookupErr } = await supabase
      .from('person')
      .select('id, bio')
      .eq('email', email)
      .maybeSingle();
    if (lookupErr) throw lookupErr;

    // 2. if they already have a code stamped, return it (idempotent re-submit)
    if (existing) {
      const prior = existingCodeFromBio(existing.bio);
      if (prior) return { code: prior, reason: 'already_issued' };
    }

    // 3. count how many codes have been issued so far across all persons
    const { count, error: countErr } = await supabase
      .from('person')
      .select('id', { count: 'exact', head: true })
      .like('bio', `%${JAM_WAITLIST_BIO_PREFIX}%`);
    if (countErr) throw countErr;

    const issuedCount = count ?? 0;
    if (issuedCount >= JAM_WAITLIST_CODES.length) {
      // cap reached. still upsert the person (we want them in juuk regardless).
      await upsertPersonNoCode(supabase, email, input.contactName, input.phone, existing);
      return { code: null, reason: 'cap_reached' };
    }

    const nextCode = JAM_WAITLIST_CODES[issuedCount];
    const newBio = bioWithCode(existing?.bio, nextCode);

    if (existing) {
      const { error: updErr } = await supabase
        .from('person')
        .update({ bio: newBio, phone: input.phone ?? undefined })
        .eq('id', existing.id);
      if (updErr) throw updErr;
    } else {
      const { error: insErr } = await supabase.from('person').insert({
        email,
        display_name: input.contactName?.trim() || email,
        phone: input.phone?.trim() || null,
        bio: newBio,
      });
      if (insErr) {
        // race: someone else inserted by email between our select and insert.
        // re-query and recover.
        const { data: now } = await supabase
          .from('person')
          .select('id, bio')
          .eq('email', email)
          .maybeSingle();
        const recovered = existingCodeFromBio(now?.bio ?? null);
        if (recovered) return { code: recovered, reason: 'already_issued' };
        throw insErr;
      }
    }

    return { code: nextCode, reason: 'issued' };
  } catch (err) {
    console.error('[jam] issueJamWaitlistCode failed:', err);
    return { code: null, reason: 'error' };
  }
}

async function upsertPersonNoCode(
  supabase: SupabaseClient<JamDb>,
  email: string,
  contactName: string | undefined,
  phone: string | undefined,
  existing: Pick<PersonRow, 'id' | 'bio'> | null,
) {
  if (existing) return; // person already in juuk; nothing to add
  await supabase.from('person').insert({
    email,
    display_name: contactName?.trim() || email,
    phone: phone?.trim() || null,
  });
}
