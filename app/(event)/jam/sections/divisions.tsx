import Link from 'next/link';

const ROWS = [
  { age: 'U12', year: '2014 and later', size: '12 mins or first to 15pts' },
  { age: 'U14', year: '2012–2013', size: '3–4 players' },
  { age: 'U16', year: '2010–2011', size: '3–4 players' },
];

export function Divisions() {
  return (
    <section
      id="div"
      className="bg-bg-filled border-y-2 border-ink px-6 py-16 md:py-24"
    >
      <div className="max-w-[1040px] mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-3">
          ── divisions
        </div>
        <h2 className="mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/heading--hoops.svg"
            alt="Hoops"
            className="h-[clamp(72px,10vw,132px)]"
          />
        </h2>
        <p className="font-display font-extrabold text-[clamp(28px,4vw,48px)] leading-[1.05] uppercase mb-6 max-w-none tracking-tight">
          <span className="text-brand-pink">3 divisions</span>.<br />
          <span className="text-brand-pink">12 teams</span> in each.<br />
          <span className="text-brand-pink">4 players</span> per team.<br />
          <span className="text-brand-pink">12 mins</span> a game.<br />
          <span className="text-brand-pink">4 games</span> guaranteed.
        </p>

        <div className="border-[3px] border-ink bg-bg-paper shadow-hard-pink rounded-sm overflow-hidden">
          <div className="grid grid-cols-[80px_1fr_1fr] gap-0 bg-ink text-text-inverse font-mono text-xs uppercase tracking-[0.18em] px-5 py-3">
            <div>Division</div>
            <div>Birth Year</div>
            <div>Team Size</div>
          </div>
          {ROWS.map((r) => (
            <div
              key={r.age}
              className="grid grid-cols-[80px_1fr_1fr] gap-0 px-5 py-4 border-t border-ink"
            >
              <div className="font-display font-extrabold text-2xl">{r.age}</div>
              <div className="font-body">{r.year}</div>
              <div className="font-body">{r.size}</div>
            </div>
          ))}
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mt-4">
          FIBA 3x3 rules · Outdoor courts · Bring your game.
        </div>

        <div className="font-body text-base mt-4">
          <strong>Entry fee: $TBD per team</strong>
          <br />
          Includes full day access, indoor programming, and event swag.
        </div>

        <div className="mt-7">
          <Link
            href="#waitlist"
            className="inline-flex w-fit items-center gap-3 bg-brand-pink text-text-inverse font-body font-bold text-base border-4 border-white rounded-full px-6 py-3 shadow-sticker hover-lift"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
