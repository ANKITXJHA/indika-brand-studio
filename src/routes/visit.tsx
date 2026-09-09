import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock, UtensilsCrossed, Car, Package } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { InstagramSection } from "../components/Instagram";
import { site } from "../lib/site";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us | Indika – Inspired Indian Cuisine, Noida" },
      {
        name: "description",
        content:
          "Find Indika at Ground Floor, Tower C, Noida World One, Sector 90, Noida. Open daily till 11:30 PM. Call 081786 83062 or request a table online.",
      },
      { property: "og:title", content: "Visit Indika – Sector 90, Noida" },
      {
        property: "og:description",
        content:
          "Directions, hours, contact and table requests for Indika, Sector 90, Noida.",
      },
    ],
  }),
  component: VisitPage,
});

const mapEmbed =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Noida World One, Sector 90, Noida, Uttar Pradesh 201301") +
  "&output=embed";

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function VisitPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Visit Us</p>
          <h1 className="mt-4 text-5xl leading-[1.05] lg:text-7xl">
            Sector 90,
            <br />
            <em className="font-normal italic text-primary">Noida</em>
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Ground floor of Tower C at Noida World One — easy parking, step-free entry,
            and a room that stays open late.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                src={mapEmbed}
                title="Map showing Indika at Noida World One, Sector 90, Noida"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full lg:h-[460px]"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            <div className="rounded-3xl border border-border bg-card p-7">
              <MapPin className="h-5 w-5 text-primary" aria-hidden />
              <h2 className="mt-4 text-2xl">Address</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {site.address}
              </p>
              <a
                href={site.directions}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-outline mt-5"
              >
                Get Directions
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-border bg-card p-7">
                <Clock className="h-5 w-5 text-primary" aria-hidden />
                <h2 className="mt-4 text-2xl">Hours</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Open daily · {site.hours}
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7">
                <Phone className="h-5 w-5 text-primary" aria-hidden />
                <h2 className="mt-4 text-2xl">Call Us</h2>
                <a
                  href={site.phoneHref}
                  className="mt-2 block text-sm text-espresso underline-offset-4 hover:underline"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6 grid gap-4 rounded-3xl border border-border bg-secondary/50 p-8 sm:grid-cols-3">
          {[
            { icon: UtensilsCrossed, label: "Dine-in", note: "Family tables & quiet corners" },
            { icon: Car, label: "Kerbside Pickup", note: "Call ahead, collect at the door" },
            { icon: Package, label: "No-Contact Delivery", note: "Sealed and sent to you" },
          ].map((s) => (
            <div key={s.label} className="flex min-w-0 items-start gap-3">
              <s.icon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <p className="text-sm font-medium text-espresso">{s.label}</p>
                <p className="text-sm text-muted-foreground">{s.note}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="reserve" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Reservations</p>
            <h2 className="mt-4 text-4xl lg:text-5xl">Request a table</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Send us the details and we'll confirm by phone. For same-day tables or
              larger groups, calling is quickest.
            </p>
            <a href={site.phoneHref} className="btn-base btn-outline mt-6">
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="rounded-3xl border border-border bg-card p-10 text-center">
                <h3 className="text-3xl">Thank you</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Your request has been noted. Our team will call you shortly to confirm.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid gap-5 rounded-3xl border border-border bg-card p-7 sm:grid-cols-2 lg:p-10"
              >
                <Field label="Name" type="text" autoComplete="name" required />
                <Field label="Phone" type="tel" autoComplete="tel" required />
                <Field label="Date" type="date" required />
                <Field label="Time" type="time" required />
                <div className="sm:col-span-2">
                  <Field label="Guests" type="number" min={1} max={30} defaultValue={2} required />
                </div>
                <button type="submit" className="btn-base btn-primary sm:col-span-2">
                  Request Reservation
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <InstagramSection
        eyebrow="@indika.in"
        title="Visit Us & Tag Us"
        copy="If the light hits the alcove wall just right, take the photo. We'd love to see your table."
        variant="strip"
      />
    </div>
  );
}
