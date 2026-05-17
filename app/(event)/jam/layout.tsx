import type { ReactNode } from 'react';
import { EditorialNav } from '@/components/ui/nav';

export default function JamLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg-paper text-ink min-h-screen font-body">
      <EditorialNav
        logoSrc="/jam/shuuk-logo.png"
        navItems={[
          { href: '#', label: '3x3 jam', active: true },
          { href: '#div', label: 'divisions' },
          { href: '#schedule', label: 'schedule' },
          { href: '#venue', label: 'where' },
        ]}
        ctaHref="#waitlist"
        ctaLabel="JOIN WAITLIST"
      />
      {children}
    </div>
  );
}
