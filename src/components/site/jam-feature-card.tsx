import Link from 'next/link';

/**
 * Hard-shadow card linking visitors to /jam from marketing pages. Used on
 * /, /teams, /tournaments. Matches the brutalist primitive: 3px ink border,
 * 12px pink offset shadow, paper background.
 */
export function JamFeatureCard() {
  return (
    <Link
      href="/jam"
      className="group block border-[3px] border-ink bg-bg-paper shadow-hard-pink hover-lift no-underline overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
        <div className="p-8 md:p-12 flex flex-col gap-5">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60 w-fit">
            Saturday, July 18, 2026 · Ottawa
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/3x3-mark.png"
            alt="shuuk! 3x3 jam '26"
            className="block h-20 md:h-32 w-auto"
          />
          <p className="font-body text-ink/80 text-base md:text-lg max-w-prose">
            Ottawa&apos;s first basketball development day. Outdoor 3x3 + a
            midday indoor session for players, parents, and coaches.{' '}
            <span className="bg-brand-pink text-text-inverse px-2 py-0.5 font-bold">
              Join the waitlist.
            </span>
          </p>
          <span className="bg-brand-pink text-text-inverse px-4 py-2 rounded-pill font-mono text-xs font-bold uppercase tracking-[0.12em] w-fit self-start">
            Join waitlist →
          </span>
        </div>
        <div
          className="min-h-[220px] bg-cover bg-center"
          style={{ backgroundImage: "url('/jam/photo-hero.png')" }}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
