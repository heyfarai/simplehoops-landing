import { Badge } from '@/components/ui/badge';
import { Card, type CardVariant } from '@/components/ui/card';

interface Product {
  badge: string;
  title: string;
  blurb: string;
  features: string[];
  variant: Extract<CardVariant, 'bold-paper' | 'bold-ink' | 'bold-pink'>;
}

const PRODUCTS: Product[] = [
  {
    badge: 'Site',
    title: 'Pro team site in an afternoon',
    blurb: 'Bio, roster, schedule, results, news, photos. Connected to live data — no manual updates.',
    features: [
      'Brand colors, logo, custom URL',
      'Auto rosters + parent forms',
      'Drag-and-drop schedule builder',
      'Tryouts + camp registration',
      'IG-ready content out of the box',
    ],
    variant: 'bold-paper',
  },
  {
    badge: 'Stream',
    title: 'Broadcast every game',
    blurb: 'iPad on a tripod and you’re live. Parents watch from grandma’s couch.',
    features: [
      'One-tap live + auto-archive',
      'Lower-thirds, scorebug, replays',
      'Embedded on your team site',
    ],
    variant: 'bold-ink',
  },
  {
    badge: 'Score',
    title: 'Stats without the spreadsheet',
    blurb: 'Score the game on an iPad. Box, standings, and recaps publish themselves.',
    features: [
      'Realtime box + standings',
      'Per-player season stats',
      'Auto game recaps + social posts',
      'Export anywhere — CSV, Hudl, etc.',
    ],
    variant: 'bold-pink',
  },
];

export function Products() {
  return (
    <section id="products" className="bg-bg-body px-6 py-20 md:py-28 border-b border-ink">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <Badge variant="default">The platform</Badge>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mt-5 mb-4">
            Stop duct-taping<br />tools together.
          </h2>
          <p className="font-body text-lg text-ink/70">
            One subscription, three tools, zero hand-offs. Game on the iPad
            flows straight to the site, the stream, and the IG feed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <Card key={p.badge} as="article" variant={p.variant}>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] opacity-70 w-fit border border-current px-2 py-1 rounded-sm">
                shuuk.{p.badge}
              </span>
              <h3 className="font-display font-black uppercase text-2xl md:text-3xl leading-tight">
                {p.title}
              </h3>
              <p className="font-body text-base opacity-80 leading-relaxed">{p.blurb}</p>
              <ul className="flex flex-col gap-2 mt-2 font-body text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden="true">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
