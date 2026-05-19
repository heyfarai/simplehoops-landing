import { Card } from '@/components/ui/card';

const PAIN = [
  {
    lede: 'Chasing registrations and fees',
    body: 'Registration scattered across forms, payments, and inboxes. You\'re the bottleneck.',
  },
  {
    lede: 'Screenshot of spreadsheet = Schedule',
    body: 'You finalise the bracket in Google Docs, print it, then a team drops at 6:55. Now you re-draw on a napkin.',
  },
  {
    lede: '48 Games. No stats. Just scores.',
    body: 'Volunteers scoring with pencil, the runner can\'t find the sheet, the recap relies on memory.',
  },
  {
    lede: 'Next year will be the same.',
    body: 'The same tournament ops hassle over and over again.',
  },
];

export function Pain() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-3">
          Sound familiar?
        </h2>
        <p className="font-body text-lg text-ink/70 mx-auto mb-14">
          Tournament weekends are mostly logistics. The technology shouldn&apos;t
          be the part that breaks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PAIN.map((p) => (
            <Card key={p.lede} as="article" variant="bold-filled" className="p-7 gap-3">
              <span aria-hidden="true" className="font-display font-black text-3xl text-brand-pink">
                ✕
              </span>
              <h3 className="font-display font-black uppercase text-xl md:text-2xl text-ink leading-tight">
                {p.lede}
              </h3>
              <p className="font-body text-base text-ink/70">{p.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
