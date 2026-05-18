import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-bg-body px-6 py-16 md:py-24 border-b border-ink">
      <div className="max-w-6xl mx-auto flex flex-col gap-7">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">
          For: Tournament organisers
        </p>
        <h1 className="font-display font-black uppercase text-[clamp(44px,7vw,84px)] leading-[0.95] text-ink">
          Brackets.<br />Not spreadsheets.
        </h1>
        <p className="font-body text-lg md:text-xl text-ink/70 max-w-prose">
          Run a tournament without spreadsheet hell. Online registration,
          brackets, live stats, streaming, and a website — for a single
          weekend or a season-long circuit.
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <Button variant="primary" href="#demo">
            Book a Demo
          </Button>
          <Button variant="outline" href="/jam">
            See it live: 3x3 Jam →
          </Button>
        </div>
      </div>
    </section>
  );
}
