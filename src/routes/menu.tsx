import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Indika – Inspired Indian Cuisine, Noida" },
      {
        name: "description",
        content:
          "Explore Indika's vegetarian and non-vegetarian plates — paneer specialities, dal makhani, biryani, tandoori chicken and dahi kebab — plus our beverage selection.",
      },
      { property: "og:title", content: "Menu | Indika – Inspired Indian Cuisine" },
      {
        property: "og:description",
        content:
          "Vegetarian and non-vegetarian plates, slow-cooked classics and a calm beverage list.",
      },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; note: string };

const veg: Item[] = [
  {
    name: "Paneer Specialities",
    note: "House paneer, chargrilled or simmered in gravies built on slow-roasted spice.",
  },
  {
    name: "Dal Makhani",
    note: "Black lentils held overnight over low heat until they turn silken and smoky.",
  },
  {
    name: "Veg Platter",
    note: "A composed spread of our kitchen's vegetarian highlights, meant for sharing.",
  },
  {
    name: "Dabeli",
    note: "The Kutchi street classic, plated with a lighter, more precise hand.",
  },
];

const nonVeg: Item[] = [
  {
    name: "Tandoori Chicken",
    note: "Yoghurt-and-spice marinade, finished over live coal for a clean, smoky edge.",
  },
  {
    name: "Dahi Kebab",
    note: "Hung curd kebabs, crisp at the edge and yielding through the centre.",
  },
  {
    name: "Biryani",
    note: "Sealed and cooked on dum, so the rice carries the spice rather than covering it.",
  },
];

const beverages: Item[] = [
  {
    name: "Refreshing Coolers",
    note: "Seasonal fruit and citrus coolers, poured cold and lightly sweetened.",
  },
  {
    name: "Traditional Chaas & Lassi",
    note: "Churned yoghurt, salted or sweet — the natural companion to a spiced plate.",
  },
  {
    name: "Hot Beverages",
    note: "Masala chai and coffee to close a long, unhurried table.",
  },
];

function Dot({ veg: isVeg }: { veg: boolean }) {
  return (
    <span
      aria-label={isVeg ? "Vegetarian" : "Non-vegetarian"}
      role="img"
      className={`grid h-4 w-4 shrink-0 place-items-center rounded-[3px] border ${
        isVeg ? "border-veg" : "border-nonveg"
      }`}
    >
      <span
        aria-hidden
        className={`block h-1.5 w-1.5 rounded-full ${isVeg ? "bg-veg" : "bg-nonveg"}`}
      />
    </span>
  );
}

function Cards({ items, isVeg }: { items: Item[]; isVeg: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal as="li" key={item.name} delay={i * 70}>
          <article className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow duration-500 hover:shadow-soft">
            <div className="flex items-start gap-3">
              <Dot veg={isVeg} />
              <h3 className="text-2xl leading-tight">{item.name}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.note}
            </p>
          </article>
        </Reveal>
      ))}
      <Reveal as="li" delay={items.length * 70}>
        <div className="grid h-full min-h-32 place-items-center rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
          More dishes coming soon
        </div>
      </Reveal>
    </ul>
  );
}

function MenuPage() {
  const [tab, setTab] = useState<"food" | "beverages">("food");
  const [diet, setDiet] = useState<"veg" | "nonveg">("veg");

  return (
    <div className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The Menu</p>
          <h1 className="mt-4 text-5xl leading-[1.05] lg:text-7xl">
            Familiar dishes,
            <br />
            <em className="font-normal italic text-primary">read again</em>
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Our kitchen works from the classics — the same lentils, the same coal, the
            same patience — and lets refinement come from technique rather than
            reinvention.
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Menu sections"
          className="mt-12 inline-flex rounded-full border border-border bg-card p-1"
        >
          {(["food", "beverages"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`rounded-full px-6 py-2.5 text-[13px] uppercase tracking-[0.14em] transition-colors ${
                tab === t
                  ? "bg-espresso text-background"
                  : "text-muted-foreground hover:text-espresso"
              }`}
            >
              {t === "food" ? "Food" : "Beverages"}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 pt-10 lg:px-10">
        {tab === "food" ? (
          <>
            <div className="mb-10 flex flex-wrap gap-3">
              {(
                [
                  ["veg", "Vegetarian"],
                  ["nonveg", "Non-Vegetarian"],
                ] as const
              ).map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setDiet(k)}
                  aria-pressed={diet === k}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[13px] uppercase tracking-[0.14em] transition-all ${
                    diet === k
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:text-espresso"
                  }`}
                >
                  <Dot veg={k === "veg"} />
                  {label}
                </button>
              ))}
            </div>
            {diet === "veg" ? (
              <Cards items={veg} isVeg />
            ) : (
              <Cards items={nonVeg} isVeg={false} />
            )}
          </>
        ) : (
          <>
            <p className="mb-10 max-w-2xl rounded-2xl border border-border bg-secondary/60 p-5 text-sm leading-relaxed text-muted-foreground">
              Indicative selection — our full beverage list is being finalised and will
              appear here shortly.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {beverages.map((b, i) => (
                <Reveal as="li" key={b.name} delay={i * 70}>
                  <article className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow duration-500 hover:shadow-soft">
                    <h3 className="text-2xl leading-tight">{b.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {b.note}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal className="rounded-3xl bg-espresso px-8 py-16 text-center text-background lg:py-20">
          <h2 className="mx-auto max-w-xl text-4xl lg:text-5xl">
            Reserve a table to taste the menu
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-background/70">
            Open daily till 11:30 PM. Walk-ins welcome, though weekends fill early.
          </p>
          <Link to="/visit" hash="reserve" className="btn-base btn-primary mt-8">
            Reserve a Table
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
