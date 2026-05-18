const FAQ = [
  {
    q: 'Who is this for?',
    a: 'Competitive teams players born 2010 or later playing in U12, U14, or U16 divisions.',
  },
  {
    q: 'What does the entry fee cover?',
    a: 'Full day access to outdoor competition and indoor programming, event swag, and access to food vendors on site. Food is not included.',
  },
  {
    q: 'Is there parking?',
    a: 'Yes. Free parking on-site. Transit: OC Transpo #6, #40 · nearest station Billings Bridge.',
  },
  {
    q: 'What if it rains?',
    a: 'We monitor the forecast closely. Registered teams will be notified by email of any schedule changes. A rain date is held the following day, Sunday July 12.',
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-bg-filled border-y-2 border-ink px-6 py-16 md:py-40 min-h-screen flex items-center"
    >
      <div className="max-w-[1040px] mx-auto w-full">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-3">
          Frequently Asked Questions
        </div>
        <h2 className="text-extrude text-brand-pink leading-[0.85] tracking-tight text-[clamp(72px,12vw,140px)] mb-8">
          questions?
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
