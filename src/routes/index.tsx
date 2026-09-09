import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Star, Sparkles, Flame, HandHeart, ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { TiltImage } from "../components/TiltImage";
import { InstagramSection } from "../components/Instagram";
import { site, testimonials } from "../lib/site";
import hero from "../assets/hero.jpg";
import biryani from "../assets/dish-biryani.jpg";
import dal from "../assets/dish-dal-makhani.jpg";
import paneer from "../assets/dish-paneer.jpg";
import tandoori from "../assets/dish-tandoori.jpg";
import dahi from "../assets/dish-dahi-kebab.jpg";
import platter from "../assets/dish-veg-platter.jpg";
import interior from "../assets/unnamed.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indika – Inspired Indian Cuisine | Sector 90, Noida" },
      {
        name: "description",
        content:
          "Indika serves classic Indian dishes reimagined, in a warm and elegant room in Sector 90, Noida. 4.8★ from 465 guests. Open daily till 11:30 PM.",
      },
      { property: "og:title", content: "Indika – Inspired Indian Cuisine, Noida" },
      {
        property: "og:description",
        content:
          "Tradition, read again. Reserve a table in Sector 90, Noida — open daily till 11:30 PM.",
      },
    ],
  }),
  component: Home,
});

const dishes = [
  { src: biryani, name: "Biryani", note: "Sealed on dum, opened at the table." },
  { src: dal, name: "Dal Makhani", note: "Overnight lentils, silken and smoky." },
  { src: paneer, name: "Paneer Specialities", note: "Charred edges, gentle centre." },
  { src: tandoori, name: "Tandoori Chicken", note: "Coal-fired, clean-tasting heat." },
  { src: dahi, name: "Dahi Kebab", note: "Crisp shell, hung-curd softness." },
  { src: platter, name: "Veg Platter", note: "The kitchen's best, all at once." },
];

const pillars = [
  {
    icon: Flame,
    title: "Authentic Flavours",
    copy: "Guests keep returning for the biryani, the dal makhani and the tandoor — cooking that tastes made with care rather than made quickly.",
  },
  {
    icon: Sparkles,
    title: "Warm & Elegant Ambiance",
    copy: "A calm, cosy room with space to breathe — equally suited to a family lunch, a celebration, or an unhurried catch-up.",
  },
  {
    icon: HandHeart,
    title: "Attentive Service",
    copy: "Courteous, soft-spoken and genuinely patient — a team that reads the table, and looks after younger guests just as well.",
  },
];

function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Candlelit table at Indika set with blue-and-white ceramics beside a lit alcove wall"
            className="h-[118%] w-full object-cover"
            style={{ transform: `translateY(${offset * -0.12}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/25" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-40 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.36em] text-brass">
              {site.devanagari} · Sector 90, Noida
            </p>
            <h1 className="mt-6 max-w-4xl text-6xl leading-[0.95] text-background sm:text-7xl lg:text-[7.5rem]">
              Tradition,
              <br />
              <em className="font-normal italic text-brass">read again</em>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-background/75">
              Inspired Indian cuisine — the dishes you grew up with, given time,
              technique and a quieter kind of elegance.
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-9 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/25 px-4 py-2 text-xs text-background/85">
              <Star className="h-3.5 w-3.5 fill-brass text-brass" aria-hidden />
              {site.rating}★ · {site.reviews} reviews
            </span>
            <span className="rounded-full border border-background/25 px-4 py-2 text-xs text-background/85">
              {site.priceRange}
            </span>
            <span className="rounded-full border border-background/25 px-4 py-2 text-xs text-background/85">
              {site.hours}
            </span>
          </Reveal>

          <Reveal delay={260} className="mt-9 flex flex-wrap gap-3">
            <Link to="/visit" hash="reserve" className="btn-base btn-primary">
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="btn-base btn-outline border-background/40 text-background"
            >
              View Menu
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STORY STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">The Experience</p>
            <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">
              A room that slows you down
            </h2>
            <div className="rule-brass my-7 max-w-24" />
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Guests tell us the same three things: it is warm, it is elegant, and it is
              calm. Lit alcoves and soft brass, tables set far enough apart for a real
              conversation, and enough room for the whole family to arrive at once.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              It's a place people choose for celebrations and then keep returning to on
              ordinary afternoons — which is, quietly, the highest compliment.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.16em] text-primary transition-transform hover:translate-x-1"
            >
              Our story <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={140}>
            <TiltImage
              src={interior.url}
              alt="Alcove wall of lit curio niches above patterned banquette seating at Indika"
              ratio="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="bg-secondary/45 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Signature Plates</p>
            <h2 className="mt-4 text-4xl lg:text-5xl">What guests order twice</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d, i) => (
              <Reveal key={d.name} delay={i * 90}>
                <article>
                  <TiltImage src={d.src} alt={`${d.name} at Indika`} ratio="aspect-[4/5]" />
                  <h3 className="mt-5 text-2xl">{d.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.note}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link to="/menu" className="btn-base btn-outline">
              View Full Menu
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-32">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Why Guests Love Us</p>
          <h2 className="mt-4 text-4xl lg:text-5xl">Three things, done properly</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <p.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-5 text-2xl">{p.title}</h3>
              <div className="rule-brass my-4 max-w-16" />
              <p className="text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      <InstagramSection
        eyebrow="@indika.in"
        title="Follow Our Table"
        copy="Seasonal plates, quiet corners and the occasional celebration — shared as they happen."
      />

      {/* FOOTER CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10 lg:pb-32">
        <Reveal className="rounded-3xl bg-espresso px-8 py-16 text-background lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="text-4xl leading-tight lg:text-5xl">
                Your table is waiting
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-background/70">
                {site.address}
              </p>
              <p className="mt-1 text-sm text-background/70">
                Open daily · {site.hours}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/visit" hash="reserve" className="btn-base btn-primary">
                Reserve a Table
              </Link>
              <a
                href={site.directions}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-outline border-background/40 text-background"
              >
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-secondary/45 py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow">In Their Words</p>
          <div className="relative mt-10 min-h-52 sm:min-h-44">
            {testimonials.map((t, idx) => (
              <figure
                key={t.name}
                className={`absolute inset-0 transition-all duration-700 ${
                  idx === i ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <blockquote className="font-display text-2xl leading-snug text-espresso sm:text-3xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {t.name} · {t.meta}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                onClick={() => setI(idx)}
                aria-label={`Show review ${idx + 1}`}
                aria-current={idx === i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === i ? "w-8 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
