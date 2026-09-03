import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { PRODUCTS, type Product } from "./products";

export type CartLine = {
  slug: string;
  size: string;
  color: string;
  qty: number;
};

type ShopState = {
  cart: CartLine[];
  wishlist: string[];
  recentlyViewed: string[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  addToCart: (product: Product, size?: string, color?: string, qty?: number) => void;
  updateQty: (index: number, qty: number) => void;
  removeLine: (index: number) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
  markViewed: (slug: string) => void;
  cartCount: number;
  subtotal: number;
};

const ShopContext = createContext<ShopState | null>(null);

const KEY = "otr-shop-v1";

type Persisted = Pick<ShopState, "cart" | "wishlist" | "recentlyViewed">;

function read(): Persisted {
  if (typeof window === "undefined")
    return { cart: [], wishlist: [], recentlyViewed: [] };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { cart: [], wishlist: [], recentlyViewed: [] };
    const parsed = JSON.parse(raw) as Partial<Persisted>;
    return {
      cart: parsed.cart ?? [],
      wishlist: parsed.wishlist ?? [],
      recentlyViewed: parsed.recentlyViewed ?? [],
    };
  } catch {
    return { cart: [], wishlist: [], recentlyViewed: [] };
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = read();
    setCart(stored.cart);
    setWishlist(stored.wishlist);
    setRecentlyViewed(stored.recentlyViewed);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(
      KEY,
      JSON.stringify({ cart, wishlist, recentlyViewed }),
    );
  }, [cart, wishlist, recentlyViewed, hydrated]);

  const addToCart = useCallback(
    (product: Product, size?: string, color?: string, qty = 1) => {
      const chosenSize = size ?? product.sizes[0];
      const chosenColor = color ?? product.colors[0].name;
      setCart((prev) => {
        const index = prev.findIndex(
          (l) =>
            l.slug === product.slug &&
            l.size === chosenSize &&
            l.color === chosenColor,
        );
        if (index >= 0) {
          const next = [...prev];
          next[index] = { ...next[index], qty: next[index].qty + qty };
          return next;
        }
        return [...prev, { slug: product.slug, size: chosenSize, color: chosenColor, qty }];
      });
      setCartOpen(true);
      toast.success(`${product.name} added to bag`, {
        description: `${chosenColor} · Size ${chosenSize}`,
      });
    },
    [],
  );

  const updateQty = useCallback((index: number, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((_, i) => i !== index)
        : prev.map((l, i) => (i === index ? { ...l, qty } : l)),
    );
  }, []);

  const removeLine = useCallback((index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) => {
      const has = prev.includes(slug);
      toast(has ? "Removed from wishlist" : "Saved to wishlist");
      return has ? prev.filter((s) => s !== slug) : [...prev, slug];
    });
  }, []);

  const markViewed = useCallback((slug: string) => {
    setRecentlyViewed((prev) => [slug, ...prev.filter((s) => s !== slug)].slice(0, 6));
  }, []);

  const { cartCount, subtotal } = useMemo(() => {
    let count = 0;
    let total = 0;
    for (const line of cart) {
      const product = PRODUCTS.find((p) => p.slug === line.slug);
      if (!product) continue;
      count += line.qty;
      total += product.price * line.qty;
    }
    return { cartCount: count, subtotal: total };
  }, [cart]);

  const value: ShopState = {
    cart,
    wishlist,
    recentlyViewed,
    cartOpen,
    setCartOpen,
    searchOpen,
    setSearchOpen,
    addToCart,
    updateQty,
    removeLine,
    clearCart,
    toggleWishlist,
    markViewed,
    cartCount,
    subtotal,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}
