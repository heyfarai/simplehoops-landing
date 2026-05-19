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
  title: { absolute: 'shuuk! 3x3 jam — Ottawa · Saturday July 18, 2026' },
  description:
    'Ottawa basketball development day. Outdoor 3x3 + a midday indoor IQ session. U12 / U14 / U16. 12 teams per division. Saturday July 18, 2026.',
  keywords: [
    '3x3 basketball Ottawa',
    'basketball tournament Ottawa',
    'youth basketball Ottawa',
    'U12 U14 U16 basketball',
    'basketball development Ottawa',
    'Masonic Centre Ottawa',
  ],
  alternates: { canonical: '/jam' },
  openGraph: {
    type: 'website',
    url: 'https://shuuk.ca/jam',
    title: 'shuuk! 3x3 jam — Ottawa · Saturday July 18, 2026',
    description:
      'Ottawa basketball development day. Outdoor 3x3 + midday IQ session. U12 / U14 / U16. Saturday July 18, 2026.',
    images: [{ url: '/img/3on3-jam-OG.jpg', width: 1200, height: 630, alt: 'shuuk! 3x3 jam — Ottawa, July 18, 2026' }],
  },
  twitter: {
    title: 'shuuk! 3x3 jam — Ottawa · Saturday July 18, 2026',
    description:
      'Ottawa basketball development day. Outdoor 3x3 + midday IQ session. U12 / U14 / U16. Saturday July 18, 2026.',
    images: ['/img/3on3-jam-OG.jpg'],
  },
};

const EVENT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'shuuk! 3x3 jam',
  description:
    "Ottawa's basketball development day. Outdoor 3x3 + a midday indoor IQ session for players, parents, and coaches. U12 / U14 / U16. 12 teams per division.",
  startDate: '2026-07-18T09:30:00-04:00',
  endDate: '2026-07-18T19:00:00-04:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Ottawa Masonic Centre',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2140 Walkley Road',
      addressLocality: 'Ottawa',
      addressRegion: 'ON',
      postalCode: 'K1G 3V3',
      addressCountry: 'CA',
    },
  },
  image: ['https://shuuk.ca/img/3on3-jam-OG.jpg'],
  url: 'https://shuuk.ca/jam',
  organizer: {
    '@type': 'Organization',
    name: 'Shuuk',
    url: 'https://shuuk.ca',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://shuuk.ca/jam#waitlist',
    price: '240',
    priceCurrency: 'CAD',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-01-01',
  },
  sport: 'Basketball',
};

export default function JamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSONLD) }}
      />
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
