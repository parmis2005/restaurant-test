import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="stimmen" className="bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Gästestimmen
          </p>
          <h2 className="mt-5 font-serif text-4xl text-cream sm:text-5xl">
            Was unsere Gäste sagen
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal delay={i * 100} key={t.name}>
              <div className="flex h-full flex-col rounded-sm border border-line bg-surface-alt p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <svg key={idx} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-relaxed text-cream/80">
                  &bdquo;{t.text}&ldquo;
                </p>
                <p className="mt-6 font-serif text-lg text-cream">
                  {t.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
