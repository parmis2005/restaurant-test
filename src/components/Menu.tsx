"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { menu } from "@/lib/data";

export default function Menu() {
  const [active, setActive] = useState(0);

  return (
    <section id="speisekarte" className="bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Speisekarte
          </p>
          <h2 className="mt-5 font-serif text-4xl text-cream sm:text-5xl">
            Saisonal. Handwerklich. Präzise.
          </h2>
          <p className="mt-5 text-muted">
            Unsere Karte wechselt mit den Jahreszeiten. Eine Auswahl unserer
            aktuellen Favoriten.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 flex flex-wrap justify-center gap-3">
          {menu.map((section, i) => (
            <button
              key={section.category}
              onClick={() => setActive(i)}
              className={`rounded-full border px-6 py-2.5 text-sm uppercase tracking-[0.12em] transition-colors ${
                active === i
                  ? "border-gold bg-gold text-background"
                  : "border-line text-cream/70 hover:border-gold hover:text-gold"
              }`}
            >
              {section.category}
            </button>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menu[active].items.map((item, idx) => (
            <Reveal delay={idx * 90} key={item.name}>
              <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-surface-alt transition-colors hover:border-gold/60">
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl text-cream">
                      {item.name}
                    </h3>
                    <span className="whitespace-nowrap font-serif text-lg text-gold">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
