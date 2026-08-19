import { restaurant } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="font-serif text-xl tracking-[0.15em] text-cream">
            MAISON <span className="text-gold">LUMIÈRE</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            {restaurant.address.line1}, {restaurant.address.zip}{" "}
            {restaurant.address.city}
          </p>
        </div>

        <div className="flex gap-6 text-sm text-muted">
          <a href="#ueber-uns" className="hover:text-gold">Über uns</a>
          <a href="#speisekarte" className="hover:text-gold">Speisekarte</a>
          <a href="#galerie" className="hover:text-gold">Galerie</a>
          <a href="#kontakt" className="hover:text-gold">Kontakt</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M14 8.5h2V5.5h-2c-2 0-3.5 1.5-3.5 3.5v2H8.5v3H10.5V19h3v-6h2l.5-3h-2.5V9c0-.3.2-.5.5-.5z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-muted/70">
        © {new Date().getFullYear()} {restaurant.name}. Alle Angaben sind
        Demo-Inhalte zu Vorführzwecken.
      </p>
    </footer>
  );
}
