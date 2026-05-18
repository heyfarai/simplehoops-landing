import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const GENERATED = [
  { kind: 'Recap post', detail: 'Final score, top performer, photo grid' },
  { kind: 'Player highlights', detail: '15s clip per leading scorer' },
  { kind: 'Standings card', detail: 'Updated after every game' },
  { kind: 'Sponsor reel', detail: 'Logos and reads, your own inventory' },
];

export function ContentEngine() {
  return (
    <section className="bg-ink text-text-inverse px-6 py-20 md:py-28 border-b border-ink">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div>
          <Badge variant="accent">Sites + Score + Stream</Badge>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] mt-5 mb-4">
            Content that<br />creates itself.
          </h2>
          <p className="font-body text-lg text-text-inverse/70 max-w-prose mb-8">
            Score a game on the iPad. Within minutes, your site has a recap, your
            IG has a post, your sponsors get a placement, and your top scorer has
            a 15-second highlight reel. No editor, no canva tab, no &quot;I&apos;ll do it
            tonight.&quot;
          </p>
          <ol className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text-inverse/80">
            <li><span className="text-brand-pink mr-3">01</span>Tap final on the iPad</li>
            <li><span className="text-brand-pink mr-3">02</span>Stats + highlights flow to the site, stream, and apps</li>
            <li><span className="text-brand-pink mr-3">03</span>Recaps + social posts ship themselves</li>
          </ol>
        </div>

        <Card variant="paper" className="p-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60 mb-5">
            What gets generated
          </p>
          <ul className="flex flex-col gap-4">
            {GENERATED.map((g) => (
              <li key={g.kind} className="border-b border-ink/10 pb-4 last:border-b-0 last:pb-0">
                <div className="font-display font-black uppercase text-xl">{g.kind}</div>
                <div className="font-body text-sm text-ink/70">{g.detail}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
