import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Leagues' },
  { href: '/teams', label: 'Teams & Clubs' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/jam', label: '3x3 Jam' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
];

interface SiteFooterProps {
  variant?: 'full' | 'slim';
}

/**
 * Site-wide footer. 'full' = 3-column with nav + legal + brand, used on
 * marketing routes. 'slim' = single row of legal links + copyright, used on
 * tournaments and legal pages where vertical space matters.
 */
export function SiteFooter({ variant = 'full' }: SiteFooterProps) {
  if (variant === 'slim') {
    return (
      <footer className="bg-bg-paper border-t border-ink px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center font-mono text-xs uppercase tracking-[0.18em] text-ink/70">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/shuuk-logo--light.png" alt="shuuk!" className="h-8 w-auto" />
        <div className="text-center">© {new Date().getFullYear()} Shuuk</div>
        <div className="flex gap-5 md:justify-end">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-bg-paper border-t border-ink">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/shuuk-logo--light.png" alt="shuuk!" className="h-10 w-auto mb-3" />
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
            Basketball software.<br />Sites + stats for sports.
          </p>
        </div>
        <FooterColumn title="Product" links={NAV_LINKS} />
        <FooterColumn title="Company" links={LEGAL_LINKS} />
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 mb-3">
            Connect
          </h4>
          <ul className="flex flex-col gap-2 font-body text-sm">
            <li>
              <a
                href="https://instagram.com/getshuuk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-pink transition-colors"
              >
                @getshuuk
              </a>
            </li>
            <li>
              <a href="mailto:hello@shuuk.ca" className="hover:text-brand-pink transition-colors">
                hello@shuuk.ca
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/15 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 text-center">
        © {new Date().getFullYear()} Shuuk · Built in Ottawa
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 mb-3">
        {title}
      </h4>
      <ul className="flex flex-col gap-2 font-body text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-brand-pink transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
