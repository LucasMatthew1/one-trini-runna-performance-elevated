import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo-badge.png.asset.json";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "T-Shirts", to: "/shop" },
      { label: "Running Accessories", to: "/shop" },
      { label: "New Arrivals", to: "/shop" },
      { label: "Best Sellers", to: "/shop" },
      { label: "All Collections", to: "/collections" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Our Mission", to: "/about" },
      { label: "Premium Brand", to: "/about" },
      { label: "Community", to: "/community" },
      { label: "Life Style / Blog", to: "/community" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", to: "/contact" },
      { label: "Shipping & Returns", to: "/contact" },
      { label: "Size Guide", to: "/contact" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

const SOCIAL = ["Instagram", "TikTok", "X", "Facebook", "LinkedIn"];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src={logo.url} alt="ONE TRINI RUNNA" className="size-16" />
              <div>
                <p className="heading text-xl tracking-[0.12em]">One Trini Runna</p>
                <p className="eyebrow mt-1 text-muted-foreground">
                  Performance running wear for an active life
                </p>
              </div>
            </div>

            <form
              className="mt-10 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.includes("@")) {
                  toast.error("Enter a valid email address");
                  return;
                }
                toast.success("You're in. Watch your inbox for the next drop.");
                setEmail("");
              }}
            >
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for exclusive drops, performance tips, and special
                offers.
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 border border-r-0 border-foreground bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                />
                <button
                  type="submit"
                  className="heading shrink-0 bg-primary px-6 py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-primary">{col.title}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="eyebrow text-primary">Social Media</p>
              <ul className="mt-5 flex flex-col gap-3">
                {SOCIAL.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t">
        <p
          className="display w-full whitespace-nowrap px-2 pt-6 text-center leading-[0.8] text-foreground"
          style={{ fontSize: "clamp(2.6rem, 12.2vw, 15rem)" }}
        >
          One Trini Runna
        </p>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} ONE TRINI RUNNA. All rights reserved.</p>
          <p>One step. One mile. One Trini.</p>
        </div>
      </div>
    </footer>
  );
}
