"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { restaurant } from "@/lib/data";

const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

export default function Reservation() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("done"), 900);
  }

  return (
    <section id="reservierung" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Reservierung
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-cream sm:text-5xl">
              Reservieren Sie Ihren Tisch
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Wir freuen uns auf Ihren Besuch. Für Gruppen ab 8 Personen oder
              private Feiern kontaktieren Sie uns gerne direkt telefonisch
              unter{" "}
              <a href={`tel:${restaurant.phoneHref}`} className="text-gold">
                {restaurant.phone}
              </a>
              .
            </p>

            <div className="mt-10 space-y-4 border-t border-line pt-8">
              {restaurant.hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-muted">{h.day}</span>
                  <span className="text-cream/90">{h.time}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            {status === "done" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-sm border border-gold/40 bg-surface-alt p-10 text-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-gold">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-6 font-serif text-2xl text-cream">
                  Anfrage gesendet
                </h3>
                <p className="mt-3 max-w-sm text-sm text-muted">
                  Vielen Dank für Ihre Reservierungsanfrage. Wir bestätigen
                  Ihren Tisch in Kürze per E-Mail.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm uppercase tracking-[0.12em] text-gold hover:underline"
                >
                  Neue Reservierung
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-sm border border-line bg-surface-alt p-8 sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Vorname" name="firstName" required />
                  <Field label="Nachname" name="lastName" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="E-Mail" name="email" type="email" required />
                  <Field label="Telefon" name="phone" type="tel" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  <Field label="Datum" name="date" type="date" required />
                  <Field label="Uhrzeit" name="time" type="time" required />
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                      Personen
                    </label>
                    <select
                      name="guests"
                      required
                      defaultValue={2}
                      className="w-full rounded-sm border border-line bg-background px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none"
                    >
                      {guestOptions.map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Person" : "Personen"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                    Anmerkungen (optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Allergien, besondere Anlässe, Wünsche…"
                    className="w-full resize-none rounded-sm border border-line bg-background px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-gold focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-gold px-8 py-4 text-sm uppercase tracking-[0.15em] text-background transition-transform hover:scale-[1.01] disabled:opacity-60"
                >
                  {status === "submitting" ? "Wird gesendet…" : "Tisch anfragen"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs uppercase tracking-wide text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-line bg-background px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none [color-scheme:dark]"
      />
    </div>
  );
}
