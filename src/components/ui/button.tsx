import type { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'default' | 'primary' | 'outline' | 'secondary' | 'icon';
export type ButtonSize = 'default' | 'sm' | 'icon';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** If provided, renders a Next.js Link instead of a <button>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  'aria-busy'?: boolean | 'true' | 'false';
  'aria-label'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-current'?: 'page' | boolean;
}

const base =
  'inline-flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none disabled:[transform:none] disabled:[box-shadow:none]';

const variantClasses: Record<ButtonVariant, string> = {
  /**
   * Primary CTA — proportions + shadow style adapted from gelatolaboca.com /flavors
   * "Order Now" button (10/8 padding mobile · 10/16 desktop · 16px → 24px Bystander 700
   * · 1px → 2px border · 10px → 14px radius · -2/2 → -4/2 hard-offset ink shadow).
   * We use Plein for the font and flip the shadow to our down-right brutalist angle.
   * Self-sized — the `size` prop is ignored when variant="primary".
   */
  primary:
    'bg-brand-pink text-text-inverse border-2 border-ink ' +
    'rounded-[10px] md:rounded-[14px] ' +
    'font-display font-black uppercase tracking-[0.02em] ' +
    'text-base md:text-lg leading-none ' +
    'px-4 md:px-6 py-[12px] ' +
    'shadow-[2px_2px_0_0_var(--color-ink)] md:shadow-[4px_4px_0_0_var(--color-ink)] ' +
    'hover-lift ' +
    'hover:shadow-[6px_6px_0_0_var(--color-ink)] md:hover:shadow-[8px_8px_0_0_var(--color-ink)]',
  default:
    'font-body font-bold bg-bg-filled text-ink border border-ink rounded-sm hover-lift hover:shadow-hard-sm',
  outline:
    'font-body font-bold bg-transparent text-ink border border-ink rounded-sm hover:bg-ink hover:text-text-inverse hover-lift hover:shadow-hard-sm',
  secondary:
    'font-body font-bold bg-bg-filled text-ink border border-ink rounded-pill hover-lift hover:shadow-hard-sm',
  icon:
    'font-body font-bold bg-bg-filled text-ink border border-ink rounded-sm hover-lift hover:shadow-hard-sm',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-4 py-3 h-12 text-base',
  sm:      'p-2 text-sm',
  icon:    'w-12 h-12 p-0',
};

export function Button({
  variant = 'default',
  size = 'default',
  href,
  type,
  className,
  children,
  onClick,
  disabled,
  ...aria
}: ButtonProps) {
  const cls = cn(
    base,
    variantClasses[variant],
    variant !== 'primary' && sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick} {...aria}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type ?? 'button'}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      {...aria}
    >
      {children}
    </button>
  );
}
