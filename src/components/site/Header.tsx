import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-wordmark.png.asset.json";
import { PRODUCTS, formatPrice } from "@/lib/products";
import { useShop } from "@/lib/shop-store";
import { cn } from "@/lib/utils";
import { CartSheet } from "./CartSheet";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const NAV = [
  { label: "Shop", to: "/shop" as const },
  { label: "Collections", to: "/collections" as const },
  { label: "About", to: "/about" as const },
  { label: "Community", to: "/community" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const { cartCount, setCartOpen, searchOpen, setSearchOpen, wishlist } = useShop();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-hairline transition-all duration-300",
          compact
            ? "bg-ink/95 py-2 backdrop-blur-md"
            : "bg-ink/70 py-4 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 sm:px-8">
          <Link to="/" className="flex shrink-0 items-center" aria-label="ONE TRINI RUNNA home">
            <img
              src={logo.url}
              alt="ONE TRINI RUNNA"
              className={cn(
                "w-auto brightness-0 invert transition-all duration-300",
                compact ? "h-8" : "h-11",
              )}
            />
          </Link>

          <nav className="ml-8 hidden flex-1 items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="heading text-xs tracking-[0.22em] text-ink-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="grid size-10 place-items-center text-ink-foreground transition-colors hover:text-primary"
            >
              <Search className="size-5" strokeWidth={1.6} />
            </button>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative grid size-10 place-items-center text-ink-foreground transition-colors hover:text-primary"
            >
              <Heart className="size-5" strokeWidth={1.6} />
              {wishlist.length > 0 && (
                <span className="absolute right-1 top-1 size-2 rounded-full bg-primary" />
              )}
            </Link>
            <Link
              to="/account"
              aria-label="Account"
              className="hidden size-10 place-items-center text-ink-foreground transition-colors hover:text-primary sm:grid"
            >
              <User className="size-5" strokeWidth={1.6} />
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Open shopping bag"
              className="relative grid size-10 place-items-center text-ink-foreground transition-colors hover:text-primary"
            >
              <ShoppingBag className="size-5" strokeWidth={1.6} />
              {cartCount > 0 && (
                <span className="heading absolute -right-0.5 -top-0.5 grid size-5 place-items-center bg-primary text-[0.6rem] text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid size-10 place-items-center text-ink-foreground lg:hidden"
            >
              <Menu className="size-6" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] ink-panel transition-all duration-300 lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-4 py-5">
          <img src={logo.url} alt="ONE TRINI RUNNA" className="h-10 w-auto brightness-0 invert" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center text-ink-foreground"
          >
            <X className="size-6" />
          </button>
        </div>
        <nav className="flex flex-col px-4 pt-6">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="display border-b border-hairline py-5 text-4xl text-ink-foreground transition-colors hover:text-primary"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 pt-8">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
            className="heading w-full bg-primary py-4 text-sm tracking-[0.2em] text-primary-foreground"
          >
            Search the store
          </button>
        </div>
      </div>

      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search shoes, apparel, gear..." />
        <CommandList>
          <CommandEmpty>No products found.</CommandEmpty>
          <CommandGroup heading="Products">
            {PRODUCTS.map((product) => (
              <CommandItem
                key={product.slug}
                value={`${product.name} ${product.descriptor} ${product.category}`}
                asChild
              >
                <Link
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-3"
                >
                  <img src={product.image} alt="" className="size-10 object-cover" />
                  <span className="flex-1">
                    <span className="heading block text-sm">{product.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {product.descriptor}
                    </span>
                  </span>
                  <span className="heading text-sm">{formatPrice(product.price)}</span>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <CartSheet />
    </>
  );
}
