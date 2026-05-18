import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type CardVariant =
  | 'outline'
  | 'outline-shadow'
  | 'paper'
  | 'feature'
  | 'bold-paper'
  | 'bold-filled'
  | 'bold-ink'
  | 'bold-pink';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  /** Render as a different tag (e.g. 'article'). Defaults to 'div'. */
  as?: 'div' | 'article' | 'section';
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  outline:          'bg-bg-filled text-ink border border-ink rounded-sm p-6',
  'outline-shadow': 'bg-bg-filled text-ink border border-ink rounded-sm p-6 shadow-hard-sm hover-lift hover:shadow-hard-lg',
  paper:            'bg-bg-paper text-ink border-[3px] border-ink rounded-sm p-6 shadow-hard-pink',
  feature:          'bg-bg-paper text-ink border-[3px] border-ink rounded-sm p-6 shadow-hard-pink grid grid-cols-1 md:grid-cols-2 gap-6',
  /** Bold-bordered cards for marketing product/feature grids. */
  'bold-paper':     'bg-bg-paper text-ink border-[3px] border-ink rounded-sm p-8 flex flex-col gap-5',
  'bold-filled':    'bg-bg-filled text-ink border-[3px] border-ink rounded-sm p-8 flex flex-col gap-5',
  'bold-ink':       'bg-ink text-text-inverse border-[3px] border-ink rounded-sm p-8 flex flex-col gap-5',
  'bold-pink':      'bg-brand-pink text-text-inverse border-[3px] border-ink rounded-sm p-8 flex flex-col gap-5',
};

export function Card({
  variant = 'outline',
  as: Tag = 'div',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Tag className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Tag>
  );
}
