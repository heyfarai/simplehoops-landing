const PAIN = [
  {
    lede: 'Sixteen-team draws printed at 7am',
    body: 'You finalise the bracket in Excel, print it, then a team drops at 6:55. Now you re-draw on a napkin.',
  },
  {
    lede: 'Stat sheets nobody can read',
    body: 'Volunteers scoring with pencil, the runner can\'t find the sheet, the recap relies on memory.',
  },
  {
    lede: 'Streams nobody can watch',
    body: 'A phone on a tripod with no overlay, no stats, no archive. The grandparents never figure out the URL.',
  },
  {
    lede: 'Sponsor logos on a banner',
    body: 'You sold the package in February. The activation is a roll of duct tape and a Canva PDF.',
  },
];

export function Pain() {
  return (
    <section className="bg-bg-paper px-6 py-20 md:py-28 border-b border-ink">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] text-ink mb-3">
          Sound familiar?
        </h2>
        <p className="font-body text-lg text-ink/70 max-w-prose mb-14">
          Tournament weekends are mostly logistics. The technology shouldn&apos;t
          be the part that breaks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PAIN.map((p) => (
            <article
              key={p.lede}
              className="border-[3px] border-ink bg-bg-filled p-7 flex flex-col gap-3"
            >
              <span aria-hidden="true" className="font-display font-black text-3xl text-brand-pink">
                ✕
              </span>
              <h3 className="font-display font-black uppercase text-xl md:text-2xl text-ink leading-tight">
                {p.lede}
              </h3>
              <p className="font-body text-base text-ink/70">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
