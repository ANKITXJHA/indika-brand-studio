import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site } from "../lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
] as const;

function Logo() {
  return (
    <Link to="/" className="group flex items-baseline gap-2" aria-label="Indika home">
      <span className="font-display text-2xl tracking-tight text-espresso">indika</span>
      <span className="hidden text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:inline">
        {site.devanagari}
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
          <div className="flex min-w-0 items-center gap-10">
            <Logo />
            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="text-[13px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-espresso"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/visit"
              hash="reserve"
              className="btn-base btn-primary hidden sm:inline-flex"
            >
              Reserve a Table
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <span aria-hidden className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-espresso" />
                <span className="block h-px w-4 bg-espresso" />
                <span className="block h-px w-4 bg-espresso" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in mobile panel */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-espresso/40 transition-opacity duration-400 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-background px-7 py-6 shadow-lift transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-lg"
            >
              ×
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="font-display text-3xl text-espresso"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-4 pt-10">
            <div className="rule-brass" />
            <p className="text-sm text-muted-foreground">{site.hours}</p>
            <a href={site.phoneHref} className="block text-sm text-espresso">
              {site.phone}
            </a>
            <Link
              to="/visit"
              hash="reserve"
              onClick={() => setOpen(false)}
              className="btn-base btn-primary w-full"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
