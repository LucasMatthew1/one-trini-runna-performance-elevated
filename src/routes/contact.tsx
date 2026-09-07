import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — ONE TRINI RUNNA" },
      {
        name: "description",
        content:
          "Contact ONE TRINI RUNNA support for sizing help, shipping and returns questions, team orders or wholesale enquiries.",
      },
      { property: "og:title", content: "Contact & Support — ONE TRINI RUNNA" },
      {
        property: "og:description",
        content: "Sizing help, shipping and returns, team orders and wholesale enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

const FAQS = [
  {
    q: "How long does shipping take?",
    a: "Local orders arrive in 1–3 business days. Regional Caribbean delivery is 3–6 business days, and international express is 4–8 business days. Orders over $150 ship free.",
  },
  {
    q: "What is your returns policy?",
    a: "Unworn items in original packaging can be returned within 30 days for a full refund or exchange. Footwear can be tried indoors — outsole wear voids the return.",
  },
  {
    q: "How do I choose a size?",
    a: "Apparel runs athletic: take your usual size for a performance fit and size up for a relaxed feel. Footwear is true to size, and wide feet should consider a half size up on race models.",
  },
  {
    q: "Do you supply teams and clubs?",
    a: "Yes. We produce club kit from 12 units with custom numbering and printing on the Field Squad range. Email teams@onetrinirunna.com with your requirements.",
  },
  {
    q: "How should I wash technical fabric?",
    a: "Cold machine wash with like colours, no fabric softener, and hang dry. Softener clogs the wicking finish and shortens the life of the fabric.",
  },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "Order support", message: "" });

  return (
    <div className="pt-24 sm:pt-28">
      <section className="border-b bg-ink py-16 text-background sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <p className="eyebrow text-primary">We're here</p>
          <h1 className="display mt-4 text-[clamp(2.8rem,9vw,7rem)] leading-[0.85]">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl text-sm text-background/70">
            Real people, same-day replies on weekdays.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-primary">Send a message</p>
          <form
            className="mt-6 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message sent — we'll reply within one business day.");
              setForm({ name: "", email: "", topic: "Order support", message: "" });
            }}
          >
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full name"
              aria-label="Full name"
              className="border border-border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-primary"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email address"
              aria-label="Email address"
              className="border border-border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-primary"
            />
            <select
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
              aria-label="Topic"
              className="border border-border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-primary"
            >
              <option>Order support</option>
              <option>Sizing help</option>
              <option>Shipping &amp; returns</option>
              <option>Team &amp; club orders</option>
              <option>Wholesale</option>
            </select>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="How can we help?"
              aria-label="Message"
              className="border border-border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="heading bg-primary py-4 text-xs tracking-[0.24em] text-primary-foreground transition-colors hover:bg-foreground"
            >
              Send message
            </button>
          </form>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-primary">Support hours</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Mon–Fri, 8am–6pm AST
                <br />
                Sat, 9am–1pm AST
              </p>
            </div>
            <div>
              <p className="eyebrow text-primary">Email</p>
              <p className="mt-2 text-sm text-muted-foreground">
                support@onetrinirunna.com
                <br />
                teams@onetrinirunna.com
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow text-primary">Frequently asked</p>
          <h2 className="heading mt-3 text-3xl tracking-wide">Shipping, returns &amp; sizing</h2>
          <Accordion type="single" collapsible className="mt-6">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="heading text-left text-base tracking-wide">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
