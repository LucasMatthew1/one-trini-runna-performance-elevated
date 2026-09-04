import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { PRODUCTS, formatPrice } from "@/lib/products";
import { useShop } from "@/lib/shop-store";

export function CartSheet() {
  const { cart, cartOpen, setCartOpen, updateQty, removeLine, subtotal } = useShop();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex w-full flex-col gap-0 border-l-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="heading text-xl tracking-[0.15em]">
            Your Bag ({cart.length})
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="heading text-lg">Your bag is empty</p>
            <p className="text-sm text-muted-foreground">
              Gear up and get after it. Every stride starts somewhere.
            </p>
            <Link
              to="/shop"
              onClick={() => setCartOpen(false)}
              className="heading bg-primary px-8 py-3.5 text-sm tracking-[0.2em] text-primary-foreground"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6">
              <ul className="flex flex-col gap-6">
                {cart.map((line, index) => {
                  const product = PRODUCTS.find((p) => p.slug === line.slug);
                  if (!product) return null;
                  return (
                    <li key={`${line.slug}-${line.size}-${line.color}`} className="flex gap-4">
                      <Link
                        to="/products/$slug"
                        params={{ slug: product.slug }}
                        onClick={() => setCartOpen(false)}
                        className="size-24 shrink-0 bg-muted"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="size-full object-cover"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <p className="heading truncate text-sm">{product.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {line.color} · Size {line.size}
                        </p>
                        <p className="heading mt-1 text-sm">{formatPrice(product.price)}</p>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="flex items-center border">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => updateQty(index, line.qty - 1)}
                              className="grid size-8 place-items-center hover:bg-muted"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="heading w-8 text-center text-sm">{line.qty}</span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => updateQty(index, line.qty + 1)}
                              className="grid size-8 place-items-center hover:bg-muted"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeLine(index)}
                            aria-label="Remove item"
                            className="text-muted-foreground transition-colors hover:text-primary"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t p-6">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-muted-foreground">Subtotal</span>
                <span className="heading text-xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Free express shipping on orders over $150.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Link
                  to="/checkout"
                  onClick={() => setCartOpen(false)}
                  className="heading bg-primary py-4 text-center text-sm tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground"
                >
                  Checkout
                </Link>
                <Link
                  to="/cart"
                  onClick={() => setCartOpen(false)}
                  className="heading border border-foreground py-4 text-center text-sm tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
                >
                  View Bag
                </Link>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
