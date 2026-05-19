export function Footer() {
  return (
    <footer className="bg-bg-paper border-t border-ink px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center font-mono text-xs uppercase tracking-[0.18em] text-ink/70">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/jam/shuuk-logo.png" alt="shuuk!" className="h-10 w-auto" />
      <div className="text-center">shuuk! 3x3 jam · Ottawa · July 18, 2026</div>
      <div className="md:text-right">@getshuuk · shuuk.ca/jam · #shuukjam</div>
    </footer>
  );
}
