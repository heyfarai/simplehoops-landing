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
  // { nm: 'Moms Only · Beat the Clock', ds: 'Once, mid-afternoon. Mom assist required.' },
  { nm: 'Beat the Clock', ds: 'Random spectator pulled. One arc shot.' },
  { nm: 'Half-Court Shot', ds: 'Wristband holder. 3× across the day.' },
  { nm: 'Handles Challenge', ds: 'Crowd challenges a court player.' },
  { nm: 'Player of the Hour', ds: 'Named hourly. On the TV feed. Sponsor presented.' },
  // { nm: 'Spin the Court', ds: 'DJ wheel. Random court freezes.' },
  // { nm: 'The Bounty', ds: 'One player. $100. Posted at 10 AM.' },
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
      className="px-6 py-16 md:py-40 min-h-screen flex items-center"
    >
      <div className="max-w-[1040px] mx-auto w-full">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3 ">
        <h2 className="text-extrude text-brand-pink leading-[0.85] tracking-tight text-[clamp(44px,12vw,140px)] mb-8">
          mini-combine
        </h2>
        </div>
        <p className="font-display font-extrabold text-[clamp(20px,4vw,48px)] uppercase mb-6 max-w-none tracking-tight leading-[1.5]">
          <span className="font-light">Max Vertical.</span> Sprint. Touch.<br />
          <span className="font-light">Skills</span> on the clock.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {COMBINE.map((a) => (
            <Card key={a.nm} {...a} />
          ))}
        </div>

      <div className="mt-40">
        <h2 className="text-extrude text-brand-pink leading-[0.85] tracking-tight text-[clamp(44px,12vw,140px)] mb-8">
          side quests
        </h2>
        <p className="font-display font-extrabold text-[clamp(20px,4vw,48px)] uppercase mb-6 max-w-none tracking-tight leading-[1.5]">
          <span className="font-light">BUMP.</span> 1v1. Player of the Hour.<br />
          <span className="font-light">Prizes</span> all day.
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
      </div>
    </section>
  );
}
