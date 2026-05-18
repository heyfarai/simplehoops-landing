'use client';

import { usePathname } from 'next/navigation';
import { EditorialNav, StickyNav } from '@/components/ui/nav';

const ITEMS = [
  { href: '/', label: 'Leagues' },
  { href: '/teams', label: 'Teams & Clubs' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/jam', label: '3x3 Jam' },
];

/**
 * Marketing nav with active-state derived from the current pathname.
 * Renders both the in-flow EditorialNav and the scroll-reveal StickyNav.
 */
export function MarketingNav() {
  const pathname = usePathname() ?? '/';
  const navItems = ITEMS.map((item) => ({
    ...item,
    active: item.href === pathname,
  }));

  const props = {
    logoSrc: '/img/shuuk-logo--light.png',
    logoAlt: 'shuuk!',
    logoHref: '/',
    navItems,
    ctaHref: '#demo',
    ctaLabel: 'Book a Demo',
  };

  return (
    <>
      <EditorialNav {...props} />
      <StickyNav {...props} />
    </>
  );
}
