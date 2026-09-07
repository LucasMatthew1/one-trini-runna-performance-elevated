import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — ONE TRINI RUNNA" },
      {
        name: "description",
        content:
          "Explore ONE TRINI RUNNA collections: race day footwear, running apparel, training gear, team kit and everyday accessories.",
      },
      { property: "og:title", content: "Collections — ONE TRINI RUNNA" },
      {
        property: "og:description",
        content: "Race day, apparel, training, team and accessories collections.",
      },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const groups = CATEGORIES.filter((c) => c.id !== "all").map((c) => ({
    ...c,
    products: PRODUCTS.filter((p) => p.category === c.id),
  }));

  return (
    <div className="pt-24 sm:pt-28">
      <section className="border-b bg-ink py-16 text-background sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <p className="eyebrow text-primary">Curated</p>
          <h1 className="display mt-4 text-[clamp(2.8rem,9vw,7rem)] leading-[0.85]">
            Collections
          </h1>
          <p className="mt-5 max-w-xl text-sm text-background/70">
            Five collections, each built around a specific kind of effort.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-20">
          {groups.map((group, index) => {
            const hero = group.products[0];
            if (!hero) return null;
            return (
              <Reveal key={group.id}>
                <section>
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-5">
                    <div>
                      <p className="eyebrow text-primary">
                        0{index + 1} — {group.products.length} pieces
                      </p>
                      <h2 className="heading mt-2 text-3xl tracking-wide sm:text-4xl">
                        {group.label}
                      </h2>
                    </div>
                    <Link
                      to="/shop"
                      className="heading inline-flex items-center gap-2 text-xs tracking-[0.2em] hover:text-primary"
                    >
                      Shop the collection <ArrowRight className="size-4" />
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
                    <Link
                      to="/products/$slug"
                      params={{ slug: hero.slug }}
                      className="group relative block aspect-[16/11] overflow-hidden bg-muted"
                    >
                      <img
                        src={hero.image}
                        alt={group.label}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6">
                        <p className="heading text-2xl text-background">{hero.name}</p>
                        <p className="mt-1 text-xs text-background/70">{hero.descriptor}</p>
                      </div>
                    </Link>
                    <div className="grid grid-cols-2 gap-5">
                      {group.products.slice(1, 5).map((p) => (
                        <Link
                          key={p.slug}
                          to="/products/$slug"
                          params={{ slug: p.slug }}
                          className="group block"
                        >
                          <div className="aspect-square overflow-hidden bg-muted">
                            <img
                              src={p.image}
                              alt={p.name}
                              loading="lazy"
                              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <p className="heading mt-3 truncate text-sm">{p.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
