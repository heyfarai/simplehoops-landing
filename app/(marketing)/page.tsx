import type { Metadata } from 'next';
import { Hero } from './sections/hero';
import { Products } from './sections/products';
import { Comparison } from './sections/comparison';
import { Pricing } from './sections/pricing';
import { JamFeatureCard } from '@/components/site/jam-feature-card';
import { DemoForm } from '@/components/site/demo-form';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Shuuk — Basketball league software',
  description:
    'All-in-one platform for basketball leagues. Sites, schedules, stats, streaming, and content — without the spreadsheet hell.',
};

export default function Page() {
  return (
    <>
      <Hero />
      <Products />
      <Comparison />
      <Pricing />
      <section className="bg-bg-body px-6 py-20 border-b border-ink">
        <div className="max-w-5xl mx-auto">
          <JamFeatureCard />
        </div>
      </section>

      <section className="bg-ink text-text-inverse px-6 py-24 md:py-32 text-center border-b border-ink">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">
          <h2 className="font-display font-black uppercase text-5xl md:text-7xl leading-[0.95]">
            Run your league<br />the way you wanted to.
          </h2>
          <p className="font-body text-lg text-text-inverse/70 max-w-prose">
            Twenty minutes with us and you&apos;ll see if shuuk fits. No deck, no
            scripted demo. We&apos;ll just open it and click.
          </p>
          <Button variant="primary" href="#demo">
            Book a Demo
          </Button>
        </div>
      </section>

      <DemoForm formType="demo" />
    </>
  );
}
