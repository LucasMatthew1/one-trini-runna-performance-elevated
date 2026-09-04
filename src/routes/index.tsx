import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Package, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-runners.jpg";
import storyRoad from "@/assets/story-road.jpg";
import storyStretch from "@/assets/story-stretch.jpg";
import storyFabric from "@/assets/story-fabric.jpg";
import athlete1 from "@/assets/athlete-1.jpg";
import athlete2 from "@/assets/athlete-2.jpg";
import athlete3 from "@/assets/athlete-3.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal, useParallax } from "@/components/site/Reveal";
import { Stars } from "@/components/site/Stars";
import { CATEGORIES, PRODUCTS, type CategoryId } from "@/lib/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ONE TRINI RUNNA — Run Strong. Move Free. Perform Better." },
      {
        name: "description",
        content:
          "Premium performance running apparel, footwear and training gear built for every stride, workout, race and challenge.",
      },
      { property: "og:title", content: "ONE TRINI RUNNA — Run Strong. Move Free." },
      {
        property: "og:description",
        content:
          "Premium running apparel and accessories designed for comfort, performance and everyday movement.",
      },
    ],
  }),
  component: Home,
});

const STATS = [
  { icon: Globe, value: "50+", label: "Countries", copy: "Runners in our kit worldwide" },
  { icon: Package, value: "5000+", label: "Orders", copy: "Shipped to doorsteps and start lines" },
  {
    icon: Sparkles,
    value: "150+",
    label: "Performance Products",
    copy: "Engineered, tested, refined",
  },
];

const PILLARS = [
  {
    title: "High-Quality Materials",
    copy: "Lightweight, breathable fabrics engineered for movement.",
  },
  { title: "Comfort-First Design", copy: "Built to move naturally with your body." },
  {
    title: "Designed for Performance",
    copy: "Made for training sessions, races, and everyday movement.",
  },
  {
    title: "Modern Athletic Style",
    copy: "Performance technology without sacrificing style.",
  },
];

const TESTIMONIALS = [
  {
    image: athlete1,
    name: "Marcus Joseph",
    sport: "Marathon · 2:19 PB",
    quote:
      "I raced Berlin in the Velocity Pro and the last 10K felt like the first. Nothing I've worn holds its shape through that kind of heat.",
  },
  {
    image: athlete2,
    name: "Aliyah Charles",
    sport: "400m Sprinter · National Team",
    quote:
      "The fit is the difference. Compression where I need it, freedom everywhere else. It's the only kit I take to a championship block.",
  },
  {
    image: athlete3,
    name: "Renée Baptiste",
    sport: "Trail & Ultra Runner",
    quote:
      "Twelve hours on the mountain, rain the whole way, no chafing, no soaked layers. This gear genuinely respects the distance.",
  },
];

function Home() {
  const [tab, setTab] = useState<CategoryId | "all">("all");
  const heroRef = useParallax(0.18);
  const storyRef = useParallax(0.1);

  const filtered =
    tab === "all" ? PRODUCTS.slice(0, 8) : PRODUCTS.filter((p) => p.category === tab);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-ink">
        <div ref={heroRef} className="absolute inset-0 -z-0">
          <img
            src={heroImg}
            alt="Two runners sprinting through a city street at dusk"
            width={1920}
            height={1088}
            className="hero-drift h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-4 pb-20 pt-36 sm:px-8 sm:pb-28">
          <Reveal>
            <p className="eyebrow text-primary">One step · One mile · One Trini</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="display mt-6 max-w-5xl text-ink-foreground"
              style={{ fontSize: "clamp(2.9rem, 9.2vw, 9rem)" }}
            >
              Run Strong.
              <br />
              Move Free.
              <br />
              <span className="text-primary">Perform Better.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
              Premium running apparel and accessories designed for comfort, performance, and
              everyday movement.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/shop"
                className="heading group inline-flex items-center justify-center gap-3 bg-primary px-10 py-4.5 text-sm tracking-[0.22em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                Shop Now
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/collections"
                className="heading inline-flex items-center justify-center border border-ink-foreground/40 px-10 py-4.5 text-sm tracking-[0.22em] text-ink-foreground transition-colors hover:border-ink-foreground hover:bg-ink-foreground hover:text-ink"
              >
                Explore the Collection
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND STATS */}
      <section className="ink-panel relative overflow-hidden py-20 sm:py-28">
        <div className="glow-blob pointer-events-none absolute -left-32 top-0 size-96 rounded-full bg-primary/25 blur-[120px]" />
        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-4 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <h2
              className="display text-ink-foreground"
              style={{ fontSize: "clamp(2.1rem, 5.4vw, 4.6rem)" }}
            >
              Built for runners.
              <br />
              Designed for movement.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-ink-foreground/70">
              High-performance running apparel and gear designed to support every stride, workout,
              race, and challenge.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 90}
                className="border border-hairline bg-ink-foreground/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-primary/60"
              >
                <span className="grid size-10 place-items-center rounded-full bg-primary">
                  <stat.icon className="size-4.5 text-primary-foreground" strokeWidth={2} />
                </span>
                <p className="display mt-6 text-4xl text-ink-foreground sm:text-5xl">
                  {stat.value}
                </p>
                <p className="heading mt-2 text-sm tracking-[0.2em] text-primary">{stat.label}</p>
                <p className="mt-2 text-sm text-ink-foreground/60">{stat.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-primary">Featured Collection</p>
              <h2
                className="display mt-5 max-w-xl"
                style={{ fontSize: "clamp(2.1rem, 5.4vw, 4.4rem)" }}
              >
                Essential gear for
                <br />
                <span className="text-primary">every run</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="heading group inline-flex items-center gap-3 self-start text-sm tracking-[0.2em] md:self-auto"
            >
              View all products
              <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal className="mt-12 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2 border-b pb-px">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setTab(cat.id)}
                  className={cn(
                    "heading border-b-2 px-4 py-3 text-xs tracking-[0.18em] transition-colors",
                    tab === cat.id
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
            {filtered.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 4) * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE STORY */}
      <section className="border-t bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <Reveal>
            <p className="eyebrow text-primary">The Performance Story</p>
            <h2
              className="display mt-5 max-w-2xl"
              style={{ fontSize: "clamp(2.1rem, 6vw, 5.2rem)" }}
            >
              Performance you can
              <br />
              feel.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div ref={storyRef} className="h-full overflow-hidden">
                <img
                  src={storyStretch}
                  alt="Runner stretching against a wall in morning light"
                  loading="lazy"
                  width={1008}
                  height={1408}
                  className="h-full min-h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </Reveal>

            <div className="flex flex-col gap-5 lg:col-span-5">
              {PILLARS.slice(0, 2).map((pillar, i) => (
                <Reveal
                  key={pillar.title}
                  delay={i * 90}
                  className="border bg-background p-8"
                >
                  <span className="heading text-xs tracking-[0.24em] text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="heading mt-4 text-xl sm:text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.copy}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={180} className="overflow-hidden">
                <img
                  src={storyFabric}
                  alt="Close detail of breathable technical running fabric"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </Reveal>
            </div>

            <Reveal className="overflow-hidden lg:col-span-5">
              <img
                src={storyRoad}
                alt="Runner on an open coastal road at sunrise"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {PILLARS.slice(2).map((pillar, i) => (
                <Reveal
                  key={pillar.title}
                  delay={i * 90}
                  className="flex flex-col justify-between border bg-background p-8"
                >
                  <div>
                    <span className="heading text-xs tracking-[0.24em] text-primary">
                      0{i + 3}
                    </span>
                    <h3 className="heading mt-4 text-xl sm:text-2xl">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Reveal className="sm:col-span-2">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/shop"
                    className="heading flex-1 bg-primary px-8 py-4 text-center text-sm tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground"
                  >
                    Shop Now
                  </Link>
                  <Link
                    to="/collections"
                    className="heading flex-1 border border-foreground px-8 py-4 text-center text-sm tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
                  >
                    Discover the Collection
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ATHLETES */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <Reveal>
            <p className="eyebrow text-primary">The Runna Collective</p>
            <h2
              className="display mt-5 max-w-3xl text-ink-foreground"
              style={{ fontSize: "clamp(2rem, 5.2vw, 4.4rem)" }}
            >
              Trusted by athletes.
              <br />
              Loved by everyday champions.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-foreground/65">
              From professional athletes to fitness enthusiasts, thousands of people worldwide
              choose ONE TRINI RUNNA for their journey.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 100}
                className="group flex flex-col border border-hairline bg-ink-foreground/[0.03]"
              >
                <div className="overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <Stars rating={5} size={13} />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-foreground/80">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-7 border-t border-hairline pt-5">
                    <p className="heading text-base text-ink-foreground">{t.name}</p>
                    <p className="eyebrow mt-1.5 text-primary">{t.sport}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="ink-panel relative overflow-hidden py-24 sm:py-36">
        <div className="glow-blob pointer-events-none absolute right-[-10%] top-[-20%] size-[34rem] rounded-full bg-primary/30 blur-[140px]" />
        <div className="glow-blob pointer-events-none absolute bottom-[-25%] left-[-5%] size-[28rem] rounded-full bg-primary/15 blur-[130px] [animation-delay:-7s]" />
        <div className="relative mx-auto max-w-[1400px] px-4 text-center sm:px-8">
          <Reveal>
            <h2
              className="display mx-auto max-w-4xl text-ink-foreground"
              style={{ fontSize: "clamp(2.4rem, 8vw, 7rem)" }}
            >
              Gear up.
              <br />
              Push beyond <span className="text-primary">limits.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-foreground/70">
              Our products are made for anyone who loves to move — runners, gym-goers, and active
              individuals who value performance, comfort, and clean design.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="heading bg-primary px-12 py-4.5 text-sm tracking-[0.22em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                Shop Now
              </Link>
              <Link
                to="/collections"
                className="heading border border-ink-foreground/40 px-12 py-4.5 text-sm tracking-[0.22em] text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                Explore Collection
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y bg-background py-5">
        <div className="marquee-track flex w-max gap-10">
          {Array.from({ length: 2 }).map((_, block) => (
            <div key={block} className="flex gap-10">
              {["Run Strong", "Move Free", "Perform Better", "One Step", "One Mile", "One Trini"].map(
                (word) => (
                  <span key={word} className="display flex items-center gap-10 text-2xl sm:text-3xl">
                    {word}
                    <span className="size-2 shrink-0 bg-primary" />
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
