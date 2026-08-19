"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/data";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galerie" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Galerie
          </p>
          <h2 className="mt-5 font-serif text-4xl text-cream sm:text-5xl">
            Ein Blick hinter die Kulissen
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {images.gallery.map((img, i) => (
            <Reveal
              delay={(i % 4) * 80}
              key={img.src + i}
              className={i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <button
                onClick={() => setLightbox(i)}
                className={`group relative block w-full overflow-hidden rounded-sm ${
                  i === 0 || i === 5 ? "aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Schließen"
            className="absolute right-6 top-6 text-3xl text-cream/80 hover:text-gold"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image
              src={images.gallery[lightbox].src}
              alt={images.gallery[lightbox].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
