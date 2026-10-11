'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { productsData } from '../data/products';

export default function WishlistPage() {
  const { hydrated, wishlist, removeFromWishlist, addToCart } = useShop();

  if (!hydrated) {
    return <main className="min-h-screen bg-[#F7F2EB]" />;
  }

  return (
    <main className="min-h-screen bg-[#F7F2EB] text-[#30211F]">
      <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B99450]">
            Ankit Tewari Jaipur
          </span>
          <h1 className="mt-1 font-serif text-2xl font-bold text-[#541622] sm:text-3xl">
            My Wishlist ({wishlist.length})
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="rounded-2xl border border-[#E8DED5] bg-white px-5 py-20 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7E9EC]">
              <Heart className="h-7 w-7 text-[#800A2D]" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-[#35201D]">Wishlist is empty</h2>
            <p className="mt-2 text-sm text-[#8A786D]">Jo pasand aaye usme ♥ dabao.</p>
            <Link
              href="/collection"
              className="mt-6 inline-block rounded-lg bg-[#800A2D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#5F071F]"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((item) => {
              const product = productsData.find((p) => String(p.id) === item.id);
              return (
                <article
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8DCD1] bg-white shadow-[0_5px_22px_rgba(53,19,30,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(53,19,30,0.13)]"
                >
                  <div className="relative">
                    <Link
                      href={`/product?id=${encodeURIComponent(item.id)}`}
                      className="relative block aspect-[3/4] w-full overflow-hidden bg-[#F0E9E2]"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        referrerPolicy="no-referrer"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.045]"
                      />
                    </Link>
                    <button
                      type="button"
                      aria-label="Remove from wishlist"
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/95 text-[#800A2D] shadow-md transition hover:scale-105 active:scale-95"
                    >
                      <X className="h-[18px] w-[18px]" />
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <span className="inline-flex w-fit rounded-md border border-[#F0DDE0] bg-[#FBF0F1] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#800A2D]">
                      {item.category}
                    </span>
                    <Link
                      href={`/product?id=${encodeURIComponent(item.id)}`}
                      className="mt-2.5 block line-clamp-1 text-sm font-bold text-[#302321] hover:text-[#800A2D] sm:text-[15px]"
                    >
                      {item.title}
                    </Link>

                    <div className="mt-auto flex items-end justify-between gap-2 pt-4">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-lg font-extrabold text-[#2D211F]">₹{item.price}</span>
                        <span className="text-xs text-[#A69A91] line-through">₹{item.originalPrice}</span>
                      </div>
                      <span className="shrink-0 rounded-md border border-[#D5E9D9] bg-[#EFF8F0] px-2 py-1 text-[10px] font-extrabold text-[#267442]">
                        {item.discount}
                      </span>
                    </div>

                    {product && (
                      <button
                        type="button"
                        onClick={() => {
                          addToCart(product);
                          removeFromWishlist(item.id);
                        }}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#800A2D] py-2.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#5F071F]"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Move to Cart
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}