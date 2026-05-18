import type { ReactNode } from 'react';
import { EventBanner } from '@/components/site/event-banner';
import { MarketingNav } from '@/components/site/marketing-nav';
import { SiteFooter } from '@/components/site/site-footer';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg-body text-ink min-h-screen font-body flex flex-col">
      <EventBanner />
      <MarketingNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
