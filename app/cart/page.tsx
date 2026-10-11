'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
import { useShop, SIZES } from '../context/ShopContext';

const PHONE_NUMBER = '919782978218';

export default function CartPage() {
  const {
    hydrated, cart, cartCount, cartTotal, cartMRP,
    removeFromCart, updateQuantity, updateSize, clearCart,
  } = useShop();

  const savings = cartMRP - cartTotal;

  const orderMessage = () => {
    const lines = cart.map(
      (i, n) => `${n + 1}. ${i.title} (ID: ${i.id}) | Size: ${i.size} | Qty: ${i.quantity} | ₹${i.price * i.quantity}`
    );
    return encodeURIComponent(
      `Namaste! Mujhe ye order karna hai:\n\n${lines.join('\n')}\n\nTotal: ₹${cartTotal}`
    );
  };

  if (!hydrated) {
    return <main className="min-h-screen bg-[#F7F2EB]" />;
  }

  return (
    <main className="min-h-screen bg-[#F7F2EB] text-[#30211F]">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B99450]">
              Ankit Tewari Jaipur
            </span>
            <h1 className="mt-1 font-serif text-2xl font-bold text-[#541622] sm:text-3xl">
              Your Cart ({cartCount})
            </h1>
          </div>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs font-bold uppercase tracking-wider text-[#800A2D] underline underline-offset-2"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-[#E8DED5] bg-white px-5 py-20 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7E9EC]">
              <ShoppingBag className="h-7 w-7 text-[#800A2D]" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-[#35201D]">Your cart is empty</h2>
            <p className="mt-2 text-sm text-[#8A786D]">Abhi tak kuch add nahi kiya.</p>
            <Link
              href="/collection"
              className="mt-6 inline-block rounded-lg bg-[#800A2D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#5F071F]"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* ITEMS */}
            <div className="space-y-4 lg:col-span-8">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 rounded-2xl border border-[#E8DCD1] bg-white p-3 shadow-sm sm:p-4"
                >
                  <Link
                    href={`/product?id=${encodeURIComponent(item.id)}`}
                    className="relative block h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-[#F0E9E2] sm:h-36 sm:w-28"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      referrerPolicy="no-referrer"
                      className="object-cover object-top"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#800A2D]">
                          {item.category}
                        </span>
                        <Link
                          href={`/product?id=${encodeURIComponent(item.id)}`}
                          className="mt-1 block line-clamp-2 text-sm font-bold text-[#302321] hover:text-[#800A2D]"
                        >
                          {item.title}
                        </Link>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        aria-label="Remove item"
                        className="rounded-full p-2 text-[#8A786D] transition hover:bg-[#FBF0F1] hover:text-[#800A2D]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-[#8A786D]">Size:</span>
                      <select
                        value={item.size}
                        onChange={(e) => updateSize(item.id, item.size, e.target.value)}
                        className="rounded-md border border-[#E8DCD1] bg-white px-2 py-1 text-xs font-semibold"
                      >
                        {SIZES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-auto flex items-end justify-between pt-3">
                      <div className="flex items-center rounded-lg border border-[#E8DCD1]">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="p-2 hover:bg-[#F7F2EB]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="p-2 hover:bg-[#F7F2EB]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-extrabold text-[#2D211F]">
                          ₹{item.price * item.quantity}
                        </div>
                        <div className="text-xs text-[#A69A91] line-through">
                          ₹{item.originalPrice * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <aside className="h-fit rounded-2xl border border-[#E8DCD1] bg-white p-5 shadow-sm lg:sticky lg:top-6 lg:col-span-4">
              <h2 className="font-serif text-lg font-bold text-[#35201D]">Order Summary</h2>

              <div className="mt-4 space-y-2.5 text-sm">
                <div className="flex justify-between text-[#6B5A52]">
                  <span>MRP Total</span>
                  <span>₹{cartMRP}</span>
                </div>
                <div className="flex justify-between text-[#267442]">
                  <span>Discount</span>
                  <span>- ₹{savings}</span>
                </div>
                <div className="flex justify-between border-t border-[#F0E7DF] pt-3 text-base font-extrabold text-[#2D211F]">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${orderMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00A884] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-[#008f70]"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>

              <Link
                href="/collection"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#800A2D]/25 py-3 text-xs font-bold uppercase tracking-wider text-[#800A2D] transition hover:bg-[#800A2D] hover:text-white"
              >
                Continue Shopping <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}