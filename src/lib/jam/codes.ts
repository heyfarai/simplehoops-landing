// server-only. 20 pre-generated codes for the shuuk! 3x3 Jam waitlist (Week 1).
// each code lives in Stripe with max_redemptions=1 / amount_off=2500 / expires Week 8.
// public-repo OK: Stripe enforces the redemption cap, not code secrecy.
//
// issuance order = array order. position N goes to the Nth Week-1 signup.
export const JAM_WAITLIST_CODES = [
  'JAM-35929',
  'JAM-3FYEX',
  'JAM-4KEWH',
  'JAM-4KTT6',
  'JAM-5WSFE',
  'JAM-6J9QR',
  'JAM-6NVNS',
  'JAM-9EPHZ',
  'JAM-EYAM7',
  'JAM-H6VDS',
  'JAM-KY3YW',
  'JAM-PQE73',
  'JAM-RJYED',
  'JAM-S2WEN',
  'JAM-VZ73K',
  'JAM-WGCYA',
  'JAM-X5YV4',
  'JAM-XFP2P',
  'JAM-Y5VPY',
  'JAM-ZA6RK',
] as const;

// prefix used in person.bio when we mark a signup as having received a code.
// chosen as a literal-string filter target: `WHERE bio LIKE '%[jam-w1]%'`.
export const JAM_WAITLIST_BIO_PREFIX = '[jam-w1]';

export const JAM_WAITLIST_DISCOUNT_CENTS = 2500;

export type JamWaitlistCode = (typeof JAM_WAITLIST_CODES)[number];

export function isJamWaitlistCode(s: string): s is JamWaitlistCode {
  return (JAM_WAITLIST_CODES as readonly string[]).includes(s);
}
