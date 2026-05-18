import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-bg-body px-6 py-16 md:py-24 border-b border-ink">
      <div className="max-w-5xl mx-auto flex flex-col gap-7">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">
          For: Coaches / Team Managers / Club Directors
        </p>
        <h1 className="font-display font-black uppercase text-[clamp(44px,7vw,84px)] leading-[0.95] text-ink">
          Your team.<br />Not a template.
        </h1>
        <p className="font-body text-lg md:text-xl text-ink/70 max-w-prose">
          One platform for your team site, rosters, schedules, streams, stats,
          and social media. Stop duct-taping tools together.
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <Button variant="primary" href="#demo">
            Book a Demo
          </Button>
          <Button variant="outline" href="#products">
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  );
}
