import { images, restaurant } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative flex h-svh min-h-[640px] w-full items-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={images.heroVideo}
        poster={images.heroPoster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-black/40" />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 sm:pb-28 lg:px-10">
        <p className="animate-fade-in text-sm uppercase tracking-[0.4em] text-gold-soft">
          Fine Dining · {restaurant.city}
        </p>
        <h1
          className="animate-fade-in mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          {restaurant.name}
        </h1>
        <p
          className="animate-fade-in mt-6 max-w-xl text-lg text-cream/80"
          style={{ animationDelay: "0.3s" }}
        >
          {restaurant.claim}.
          <br className="hidden sm:block" /> Saisonale Küche mit Geschichte.
        </p>

        <div
          className="animate-fade-in mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#reservierung"
            className="rounded-full bg-gold px-8 py-4 text-center text-sm uppercase tracking-[0.15em] text-background transition-transform hover:scale-[1.03]"
          >
            Tisch reservieren
          </a>
          <a
            href="#speisekarte"
            className="rounded-full border border-cream/40 px-8 py-4 text-center text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Speisekarte entdecken
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scrollen</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
