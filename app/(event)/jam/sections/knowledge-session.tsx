import { Card } from '@/components/ui/card';

const TALKS = [
  { time: '12:00', topic: 'Talk 1 — TBC', len: '15 min' },
  { time: '12:15', topic: 'Talk 2 — TBC', len: '15 min' },
  { time: '12:30', topic: 'Talk 3 — TBC', len: '15 min' },
  { time: '12:45', topic: 'Special guest', len: '45 min' },
];

export function KnowledgeSession() {
  return (
    <section id="indoor" className="px-6 py-16 md:py-40 min-h-screen flex items-center">
      <div className="max-w-[1040px] mx-auto w-full">
        <h2 className="text-extrude text-brand-pink leading-[0.85] tracking-tight text-[clamp(44px,12vw,140px)] mb-20">
          IQ sessions
        </h2>
        <p className="font-display font-extrabold text-[clamp(20px,4vw,48px)] uppercase mb-6 max-w-none tracking-tight ">
          <span className="font-light">23 Things</span> Every Hooper Should Know<br />
          <span className="font-bold text-lg tracking-[0.05em] -mb-10">(But nobody really tells them)</span><br />
        </p>
        <Card variant="paper" className="bg-ink text-text-inverse p-8 md:p-12">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-brand-pink mb-4">
            Midday · Doors at 11:45 AM · Free with registration
          </div>
          <p className="font-body text-base md:text-xl mb-4">
            Honest conversations about <span className="font-bold">practice, picking teams,
            nutrition, mental health, and the drive home </span> after a tough game.    
          </p>
            <p className="font-body text-base md:text-xl">Experts include
            coaches, current and former players. A Very Special Guest TBA.</p>
       
          <p className="font-body text-base md:text-xl"><br/>
            This isn&apos;t a motivational seminar. <br/><br/> It&apos;s the stuff players and parents wish
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
        </Card>
      </div>
    </section>
  );
}
