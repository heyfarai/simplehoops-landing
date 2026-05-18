import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-screen border-b border-ink pb-20 md:py-0">
      <div className="flex flex-col justify-center px-8 md:px-0 py-8">
        <h1 className="text-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/3x3-mark.png"
            alt="shuuk! 3x3 jam"
            className="mx-auto block w-full max-w-[320px] md:max-w-[540px]"
          />
        </h1>
      </div>
      <div className="flex flex-col md:justify-center px-6 md:px-0 md:pl-8 py-0">
      <h2 className="font-display font-extrabold text-[clamp(32px,8vw,48px)] leading-[1.05] mb-6 max-w-none tracking-tight">
        3 on 3 Outdoors.<br />
        Prizes.<br />
        IQ Sessions.<br />
        Food trucks.<br />
        </h2>
        <p className="font-mono font-bold text-base uppercase tracking-[0.05em] text-ink/70">
          Saturday, July 11, 2026
          <br />
          9:30 AM &mdash; 7:00 PM
          <br />
          Masonic Centre, Walkley, Ottawa
        </p>
        <div className="flex flex-col gap-3">
          <Button variant="primary" href="#waitlist" className="mt-4 w-fit">
            Join the Waitlist
          </Button>
          <div className="font-mono font-bold text-base uppercase tracking-[0.05em] text-ink/70 mt-6">
            U12 / U14 / U16 / Boys &amp; Girls
            <br />
            Spots are limited.
          </div>
        </div>
      </div>
    </section>
  );
}
