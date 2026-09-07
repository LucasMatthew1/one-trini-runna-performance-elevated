import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import storyRoad from "@/assets/story-road.jpg";
import storyFabric from "@/assets/story-fabric.jpg";
import storyStretch from "@/assets/story-stretch.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — ONE TRINI RUNNA" },
      {
        name: "description",
        content:
          "ONE TRINI RUNNA was built in the Caribbean heat for runners everywhere. Our story, our mission and how we engineer performance apparel.",
      },
      { property: "og:title", content: "Our Story — ONE TRINI RUNNA" },
      {
        property: "og:description",
        content: "Built in the Caribbean heat. Engineered for runners everywhere.",
      },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    title: "Engineered, not decorated",
    body: "Every seam, panel and gram is there for a reason. If a feature doesn't make you faster or more comfortable, it doesn't ship.",
  },
  {
    title: "Tested in real heat",
    body: "Our gear is trialled on Trinidad roads and trails at 32°C with full humidity — the hardest wear test we could ask for.",
  },
  {
    title: "Built to last miles",
    body: "Recycled technical fabrics, reinforced stress points and finishes that survive hundreds of wash cycles.",
  },
];

function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="relative isolate overflow-hidden bg-ink py-24 text-background sm:py-32">
        <img
          src={storyRoad}
          alt="Distance runner on a coastal road at sunrise"
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
          <p className="eyebrow text-primary">Since day one</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.85]">
            One island. One standard. Every runner.
          </h1>
          <p className="mt-6 max-w-xl text-sm text-background/80">
            ONE TRINI RUNNA started with a simple frustration: performance kit designed for cold
            mornings, sold to people running in tropical heat. We built the alternative.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow text-primary">Our mission</p>
              <h2 className="heading mt-3 text-3xl tracking-wide sm:text-5xl">
                Make performance gear that disappears on the body
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                The best kit is the kit you forget you're wearing. No riding waistbands, no
                chafing seams, no soaked fabric clinging at kilometre eight. We obsess over the
                details that only reveal themselves deep into an effort, because that's where
                races and personal bests are decided.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We design for the club runner chasing a first 10K just as seriously as for the
                athlete on the start line of a national championship. Same fabrics, same
                construction, same standard.
              </p>
              <Link
                to="/shop"
                className="heading mt-8 inline-block bg-primary px-8 py-4 text-xs tracking-[0.24em] text-primary-foreground transition-colors hover:bg-foreground"
              >
                Shop the range
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={storyStretch}
                alt="Runner stretching before a session"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <img
                src={storyFabric}
                alt="Macro detail of technical performance fabric"
                loading="lazy"
                className="mt-10 aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t bg-muted/40 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <p className="eyebrow text-primary">What we stand on</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="border-t-2 border-primary pt-5">
                  <h3 className="heading text-xl tracking-wide">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
