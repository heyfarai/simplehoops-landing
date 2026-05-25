'use client';

import { useState, useEffect, useCallback, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TurnstileWidget } from '@/components/site/turnstile-widget';

interface SubmittedSummary {
  teamName: string;
  email: string;
  code: string | null;
  capReached: boolean;
}

interface WaitlistProps {
  /** when true, the $25-off discount-code campaign is still live (fewer than
   *  20 codes issued). drives headline + CTA + supporting copy. */
  codesAvailable?: boolean;
  /** confirmed-zero state — all 20 codes claimed. distinct from "env unset"
   *  (which falls through to the original "save a spot" copy). */
  codesSoldOut?: boolean;
  /** how many of the 20 are left. powers the scarcity counter. */
  codesRemaining?: number;
  /** total cap (20). */
  codesTotal?: number;
}

export function Waitlist({
  codesAvailable = false,
  codesSoldOut = false,
  codesRemaining,
  codesTotal = 20,
}: WaitlistProps) {
  // either live campaign or post-sellout share the "Join the Waitlist." h2
  const codesContextActive = codesAvailable || codesSoldOut;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<SubmittedSummary | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const hasTurnstile = !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const onToken = useCallback((t: string) => setToken(t), []);
  const onExpire = useCallback(() => setToken(null), []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);

    if (hasTurnstile && !token) {
      setError('Please complete the verification before submitting.');
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      type: 'waitlist' as const,
      event: 'shuuk-3x3-jam',
      source: 'reserve-form',
      teamName: String(data.get('teamName') || '').trim(),
      division: String(data.get('division') || '').trim(),
      contactName: String(data.get('contactName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      hp: String(data.get('hp') || ''),
      turnstileToken: token ?? undefined,
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error('submit_failed');
      }
      const json = (await res.json().catch(() => ({}))) as {
        code?: string | null;
        capReached?: boolean;
      };
      setSubmitted({
        teamName: payload.teamName,
        email: payload.email,
        code: json.code ?? null,
        capReached: !!json.capReached,
      });
      form.reset();
    } catch {
      setError(
        "Something didn't work. Try again, or email hello@shuuk.ca to claim your spot.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section id="waitlist" className="px-6 py-16 md:py-40 min-h-screen flex items-center">
        <div className="max-w-[1040px] mx-auto w-full">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-3">
            {codesContextActive ? 'Waitlist · Week 1 only' : 'Reserve your spot'}
          </div>
          <h2 className="text-extrude text-brand-pink leading-[0.85] tracking-tight text-[clamp(44px,12vw,140px)] mb-8">
            {codesContextActive ? 'Join the Waitlist.' : 'save a spot.'}
          </h2>
          {codesAvailable ? (
            <p className="font-display font-extrabold text-[clamp(18px,3vw,36px)] leading-[1.15] mb-12 max-w-2xl">
              Save $25.{' '}
              <span className="font-light">
                Only {codesRemaining ?? codesTotal} discount codes{' '}
                {codesRemaining !== undefined && codesRemaining < codesTotal
                  ? 'left'
                  : 'available'}
              </span>
            </p>
          ) : codesSoldOut ? (
            <p className="font-display font-extrabold text-[clamp(18px,3vw,36px)] leading-[1.15] mb-12 max-w-2xl">
              Save $25.{' '}
              <span className="font-light line-through decoration-[2px]">
                Only {codesTotal} discount codes
              </span>{' '}
              All gone!
            </p>
          ) : (
            <>
              <p className="font-display font-extrabold text-[clamp(20px,4vw,48px)] leading-[1.05] uppercase mb-6 max-w-none tracking-tight leading-[1.5]">
                <span className="font-light">Don't</span> Miss out.<br />
              </p>
              <p className="font-body text-base md:text-lg mb-8 max-w-2xl">
                Join the waitlist now. We&apos;ll confirm your spot and send registration details
                as soon as they&apos;re open.
              </p>
              <p className="mb-12 font-bold text-base md:text-lg">
                Full team registration will require payment
              </p>
            </>
          )}

          <Card id="reserve" variant="paper" className="p-8 md:p-10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
              <div className="md:col-span-2">
                <label
                  htmlFor="teamName"
                  className="block font-mono text-xs uppercase tracking-[0.18em] mb-2"
                >
                  Team name
                </label>
                <input
                  id="teamName"
                  name="teamName"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="e.g. Walkley Warriors"
                  className="w-full bg-bg-paper border-2 border-ink rounded-sm px-4 py-3 font-body text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="division"
                  className="block font-mono text-xs uppercase tracking-[0.18em] mb-2"
                >
                  Division
                </label>
                <select
                  id="division"
                  name="division"
                  required
                  className="w-full bg-bg-paper border-2 border-ink rounded-sm px-4 py-3 font-body text-base appearance-none"
                >
                  <option value="">Select…</option>
                  <option value="U12">U12</option>
                  <option value="U14">U14</option>
                  <option value="U16">U16</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="contactName"
                  className="block font-mono text-xs uppercase tracking-[0.18em] mb-2"
                >
                  Contact name
                </label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full bg-bg-paper border-2 border-ink rounded-sm px-4 py-3 font-body text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-[0.18em] mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full bg-bg-paper border-2 border-ink rounded-sm px-4 py-3 font-body text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-mono text-xs uppercase tracking-[0.18em] mb-2"
                >
                  Phone number{' '}
                  <span className="normal-case tracking-normal text-ink/40">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(613) 555-0123"
                  className="w-full bg-bg-paper border-2 border-ink rounded-sm px-4 py-3 font-body text-base"
                />
              </div>
              <input
                type="text"
                name="hp"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
              />

              <div className="md:col-span-2">
                <TurnstileWidget onToken={onToken} onExpire={onExpire} className="mb-4" />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Join waitlist'}
                </Button>
                {error && (
                  <div role="alert" aria-live="polite" className="mt-3 font-body text-sm text-danger">
                    {error}
                  </div>
                )}
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-ink/20 font-body text-sm text-ink/70">
              Questions? Reach us at{' '}
              <a href="mailto:hello@shuuk.ca" className="text-brand-pink underline">
                hello@shuuk.ca
              </a>
              <br />
              Follow updates:{' '}
              <a
                href="https://instagram.com/getshuuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-pink underline"
              >
                @getshuuk
              </a>
            </div>
          </Card>
        </div>
      </section>

      {submitted && <WaitlistModal summary={submitted} onClose={() => setSubmitted(null)} />}
    </>
  );
}

function WaitlistModal({
  summary,
  onClose,
}: {
  summary: SubmittedSummary;
  onClose: () => void;
}) {
  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-success-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-backdrop p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <Card variant="paper" className="p-8 md:p-10 max-w-[440px] w-full relative">
        <button
          onClick={close}
          aria-label="Close confirmation"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center font-body text-2xl leading-none"
        >
          ×
        </button>
        <h3
          id="waitlist-success-title"
          className="font-display font-extrabold text-3xl md:text-4xl mb-4"
        >
          you&apos;re <span className="text-brand-pink">on the list.</span>
        </h3>
        <p className="font-body text-base mb-4">
          We&apos;ve added <strong>{summary.teamName}</strong> to the shuuk! 3x3 jam waitlist.
          Check your inbox at <strong>{summary.email}</strong> — confirmation is on the way.
        </p>
        {summary.code ? (
          <div className="mb-6 bg-ink text-text-inverse border-2 border-ink p-4 shadow-hard-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-cyan mb-1">
              your $25-off code
            </p>
            <p className="font-mono text-2xl font-bold tracking-wide select-all">
              {summary.code}
            </p>
            <p className="font-body text-xs text-text-inverse/70 mt-2">
              Use it at checkout. One-time use. We&apos;ve also emailed it to you.
            </p>
          </div>
        ) : summary.capReached ? (
          <p className="font-body text-sm mb-6 p-3 bg-bg-paper border-2 border-ink">
            <strong>Early-bird codes are out</strong> — you&apos;re still on the list.
            Registration opens next week at $275.
          </p>
        ) : (
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-6">
            we&apos;ll email you when registration opens.
          </p>
        )}
        <div className="flex justify-end">
          <button
            onClick={close}
            className="bg-ink text-text-inverse border-2 border-ink rounded-sm px-5 py-2 font-body font-semibold hover-lift hover:shadow-hard-sm"
          >
            got it →
          </button>
        </div>
      </Card>
    </div>
  );
}
