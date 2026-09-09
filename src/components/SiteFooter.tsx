import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, UtensilsCrossed, Car, Package } from "lucide-react";
import { site } from "../lib/site";

export function SiteFooter() {
  return (
    <>
      <footer className="bg-espresso text-background/85">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="font-display text-3xl text-background">indika</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-brass">
                Inspired Indian Cuisine
              </p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-background/70">
                Classic Indian cooking, reinterpreted with a quieter, more refined hand —
                in Sector 90, Noida.
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Indika on Instagram"
                className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/25 transition-colors hover:border-brass hover:text-brass"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
            </div>

            <div className="space-y-5 text-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Find Us</p>
              <p className="flex gap-3 text-background/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden />
                <span>{site.address}</span>
              </p>
              <p className="flex gap-3 text-background/75">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden />
                <a href={site.phoneHref} className="hover:text-background">
                  {site.phone}
                </a>
              </p>
              <p className="flex gap-3 text-background/75">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden />
                <span>Open daily · {site.hours}</span>
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass">
                How to Dine
              </p>
              <ul className="space-y-3 text-background/75">
                <li className="flex items-center gap-3">
                  <UtensilsCrossed className="h-4 w-4 text-brass" aria-hidden /> Dine-in
                </li>
                <li className="flex items-center gap-3">
                  <Car className="h-4 w-4 text-brass" aria-hidden /> Kerbside pickup
                </li>
                <li className="flex items-center gap-3">
                  <Package className="h-4 w-4 text-brass" aria-hidden /> No-contact delivery
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 pt-2 text-[13px] uppercase tracking-[0.16em]">
                <Link to="/menu" className="hover:text-brass">
                  Menu
                </Link>
                <Link to="/about" className="hover:text-brass">
                  About
                </Link>
                <Link to="/visit" className="hover:text-brass">
                  Visit
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Indika – Inspired Indian Cuisine.</p>
            <p>{site.priceRange}</p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky reserve bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md sm:hidden">
        <Link to="/visit" hash="reserve" className="btn-base btn-primary w-full">
          Reserve a Table
        </Link>
      </div>
      <div className="h-16 sm:hidden" aria-hidden />
    </>
  );
}
