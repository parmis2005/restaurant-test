import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images, restaurant } from "@/lib/data";

export default function About() {
  return (
    <section id="ueber-uns" className="relative bg-background py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={images.about}
              alt={`Gedeckter Tisch im ${restaurant.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-6 hidden aspect-square w-48 overflow-hidden rounded-sm border-4 border-background shadow-2xl sm:block lg:-right-10">
            <Image
              src={images.aboutSecondary}
              alt="Bar mit stimmungsvoller Beleuchtung"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Unsere Geschichte
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-cream sm:text-5xl">
            Kulinarik, die Erinnerungen schafft
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Seit unserer Eröffnung verfolgt {restaurant.name} eine klare
            Philosophie: beste saisonale Zutaten, französisches Handwerk und
            ein Gastraum, in dem sich jeder Gast willkommen fühlt. Unser Team
            um Küchenchefin Amélie Rousseau verbindet klassische Techniken mit
            zeitgenössischer Leichtigkeit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Ob intimes Dinner zu zweit oder Feier im großen Kreis — wir
            gestalten jeden Abend als eigene kleine Geschichte, erzählt über
            Teller, Wein und Licht.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <p className="font-serif text-3xl text-gold">12+</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                Jahre Erfahrung
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">24</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                Saisonale Gerichte
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">4.9</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                Gästebewertung
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
