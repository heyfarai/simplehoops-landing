import { Badge } from '@/components/ui/badge';

interface Product {
  badge: string;
  title: string;
  blurb: string;
  features: string[];
  variant: 'paper' | 'ink' | 'pink';
}

const PRODUCTS: Product[] = [
  {
    badge: 'Site',
    title: 'Your league, on the web',
    blurb: 'Branded league site with schedule, standings, rosters, and stories. No theme to wrestle. No plugin to update.',
    features: [
      'Drag-and-drop schedule builder',
      'Auto-published standings + recaps',
      'Roster collection forms',
      'Integrated payments + ticketing',
      'White-label mobile apps',
    ],
    variant: 'paper',
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
    variant: 'ink',
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
    variant: 'pink',
  },
];

const VARIANT_CLASSES: Record<Product['variant'], string> = {
  paper: 'bg-bg-paper text-ink border-[3px] border-ink',
  ink: 'bg-ink text-text-inverse border-[3px] border-ink',
  pink: 'bg-brand-pink text-text-inverse border-[3px] border-ink',
};

export function Products() {
  return (
    <section id="products" className="bg-bg-body px-6 py-20 md:py-28 border-b border-ink">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <Badge variant="default">The platform</Badge>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mt-5 mb-4">
            Three tools.<br />One ecosystem.
          </h2>
          <p className="font-body text-lg text-ink/70">
            Each tool stands alone. Together they replace the spreadsheet,
            the WordPress install, the stat sheet, the broadcast rig, and
            the content team you don&apos;t have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.badge}
              className={`${VARIANT_CLASSES[p.variant]} p-8 flex flex-col gap-5`}
            >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
