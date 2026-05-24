import type { Metadata } from 'next';
import { Hero } from './sections/hero';
import { Products } from './sections/products';
import { ContentEngine } from './sections/content-engine';
import { Pricing } from './sections/pricing';
import { DemoForm } from '@/components/site/demo-form';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Sites with live stats and streaming. All-in-one. For teams + clubs.',
  description:
    'Sites with live stats and streaming for teams and clubs, all-in-one. Rosters, schedules, camps, tryouts. The easiest way to get the elite look. Get shuuk!',
  alternates: { canonical: '/teams' },
  openGraph: {
    url: 'https://shuuk.ca/teams',
    title: 'Shuuk — Sites with live stats and streaming. All-in-one. For teams + clubs.',
    description:
      'Sites with live stats and streaming for teams and clubs, all-in-one. Rosters, schedules, camps, tryouts.',
    images: [{ url: '/img/shuuk-OG.jpg', width: 1200, height: 630, alt: 'Shuuk — Sites with live stats and streaming. All-in-one.' }],
  },
  twitter: {
    title: 'Shuuk — Sites with live stats and streaming. All-in-one. For teams + clubs.',
    description:
      'Sites with live stats and streaming for teams and clubs, all-in-one.',
    images: ['/img/shuuk-OG.jpg'],
  },
};

export default function TeamsPage() {
  return (
    <>
      <Hero />
      <Products />
      <ContentEngine />
      <Pricing />

      <section className="bg-ink text-text-inverse px-6 py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">
          <h2 className="font-display font-black uppercase text-5xl md:text-7xl leading-[0.95]">
            Your team site,<br />live stats, streaming.<br /><span className="text-brand-pink">All-in-one.</span>
          </h2>
          <p className="font-body text-lg text-text-inverse/70 max-w-prose">
            Twenty-minute demo. We&apos;ll show you what your team page could look
            like by next weekend.
          </p>
          <Button variant="primary" href="#demo">
            Book a Demo
          </Button>
        </div>
      </section>

      <DemoForm
        formType="demo-teams"
        title="Book a demo"
        subtitle="We'll show you how shuuk fits your team. Takes 20 minutes."
        orgLabel="Team or club name"
        teamsLabel="How many teams in your program?"
      />
    </>
  );
}
