import type { ReactNode } from 'react';
import { EditorialNav, StickyNav } from '@/components/ui/nav';

const NAV_PROPS = {
  logoSrc: '/jam/shuuk-logo.png',
  navItems: [
    { href: '#', label: '3x3 jam', active: true },
    { href: '#div', label: 'divisions' },
    { href: '#schedule', label: 'schedule' },
    { href: '#venue', label: 'where' },
  ],
  ctaHref: '#waitlist',
  ctaLabel: 'JOIN WAITLIST',
} as const;

export default function JamLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-bg-paper text-ink min-h-screen font-body overflow-x-hidden">
      <EditorialNav
        {...NAV_PROPS}
        transparent
        className="absolute top-0 left-0 right-0 z-20"
      />
      <StickyNav {...NAV_PROPS} />
      {children}
    </div>
  );
}
