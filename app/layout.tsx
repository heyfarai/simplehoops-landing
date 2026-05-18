import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'shuuk — basketball league software',
  description:
    'All-in-one platform for basketball leagues. Manage schedules, track stats, build your website, and stream games like the pros.',
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
      <body>{children}</body>
    </html>
  );
}
