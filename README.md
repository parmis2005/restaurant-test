# Maison Lumière — Restaurant Website

Moderne, responsive Restaurant-Website, gebaut mit [Next.js](https://nextjs.org) (App Router), TypeScript und Tailwind CSS.

Alle Inhalte (Name, Adresse, Telefonnummer, Speisekarte, Bewertungen) sind **fiktive Demo-Daten**.

## Entwicklung starten

```bash
npm install
npm run dev
```

Anschließend [http://localhost:3000](http://localhost:3000) im Browser öffnen.

## Produktion

```bash
npm run build
npm run start
```

## Struktur

- `src/app` — Layout, globale Styles, Einstiegspunkt der Seite
- `src/components` — Sektionen (Header, Hero, About, Menu, Gallery, Testimonials, Reservation, LocationMap, Footer)
- `src/lib/data.ts` — Restaurant-Daten, Bild-/Video-Quellen, Speisekarte, Bewertungen

## Bild- und Videomaterial

Fotos stammen von [Unsplash](https://unsplash.com), das Hero-Hintergrundvideo von [Pexels](https://pexels.com) — beide lizenzfrei nutzbar. Die Google-Maps-Einbettung zeigt eine fiktive Adresse in Düsseldorf.
