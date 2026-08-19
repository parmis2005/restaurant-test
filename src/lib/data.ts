// Alle Daten auf dieser Seite (Name, Adresse, Telefon, Bewertungen) sind fiktiv
// und dienen ausschließlich als Demo-/Platzhalterinhalt.

export const restaurant = {
  name: "Maison Lumière",
  claim: "Moderne Französische Küche im Herzen von Düsseldorf",
  city: "Düsseldorf",
  address: {
    line1: "Königsallee 60",
    line2: "2. Etage",
    zip: "40212",
    city: "Düsseldorf",
  },
  phone: "+49 211 8899 2210",
  phoneHref: "+492118992210",
  email: "reservierung@maison-lumiere-restaurant.de",
  instagram: "@maisonlumiere.duesseldorf",
  facebook: "Maison Lumière Düsseldorf",
  mapsQuery: "K%C3%B6nigsallee%2060%2C%2040212%20D%C3%BCsseldorf",
  hours: [
    { day: "Montag", time: "Ruhetag" },
    { day: "Dienstag – Freitag", time: "17:30 – 23:00 Uhr" },
    { day: "Samstag", time: "13:00 – 23:30 Uhr" },
    { day: "Sonntag", time: "13:00 – 21:00 Uhr" },
  ],
};

export const images = {
  heroVideo:
    "https://videos.pexels.com/video-files/5101338/5101338-hd_1920_1080_25fps.mp4",
  heroPoster:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop",
  about:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  aboutSecondary:
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=900&auto=format&fit=crop",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      alt: "Elegantes Restaurant-Interieur mit warmem Ambiente",
    },
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
      alt: "Moderner Gastraum mit Treppenaufgang",
    },
    {
      src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1200&auto=format&fit=crop",
      alt: "Steak mit Pommes, angerichtet auf weißem Teller",
    },
    {
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
      alt: "Eingedeckter Tisch mit weißer Tischdecke",
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      alt: "Industrial-chic Restaurant Interieur",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
      alt: "Terrasse mit Blick auf das Wasser bei Sonnenuntergang",
    },
    {
      src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop",
      alt: "Bar mit stimmungsvoller Beleuchtung",
    },
    {
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop",
      alt: "Anstoßen mit Rotweingläsern",
    },
  ],
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
};

export const menu: { category: string; items: MenuItem[] }[] = [
  {
    category: "Vorspeisen",
    items: [
      {
        name: "Jakobsmuscheln",
        description: "Blumenkohl-Beurre-Blanc, gerösteter Kapernapfel",
        price: "24 €",
        image:
          "https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Rote-Bete-Carpaccio",
        description: "Ziegenkäsecreme, geröstete Walnüsse, Kräuseminze",
        price: "16 €",
        image:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Kürbissuppe",
        description: "Kokos, Ingwer, gebratene Garnele",
        price: "14 €",
        image:
          "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    category: "Hauptgerichte",
    items: [
      {
        name: "Filet vom Charolais-Rind",
        description: "Café-de-Paris-Butter, confierte Kartoffel, Bouquetière",
        price: "42 €",
        image:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Steinbutt",
        description: "Safranschaum, Fenchel, Zitronenrisotto",
        price: "38 €",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Rib-Eye Steak",
        description: "Kräuterbutter, Ofenkartoffel, confiertes Gemüse",
        price: "36 €",
        image:
          "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Waldpilzrisotto",
        description: "Steinpilze, schwarzer Trüffel, Grana Padano (vegetarisch)",
        price: "29 €",
        image:
          "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Grand-Marnier-Soufflé",
        description: "Orangenzeste, Vanilleeis",
        price: "14 €",
        image:
          "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Schokoladentarte",
        description: "Valrhona-Kuvertüre, Meersalz, Himbeersorbet",
        price: "12 €",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Käseauswahl",
        description: "Vom Affineur, Feigensenf, Nussbrot",
        price: "16 €",
        image:
          "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Sophie Lindgren",
    text: "Ein Abend wie aus dem Bilderbuch. Jeder Gang war eine kleine Inszenierung, der Service unaufdringlich und herzlich zugleich.",
    rating: 5,
  },
  {
    name: "Markus Bertelsmann",
    text: "Die beste Küche, die wir seit Langem in Düsseldorf erlebt haben. Das Rind war butterzart, die Weinbegleitung perfekt abgestimmt.",
    rating: 5,
  },
  {
    name: "Julia Nowak",
    text: "Wunderschönes Ambiente, aufmerksames Personal und ein Steinbutt, den ich so schnell nicht vergessen werde. Klare Empfehlung!",
    rating: 5,
  },
];
