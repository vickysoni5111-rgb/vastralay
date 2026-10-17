'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from 'react';
import type { Product } from '../data/products';

export const SIZES = ['30/XS', '32/S', '34/M', '36/L', '38/XL'];
export const DEFAULT_SIZE = '34/M';

export type ShopItem = {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
  category: string;
};

export type CartItem = ShopItem & { size: string; quantity: number };

type ShopContextType = {
  hydrated: boolean;
  wishlist: ShopItem[];
  cart: CartItem[];
  wishlistCount: number;
  cartCount: number;
  cartTotal: number;
  cartMRP: number;
  isInWishlist: (id: string | number) => boolean;
  isInCart: (id: string | number) => boolean;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (id: string | number) => void;
  addToCart: (product: Product, size?: string, qty?: number) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, delta: number) => void;
  updateSize: (id: string, oldSize: string, newSize: string) => void;
  clearCart: () => void;
};

const ShopContext = createContext<ShopContextType | null>(null);

const WISHLIST_KEY = 'at_wishlist';
const CART_KEY = 'at_cart';

const toItem = (p: Product): ShopItem => ({
  id: String(p.id),
  title: p.title,
  price: Number(p.price),
  originalPrice: Number(p.originalPrice),
  discount: String(p.discount ?? ''),
  image: p.images?.[0] ?? '',
  category: String(p.category ?? ''),
});

export function ShopProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<ShopItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // load from localStorage (sirf browser me)
  useEffect(() => {
    try {
      const w = localStorage.getItem(WISHLIST_KEY);
      const c = localStorage.getItem(CART_KEY);
      if (w) setWishlist(JSON.parse(w));
      if (c) setCart(JSON.parse(c));
    } catch {}
    setHydrated(true);
  }, []);

  // save to localStorage
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
  }, [wishlist, cart, hydrated]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2000);
  }, []);

  const isInWishlist = useCallback(
    (id: string | number) => wishlist.some((i) => i.id === String(id)),
    [wishlist]
  );
  const isInCart = useCallback(
    (id: string | number) => cart.some((i) => i.id === String(id)),
    [cart]
  );

  const toggleWishlist = useCallback(
    (product: Product) => {
      const id = String(product.id);
      if (wishlist.some((i) => i.id === id)) {
        setWishlist((prev) => prev.filter((i) => i.id !== id));
        showToast('Wishlist se hata diya');
      } else {
        setWishlist((prev) => [...prev, toItem(product)]);
        showToast('Your Product is Add in Wishlist ♥');
      }
    },
    [wishlist, showToast]
  );

  const removeFromWishlist = useCallback((id: string | number) => {
    setWishlist((prev) => prev.filter((i) => i.id !== String(id)));
  }, []);

  const addToCart = useCallback(
    (product: Product, size: string = DEFAULT_SIZE, qty: number = 1) => {
      const item = toItem(product);
      setCart((prev) => {
        const exists = prev.find((i) => i.id === item.id && i.size === size);
        if (exists) {
          return prev.map((i) =>
            i.id === item.id && i.size === size
              ? { ...i, quantity: i.quantity + qty }
              : i
          );
        }
        return [...prev, { ...item, size, quantity: qty }];
      });
      showToast('Your Product is Add in Cart');
    },
    [showToast]
  );

  const removeFromCart = useCallback((id: string, size: string) => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  }, []);

  const updateQuantity = useCallback((id: string, size: string, delta: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id && i.size === size
          ? { ...i, quantity: Math.min(10, Math.max(1, i.quantity + delta)) }
          : i
      )
    );
  }, []);

  const updateSize = useCallback((id: string, oldSize: string, newSize: string) => {
    setCart((prev) => {
      if (oldSize === newSize) return prev;
      const current = prev.find((i) => i.id === id && i.size === oldSize);
      if (!current) return prev;
      const target = prev.find((i) => i.id === id && i.size === newSize);
      const rest = prev.filter((i) => !(i.id === id && i.size === oldSize));
      if (target) {
        return rest.map((i) =>
          i.id === id && i.size === newSize
            ? { ...i, quantity: Math.min(10, i.quantity + current.quantity) }
            : i
        );
      }
      return prev.map((i) =>
        i.id === id && i.size === oldSize ? { ...i, size: newSize } : i
      );
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const value = useMemo<ShopContextType>(
    () => ({
      hydrated,
      wishlist,
      cart,
      wishlistCount: wishlist.length,
      cartCount: cart.reduce((s, i) => s + i.quantity, 0),
      cartTotal: cart.reduce((s, i) => s + i.price * i.quantity, 0),
      cartMRP: cart.reduce((s, i) => s + i.originalPrice * i.quantity, 0),
      isInWishlist,
      isInCart,
      toggleWishlist,
      removeFromWishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateSize,
      clearCart,
    }),
    [
      hydrated, wishlist, cart, isInWishlist, isInCart, toggleWishlist,
      removeFromWishlist, addToCart, removeFromCart, updateQuantity,
      updateSize, clearCart,
    ]
  );

  return (
    <ShopContext.Provider value={value}>
      {children}
   {toast && (
  <div className="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#16A34A] px-5 py-3 text-xs font-bold text-white shadow-xl ring-2 ring-white/30">
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] text-[#16A34A]">
      ✓
    </span>
    {toast}
  </div>
)}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used inside <ShopProvider>');
  return ctx;
}