'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

interface EditorialNavProps {
  logoSrc: string;
  logoAlt?: string;
  logoHref?: string;
  navItems: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  className?: string;
}

/**
 * Full-width zine masthead — paper bg, ink border-bottom, mono nav links with
 * pink active state. Hamburger menu on mobile.
 */
export function EditorialNav({
  logoSrc,
  logoAlt = 'shuuk!',
  logoHref = '/',
  navItems,
  ctaHref,
  ctaLabel,
  className,
}: EditorialNavProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <header
        className={cn(
          'flex items-center justify-between gap-4 bg-bg-paper border-b border-ink px-4 sm:px-8 lg:px-14 py-4 sm:py-5',
          className,
        )}
      >
        <Link href={logoHref} className="flex-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt={logoAlt} className="h-8 sm:h-10 w-auto" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex gap-6 font-body text-sm font-semibold uppercase tracking-wider"
        >
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={cn(
                'text-ink/55 hover:text-ink transition-colors whitespace-nowrap',
                item.active &&
                  'text-brand-pink border-b-2 border-brand-pink pb-1 -mb-1',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="primary" href={ctaHref} className="flex-none whitespace-nowrap">
            {ctaLabel}
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            className="md:hidden flex-none w-10 h-10 flex items-center justify-center border border-ink rounded-sm bg-bg-filled hover-lift hover:shadow-hard-sm"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="16" height="2" fill="currentColor" />
              <rect x="2" y="9" width="16" height="2" fill="currentColor" />
              <rect x="2" y="14" width="16" height="2" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div
          id="mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 md:hidden bg-bg-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="bg-bg-paper border-b-2 border-ink shadow-hard-pink">
            <div className="flex items-center justify-between px-4 py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center border border-ink rounded-sm bg-bg-filled hover-lift hover:shadow-hard-sm"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4 L16 16 M16 4 L4 16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <nav aria-label="Primary mobile" className="px-4 pb-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={close}
                  className={cn(
                    'font-display text-3xl font-extrabold py-3 border-t border-ink/15',
                    item.active ? 'text-brand-pink' : 'text-ink',
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="primary" href={ctaHref} onClick={close} className="mt-4 w-fit">
                {ctaLabel}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Wraps EditorialNav in a fixed-position reveal layer that:
 *   1. stays hidden while user is in the first viewport (nav already in flow above);
 *   2. slides in from the top when scrolling UP past one viewport height;
 *   3. slides out when scrolling DOWN again.
 *
 * Use alongside an inline EditorialNav so the page starts with the nav in flow
 * and gains a sticky variant once scrolled deep into the page.
 */
export function StickyNav(props: EditorialNavProps) {
  const [shown, setShown] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function update() {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const past = y > window.innerHeight;
      setShown(past && !goingDown);
      lastY.current = y;
      ticking.current = false;
    }
    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    }
    lastY.current = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden={!shown}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-out will-change-transform',
        shown ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <EditorialNav {...props} />
    </div>
  );
}

/**
 * Phase 1 stub. Real implementation lands when marketing pages migrate.
 * Glass-effect floating pill nav, blur-24px, pill radius. See DESIGN.md.
 */
export function FloatingPillNav() {
  return null;
}
