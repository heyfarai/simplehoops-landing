const FAQ = [
  {
    q: 'Who is this for?',
    a: 'Players born 2010 or later competing in U12, U14, or U16 divisions. Open to all skill levels — this is not an elite-only event.',
  },
  {
    q: 'What does the entry fee cover?',
    a: 'Full day access to outdoor competition and indoor programming, event swag, and access to food vendors on site. Food is not included.',
  },
  {
    q: 'Is there seating for parents?',
    a: 'Yes. Outdoor spectator areas are set up around the courts. The indoor session at midday seats 120 and is open to all registered families.',
  },
  {
    q: 'What if it rains?',
    a: 'We monitor the forecast closely. Registered teams will be notified by email of any schedule changes. A rain date is held the following day, Sunday July 12.',
  },
  {
    q: 'Who is running this?',
    a: 'shuuk! 3x3 jam is organized by shuuk!, with licensed first aid on site, full event insurance, and a City of Ottawa special event permit.',
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-bg-filled border-y-2 border-ink px-6 py-16 md:py-24"
    >
      <div className="max-w-[1040px] mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-3">
          ── for parents
        </div>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-8">
          A few things worth knowing.
        </h2>

        <div className="border-t-2 border-ink">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className="border-b border-ink py-5 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4"
            >
              <p className="font-display font-extrabold text-lg md:text-xl">{item.q}</p>
              <p className="font-body text-base">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
