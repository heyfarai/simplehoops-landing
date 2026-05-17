export function Venue() {
  return (
    <section id="venue" className="bg-bg-paper px-6 py-16 md:py-24">
      <div className="max-w-[1040px] mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-3">
          ── where
        </div>
        <h2 className="font-display font-extrabold text-5xl md:text-7xl mb-8">
          Where.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-bg-paper border-[3px] border-ink shadow-hard-pink rounded-sm overflow-hidden">
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-ink">
            <div className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-3">
              Ottawa <span className="text-brand-pink">Masonic</span> Centre
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 mb-4">
              Walkley · Ottawa
            </p>
            <p className="font-body font-semibold text-lg mb-4">
              2140 Walkley Road
              <br />
              Ottawa, Ontario · K1G 3V3
            </p>
            <p className="font-body text-sm text-ink/70 mb-2">
              Free parking on-site. Transit: OC Transpo #6, #40 · nearest station Billings Bridge.
            </p>
            <p className="font-body text-sm">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Ottawa+Masonic+Centre+2140+Walkley+Road,+Ottawa,+ON+K1G+3V3"
                target="_blank"
                rel="noopener"
                className="text-brand-pink underline"
              >
                Get directions →
              </a>
            </p>
          </div>
          <div className="min-h-[280px]">
            <iframe
              src="https://www.google.com/maps?q=Ottawa+Masonic+Centre+2140+Walkley+Road,+Ottawa,+ON+K1G+3V3&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map — Ottawa Masonic Centre, 2140 Walkley Road, Ottawa, ON K1G 3V3"
              className="border-0 w-full h-full min-h-[280px] block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
