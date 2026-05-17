import type { Metadata } from 'next';
import { Hero } from './sections/hero';
import { Divisions } from './sections/divisions';
import { DaySchedule } from './sections/day-schedule';
import { KnowledgeSession } from './sections/knowledge-session';
import { Activations } from './sections/activations';
import { Venue } from './sections/venue';
import { Faq } from './sections/faq';
import { Waitlist } from './sections/waitlist';
import { Footer } from './sections/footer';

export const metadata: Metadata = {
  title: 'SHUUK! 3x3 JAM — Ottawa · Jul 11, 2026',
  description:
    'Outdoor 3x3 + midday indoor session. U12 / U14 / U16. 12 teams per division. Saturday July 11, 2026, Ottawa.',
  openGraph: {
    images: ['/jam/photo-hero.png'],
  },
};

export default function JamPage() {
  return (
    <>
      <Hero />
      <Divisions />
      <DaySchedule />
      <KnowledgeSession />
      <Activations />
      <Venue />
      <Faq />
      <Waitlist />
      <Footer />
    </>
  );
}
