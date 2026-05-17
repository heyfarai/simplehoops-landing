const TALKS = [
  { time: '12:00', topic: 'Talk 1 — AAU / the system', len: '15 min' },
  { time: '12:15', topic: 'Talk 2 — Nutrition + physical development', len: '15 min' },
  { time: '12:30', topic: 'Talk 3 — Mental health + identity', len: '15 min' },
  { time: '12:45', topic: 'Special guest — live recorded session', len: '—' },
];

export function KnowledgeSession() {
  return (
    <section id="indoor" className="bg-bg-paper px-6 py-16 md:py-24">
      <div className="max-w-[1040px] mx-auto">
        <div className="bg-ink text-text-inverse border-[3px] border-ink shadow-hard-pink p-8 md:p-12 rounded-sm">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/55 mb-3">
            ── ball knowledge session
          </div>
          <h2 className="mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/heading--knowledge.svg"
              alt="Knowledge — 23 things no one tells hoopers (and their families)"
              className="h-[clamp(72px,10vw,132px)] invert"
            />
          </h2>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-brand-pink mb-4">
            Midday · Doors at 11:45 AM · Free with registration
          </div>
          <p className="font-body text-base md:text-lg mb-4">
            Three short talks. One live podcast recording. Honest conversations about AAU,
            nutrition, mental health, and the drive home after a tough game. Sessions include
            coaches, current and former players, and a live recording of{' '}
            <strong>The Help Side Basketball Show</strong> — Ottawa&apos;s basketball podcast —
            with a guest announced closer to the date.
          </p>
          <p className="font-body text-base md:text-lg">
            This isn&apos;t a motivational seminar. It&apos;s the stuff players and parents wish
            someone had told them earlier.
          </p>

          <div className="mt-8 space-y-2">
            {TALKS.map((t) => (
              <div
                key={t.time}
                className="grid grid-cols-[80px_1fr_80px] gap-4 border-t border-white/15 pt-2"
              >
                <div className="font-display font-extrabold text-xl text-brand-pink">{t.time}</div>
                <div className="font-body">{t.topic}</div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/55 text-right">
                  {t.len}
                </div>
              </div>
            ))}
          </div>

          <div className="inline-block bg-brand-pink text-text-inverse font-mono text-xs uppercase tracking-[0.18em] px-3 py-2 mt-6">
            For parents · coaches · players
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/55 mt-3">
            Indoor capacity: 120. First come, first seated.
          </div>
        </div>
      </div>
    </section>
  );
}
