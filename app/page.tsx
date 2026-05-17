/**
 * Root page. In practice, this is never rendered — next.config.ts rewrites
 * `/` to `/legacy/index.html` (served from public/) before this component is
 * reached. This file exists because Next.js requires a root page.tsx.
 *
 * When `/` migrates to React in a later phase, the legacy rewrite is removed
 * and this file becomes the real homepage.
 */
export default function RootPage() {
  return null;
}
