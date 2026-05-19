import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-7 lg:items-center lg:text-center">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">
          For: Coaches / Team Managers / Club Directors
        </p>
        <h1 className="font-display font-black uppercase text-[clamp(44px,7vw,84px)] leading-[0.95] text-ink">
          No code.<br />Standout website.
        </h1>
        <p className="font-body text-lg md:text-xl text-ink/70 max-w-prose">
          Wix? Weebly? Teamlinkt? Dont' they all feel the same? <br/>
          Get style with substance. Get shuuk!
        </p>
        <div className="flex flex-wrap gap-3 mt-2 lg:justify-center">
          <Button variant="primary" href="#demo">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
