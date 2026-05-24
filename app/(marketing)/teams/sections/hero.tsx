import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-7 items-center text-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="font-body text-2xl md:text-3xl font-black text-ink">
            For Coaches, Team Managers, Club Directors
          </p>
          <h1 className="font-display font-black uppercase text-[clamp(40px,7vw,84px)] leading-[0.95] text-ink">
            <span className="block">Sites with live stats</span>
            <span className="block">and streaming.</span>
            <span className="block text-brand-pink">All-in-one.</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-3 mt-2 justify-center">
          <Button variant="primary" href="#demo">
            Book a Demo
          </Button>
        </div>
        <p className="font-body text-2xl md:text-3xl font-black text-ink">
          Get shuuk!
        </p>
        <p className="font-body text-lg md:text-xl text-ink/70 max-w-prose">
          The <em>easiest</em> way to get the elite look.
        </p>
      </div>
    </section>
  );
}
