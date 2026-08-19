"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/lib/data";

const links = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#stimmen", label: "Stimmen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-line py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-6"
      }`}
    >
      <div className="relative flex w-full items-center justify-between px-6 min-[1400px]:px-8">
        <a
          href="#top"
          className="font-serif text-xl tracking-[0.15em] text-cream sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          MAISON <span className="text-gold">LUMIÈRE</span>
        </a>

        <nav className="hidden items-center gap-9 min-[1400px]:absolute min-[1400px]:left-1/2 min-[1400px]:flex min-[1400px]:-translate-x-1/2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.12em] text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 min-[1400px]:flex">
          <a
            href={`tel:${restaurant.phoneHref}`}
            className="text-sm tracking-wide text-cream/80 transition-colors hover:text-gold"
          >
            {restaurant.phone}
          </a>
          <a
            href="#reservierung"
            className="rounded-full border border-gold/70 px-5 py-2 text-sm uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold hover:text-background"
          >
            Tisch reservieren
          </a>
        </div>

        <button
          aria-label="Menü öffnen"
          className="flex flex-col gap-1.5 min-[1400px]:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-7 bg-cream transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-7 bg-cream transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-7 bg-cream transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-0 -z-10 h-dvh bg-background transition-opacity duration-300 min-[1400px]:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-8 pt-24">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-cream/90 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${restaurant.phoneHref}`}
            className="py-3 text-cream/70"
          >
            {restaurant.phone}
          </a>
          <a
            href="#reservierung"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-gold px-5 py-3 text-center text-sm uppercase tracking-[0.12em] text-background"
          >
            Tisch reservieren
          </a>
        </nav>
      </div>
    </header>
  );
}
