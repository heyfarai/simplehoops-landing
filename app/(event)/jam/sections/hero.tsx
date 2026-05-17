import Link from 'next/link';

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[920px] border-b border-ink">
      <div className="flex flex-col justify-center px-12 py-14">
        <h1 className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/3x3-mark.png"
            alt="shuuk! 3x3 jam"
            className="mx-auto block w-full h-auto"
          />
        </h1>
      </div>
      <div className="flex flex-col justify-center px-12 py-14 gap-6">
        <h2 className="font-display text-3xl md:text-5xl leading-tight">
          Parking lot 3x3 Hoops.<br />
          Mini-Combine.<br />
          Knowledge Sessions.<br />
          Picnic &amp; Food trucks.<br />
          Family Fun.
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/70">
          Saturday, July 11, 2026
          <br />
          9:30 AM &mdash; 7:00 PM
          <br />
          Masonic Centre, Walkley, Ottawa, ON
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="#waitlist"
            className="inline-flex w-fit items-center gap-3 bg-brand-pink text-text-inverse font-body font-bold text-base border-4 border-white rounded-full px-6 py-3 shadow-sticker hover-lift"
          >
            Join the Waitlist
          </Link>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/70">
            U12 / U14 / U16 / Boys &amp; Girls
            <br />
            12 teams per division. Spots are limited.
          </div>
        </div>
      </div>
    </section>
  );
}
