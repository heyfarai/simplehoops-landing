import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plein = localFont({
  src: [
    { path: '../public/fonts/plein/Plein-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/plein/Plein-Medium.woff2',  weight: '500', style: 'normal' },
    { path: '../public/fonts/plein/Plein-Bold.woff2',    weight: '700', style: 'normal' },
    { path: '../public/fonts/plein/Plein-Black.woff2',   weight: '900', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});

const quizlo = localFont({
  src: [
    { path: '../public/fonts/Quizlo.otf', weight: '400', style: 'normal' },
  ],
  variable: '--font-heading',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = 'https://shuuk.ca';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Shuuk — Basketball league software',
    template: '%s | Shuuk',
  },
  description:
    'All-in-one platform for basketball leagues, teams, and tournaments. Sites, schedules, stats, streaming, and content — without the spreadsheet hell.',
  applicationName: 'Shuuk',
  authors: [{ name: 'Shuuk', url: SITE_URL }],
  creator: 'Shuuk',
  publisher: 'Shuuk',
  keywords: [
    'basketball league software',
    'basketball team management',
    'basketball tournament software',
    'live basketball stats',
    'basketball live streaming',
    'league website builder',
    'sports scheduling',
    'basketball Ottawa',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: 'Shuuk',
    title: 'Shuuk — Basketball league software',
    description:
      'All-in-one platform for basketball leagues, teams, and tournaments. Sites, schedules, stats, streaming, and content — without the spreadsheet hell.',
    images: [
      { url: '/img/shuuk-OG.jpg', width: 1200, height: 630, alt: 'Shuuk — Stats. Streaming. Sites. All in one.' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shuuk — Basketball league software',
    description:
      'All-in-one platform for basketball leagues, teams, and tournaments. Sites, schedules, stats, streaming, and content — without the spreadsheet hell.',
    images: ['/img/shuuk-OG.jpg'],
    creator: '@getshuuk',
    site: '@getshuuk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: '#F4F4F0',
  colorScheme: 'light',
};

const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shuuk',
  alternateName: 'shuuk!',
  url: SITE_URL,
  logo: `${SITE_URL}/img/shuuk-logo--light.png`,
  sameAs: ['https://instagram.com/getshuuk'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@shuuk.ca',
    contactType: 'customer support',
    areaServed: 'CA',
    availableLanguage: 'en',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plein.variable} ${quizlo.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
      </body>
    </html>
  );
}
