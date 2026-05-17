const COMBINE = [
  { nm: 'Combine', ds: 'Standing vertical, max vertical, lane agility, 20m sprint, wingspan, standing reach.' },
  { nm: 'Handles Gauntlet', ds: 'Cone course + defender. Fastest clean time wins.' },
  { nm: 'Free Throw Clinic', ds: 'Coach-run, 15 minutes, 2× per day.' },
  { nm: 'Shot Clock Sprint', ds: '12 seconds. Make as many as possible.' },
];

const EVERYONE = [
  { nm: 'Bump', ds: 'Every 3 games on Court 6. Non-trivial prize.' },
  { nm: 'H-O-R-S-E', ds: 'Open bracket. Recurring all day.' },
  { nm: 'Kids Shootout', ds: 'Lower rim. Ages 6–12. Once mid-day.' },
  { nm: 'Caterpillar Sprint', ds: '2× per day. Head-to-head teams.' },
  { nm: 'Moms Only · Beat the Clock', ds: 'Once, mid-afternoon. Mom assist required.' },
  { nm: 'Beat the Clock', ds: 'Random spectator pulled. One arc shot.' },
  { nm: 'Half-Court Shot', ds: 'Wristband holder. 3× across the day.' },
  { nm: 'Handles Challenge', ds: 'Crowd challenges a court player.' },
  { nm: 'Player of the Hour', ds: 'Named hourly. On the TV feed. Sponsor presented.' },
  { nm: 'Spin the Court', ds: 'DJ wheel. Random court freezes.' },
  { nm: 'The Bounty', ds: 'One player. $100. Posted at 10 AM.' },
];

function Card({ nm, ds }: { nm: string; ds: string }) {
  return (
    <div className="bg-bg-filled border-2 border-ink shadow-hard-sm rounded-sm p-5 hover-lift hover:shadow-hard-lg">
      <h4 className="font-display font-extrabold text-xl mb-2">{nm}</h4>
      <p className="font-body text-sm leading-snug">{ds}</p>
    </div>
  );
}

export function Activations() {
  return (
    <section
      id="activations"
      className="bg-bg-filled border-y-2 border-ink px-6 py-16 md:py-24"
    >
      <div className="max-w-[1040px] mx-auto">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/heading--combine.svg"
              alt="Combine — for players"
              className="h-[clamp(48px,7vw,96px)]"
            />
          </h3>
          <span className="bg-brand-pink text-text-inverse font-mono text-xs uppercase tracking-[0.18em] px-3 py-2">
            SKILL · MEASURED
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {COMBINE.map((a) => (
            <Card key={a.nm} {...a} />
          ))}
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mt-12 mb-3">
          ── side action
        </div>
        <h2 className="mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/heading--side-quests.svg"
            alt="Side quests — stuff happening between games"
            className="h-[clamp(72px,10vw,132px)]"
          />
        </h2>
        <p className="font-body text-base md:text-lg mb-6 max-w-2xl">
          Picnic energy. Family on the bleachers. Real basketball in the cracks.
        </p>

        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h3 className="font-display font-extrabold text-3xl">For everyone</h3>
          <span className="bg-ink text-text-inverse font-mono text-xs uppercase tracking-[0.18em] px-3 py-2">
            PLAYGROUND · ALL AGES
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {EVERYONE.map((a) => (
            <Card key={a.nm} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}
