// server-only. reads juuk to figure out whether the discount-code campaign is
// still live (i.e., fewer than 20 codes issued). consumed by the /jam page
// to flip headline + CTA copy. revalidated by Next ISR (60s) — see page.tsx.
//
// when SUPABASE_* env is unset OR the lookup fails, returns the "safe" state
// (no discount messaging). better to undersell the campaign than to advertise
// codes the form can't deliver.

import { createClient } from '@supabase/supabase-js';
import { JAM_WAITLIST_BIO_PREFIX, JAM_WAITLIST_CODES } from './codes';

export interface JamWaitlistStatus {
  /** show the "$25 off" pitch on the page */
  codesAvailable: boolean;
  /** how many of the 20 are left (0-20). undefined when unconfigured. */
  codesRemaining?: number;
  /** total cap (20). */
  codesTotal: number;
  /** populated when env unset or query failed */
  unconfigured?: boolean;
  error?: boolean;
}

const SAFE_FALLBACK: JamWaitlistStatus = {
  codesAvailable: false,
  codesTotal: JAM_WAITLIST_CODES.length,
  unconfigured: true,
};

export async function getJamWaitlistStatus(): Promise<JamWaitlistStatus> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return SAFE_FALLBACK;

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { count, error } = await supabase
      .from('person')
      .select('id', { count: 'exact', head: true })
      .like('bio', `%${JAM_WAITLIST_BIO_PREFIX}%`);
    if (error) throw error;

    const total = JAM_WAITLIST_CODES.length;
    const issued = count ?? 0;
    const remaining = Math.max(0, total - issued);
    return {
      codesAvailable: remaining > 0,
      codesRemaining: remaining,
      codesTotal: total,
    };
  } catch (err) {
    console.error('[jam] getJamWaitlistStatus failed:', err);
    return {
      codesAvailable: false,
      codesTotal: JAM_WAITLIST_CODES.length,
      error: true,
    };
  }
}
