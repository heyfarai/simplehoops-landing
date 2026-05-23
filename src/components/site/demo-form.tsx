'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { TurnstileWidget } from '@/components/site/turnstile-widget';
import { cn } from '@/lib/cn';

type FormType = 'demo' | 'demo-teams';

interface DemoFormProps {
  formType: FormType;
  /** Section heading text. */
  title?: string;
  /** Section subheading text. */
  subtitle?: string;
  /** Label for the org / league / tournament field. */
  orgLabel?: string;
  /** Label for the teams field. */
  teamsLabel?: string;
  /** Use a free-form text input for teams instead of a select. */
  teamsFreeform?: boolean;
}

/**
 * Inline demo-request form. Posts to /api/send-email. Used at the bottom of
 * marketing pages. Replaces the legacy modal pattern with a section in flow.
 */
export function DemoForm({
  formType,
  title = 'Book a demo',
  subtitle = "We'll show you the platform and answer your questions. Takes 20 minutes.",
  orgLabel = 'League / organization name',
  teamsLabel = 'How many teams?',
  teamsFreeform = false,
}: DemoFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const hasTurnstile = !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const onToken = useCallback((t: string) => setToken(t), []);
  const onExpire = useCallback(() => setToken(null), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (hasTurnstile && !token) {
      setError('Please complete the verification before submitting.');
      return;
    }

    setSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      type: formType,
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      league: String(fd.get('league') || '').trim(),
      teams: String(fd.get('teams') || '').trim(),
      hp: String(fd.get('hp') || ''),
      turnstileToken: token ?? undefined,
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }
      router.push('/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setSubmitting(false);
    }
  }

  return (
    <section
      id="demo"
      className="bg-bg-paper border-t border-ink px-6 py-20 md:py-28"
      aria-labelledby="demo-title"
    >
      <div className="max-w-2xl mx-auto">
        <h2
          id="demo-title"
          className="font-display font-black uppercase text-4xl md:text-5xl text-ink mb-3"
        >
          {title}
        </h2>
        <p className="font-body text-ink/70 mb-10 text-lg">{subtitle}</p>

        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <Field id="name" name="name" label="Your name" autoComplete="name" required />
          <Field
            id="email"
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            required
          />
          <Field id="league" name="league" label={orgLabel} autoComplete="organization" required />
          {teamsFreeform ? (
            <Field id="teams" name="teams" label={teamsLabel} required />
          ) : (
            <SelectField
              id="teams"
              name="teams"
              label={teamsLabel}
              required
              options={[
                { value: '', label: 'Select…', disabled: true },
                { value: '1', label: '1 team' },
                { value: '2-5', label: '2–5 teams' },
                { value: '6-10', label: '6–10 teams' },
                { value: '10+', label: '10+ teams' },
              ]}
            />
          )}

          <input
            type="text"
            name="hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
          />

          <TurnstileWidget onToken={onToken} onExpire={onExpire} className="mt-2" />

          {error && (
            <div
              role="alert"
              aria-live="polite"
              className="font-body text-sm text-danger border border-danger bg-danger-subtle px-4 py-3 rounded-sm"
            >
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={submitting}
            aria-busy={submitting}
            className="mt-2 w-fit"
          >
            {submitting ? 'Sending…' : 'Request demo →'}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  type = 'text',
  required,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={cn(
          'bg-bg-filled border border-ink px-4 py-3 font-body text-base text-ink rounded-sm',
          'focus:outline-none focus:shadow-[4px_4px_0_0_var(--color-ink)]',
        )}
      />
    </label>
  );
}

function SelectField({
  id,
  name,
  label,
  required,
  options,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  options: { value: string; label: string; disabled?: boolean }[];
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">{label}</span>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className={cn(
          'bg-bg-filled border border-ink px-4 py-3 font-body text-base text-ink rounded-sm appearance-none',
          'focus:outline-none focus:shadow-[4px_4px_0_0_var(--color-ink)]',
        )}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.disabled}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
