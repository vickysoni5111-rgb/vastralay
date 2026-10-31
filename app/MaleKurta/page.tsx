'use client';

import { useState, useEffect, Fragment } from 'react';
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

// Male kurta products ki id range (700 se 736 tak)
const MALE_ID_START = 700;
const MALE_ID_END = 736;

// Itni rows ke baad purana hero banner product grid ke beech me aayega
const HERO_AFTER_ROWS = 3;

const isMaleKurta = (item: Product) => {
  const id = Number(item.id);
  return id >= MALE_ID_START && id <= MALE_ID_END;
};

const productHref = (id: string | number) =>
  `/product?id=${encodeURIComponent(String(id))}`;

// Top banner images (public/banner folder me hain)
const BANNERS = [
  {
    src: '/banner/malekurtaherobanner1.png',
    alt: 'Male kurta collection by Ankit Tewari Jaipur',
  },
  {
    src: '/banner/malekurtaherobanner2.png',
    alt: 'Festive and wedding kurtas for men',
  },
];

/* ============================================================
   Grid me ek row me kitne products hain (Tailwind breakpoints ke hisaab se)
   ============================================================ */
function useGridColumns() {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCols(w >= 1280 ? 4 : w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return cols;
}

/* ============================================================
   NEW TOP HERO BANNER (public/banner ki 2 images, auto slide)
   ============================================================ */
function BannerHero() {
  const total = BANNERS.length;
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds (manual click par timer reset ho jata hai)
  useEffect(() => {
    if (total < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total, current]);

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#2a0b11] shadow-[0_22px_55px_rgba(53,19,30,0.28)] ring-1 ring-[#D8C092]/50 sm:rounded-3xl">
      {/* Saari images ek hi cell me stack hoti hain, isliye height image ke hisaab se apne aap set hoti hai */}
      <div className="grid">
        {BANNERS.map((banner, index) => {
          const active = index === current;
          return (
            <div
              key={banner.src}
              aria-hidden={!active}
              className={`col-start-1 row-start-1 overflow-hidden transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                active ? 'z-10 opacity-100' : 'z-0 opacity-0'
              }`}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                width={1920}
                height={800}
                priority={index === 0}
                sizes="100vw"
                className={`h-auto w-full transition-transform duration-[7000ms] ease-out motion-reduce:transition-none motion-reduce:scale-100 ${
                  active ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Neeche halka shade taaki dots saaf dikhe */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black/45 to-transparent" />

      {/* Gold inner frame */}
      <div className="pointer-events-none absolute inset-2 z-20 rounded-xl border border-[#E9CF8E]/40 sm:inset-3 sm:rounded-2xl" />

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous banner"
            className="absolute left-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#541622] shadow-lg backdrop-blur transition hover:bg-white sm:left-5 sm:h-11 sm:w-11 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next banner"
            className="absolute right-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#541622] shadow-lg backdrop-blur transition hover:bg-white sm:right-5 sm:h-11 sm:w-11 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
            {BANNERS.map((banner, index) => (
              <button
                key={banner.src}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to banner ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === current
                    ? 'w-8 bg-[#EFA00F]'
                    : 'w-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ============================================================
   KURTA SLIDING STRIP (sirf male kurta, apne aap slide hota hai)
   ============================================================ */
function KurtaSlider({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  // Jitne zyada products, utna dheere (smooth) chalega
  const duration = `${Math.max(30, products.length * 3.5)}s`;

  const renderGroup = (hidden: boolean) => (
    <div className="flex shrink-0 items-start" aria-hidden={hidden}>
      {products.map((item) => (
        <Link
          key={`${hidden ? 'dup' : 'main'}-${item.id}`}
          href={productHref(item.id)}
          tabIndex={hidden ? -1 : undefined}
          className="group flex w-[148px] shrink-0 flex-col items-center px-2 text-center sm:w-[188px]"
        >
          <div className="relative h-[104px] w-[104px] rounded-full border-2 border-dashed border-[#CDB88C] bg-white p-[5px] shadow-[0_8px_22px_rgba(12,74,110,0.12)] transition-transform duration-300 group-hover:scale-105 sm:h-[128px] sm:w-[128px]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#F0E9E2]">
              <Image
                src={item.images[0]}
                alt=""
                fill
                unoptimized
                referrerPolicy="no-referrer"
                sizes="128px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <span className="mt-3 line-clamp-1 w-full text-[13px] font-semibold text-[#1F2937] sm:text-sm">
            {item.title}
          </span>
          <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#0C4A6E] transition-colors group-hover:text-[#541622]">
            Shop now
            <ArrowRight className="h-3 w-3" />
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Shop male kurta"
      className="mt-8 border-y border-[#BAE6FD]/70 bg-gradient-to-b from-[#EEF8FF] via-[#F6FBFF] to-white py-8 sm:mt-10 sm:py-10"
    >
      <style>{`
        @keyframes kurtaMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .kurta-marquee-track {
          display: flex;
          width: max-content;
          animation: kurtaMarquee ${duration} linear infinite;
        }
        .kurta-marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .kurta-marquee-track { animation: none; }
        }
      `}</style>

      <div className="mb-7 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#B99450] sm:text-[11px]">
          Vastralay Ankit Tewari Jaipur
        </span>
        <h2 className="mt-1.5 font-serif text-2xl font-bold text-[#541622] sm:text-3xl">
          Shop Male Kurta
        </h2>
      </div>

      {/* Reduced-motion users scroll kar sakte hain, baaki ke liye auto slide */}
      <div className="overflow-x-auto motion-safe:overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="kurta-marquee-track">
          {renderGroup(false)}
          {renderGroup(true)}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HERO BANNER (male kurta ki apni product images se auto slide)
   Ye ab product grid me 3 rows ke baad dikhta hai
   ============================================================ */
function MaleHero({
  products,
  onExplore,
}: {
  products: Product[];
  onExplore: () => void;
}) {
  const slides = products.slice(0, 4);
  const total = slides.length;
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds (manual click par timer reset ho jata hai)
  useEffect(() => {
    if (total < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total, current]);

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative grid min-h-[440px] grid-cols-1 overflow-hidden rounded-3xl bg-gradient-to-br from-[#380e16] via-[#541622] to-[#2a0b11] text-white shadow-2xl lg:min-h-[500px] lg:grid-cols-12">
      {/* LEFT CONTENT */}
      <div className="z-10 flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 lg:p-12">
        <div className="space-y-5">
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#D8C092]/40 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#EFA00F]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#F3E9D8]">
              Men&apos;s Ethnic Wear
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#FFFCF6] sm:text-4xl lg:text-5xl">
            Male Kurta Collection
          </h1>

          <p className="max-w-md text-xs font-light leading-relaxed text-[#F3E9D8] sm:text-sm">
            Classic kurtas for weddings, festivals and everyday wear, stitched in
            comfortable fabrics with a refined Jaipuri finish.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onExplore}
              className="flex items-center gap-2 rounded-full bg-[#EFA00F] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#352923] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#df930c]"
            >
              <span>Shop Male Kurta</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={`https://wa.me/91${PHONE_NUMBER}?text=Hello!%20I%20would%20like%20to%20inquire%20about%20the%20male%20kurta%20collection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#D8C092]/40 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4 text-[#20C967]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

        {total > 1 && (
          <div className="mt-8 flex items-center justify-between border-t border-[#D8C092]/20 pt-6">
            <div className="flex items-center gap-2">
              {slides.map((s, index) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === current ? 'w-7 bg-[#EFA00F]' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="rounded-full border border-[#D8C092]/40 bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="rounded-full border border-[#D8C092]/40 bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-[340px] w-full overflow-hidden bg-[#2a0b11] sm:h-[440px] lg:col-span-7 lg:h-full">
        {slides.map((s, index) => (
          <div
            key={s.id}
            aria-hidden={index !== current}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
          >
            <Image
              src={s.images[0]}
              alt=""
              fill
              unoptimized
              referrerPolicy="no-referrer"
              sizes="60vw"
              className="scale-110 object-cover object-center opacity-40 blur-2xl"
            />
            <Image
              src={s.images[0]}
              alt={s.title}
              fill
              unoptimized
              referrerPolicy="no-referrer"
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain object-center"
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-3 z-20 rounded-2xl border border-[#D8C092]/30" />
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function MaleKurtaPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const cols = useGridColumns();

  const maleProducts = productsData.filter(isMaleKurta);

  // Purana hero 3 rows ke baad (screen ke columns ke hisaab se position)
  const heroIndex = cols * HERO_AFTER_ROWS;
  const heroInsideGrid = maleProducts.length > heroIndex;

  const scrollToProducts = () =>
    document
      .getElementById('male-kurta-products')
      ?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="min-h-screen bg-[#F7F2EB] text-[#30211F]">
      {/* ================= NEW TOP HERO BANNER ================= */}
      <section className="mx-auto w-full max-w-[1500px] px-4 pt-6 sm:px-6 lg:px-10">
        <BannerHero />
      </section>

      {/* ================= KURTA SLIDING STRIP ================= */}
      <KurtaSlider products={maleProducts} />

      {/* ================= MALE KURTA PRODUCTS ================= */}
      <section
        id="male-kurta-products"
        className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10"
      >
        <div className="mb-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B99450]">
            Ankit Tewari Jaipur
          </span>
          <h2 className="mt-1 font-serif text-2xl font-bold text-[#541622] sm:text-3xl">
            Men&apos;s Kurta Collection
          </h2>
       
        </div>

        {maleProducts.length === 0 ? (
          <div className="rounded-2xl border border-[#E8DED5] bg-white px-5 py-20 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7E9EC]">
              <ShoppingBag className="h-7 w-7 text-[#800A2D]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#35201D]">
              No Male Kurta Found
            </h3>
            <Link
              href="/collection"
              className="mt-6 inline-block rounded-lg bg-[#800A2D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#5F071F]"
            >
              View All Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {maleProducts.map((item, index) => (
                <Fragment key={item.id}>
                  {/* 3 rows ke baad full-width hero banner */}
                  {heroInsideGrid && index === heroIndex && (
                    <div className="col-span-full py-3 sm:py-4">
                      <MaleHero
                        products={maleProducts}
                        onExplore={scrollToProducts}
                      />
                    </div>
                  )}

                  <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8DCD1] bg-white shadow-[0_5px_22px_rgba(53,19,30,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D3B8A1] hover:shadow-[0_18px_38px_rgba(53,19,30,0.13)]">
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
                          Male Kurta
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
                </Fragment>
              ))}
            </div>

            {/* Agar products 3 rows se kam hain to hero grid ke neeche dikhega */}
            {!heroInsideGrid && (
              <div className="mt-8">
                <MaleHero products={maleProducts} onExplore={scrollToProducts} />
              </div>
            )}
          </>
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