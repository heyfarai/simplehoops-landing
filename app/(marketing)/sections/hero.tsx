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
            className="block w-full h-auto"
          />
        </picture>
        <div className="flex flex-col gap-7 lg:items-center lg:text-center">
          <h1 className="font-display font-black uppercase text-[clamp(44px,7vw,84px)] leading-[0.95] text-ink mt-6">
            Stats.
            Streaming.
            Sites.
            <span className="text-brand-pink block">All in one.</span>
          </h1>
          <p className="text-3xl font-black">For Leagues, Teams, Clubs, Tournaments</p>
          <p className="font-body text-lg md:text-xl text-ink/70 max-w-prose">
            Stop juggling Excel, WordPress, Swish, Canva, and BallerTV.
            <span className="font-bold block">Get shuuk!</span>
          </p>
          <div className="flex flex-wrap gap-3 mt-2 lg:justify-center">
            <Button variant="primary" href="#demo">
              Book a Demo
            </Button>
            <Button className="hidden" variant="outline" href="#products">
              Explore the Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
