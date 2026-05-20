const TIMES = [
  { row: 2,  label: '9:30',  minor: false },
  { row: 3,  label: '10:00', minor: false },
  { row: 5,  label: '11:00', minor: false },
  { row: 7,  label: '12:00', minor: false },
  { row: 9,  label: '13:00', minor: false },
  { row: 11, label: '14:00', minor: false },
  { row: 13, label: '15:00', minor: false },
  { row: 15, label: '16:00', minor: false },
  { row: 17, label: '17:00', minor: false },
  { row: 19, label: '18:00', minor: false },
  { row: 21, label: '19:00', minor: false },
];

export function DaySchedule() {
  return (
    <section id="schedule" className="px-6 py-16 md:py-40 min-h-screen flex items-center">
      <div className="max-w-[1040px] mx-auto w-full">
        <h2 className="text-extrude text-brand-pink leading-[0.85] tracking-tight text-[clamp(44px,12vw,140px)] mb-8">
          schedule
        </h2>
        <p className="font-display font-extrabold text-[clamp(20px,4vw,48px)] leading-[1.05] uppercase mb-6 max-w-none tracking-tight leading-[1.5]">
          <span className="font-light">Hoops</span> All day.<br />
          <span className="font-light">Knowledge</span> at 12pm.<br />
          <span className="font-light">Side quests</span> All day.<br />
          <span className="font-light">Food</span> All day.<br />
        </p>

        <div
          role="table"
          aria-label="Day schedule overview"
          className="grid border-2 border-ink bg-bg-filled rounded-sm overflow-hidden pb-8 pt-4 pr-1 md:pr-4 pl-1 md:pl-4"
          style={{
            gridTemplateColumns: '60px repeat(3, minmax(0, 1fr))',
            gridTemplateRows: 'auto repeat(20, minmax(20px, 1fr)) auto',
          }}
        >
          <div />
          <div className="font-display font-extrabold text-sm md:text-xl p-3 text-left">
            3x3 Hoops
          </div>
          <div className="font-display font-extrabold text-sm md:text-xl p-3 text-left">
            Knowledge
          </div>
          <div className="font-display font-extrabold text-sm md:text-xl p-3 text-left">
            Fun & Food
          </div>

          {TIMES.map((t) => (
            <div
              key={t.row}
              style={{ gridRow: t.row }}
              className={`font-mono font-bold text-xs md:text-sm uppercase tracking-[0.05em] px-2 md:px-0 text-left ${
                t.minor ? 'text-ink/40' : 'text-ink/70'
              }`}
            >
              {t.label}
            </div>
          ))}

          <div
            style={{ gridColumn: 2, gridRow: '2 / 8' }}
            className="bg-ink/10 rounded-sm m-1 flex flex-col items-start md:items-center justify-center font-display font-extrabold text-base md:text-xl text-xs px-2"
          >
            U12
            <span className="font-normal md:text-lg">Pools + Play-offs</span>
          </div>
          <div
            style={{ gridColumn: 2, gridRow: '8 / 14' }}
            className="bg-ink/10 rounded-sm m-1 flex flex-col items-start md:items-center justify-center font-display font-extrabold text-base md:text-xl text-xs px-2"
          >
            U14
            <span className="font-normal md:text-lg">Pools + Play-offs</span>
          </div>
          <div
            style={{ gridColumn: 2, gridRow: '14 / 20' }}
            className="bg-ink/10 rounded-sm m-1 flex flex-col items-start md:items-center justify-center font-display font-extrabold text-base md:text-xl text-xs px-2"
          >
            U16
            <span className="font-normal md:text-lg">Pools + Play-offs</span>
          </div>

          <div
            style={{ gridColumn: 3, gridRow: '8 / 14' }}
            className="bg-ink/10 rounded-sm m-1 flex items-center justify-center font-display font-extrabold md:text-xl text-xs px-2"
          >
            IQ
            Sessions
            <br />
            Hoops Clinics
          </div>

          <div
            style={{ gridColumn: 4, gridRow: '5 / 20' }}
            className="bg-ink/10 rounded-sm m-1 flex flex-col items-center justify-center  font-display font-extrabold md:text-xl text-xs leading-tight px-2"
          >
            Mini-Combine
            <br />
            Side quests
            <br />
            Food trucks
            <br />
            Picnic
          </div>
        </div>

        <div className="font-mono font-bold text-lg uppercase tracking-[0.05em] text-ink/75 mt-4">
          First aid on site all day
        </div>
      </div>
    </section>
  );
}
