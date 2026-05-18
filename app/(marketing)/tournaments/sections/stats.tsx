const STATS = [
  { value: '36', label: 'teams across 3 divisions' },
  { value: '6', label: 'courts in continuous play' },
  { value: '280+', label: 'athletes on the day' },
  { value: '4,800', label: 'through the gates' },
];

export function Stats() {
  return (
    <section className="bg-ink text-text-inverse px-6 py-16 md:py-24 border-b border-ink">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-text-inverse/60 mb-8 text-center">
          What a shuuk-run tournament looks like
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-black text-5xl md:text-7xl text-brand-pink leading-none">
                {s.value}
              </div>
              <div className="font-body text-sm text-text-inverse/70 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
