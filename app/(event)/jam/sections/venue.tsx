import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Venue() {
  return (
    <section id="venue" className="bg-bg-paper px-6 py-16 md:py-40 min-h-screen flex items-center">
      <div className="max-w-[1040px] mx-auto w-full">
        <h2 className="text-extrude text-brand-pink leading-[0.85] tracking-tight text-[clamp(72px,12vw,140px)] mb-20">
          Off Walkley. <br/> In Ottawa.
        </h2>

        <Card variant="feature" className="p-0 gap-0 overflow-hidden">
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-ink">
            <div className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-3">
              Ottawa Masonic Centre
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
            <Button variant="primary" href="https://www.google.com/maps/dir/?api=1&destination=Ottawa+Masonic+Centre+2140+Walkley+Road,+Ottawa,+ON+K1G+3V3" className="flex-none whitespace-nowrap">
                Get directions →
              </Button>
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
        </Card>
      </div>
    </section>
  );
}
