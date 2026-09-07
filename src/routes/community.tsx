import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import athlete1 from "@/assets/athlete-1.jpg";
import athlete2 from "@/assets/athlete-2.jpg";
import athlete3 from "@/assets/athlete-3.jpg";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "The Runna Community — ONE TRINI RUNNA" },
      {
        name: "description",
        content:
          "Join the ONE TRINI RUNNA community: weekly group runs, athlete stories, training sessions and race day meetups.",
      },
      { property: "og:title", content: "The Runna Community — ONE TRINI RUNNA" },
      {
        property: "og:description",
        content: "Weekly group runs, athlete stories and race day meetups.",
      },
    ],
  }),
  component: CommunityPage,
});

const ATHLETES = [
  {
    image: athlete1,
    name: "Kareem Joseph",
    role: "Marathon · 2:24 PB",
    quote:
      "I raced my marathon PB in the Velocity Pro. Zero hot spots, zero doubts. It's the first shoe that felt built for our climate.",
  },
  {
    image: athlete2,
    name: "Alana Charles",
    role: "800m · National finalist",
    quote:
      "The split short is the only thing I train and race in now. It never rides, never chafes, and it dries before I get home.",
  },
  {
    image: athlete3,
    name: "Mira Sookdeo",
    role: "Trail ultra · 100km finisher",
    quote:
      "Twelve hours on technical trail and the Trail GTX still had grip on the last descent. That's all I need to know.",
  },
];

const EVENTS = [
  { day: "Tue", title: "Track Tuesday", detail: "Interval session · 5:45am · Hasely Crawford" },
  { day: "Thu", title: "Tempo Thursday", detail: "8–14km progression · 5:30am · Queen's Park" },
  { day: "Sat", title: "Long Run Club", detail: "16–32km social pace · 5:00am · North Coast" },
  { day: "Sun", title: "Recovery & Mobility", detail: "Easy 8km + stretch · 6:30am · Savannah" },
];

function CommunityPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="pt-24 sm:pt-28">
      <section className="border-b bg-ink py-16 text-background sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <p className="eyebrow text-primary">Run with us</p>
          <h1 className="display mt-4 text-[clamp(2.8rem,9vw,7rem)] leading-[0.85]">
            The Runna Community
          </h1>
          <p className="mt-6 max-w-xl text-sm text-background/70">
            Four sessions a week, open to every pace. Show up once and you'll understand why
            nobody runs alone here.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow text-primary">Athlete voices</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {ATHLETES.map((a, i) => (
            <Reveal key={a.name} delay={i * 100}>
              <figure>
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{a.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <p className="heading text-base tracking-wide">{a.name}</p>
                  <p className="eyebrow mt-1 text-primary">{a.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/40 py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">Weekly sessions</p>
            <h2 className="heading mt-3 text-3xl tracking-wide sm:text-4xl">
              Free. Every week. All paces.
            </h2>
            <ul className="mt-8 divide-y border-y">
              {EVENTS.map((e) => (
                <li key={e.title} className="flex items-center gap-5 py-5">
                  <span className="heading grid size-14 shrink-0 place-items-center bg-primary text-sm tracking-[0.12em] text-primary-foreground">
                    {e.day}
                  </span>
                  <div>
                    <p className="heading text-lg tracking-wide">{e.title}</p>
                    <p className="text-xs text-muted-foreground">{e.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="ink-panel flex flex-col justify-center bg-ink p-8 text-background sm:p-12">
            <p className="eyebrow text-primary">Join the crew</p>
            <h2 className="display mt-4 text-4xl leading-[0.9] sm:text-5xl">
              Get session times and drops first
            </h2>
            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.includes("@")) {
                  toast.error("Enter a valid email address");
                  return;
                }
                toast.success("You're on the list. See you at the next session.");
                setEmail("");
              }}
            >
              <div className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 border border-r-0 border-background/40 bg-transparent px-4 py-3.5 text-sm text-background outline-none placeholder:text-background/50 focus:border-primary"
                />
                <button
                  type="submit"
                  className="heading shrink-0 bg-primary px-6 py-3.5 text-xs tracking-[0.2em] text-primary-foreground"
                >
                  Join
                </button>
              </div>
            </form>
            <Link
              to="/contact"
              className="heading mt-6 text-xs tracking-[0.2em] text-background/70 hover:text-primary"
            >
              Or message us directly →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
