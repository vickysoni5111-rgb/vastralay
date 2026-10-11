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
import KurtiVideosPage from '../kurti-videos/page';
import Kurtibanner from '../Kurtibanner/page';

const PHONE_NUMBER = '9782978218';

const heroSlides = [
  {
    id: 1,
    image: '/banner/kurtibannerblue.png',
    colorName: 'Blue',
    badge: 'ROYAL BLUE EDIT',
    title: 'Royal Blue Elegance',
    description:
      'Graceful blue kurtis with refined detailing, perfect for festive evenings and everyday elegance.',
    swatch: 'bg-[#4C8DFF]',
    accentText: 'text-[#7FB0FF]',
    btn: 'bg-[#4C8DFF] text-white hover:bg-[#3A78E6]',
  },
  {
    id: 2,
    image: '/banner/kurtibannerred.png',
    colorName: 'Red',
    badge: 'FESTIVE RED EDIT',
    title: 'Timeless Red Radiance',
    description:
      'Rich red hues and intricate embroidery, crafted for weddings, festivals and every celebration.',
    swatch: 'bg-[#E23B4E]',
    accentText: 'text-[#FF8A97]',
    btn: 'bg-[#E23B4E] text-white hover:bg-[#CC2F41]',
  },
  {
    id: 3,
    image: '/banner/kurtibanneryellow.png',
    colorName: 'Yellow',
    badge: 'SUNSHINE EDIT',
    title: 'Golden Yellow Charm',
    description:
      'Bright and cheerful yellow kurtis, made for haldi functions, sunny days and joyful moments.',
    swatch: 'bg-[#FFC21A]',
    accentText: 'text-[#FFD257]',
    btn: 'bg-[#FFC21A] text-[#352923] hover:bg-[#F0B400]',
  },
];

function KurtiHero({ onExplore }: { onExplore: () => void }) {
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
      {/* IMAGES - full width & full height */}
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
              alt={`${s.colorName} kurti collection - ${s.title}`}
              width={0}
              height={0}
              sizes="100vw"
              priority={index === 0}
              className="block h-[460px] w-full object-cover object-center sm:h-[520px] lg:h-auto lg:min-h-[440px]"
            />
          </div>
        ))}
      </div>

      {/* text padhne layak banane ke liye halka shade (sirf left side) */}
      <div className="pointer-events-none absolute inset-0 bg-black/40 lg:bg-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent lg:from-black/70 lg:via-black/25" />

      {/* CONTENT - image ke upar */}
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
              {/* Explore button - slide ke saath color badalta hai */}
              <button
                type="button"
                onClick={onExplore}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all duration-500 hover:scale-105 ${slide.btn}`}
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={`https://wa.me/91${PHONE_NUMBER}?text=Namaste!%20Mujhe%20kurti%20collection%20ke%20bare%20me%20inquiry%20karni%20hai.`}
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

      {/* COLOUR DOTS + ARROWS */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 pb-5 sm:px-10 lg:px-14 lg:pb-7">
        <div className="flex items-center gap-2.5 rounded-full bg-black/30 px-3 py-2 backdrop-blur-md">
          {heroSlides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show ${s.colorName} kurti banner`}
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
   2) SHOP BY STYLE  (circle images, apne aap slide hoti rehti hain)
   ============================================================ */
const styleCategories = [
  { name: 'Anarkali Kurtis', image: '/banner/anarkalikurti.png' },
  { name: 'A-Line Kurtis', image: '/banner/alinekurti.png' },
  { name: 'Classic Kurtis', image: '/banner/classickurti.png' },
  { name: 'Printed Kurtis', image: '/banner/printnedkurti.png' },
  { name: 'Party Wear Kurtis', image: '/banner/partywearkurti.png' },
  { name: 'Suit Set Kurtis', image: '/banner/suitsetkurti.png' },
  { name: 'Festive Kurtis', image: '/banner/festkurti.png' },
  { name: 'Function Wear Kurtis', image: '/banner/functionbasedkurti.png' },
];

function KurtiStyleSlider({ onShop }: { onShop: () => void }) {
  // list 2 baar, taaki sliding bina ruke chalti rahe
  const loopItems = [...styleCategories, ...styleCategories];

  return (
    <section className="mt-10 border-y border-[#F8D3DC] bg-gradient-to-b from-[#FFF1F4] via-[#FFF8FA] to-[#FFEBF0] py-12 sm:py-14">
      <style>{`
        @keyframes kurtiStyleMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .kurti-style-track { animation: kurtiStyleMarquee 45s linear infinite; }
        .kurti-style-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="mb-9 px-4 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E11D48]">
          Explore By Style
        </span>
        <h2 className="mt-1 font-serif text-2xl font-bold text-[#3A1822] sm:text-3xl">
          Shop Kurtis By Style
        </h2>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="kurti-style-track flex w-max">
          {loopItems.map((cat, index) => {
            const isCopy = index >= styleCategories.length;

            return (
              <button
                key={`${cat.name}-${index}`}
                type="button"
                onClick={onShop}
                aria-hidden={isCopy}
                tabIndex={isCopy ? -1 : 0}
                className="group flex w-[180px] shrink-0 flex-col items-center px-4 sm:w-[230px] lg:w-[260px]"
              >
                <span className="relative block h-[140px] w-[140px] overflow-hidden rounded-full border-[3px] border-[#F9C6D2] bg-white shadow-[0_10px_30px_rgba(225,29,72,0.15)] transition-transform duration-500 group-hover:scale-105 sm:h-[190px] sm:w-[190px] lg:h-[220px] lg:w-[220px]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </span>

                <span className="mt-5 text-base font-medium text-[#2B2024] sm:text-lg">
                  {cat.name}
                </span>

                <span className="mt-1 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-[#E11D48] transition-all group-hover:gap-2">
                  Shop Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3) MIDDLE BANNER  (kurti ki 3 line ke baad aata hai)
   ============================================================ */
const midSlides = [
  {
    id: 1,
    image: '/banner/kurtiherobanner.png',
    badge: 'NEW ARRIVALS',
    title: 'Royal Ethnic Kurti Collection',
    description:
      'Handcrafted kurtis with delicate embroidery, premium fabrics and timeless Jaipuri charm for every occasion.',
  },
  {
    id: 2,
    image: '/banner/kurtiherobanner1.png',
    badge: 'FESTIVE EDIT',
    title: 'Festive & Wedding Kurti Sets',
    description:
      'Rich colours and elegant detailing, designed to make every celebration and family function memorable.',
  },
  {
    id: 3,
    image: '/banner/kurtiherobanner2.png',
    badge: 'EVERYDAY ELEGANCE',
    title: 'Comfort Meets Graceful Style',
    description:
      'Soft, breathable fabrics and easy fits that keep you stylish from morning to evening.',
  },
  {
    id: 4,
    image: '/banner/kurtiherobanner3.png',
    badge: 'SIGNATURE STYLES',
    title: 'Designs She Will Love',
    description:
      'Discover distinctive prints and graceful silhouettes, crafted in Jaipur with love and care.',
  },
];

function KurtiMidBanner({ onShop }: { onShop: () => void }) {
  const [current, setCurrent] = useState(0);

  const total = midSlides.length;
  const slide = midSlides[current];

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
    <div className="relative grid min-h-[440px] grid-cols-1 overflow-hidden rounded-3xl bg-gradient-to-br from-[#380e16] via-[#541622] to-[#2a0b11] text-white shadow-2xl lg:grid-cols-12 lg:min-h-[500px]">
      {/* LEFT CONTENT */}
      <div className="z-10 flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 lg:p-12">
        <div className="space-y-5">
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#D8C092]/40 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#EFA00F]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#F3E9D8]">
              {slide.badge}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#FFFCF6] sm:text-4xl lg:text-5xl">
            {slide.title}
          </h2>

          <p className="max-w-md text-xs font-light leading-relaxed text-[#F3E9D8] sm:text-sm">
            {slide.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onShop}
              className="flex items-center gap-2 rounded-full bg-[#EFA00F] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#352923] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#df930c]"
            >
              <span>Shop Kurtis</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={`https://wa.me/91${PHONE_NUMBER}?text=Namaste!%20Mujhe%20kurti%20collection%20ke%20bare%20me%20inquiry%20karni%20hai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#D8C092]/40 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4 text-[#20C967]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

        {/* DOTS + ARROWS */}
        <div className="mt-8 flex items-center justify-between border-t border-[#D8C092]/20 pt-6">
          <div className="flex items-center gap-2">
            {midSlides.map((s, index) => (
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
      </div>

      {/* RIGHT IMAGE - poori image clear dikhegi, crop nahi hogi */}
      <div className="relative h-[340px] w-full overflow-hidden bg-[#2a0b11] sm:h-[440px] lg:col-span-7 lg:h-full">
        {midSlides.map((s, index) => (
          <div
            key={s.id}
            aria-hidden={index !== current}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
          >
            {/* soft blurred fill, taaki side me khali jagah na dikhe */}
            <Image
              src={s.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="scale-110 object-cover object-center opacity-40 blur-2xl"
            />

            {/* main image - full & clear */}
            <Image
              src={s.image}
              alt={s.title}
              fill
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
// Middle banner kurti ki kitni products ke baad aaye (12 = desktop par 3 line)
const MID_BANNER_AFTER = 12;

export default function KurtiPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const kurtiProducts = productsData.filter(
    (item) => item.category.toLowerCase() === 'kurti'
  );

  const productHref = (id: string | number) =>
    `/product?id=${encodeURIComponent(String(id))}`;

  const scrollToProducts = () =>
    document
      .getElementById('kurti-products')
      ?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="min-h-screen bg-[#F7F2EB] text-[#30211F]">
      {/* ================= TOP HERO BANNER ================= */}
      <section className="mx-auto w-full max-w-[1500px] px-4 pt-6 sm:px-6 lg:px-10">
        <KurtiHero onExplore={scrollToProducts} />
      </section>

      {/* ================= SHOP BY STYLE (auto sliding) ================= */}
      <KurtiStyleSlider onShop={scrollToProducts} />
      <KurtiVideosPage />

      {/* ================= KURTI PRODUCTS ================= */}
      <section
        id="kurti-products"
        className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10"
      >
        <div className="mb-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B99450]">
            Ankit Tewari Jaipur
          </span>
          <h2 className="mt-1 font-serif text-2xl font-bold text-[#541622] sm:text-3xl">
            Women&apos;s Kurti Collection
          </h2>
          <p className="mt-2 text-xs text-[#89776C]">
            Showing{' '}
            <span className="font-bold text-[#4A302A]">{kurtiProducts.length}</span>{' '}
            {kurtiProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {kurtiProducts.length === 0 ? (
          <div className="rounded-2xl border border-[#E8DED5] bg-white px-5 py-20 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7E9EC]">
              <ShoppingBag className="h-7 w-7 text-[#800A2D]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#35201D]">
              No Kurtis Found
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
            {kurtiProducts.map((item, index) => (
              <Fragment key={item.id}>
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
                        {item.category}
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

                {/* MIDDLE BANNER - 3 line (12 products) ke baad */}
                {index === MID_BANNER_AFTER - 1 && (
                  <div className="col-span-full">
                    <KurtiMidBanner onShop={scrollToProducts} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        )}
      </section>

      <Kurtibanner />

      {/* QUICK VIEW MODAL */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        phoneNumber={PHONE_NUMBER}
      />
    </main>
  );
}