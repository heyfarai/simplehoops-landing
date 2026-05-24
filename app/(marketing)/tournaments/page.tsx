import type { Metadata } from 'next';
import { Hero } from './sections/hero';
import { Pain } from './sections/pain';
import { Features } from './sections/features';
import { Stats } from './sections/stats';
import { JamFeatureCard } from '@/components/site/jam-feature-card';
import { DemoForm } from '@/components/site/demo-form';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Sites with live stats and streaming. All-in-one. For tournaments.',
  description:
    'Sites with live stats and streaming for tournaments, all-in-one. Online registration, brackets, and a website for a one-weekend showcase or a season-long circuit. Get shuuk!',
  alternates: { canonical: '/tournaments' },
  openGraph: {
    url: 'https://shuuk.ca/tournaments',
    title: 'Shuuk — Sites with live stats and streaming. All-in-one. For tournaments.',
    description:
      'Sites with live stats and streaming for tournaments, all-in-one. Registration, brackets, website — one weekend or a season circuit.',
    images: [{ url: '/img/shuuk-OG.jpg', width: 1200, height: 630, alt: 'Shuuk — Sites with live stats and streaming. All-in-one.' }],
  },
  twitter: {
    title: 'Shuuk — Sites with live stats and streaming. All-in-one. For tournaments.',
    description:
      'Sites with live stats and streaming for tournaments, all-in-one. Registration, brackets, website.',
    images: ['/img/shuuk-OG.jpg'],
  },
};

export default function TournamentsPage() {
  return (
    <>
      <Hero />
      <Pain />
      <Features />

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60 mb-6 text-center">
            Our flagship event — built on the same stack
          </p>
          <JamFeatureCard />
        </div>
      </section>

      <Stats />

      <section className="px-6 py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">
          <h2 className="font-display font-black uppercase text-5xl md:text-7xl leading-[0.95] text-ink">
            Your tournament.<br />Schuuk! Up.
          </h2>
          <p className="font-body text-lg text-ink/70 max-w-prose">
            Whether it&apos;s a one-weekend showcase or a season-long circuit,
            we&apos;ll show you the playbook in twenty minutes.
          </p>
          <Button variant="primary" href="#demo">
            Book a Demo
          </Button>
        </div>
      </section>

      <DemoForm
        formType="demo"
        title="Book a demo"
        subtitle="Tell us about the event. We'll show you how shuuk runs it."
        orgLabel="Tournament name"
        teamsLabel="Expected teams / divisions"
        teamsFreeform
      />
    </>
  );
}
