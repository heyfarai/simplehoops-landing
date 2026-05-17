import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'default' | 'primary' | 'outline' | 'secondary' | 'icon';
export type ButtonSize = 'default' | 'sm' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const base =
  'inline-flex items-center justify-center font-bold disabled:opacity-30 disabled:pointer-events-none disabled:[transform:none] disabled:[box-shadow:none] hover-lift hover:shadow-hard-sm';

const variantClasses: Record<ButtonVariant, string> = {
  default:   'bg-bg-filled text-ink border border-ink rounded-sm',
  primary:   'bg-brand-pink text-text-inverse border border-brand-pink rounded-sm',
  outline:   'bg-transparent text-ink border border-ink rounded-sm hover:bg-ink hover:text-text-inverse',
  secondary: 'bg-bg-filled text-ink border border-ink rounded-pill',
  icon:      'bg-bg-filled text-ink border border-ink rounded-sm',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-4 py-3 h-12 text-base font-body',
  sm:      'p-2 text-sm font-body',
  icon:    'w-12 h-12 p-0',
};

export function Button({
  variant = 'default',
  size = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
