import Link from 'next/link';

/**
 * Permanent event banner — black strip at the top of every non-/jam page,
 * directing visitors to the 3x3 Jam waitlist. In normal document flow so it
 * pushes content down and scrolls away naturally.
 */
export function EventBanner() {
  return (
    <Link
      href="/jam"
      className="block w-full bg-ink text-text-inverse no-underline border-b border-white/10 hover:bg-neutral-dark-100 transition-colors"
    >
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 py-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em]">
        <span className="bg-brand-pink text-text-inverse font-bold tracking-[0.12em] px-2 py-1">
          SHUUK 3x3 JAM
        </span>
        <span className="hidden sm:inline text-white/70">Ottawa · July 18, 2026</span>
        <span className="text-brand-pink border-b-[1.5px] border-brand-pink pb-px">
          Join the waitlist →
        </span>
      </div>
    </Link>
  );
}
