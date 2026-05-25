// test helper for the Jam discount-codes campaign states.
// seeds juuk's `person` table with a controlled number of rows that have the
// `[jam-w1]` prefix in `bio` — that's the same signal getJamWaitlistStatus()
// reads to decide whether codes are available / sold out.

import { createClient } from '@supabase/supabase-js';

const JAM_BIO_PREFIX = '[jam-w1]';
// distinct email pattern so cleanup never touches real people in shared juuk dev DB
const SEED_EMAIL_PATTERN = 'e2e-jam-seed-';

export function jamSeedConfigured(): boolean {
  return !!process.env.SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
}

function client() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** wipe every `[jam-w1]`-tagged person row — that's the marker the page counts,
 *  so test isolation requires absolute control of it, not just our seed rows.
 *  in shared juuk-local dev this also reclaims the row the form-submit test
 *  leaves behind when it issues a real code. safe to call when not configured. */
export async function cleanJamSeed(): Promise<void> {
  if (!jamSeedConfigured()) return;
  const supabase = client();
  await supabase.from('person').delete().like('bio', `%${JAM_BIO_PREFIX}%`);
}

/** insert `count` person rows tagged as having received a Jam code.
 *  cleans existing rows first so callers don't have to. */
export async function seedJamRows(count: number): Promise<void> {
  if (!jamSeedConfigured()) {
    throw new Error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY required for seedJamRows');
  }
  await cleanJamSeed();
  if (count <= 0) return;
  const supabase = client();
  // unique-per-row email so parallel workers (if ever enabled) can't collide
  const runId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const rows = Array.from({ length: count }, (_, i) => ({
    email: `${SEED_EMAIL_PATTERN}${runId}-${i}@example.com`,
    display_name: `Seed Team ${i + 1}`,
    bio: `${JAM_BIO_PREFIX} JAM-FAKE${String(i).padStart(2, '0')}`,
  }));
  const { error } = await supabase.from('person').insert(rows);
  if (error) throw new Error(`seedJamRows insert failed: ${error.message}`);
}
