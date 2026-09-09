import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { TiltImage } from "../components/TiltImage";
import { site } from "../lib/site";
import interior1 from "../assets/unnamed.webp.asset.json";
import interior2 from "../assets/unnamed_5.webp.asset.json";
import counter from "../assets/unnamed_8.webp.asset.json";
import nook from "../assets/unnamed_1.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Indika – Inspired Indian Cuisine, Noida" },
      {
        name: "description",
        content:
          "Indika reinterprets classic Indian cooking with a refined, modern hand — a warm, elegant dining room in Sector 90, Noida, rated 4.8★ by 465 guests.",
      },
      { property: "og:title", content: "About Indika – Inspired Indian Cuisine" },
      {
        property: "og:description",
        content:
          "A warm, elegant room in Noida where classic Indian dishes are read again with care.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-4 text-5xl leading-[1.05] lg:text-7xl">
            Inspired, not
            <br />
            <em className="font-normal italic text-primary">reinvented</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Indika began with a simple conviction: the classics don't need rescuing. A
            dal cooked long enough, a marinade given its time, rice sealed and left
            alone — these already carry everything. Our work is to hold them to a higher
            standard and present them with a lighter, more contemporary hand.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: interior1.url, alt: "Curio alcoves and patterned banquettes in the Indika dining room" },
            { src: interior2.url, alt: "Wide view of Indika's dining room with cane chairs" },
            { src: counter.url, alt: "Indika host counter under the brand emblem" },
            { src: nook.url, alt: "A corner table beside Indika's arched window" },
          ].map((img, i) => (
            <Reveal key={img.src} delay={i * 90}>
              <TiltImage src={img.src} alt={img.alt} ratio="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5 lg:mt-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">The Room</p>
            <h2 className="mt-4 text-4xl lg:text-5xl">Warm, elegant, unhurried</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              Guests describe the room as calm before they describe it as beautiful, and
              that order matters to us. Lit alcoves, soft brass, patterned seating and
              enough space between tables that a family lunch and a quiet catch-up can
              happen side by side without either being overheard.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              It is a room built for lingering — for birthdays and anniversaries, and for
              ordinary Tuesdays that deserve better than they usually get.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our Service</p>
            <h2 className="mt-4 text-4xl lg:text-5xl">Attentive, never intrusive</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              The compliment our team receives most often is that they are soft-spoken.
              We take it seriously. Courtesy here means reading the table: arriving when
              you need something, stepping back when you don't, and making sure children
              at the table are looked after as carefully as anyone else.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Polite, patient, and genuinely glad you came — that is the whole
              philosophy.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5 lg:mt-32 lg:px-10">
        <Reveal className="grid gap-8 rounded-3xl border border-border bg-card p-10 text-center sm:grid-cols-3 lg:p-14">
          <div>
            <p className="font-display text-5xl text-primary">{site.rating}★</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Google rating
            </p>
          </div>
          <div className="sm:border-x sm:border-border">
            <p className="font-display text-5xl text-espresso">{site.reviews}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Guest reviews
            </p>
          </div>
          <div>
            <p className="font-display text-5xl text-espresso">₹400–1,400</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Per person
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-xl text-4xl lg:text-5xl">Come sit with us</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/visit" hash="reserve" className="btn-base btn-primary">
              Reserve Your Table
            </Link>
            <a
              href={site.directions}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline"
            >
              Get Directions
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
