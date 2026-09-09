import { Instagram as InstagramIcon } from "lucide-react";
import { site } from "../lib/site";
import { Reveal } from "./Reveal";
import interior1 from "../assets/unnamed.webp.asset.json";
import interior2 from "../assets/unnamed_5.webp.asset.json";
import interior3 from "../assets/unnamed_8.webp.asset.json";
import exterior from "../assets/unnamed_6.webp.asset.json";
import nook from "../assets/unnamed_1.jpg.asset.json";
import biryani from "../assets/dish-biryani.jpg";
import tandoori from "../assets/dish-tandoori.jpg";

export const gramTiles = [
  { src: interior1.url, alt: "Alcove wall with curios above patterned banquette seating at Indika" },
  { src: biryani, alt: "Biryani served in a copper handi" },
  { src: exterior.url, alt: "Arched blue entrance of Indika in Sector 90, Noida" },
  { src: interior2.url, alt: "Indika dining room with cane chairs and woven pendant lights" },
  { src: tandoori, alt: "Tandoori chicken plated with lemon and onion" },
  { src: interior3.url, alt: "Indika host counter beneath the brand emblem" },
  { src: nook.url, alt: "Corner table beside Indika's tall arched window" },
];

export function InstagramSection({
  eyebrow,
  title,
  copy,
  variant = "grid",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  variant?: "grid" | "strip";
}) {
  const tiles = variant === "grid" ? gramTiles.slice(0, 6) : gramTiles;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{copy}</p>
      </Reveal>

      {variant === "grid" ? (
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {tiles.map((t, i) => (
            <Reveal key={t.src} delay={i * 70}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4">
          {tiles.map((t, i) => (
            <a
              key={t.src}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className={`group block shrink-0 snap-start overflow-hidden rounded-2xl ${
                i % 3 === 0 ? "w-56 sm:w-72" : "w-44 sm:w-56"
              }`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              />
            </a>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="btn-base btn-outline"
        >
          <InstagramIcon className="h-4 w-4" aria-hidden />
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
}
