const TIMES = [
  { row: 2,  label: '9:30',  minor: false },
  { row: 3,  label: '10:00', minor: true },
  { row: 5,  label: '11:00', minor: false },
  { row: 7,  label: '12:00', minor: false },
  { row: 9,  label: '13:00', minor: true },
  { row: 11, label: '14:00', minor: false },
  { row: 13, label: '15:00', minor: true },
  { row: 15, label: '16:00', minor: true },
  { row: 17, label: '17:00', minor: false },
  { row: 19, label: '18:00', minor: true },
  { row: 21, label: '19:00', minor: true },
  { row: 22, label: '19:30', minor: false },
];

export function DaySchedule() {
  return (
    <section id="schedule" className="bg-bg-paper px-6 py-16 md:py-24">
      <div className="max-w-[1040px] mx-auto">
        <h2 className="mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/heading--schedule.svg"
            alt="Schedule"
            className="h-[clamp(72px,10vw,132px)]"
          />
        </h2>

        <div
          role="table"
          aria-label="Day schedule overview"
          className="grid border-2 border-ink bg-bg-filled"
          style={{
            gridTemplateColumns: '80px repeat(3, minmax(0, 1fr))',
            gridTemplateRows: 'auto repeat(20, minmax(20px, 1fr)) auto',
          }}
        >
          <div />
          <div className="font-display font-extrabold text-lg md:text-xl p-3 border-b-2 border-ink text-center">
            3x3 Hoops
          </div>
          <div className="font-display font-extrabold text-lg md:text-xl p-3 border-b-2 border-ink text-center">
            Knowledge
          </div>
          <div className="font-display font-extrabold text-lg md:text-xl p-3 border-b-2 border-ink text-center">
            Fun &amp; Games
          </div>

          {TIMES.map((t) => (
            <div
              key={t.row}
              style={{ gridRow: t.row }}
              className={`font-mono text-xs uppercase tracking-[0.18em] px-2 text-right ${
                t.minor ? 'text-ink/40' : 'text-ink/70'
              }`}
            >
              {t.label}
            </div>
          ))}

          <div
            style={{ gridColumn: 2, gridRow: '2 / 7' }}
            className="bg-ink/10 rounded-sm m-1 flex items-center justify-center font-display font-extrabold text-xl"
          >
            U12
          </div>
          <div
            style={{ gridColumn: 2, gridRow: '7 / 11' }}
            className="bg-ink/10 rounded-sm m-1 flex items-center justify-center font-display font-extrabold text-xl"
          >
            U14
          </div>
          <div
            style={{ gridColumn: 2, gridRow: '11 / 17' }}
            className="bg-ink/10 rounded-sm m-1 flex items-center justify-center font-display font-extrabold text-xl"
          >
            U16
          </div>

          <div
            style={{ gridColumn: 3, gridRow: '7 / 11' }}
            className="bg-ink/10 rounded-sm m-1 flex items-center justify-center text-center font-body font-semibold"
          >
            Knowledge
            <br />
            Sessions
          </div>

          <div
            style={{ gridColumn: 4, gridRow: '5 / 17' }}
            className="bg-ink/10 rounded-sm m-1 flex flex-col items-center justify-center text-center font-body font-semibold leading-tight"
          >
            Combine
            <br />
            Clinics
            <br />
            Family fun
            <br />
            Food trucks
            <br />
            Picnic
          </div>
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mt-4">
          Food vendors on site all day · First aid on site all day · Washrooms on site.
        </div>
      </div>
    </section>
  );
}
