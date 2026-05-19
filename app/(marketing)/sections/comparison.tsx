import { Card } from '@/components/ui/card';

const BEFORE = [
  'WordPress site that breaks every plugin update',
  'Excel sheet that one person knows how to edit',
  'Stats on a clipboard, typed into Swish later',
  'Streams nobody can find, recordings nobody saves',
  'Sponsor logos in Canva that go stale by week 3',
  'Roster info in Google Forms, payments in e-Transfer',
  'Recaps when somebody has time. Usually nobody.',
];

const AFTER = [
  'Branded site that updates itself from the schedule',
  'Drag-and-drop builder anyone on staff can use',
  'iPad on the bench, live everywhere instantly',
  'Stream embedded on the team page, archived for free',
  'Sponsor inventory tied to the broadcast and the site',
  'Registration + payment in one flow, players paid',
  'Auto recaps, auto socials, auto highlights',
];

export function Comparison() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-3 text-center">
          The old way.<br />And the better way.
        </h2>
        <p className="font-body text-lg text-ink/70  mb-14 text-center mx-auto md:mx-0">
          We&apos;ve all run leagues this way. There&apos;s a less painful version.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Column title="Before shuuk" items={BEFORE} tone="muted" />
          <Column title="With shuuk" items={AFTER} tone="bright" />
        </div>
      </div>
    </section>
  );
}

function Column({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'muted' | 'bright';
}) {
  const isBright = tone === 'bright';
  return (
    <Card
      variant={isBright ? 'bold-ink' : 'bold-filled'}
      className={isBright ? 'p-8 md:p-10 shadow-hard-pink' : 'p-8 md:p-10'}
    >
      <h3
        className={`font-mono text-[11px] font-bold uppercase tracking-[0.18em] mb-5 ${
          isBright ? 'text-brand-pink' : 'text-ink/60'
        }`}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-3 font-body text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="flex-none">
              {isBright ? '+' : '−'}
            </span>
            <span className={isBright ? 'opacity-90' : 'opacity-75 line-through decoration-1'}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
