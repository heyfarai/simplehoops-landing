import { Button } from '@/components/ui/button';

const ROWS = [
  { age: 'U12', year: '2014', size: '12 mins or first to 15pts' },
  { age: 'U14', year: '2012–2013', size: '3–4 players' },
  { age: 'U16', year: '2010–2011', size: '3–4 players' },
];

export function Divisions() {
  return (
    <section
      id="div"
      className="bg-bg-filled border-y-2 border-ink px-6 py-16 md:py-32 min-h-screen flex items-center"
    >
      <div className="max-w-[1040px] mx-auto w-full">
        <h2 className="text-extrude text-brand-pink leading-[0.85] tracking-tight text-[clamp(72px,12vw,140px)] mb-8">
          madd hoops
        </h2>
        <p className="font-display font-extrabold text-[clamp(28px,4vw,48px)] leading-[1.05] uppercase mb-6 max-w-none tracking-tight leading-[1.5]">
          <span className="font-light">72 teams</span> Boys. Girls.<br />
          <span className="font-light">12 mins</span> per game.<br />
          <span className="font-light">4 players</span> per team.<br />
          <span className="font-light">4 games</span> guaranteed. <br />
        </p>

        <div className="border-[2px] border-ink bg-bg-paper rounded-sm overflow-hidden my-12">
          <div className="grid grid-cols-[2fr_3fr] gap-0 bg-ink text-text-inverse font-mono font-bold text-sm uppercase tracking-[0.05em] px-5 py-3">
            <div>Division</div>
            <div>Birth Year</div>
          </div>
          {ROWS.map((r) => (
            <div
              key={r.age}
              className="grid grid-cols-[2fr_3fr] gap-0 px-5 py-4 border-t border-ink"
            >
              <div className="font-display font-extrabold text-2xl">{r.age}</div>
              <div className="font-body">{r.year}</div>
            </div>
          ))}
        </div>


        <div className="font-body text-lg mt-4">
          <strong>Entry fee: $240 per team</strong>
          <br />
          Includes: <br />
          <ul className="list-disc list-inside">
            <li className="font-body ml-4">4 games guaranteed (Pools + Championships)</li>
            <li className="font-body ml-4">Event swag</li>
            <li className="font-body ml-4">Hydration stations</li>
            <li className="font-body ml-4">Live Stats</li>
            <li className="font-body ml-4">Game video</li>
            <li className="font-body ml-4">Team branding</li>
          </ul>
        </div>

        <div className="mt-7">
          <Button variant="primary" href="#waitlist" className="mt-4 w-fit">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
