import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-bg-body px-6 py-16 md:py-24 border-b border-ink">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="flex flex-col gap-7">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">
            For: Leagues / Clubs / Tournaments
          </p>
          <h1 className="font-display font-black uppercase text-[clamp(44px,7vw,84px)] leading-[0.95] text-ink">
            Sites.
            Stats.
            Streaming. 
          </h1>
          <p className="font-body text-lg md:text-xl text-ink/70 max-w-prose">
            Website, schedules, stats, streams, content — for basketball leagues.
            Stop juggling Excel, WordPress, Swish, Canva, and BallerTV.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button variant="primary" href="#demo">
              Book a Demo
            </Button>
            <Button variant="outline" href="#products">
              Explore the Platform
            </Button>
          </div>
        </div>
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/hoopscore-screenshot.png"
            alt="shuuk.Score app — live game stats on mobile"
            className="block w-full max-w-[520px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
