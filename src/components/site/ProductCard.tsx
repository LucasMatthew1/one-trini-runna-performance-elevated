import { Link } from "@tanstack/react-router";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { useShop } from "@/lib/shop-store";
import { cn } from "@/lib/utils";
import { QuickView } from "./QuickView";
import { Stars } from "./Stars";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { addToCart, wishlist, toggleWishlist } = useShop();
  const [quickOpen, setQuickOpen] = useState(false);
  const saved = wishlist.includes(product.slug);

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative overflow-hidden bg-muted">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="block aspect-square"
          aria-label={product.name}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={900}
            height={900}
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            src={product.hoverImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
        </Link>

        {product.badge && (
          <span className="heading absolute left-0 top-0 bg-primary px-3 py-1.5 text-[0.65rem] tracking-[0.2em] text-primary-foreground">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 grid size-9 place-items-center bg-background/85 backdrop-blur transition-colors hover:bg-background"
        >
          <Heart
            className={cn("size-4", saved ? "fill-primary text-primary" : "text-foreground")}
            strokeWidth={1.6}
          />
        </button>

        <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => setQuickOpen(true)}
            className="heading w-full bg-foreground/92 py-3 text-xs tracking-[0.24em] text-background backdrop-blur transition-colors hover:bg-foreground"
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-start justify-between gap-3 pt-4">
        <div className="min-w-0">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="heading block truncate text-base tracking-wide hover:text-primary"
          >
            {product.name}
          </Link>
          <p className="mt-1 truncate text-xs text-muted-foreground">{product.descriptor}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="heading text-sm">{formatPrice(product.price)}</span>
            {product.compareAt && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.compareAt)}
              </span>
            )}
          </div>
          <Stars rating={product.rating} className="mt-2" size={12} />
        </div>
        <button
          type="button"
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to bag`}
          className="mt-1 grid size-9 shrink-0 place-items-center bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
        >
          <Plus className="size-4" strokeWidth={2.5} />
        </button>
      </div>

      <QuickView product={product} open={quickOpen} onOpenChange={setQuickOpen} />
    </article>
  );
}
