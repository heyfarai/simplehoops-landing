import { Badge } from '@/components/ui/badge';
import { Card, type CardVariant } from '@/components/ui/card';

interface Product {
  badge: string;
  title: string;
  blurb: string;
  features: string[];
  image: string;
  imageAlt: string;
  variant: Extract<CardVariant, 'bold-paper' | 'bold-ink' | 'bold-pink'>;
}

const PRODUCTS: Product[] = [
  {
    badge: 'Site',
    title: 'Your league, on the web',
    blurb: 'Branded league site with schedule, standings, rosters, and stories. No theme to wrestle. No plugin to update.',
    features: [
      'Auto-published standings + recaps',
      'Roster collection forms',
      'Integrated payments + ticketing',
      'White-label mobile apps',
    ],
    image: '/img/img-site.png',
    imageAlt: 'Branded league site with schedule and standings',
    variant: 'bold-paper',
  },
  {
    badge: 'Stats',
    title: 'Live, then everywhere',
    blurb: "One tap on the iPad and the score, box, and standings update in realtime — on the site, in the apps, on the broadcast.",
    features: [
      'Realtime ingest from courtside iPad',
      'Auto-sync across site, apps, stream',
      'AI insights + game recaps',
      'Single source of truth, no double entry',
    ],
    image: '/img/img-stats.png',
    imageAlt: 'Courtside iPad app capturing live game stats',
    variant: 'bold-ink',
  },
  {
    badge: 'Stream',
    title: 'Broadcast that looks pro',
    blurb: 'Pro overlays. Live stats. Sponsor reels. Run your whole season from a phone or a control room.',
    features: [
      'One-click broadcast from any camera',
      'Pro lower-thirds + scorebug',
      'Sponsor & ad inserts',
      'Free for fans, monetisable for you',
    ],
    image: '/img/img-stream.png',
    imageAlt: 'Live broadcast with scorebug and pro overlays',
    variant: 'bold-pink',
  },
];

export function Products() {
  return (
    <section id="products" className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className=" mb-20 text-center">
          <Badge variant="default">The platform</Badge>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mt-5 mb-6">
            Pro-level presentation.<br />For Rec League budgets.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <Card key={p.badge} as="article" variant={p.variant} className="items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.imageAlt}
                className="block h-auto w-[calc(100%+4rem)] -mx-8 self-stretch mx-auto"
              />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] opacity-70 border border-current px-2 py-1 rounded-sm">
                shuuk.{p.badge}
              </span>
              <h3 className="font-display font-black uppercase text-2xl md:text-3xl leading-tight">
                {p.title}
              </h3>
              <p className="font-body text-base opacity-80 leading-relaxed">{p.blurb}</p>
              <ul className="flex flex-col items-center gap-2 mt-2 font-body text-sm">
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
