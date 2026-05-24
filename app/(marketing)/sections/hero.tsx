import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-bg-body px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <picture className="block w-full md:my-12">
          <source media="(min-width: 768px)" srcSet="/img/three-tools.png" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/three-tools--mobile.png"
            alt="shuuk's three tools in action — live scoring on iPad, a tournament app card, and a league site with embedded broadcast and standings"
            className="block w-full h-auto max-w-[376px] md:max-w-none mx-auto"
          />
        </picture>
        <div className="flex flex-col gap-7 items-center text-center">
          <div className="flex flex-col gap-2 items-center">
            <p className="font-body text-2xl md:text-3xl font-black text-ink">
              For Leagues, Teams, Clubs, Tournaments
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
            <Button className="hidden" variant="outline" href="#products">
              Explore the Platform
            </Button>
          </div>
          <p className="font-body text-2xl md:text-3xl font-black text-ink">
            Get shuuk!
          </p>
          <p className="font-body text-lg md:text-xl text-ink/70 max-w-prose">
            The <em>easiest</em> way to get the elite look.
          </p>
        </div>
      </div>
    </section>
  );
}
