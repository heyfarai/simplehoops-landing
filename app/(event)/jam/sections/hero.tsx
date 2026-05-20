'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative grid grid-cols-1 md:grid-cols-[2fr_2fr] min-h-screen pt-24 md:pt-0 pb-20 md:py-0 overflow-hidden">
      {/* Background poster — always present; carries mobile + reduced-motion, fades out behind video on desktop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/jam-hero-poster.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Background video — desktop + motion-safe only; crossfades over poster on first play */}
      <video
        onPlaying={() => setPlaying(true)}
        className={`hidden motion-safe:md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          playing ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="https://assets.juuk.site/3on3-jam/shuuk-jam.webm" type="video/webm" />
        <source src="https://assets.juuk.site/3on3-jam/shuuk-jam.mp4" type="video/mp4" />
      </video>
      {/* Subtle ink tint, settles noise behind the stickers */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/20 pointer-events-none" />

      {/* Left — 3x3 mark sticker */}
      <div className="relative z-10 flex flex-col justify-center items-center md:items-end px-6 md:px-8 py-8">
        <h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/3x3-mark.png"
            alt="shuuk! 3x3 jam"
            className="block w-full max-w-[280px] md:max-w-[440px]"
          />
        </h1>
      </div>

      {/* Right — content sticker */}
      <div className="relative z-10 flex flex-col md:justify-center px-6 md:px-8 pt-54 md:py-0">
        <div className="bg-bg-paper border-2 border-ink rounded-sm p-6 md:p-10 shadow-hard-pink w-fit">
          <h2 className="font-display font-extrabold text-[clamp(26px,6vw,36px)] leading-[1.2] mb-6 max-w-none tracking-tight">
            3 on 3 Outdoors.<br />
            Prizes.<br />
            IQ Sessions.<br />
            Food trucks.<br />
          </h2>
          <p className="font-mono font-bold text-sm md:text-base uppercase tracking-[0.05em] text-ink/70">
            Saturday, July 18, 2026
            <br />
            U12 / U14 / U16 / Boys &amp; Girls
            <br />
            Spots are limited.
            <br />
            <span className="font-bold text-brand-pink underline">$240</span> per team.
          </p>
          <div className="flex flex-col gap-3">
            <Button variant="primary" href="#waitlist" className="mt-4 w-fit">
              Join the Waitlist
            </Button>
            <div className="font-mono font-bold text-sm md:text-base uppercase tracking-[0.05em] text-ink/70 mt-6">
              9:30 AM to 7:00 PM
              <br />
              Masonic Centre, Walkley, Ottawa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
