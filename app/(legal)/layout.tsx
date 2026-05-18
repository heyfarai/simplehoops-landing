import type { ReactNode } from 'react';
import Link from 'next/link';
import { EventBanner } from '@/components/site/event-banner';
import { SiteFooter } from '@/components/site/site-footer';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg-body text-ink min-h-screen font-body flex flex-col">
      <EventBanner />
      <header className="bg-bg-paper border-b border-ink px-4 sm:px-8 lg:px-14 py-4 sm:py-5">
        <Link href="/" className="inline-block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/shuuk-logo--light.png"
            alt="shuuk!"
            className="h-8 sm:h-10 w-auto"
          />
        </Link>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter variant="slim" />
    </div>
  );
}
