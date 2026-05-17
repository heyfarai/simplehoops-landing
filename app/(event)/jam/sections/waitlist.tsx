'use client';

import { useState, useEffect, useCallback, type FormEvent } from 'react';

interface SubmittedSummary {
  teamName: string;
  email: string;
}

export function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<SubmittedSummary | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);
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
      setSubmitted({ teamName: payload.teamName, email: payload.email });
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
      <section id="waitlist" className="bg-bg-paper px-6 py-16 md:py-24">
        <div className="max-w-[1040px] mx-auto">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-3">
            ── reserve your spot
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-4">
            36 spots. <span className="text-brand-pink">One day.</span> Don&apos;t wait.
          </h2>
          <p className="font-body text-base md:text-lg mb-8 max-w-2xl">
            Join the waitlist now. We&apos;ll confirm your spot and send registration details
            as soon as they&apos;re open.
          </p>

          <div className="bg-bg-paper border-[3px] border-ink shadow-hard-pink rounded-sm p-8 md:p-10">
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
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-pink text-text-inverse border-2 border-ink rounded-sm px-6 py-3 font-body font-bold text-base shadow-hard-sm hover-lift hover:shadow-hard-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Reserve Our Spot'}
                </button>
                {error && (
                  <div className="mt-3 font-body text-sm text-danger">{error}</div>
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
                href="https://instagram.com/shuuk"
                target="_blank"
                rel="noopener"
                className="text-brand-pink underline"
              >
                @shuuk
              </a>
            </div>
          </div>
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-backdrop p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="bg-bg-paper border-[3px] border-ink shadow-hard-pink rounded-sm p-8 md:p-10 max-w-[440px] w-full relative">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center font-body text-2xl leading-none"
        >
          ×
        </button>
        <h3 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
          you&apos;re <span className="text-brand-pink">on the list.</span>
        </h3>
        <p className="font-body text-base mb-4">
          We&apos;ve added <strong>{summary.teamName}</strong> to the shuuk! 3x3 jam waitlist.
          Check your inbox at <strong>{summary.email}</strong> — confirmation is on the way.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-6">
          we&apos;ll email you when registration opens.
        </p>
        <div className="flex justify-end">
          <button
            onClick={close}
            className="bg-ink text-text-inverse border-2 border-ink rounded-sm px-5 py-2 font-body font-semibold hover-lift hover:shadow-hard-sm"
          >
            got it →
          </button>
        </div>
      </div>
    </div>
  );
}
