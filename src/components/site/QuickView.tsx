import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { formatPrice, type Product } from "@/lib/products";
import { useShop } from "@/lib/shop-store";
import { cn } from "@/lib/utils";
import { Stars } from "./Stars";

export function QuickView({
  product,
  open,
  onOpenChange,
}: {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { addToCart } = useShop();
  const [size, setSize] = useState(product.sizes[0] ?? "One Size");
  const [color, setColor] = useState(product.colors[0]?.name ?? "Core Black");

  useEffect(() => {
    if (open) {
      setSize(product.sizes[0] ?? "One Size");
      setColor(product.colors[0]?.name ?? "Core Black");
    }
  }, [open, product]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl gap-0 rounded-none border-none p-0 sm:rounded-none">
        <div className="grid md:grid-cols-2">
          <div className="bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-8">
            <p className="eyebrow text-primary">{product.descriptor}</p>
            <DialogTitle className="heading mt-2 text-2xl sm:text-3xl">{product.name}</DialogTitle>
            <div className="mt-3 flex items-center gap-3">
              <span className="heading text-xl">{formatPrice(product.price)}</span>
              <Stars rating={product.rating} size={13} />
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-6">
              <p className="eyebrow text-muted-foreground">Colour</p>
              <div className="mt-2 flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setColor(c.name)}
                    aria-label={c.name}
                    className={cn(
                      "size-7 border-2 transition-transform",
                      color === c.name ? "border-primary scale-110" : "border-border",
                    )}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="eyebrow text-muted-foreground">Size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={cn(
                      "heading min-w-11 border px-3 py-2 text-xs tracking-widest transition-colors",
                      size === s
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  addToCart(product, size, color);
                  onOpenChange(false);
                }}
                className="heading bg-primary py-3.5 text-sm tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground"
              >
                Add to Bag
              </button>
              <Link
                to="/products/$slug"
                params={{ slug: product.slug }}
                onClick={() => onOpenChange(false)}
                className="heading border border-foreground py-3.5 text-center text-sm tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
              >
                Full Details
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
