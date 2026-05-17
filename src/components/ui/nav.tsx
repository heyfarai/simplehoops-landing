import Link from 'next/link';
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
 * pink active state. Used on event surfaces (jam, future event landings).
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
  return (
    <header
      className={cn(
        'flex items-center justify-between bg-bg-paper border-b border-ink px-14 py-5',
        className,
      )}
    >
      <Link href={logoHref} className="flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt={logoAlt} className="h-10 w-auto" />
      </Link>
      <nav className="flex gap-6 font-body text-sm font-semibold uppercase tracking-wider">
        {navItems.map((item) => (
          <Link
            key={item.href + item.label}
            href={item.href}
            className={cn(
              'text-ink/55 hover:text-ink transition-colors',
              item.active &&
                'text-brand-pink border-b-2 border-brand-pink pb-1 -mb-1',
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href={ctaHref}
        className="bg-brand-pink text-text-inverse border border-ink rounded-pill px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] shadow-hard-sm hover-lift hover:shadow-hard-lg"
      >
        {ctaLabel}
      </Link>
    </header>
  );
}

/**
 * Phase 1 stub. Real implementation lands when marketing pages migrate.
 * Glass-effect floating pill nav, blur-24px, pill radius. See DESIGN.md.
 */
export function FloatingPillNav() {
  return null;
}
