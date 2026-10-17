'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  Search,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import WishlistButton from '../components/WishlistButton';
import AddToCartButton from '../components/AddToCartButton';
import { productsData, Product } from '../data/products';
import QuickViewModal from '../components/QuickViewModal';

const PHONE_NUMBER = '9782978218';

// Sirf children ki dress: id 126 se 141 tak
const CHILD_ID_START = 126;
const CHILD_ID_END = 141;

const heroSlides = [
  {
    id: 1,
    image: '/banner/childdress.png',
    alt: 'Little girl in festive ethnic dress',
    badge: 'LITTLE PRINCESS EDIT',
    title: 'Festive Dresses For Little Stars',
    description:
      'Adorable ethnic sets with soft fabrics and delicate embroidery, made for festivals and family functions.',
    swatch: 'bg-[#E23B4E]',
    accentText: 'text-[#FF8A97]',
    btn: 'bg-[#E23B4E] text-white hover:bg-[#CC2F41]',
  },
  {
    id: 2,
    image: '/banner/childdressbanner.png',
    alt: 'Kids ethnic wear collection',
    badge: 'KIDS ETHNIC WEAR',
    title: 'Cute, Comfy & Colourful',
    description:
      'Bright prints and gentle fits that let your little one play, twirl and shine all day long.',
    swatch: 'bg-[#FFC21A]',
    accentText: 'text-[#FFD257]',
    btn: 'bg-[#FFC21A] text-[#352923] hover:bg-[#F0B400]',
  },
  {
    id: 3,
    image: '/banner/childdressbanner1.png',
    alt: 'Girls party and festive dresses',
    badge: 'NEW ARRIVALS',
    title: 'Made In Jaipur With Love',
    description:
      'Handpicked kids dresses crafted with care, perfect for birthdays, weddings and every celebration.',
    swatch: 'bg-[#4C8DFF]',
    accentText: 'text-[#7FB0FF]',
    btn: 'bg-[#4C8DFF] text-white hover:bg-[#3A78E6]',
  },
];

function ChildrenHero({ onExplore }: { onExplore: () => void }) {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;
  const slide = heroSlides[current];

  // Auto slide every 5 seconds (manual click par timer reset ho jata hai)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total, current]);

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#2a0b11] text-white shadow-2xl">
      {/* IMAGES */}
      <div className="grid">
        {heroSlides.map((s, index) => (
          <div
            key={s.id}
            aria-hidden={index !== current}
            className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={s.image}
              alt={s.alt}
              width={0}
              height={0}
              sizes="100vw"
              priority={index === 0}
              className="block h-[460px] w-full object-cover object-center sm:h-[520px] lg:h-auto lg:min-h-[440px]"
            />
          </div>
        ))}
      </div>

      {/* text readable banane ke liye shade */}
      <div className="pointer-events-none absolute inset-0 bg-black/40 lg:bg-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent lg:from-black/70 lg:via-black/25" />

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-[640px] px-6 pb-20 pt-10 sm:px-10 lg:px-14">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/30 bg-black/30 px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className={`h-3.5 w-3.5 ${slide.accentText}`} />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white">
                {slide.badge}
              </span>
            </div>

            <h1 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#FFFCF6] drop-shadow-md sm:text-4xl lg:text-5xl">
              {slide.title}
            </h1>

            <p className="max-w-md text-sm font-light leading-relaxed text-white/90 drop-shadow sm:text-[15px]">
              {slide.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onExplore}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all duration-500 hover:scale-105 ${slide.btn}`}
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
              href={`https://wa.me/91${PHONE_NUMBER}?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20kids%20dress%20collection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-black/50"
              >
                <MessageCircle className="h-4 w-4 text-[#20C967]" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DOTS + ARROWS */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 pb-5 sm:px-10 lg:px-14 lg:pb-7">
        <div className="flex items-center gap-2.5 rounded-full bg-black/30 px-3 py-2 backdrop-blur-md">
          {heroSlides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-500 ${s.swatch} ${
                index === current ? 'w-9 opacity-100' : 'w-3 opacity-60 hover:opacity-90'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/55"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/55"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function ChildrenPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sirf id 126 se 141 tak ke products
  const childrenProducts = productsData.filter((item) => {
    const idNum = Number(item.id);
    return idNum >= CHILD_ID_START && idNum <= CHILD_ID_END;
  });

  const productHref = (id: string | number) =>
    `/product?id=${encodeURIComponent(String(id))}`;

  const scrollToProducts = () =>
    document
      .getElementById('children-products')
      ?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="min-h-screen bg-[#F7F2EB] text-[#30211F]">
      {/* ================= TOP HERO BANNER ================= */}
      <section className="mx-auto w-full max-w-[1500px] px-4 pt-6 sm:px-6 lg:px-10">
        <ChildrenHero onExplore={scrollToProducts} />
      </section>

      {/* ================= CHILDREN PRODUCTS ================= */}
      <section
        id="children-products"
        className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10"
      >
        <div className="mb-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B99450]">
            Ankit Tewari Jaipur
          </span>
          <h2 className="mt-1 font-serif text-2xl font-bold text-[#541622] sm:text-3xl">
            Children&apos;s Dress Collection
          </h2>
          <p className="mt-2 text-xs text-[#89776C]">
            Showing{' '}
            <span className="font-bold text-[#4A302A]">{childrenProducts.length}</span>{' '}
            {childrenProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {childrenProducts.length === 0 ? (
          <div className="rounded-2xl border border-[#E8DED5] bg-white px-5 py-20 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7E9EC]">
              <ShoppingBag className="h-7 w-7 text-[#800A2D]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#35201D]">
              No Children Dresses Found
            </h3>
            <Link
              href="/collection"
              className="mt-6 inline-block rounded-lg bg-[#800A2D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#5F071F]"
            >
              View All Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {childrenProducts.map((item, index) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8DCD1] bg-white shadow-[0_5px_22px_rgba(53,19,30,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D3B8A1] hover:shadow-[0_18px_38px_rgba(53,19,30,0.13)]"
              >
                {/* IMAGE + WISHLIST */}
                <div className="relative">
                  <Link
                    href={productHref(item.id)}
                    aria-label={`View ${item.title}`}
                    className="relative block aspect-[3/4] w-full overflow-hidden bg-[#F0E9E2]"
                  >
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      unoptimized
                      referrerPolicy="no-referrer"
                      priority={index < 4}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />
                  </Link>

                  <WishlistButton product={item} />

                  {/* QUICK VIEW + ADD TO CART */}
                  <div className="absolute inset-x-3 bottom-3 z-10 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(item)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/80 bg-white/95 py-3 text-[10px] font-extrabold uppercase tracking-wide text-[#382622] shadow-lg transition-colors hover:bg-[#F5E9DB]"
                    >
                      <Search className="h-3.5 w-3.5" />
                      Quick View
                    </button>

                    <AddToCartButton product={item} />
                  </div>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div>
                    <span className="inline-flex rounded-md border border-[#F0DDE0] bg-[#FBF0F1] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#800A2D]">
                      Kids Dress
                    </span>

                    <Link
                      href={productHref(item.id)}
                      className="mt-2.5 block line-clamp-1 text-sm font-bold text-[#302321] transition-colors hover:text-[#800A2D] sm:text-[15px]"
                    >
                      {item.title}
                    </Link>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-2 pt-4">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-lg font-extrabold tracking-tight text-[#2D211F]">
                        ₹{item.price}
                      </span>

                      <span className="text-xs text-[#A69A91] line-through">
                        ₹{item.originalPrice}
                      </span>
                    </div>

                    <span className="shrink-0 rounded-md border border-[#D5E9D9] bg-[#EFF8F0] px-2 py-1 text-[10px] font-extrabold text-[#267442]">
                      {item.discount}
                    </span>
                  </div>

                  <div className="mt-4 border-t border-[#F0E7DF] pt-3">
                    <Link
                      href={productHref(item.id)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#800A2D]/25 bg-white py-2.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#800A2D] transition-all duration-200 hover:border-[#800A2D] hover:bg-[#800A2D] hover:text-white"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      View Product
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* QUICK VIEW MODAL */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        phoneNumber={PHONE_NUMBER}
      />
    </main>
  );
}