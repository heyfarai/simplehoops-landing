import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Tier {
  name: string;
  price: string;
  cadence?: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    name: 'Starter',
    price: '$99',
    cadence: '/ month',
    blurb: 'For one league finding its footing.',
    features: ['Site, schedules, standings', 'Up to 20 teams', 'Roster forms + payments', 'Email support'],
    cta: 'Book a Demo',
  },
  {
    name: 'Broadcast',
    price: '$499',
    cadence: '/ month',
    blurb: 'Live stats + streaming. The real deal.',
    features: [
      'Everything in Starter',
      'Unlimited teams',
      'Live stats + streaming overlays',
      'Auto recaps + socials',
      'Priority support',
    ],
    cta: 'Book a Demo',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Provincial bodies, multi-site associations, white-label.',
    features: [
      'Everything in Broadcast',
      'White-label apps',
      'Dedicated success manager',
      'Custom integrations + SLA',
    ],
    cta: 'Talk to us',
  },
];

export function Pricing() {
  return (
    <section className="bg-bg-body px-6 py-20 md:py-28 border-b border-ink">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-3 text-center">
          Pricing
        </h2>
        <p className="font-body text-lg text-ink/70 text-center mb-14">
          Pick a plan. Switch any time. No setup fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((t) => (
            <Card
              key={t.name}
              as="article"
              variant={t.featured ? 'bold-pink' : 'bold-filled'}
              className={t.featured ? 'shadow-hard-lg md:-translate-y-2' : undefined}
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] opacity-70">
                {t.name}
              </span>
              <div className="font-display font-black text-5xl leading-none">
                {t.price}
                {t.cadence && (
                  <span className="font-body font-normal text-base opacity-70 ml-2">
                    {t.cadence}
                  </span>
                )}
              </div>
              <p className="font-body text-base opacity-90">{t.blurb}</p>
              <ul className="flex flex-col gap-2 font-body text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden="true">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={t.featured ? 'outline' : 'primary'}
                href="#demo"
                className={t.featured ? 'mt-auto !text-text-inverse !border-text-inverse hover:!bg-text-inverse hover:!text-brand-pink' : 'mt-auto'}
              >
                {t.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
