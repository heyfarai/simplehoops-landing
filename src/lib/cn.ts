import { twMerge } from 'tailwind-merge';

/**
 * Compose Tailwind class names with conflict resolution. Later inputs win for
 * conflicting utilities (e.g. `cn('p-6', 'p-8')` → `'p-8'`). Pass `false`,
 * `null`, or `undefined` to conditionally skip a string.
 */
export function cn(...inputs: (string | false | null | undefined)[]): string {
  return twMerge(inputs.filter(Boolean).join(' '));
}
