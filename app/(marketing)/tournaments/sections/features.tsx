import { Badge } from '@/components/ui/badge';

const FEATURES = [
  {
    badge: 'Registration',
    title: 'Open it. Fill it. Charge it.',
    bullets: [
      'Custom registration forms',
      'Stripe-powered payments',
      'Waitlists + caps per division',
      'Refunds & confirmations automated',
    ],
  },
  {
    badge: 'Brackets',
    title: 'Draw it on Friday, run it on Saturday.',
    bullets: [
      'Round-robin + single/double elim',
      'Live re-seeding on dropouts',
      'Print + digital displays in sync',
      'Score from the scorer\'s table',
    ],
  },
  {
    badge: 'Stream',
    title: 'Pro broadcast on a tournament budget.',
    bullets: [
      'Live stream every court',
      'Scorebug, bracket overlay, sponsor reads',
      'Auto recaps + per-game highlights',
      'Archive forever — nothing to delete',
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="bg-bg-body px-6 py-20 md:py-28 border-b border-ink">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-14 text-center md:text-left">
          The whole stack.<br />Two laptops.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.badge}
              className="border-[3px] border-ink bg-bg-filled p-8 flex flex-col gap-5"
            >
              <Badge variant="default">{f.badge}</Badge>
              <h3 className="font-display font-black uppercase text-2xl text-ink leading-tight">
                {f.title}
              </h3>
              <ul className="flex flex-col gap-2 font-body text-sm text-ink/80">
                {f.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span aria-hidden="true" className="text-brand-pink">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
