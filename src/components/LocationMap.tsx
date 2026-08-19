import Reveal from "@/components/Reveal";
import { restaurant } from "@/lib/data";

export default function LocationMap() {
  return (
    <section id="kontakt" className="bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            So finden Sie uns
          </p>
          <h2 className="mt-5 font-serif text-4xl text-cream sm:text-5xl">
            Besuchen Sie uns
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="h-[420px] w-full overflow-hidden rounded-sm border border-line lg:h-full">
              <iframe
                title={`Standort ${restaurant.name}`}
                src={`https://www.google.com/maps?q=${restaurant.mapsQuery}&output=embed`}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="h-full space-y-8 rounded-sm border border-line bg-surface-alt p-8">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Adresse</p>
                <p className="mt-2 text-cream">
                  {restaurant.address.line1}, {restaurant.address.line2}
                  <br />
                  {restaurant.address.zip} {restaurant.address.city}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Telefon</p>
                <a
                  href={`tel:${restaurant.phoneHref}`}
                  className="mt-2 block text-cream hover:text-gold"
                >
                  {restaurant.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">E-Mail</p>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="mt-2 block break-all text-cream hover:text-gold"
                >
                  {restaurant.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">
                  Öffnungszeiten
                </p>
                <div className="mt-2 space-y-1.5">
                  {restaurant.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted">{h.day}</span>
                      <span className="text-cream/90">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
