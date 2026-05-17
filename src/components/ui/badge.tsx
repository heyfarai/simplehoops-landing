import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type BadgeVariant = 'default' | 'accent' | 'subtle';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const base =
  'inline-flex items-center font-mono text-xs font-bold uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-sm';

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-ink text-text-inverse',
  accent:  'bg-brand-pink text-text-inverse',
  subtle:  'bg-accent-subtle text-brand-pink-deep',
};

export function Badge({
  variant = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(base, variantClasses[variant], className)} {...props}>
      {children}
    </span>
  );
}
