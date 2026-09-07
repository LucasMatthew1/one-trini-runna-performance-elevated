import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES, PRODUCTS, type CategoryId } from "@/lib/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All Running Gear — ONE TRINI RUNNA" },
      {
        name: "description",
        content:
          "Browse every ONE TRINI RUNNA product: race shoes, running apparel, training gear, team kit and accessories built for performance.",
      },
      { property: "og:title", content: "Shop All Running Gear — ONE TRINI RUNNA" },
      {
        property: "og:description",
        content: "Race shoes, apparel, training gear and accessories engineered for performance.",
      },
    ],
  }),
  component: ShopPage,
});

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
] as const;

function ShopPage() {
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<(typeof SORTS)[number]["id"]>("featured");
  const [maxPrice, setMaxPrice] = useState(200);

  const products = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) || p.descriptor.toLowerCase().includes(q)
      );
    });
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [category, query, sort, maxPrice]);

  return (
    <div className="pt-24 sm:pt-28">
      <section className="border-b bg-ink py-16 text-background sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <p className="eyebrow text-primary">Full Range</p>
          <h1 className="display mt-4 text-[clamp(2.8rem,9vw,7rem)] leading-[0.85]">
            Shop Everything
          </h1>
          <p className="mt-5 max-w-xl text-sm text-background/70">
            {PRODUCTS.length} performance products, engineered and tested in tropical heat.
            Filter by category, price and rating to find your next kit.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-6 border-b pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={cn(
                  "heading shrink-0 border px-4 py-2.5 text-xs tracking-[0.16em] transition-colors",
                  category === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-foreground",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                aria-label="Search products"
                className="w-full border border-border bg-transparent py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary sm:w-56"
              />
            </div>
            <label className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="eyebrow whitespace-nowrap">Under ${maxPrice}</span>
              <input
                type="range"
                min={20}
                max={200}
                step={5}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                aria-label="Maximum price"
                className="w-28 accent-primary"
              />
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              aria-label="Sort products"
              className="border border-border bg-transparent px-3 py-2.5 text-sm outline-none focus:border-primary"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="eyebrow mt-6 text-muted-foreground">
          {products.length} product{products.length === 1 ? "" : "s"}
        </p>

        {products.length === 0 ? (
          <div className="py-24 text-center">
            <p className="heading text-xl">Nothing matches that yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a wider price range or a different category.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 60}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
