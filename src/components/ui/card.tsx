import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type CardVariant = 'outline' | 'outline-shadow' | 'paper' | 'feature';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  outline:          'bg-bg-filled text-ink border border-ink rounded-lg p-6',
  'outline-shadow': 'bg-bg-filled text-ink border border-ink rounded-lg p-6 shadow-hard-sm hover-lift hover:shadow-hard-lg',
  paper:            'bg-bg-paper text-ink border-[3px] border-ink rounded-lg p-6 shadow-hard-pink',
  feature:          'bg-bg-paper text-ink border-[3px] border-ink rounded-lg p-6 shadow-hard-pink grid grid-cols-1 md:grid-cols-2 gap-6',
};

export function Card({
  variant = 'outline',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}
