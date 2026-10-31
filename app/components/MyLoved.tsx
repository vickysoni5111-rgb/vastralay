'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, Search, ShoppingBag } from 'lucide-react';

import WishlistButton from './WishlistButton';
import AddToCartButton from './AddToCartButton';
import { productsData, Product } from '../data/products';
import QuickViewModal from './QuickViewModal';

const PHONE_NUMBER = '9782978218';

// Har category me max 9 products (desktop par 3 rows x 3 cards)
const MAX_PER_SECTION = 9;

// Category pages wali hi id ranges
const CHILD_ID_START = 126;
const CHILD_ID_END = 141;
const MALE_ID_START = 700;
const MALE_ID_END = 736;

const inRange = (item: Product, start: number, end: number) => {
  const id = Number(item.id);
  return id >= start && id <= end;
};

const isChild = (item: Product) => inRange(item, CHILD_ID_START, CHILD_ID_END);
const isMaleKurta = (item: Product) => inRange(item, MALE_ID_START, MALE_ID_END);

// Kaun se products kis section me dikhein
const shirtProducts = productsData
  .filter((item) => item.category.toLowerCase() === 'shirts')
  .slice(0, MAX_PER_SECTION);

// Female kurti: category me "kurti" ho (male kurta aur children ko chhod kar)
const kurtiProducts = productsData
  .filter(
    (item) =>
      item.category.toLowerCase().includes('kurti') &&
      !isMaleKurta(item) &&
      !isChild(item)
  )
  .slice(0, MAX_PER_SECTION);

const childrenProducts = productsData
  .filter(isChild)
  .slice(0, MAX_PER_SECTION);

const maleKurtaProducts = productsData
  .filter(isMaleKurta)
  .slice(0, MAX_PER_SECTION);

const sections = [
  {
    key: 'shirts',
    eyebrow: "Men's Shirts",
    title: 'Shirt Collection',
    description: 'Bold block prints and everyday classics.',
    href: '/collection?category=Shirts',
    products: shirtProducts,
  },
  {
    key: 'kurti',
    eyebrow: "Women's Kurti",
    title: 'Female Kurti Collection',
    description: 'Elegant kurtis for every occasion.',
    href: '/Kurti',
    products: kurtiProducts,
  },
  {
    key: 'children',
    eyebrow: 'Kids Dress',
    title: "Children's Dress Collection",
    description: 'Soft, comfy and colourful outfits for little ones.',
    href: '/Childern',
    products: childrenProducts,
  },
  {
    key: 'male-kurta',
    eyebrow: "Men's Kurta",
    title: 'Male Kurta Collection',
    description: 'Classic kurtas for weddings, festivals and everyday wear.',
    href: '/MaleKurta',
    products: maleKurtaProducts,
  },
];

/* ============================================================
   PRODUCT CARD (pehle jaisa hi design aur functionality)
   ============================================================ */
function ProductCard({
  item,
  index,
  priority,
  onOpen,
  onQuickView,
}: {
  item: Product;
  index: number;
  priority: boolean;
  onOpen: (id: string | number) => void;
  onQuickView: (item: Product) => void;
}) {
  // 3 rows har screen par: mobile 3 cards, tablet 6 cards (2 columns), desktop 9 cards (3 columns)
  const visibility =
    index >= 6 ? 'hidden lg:flex' : index >= 3 ? 'hidden sm:flex' : 'flex';

  return (
    <article
      className={`group ${visibility} flex-col overflow-hidden rounded-2xl border border-[#E8DCD1] bg-white shadow-[0_5px_22px_rgba(53,19,30,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D3B8A1] hover:shadow-[0_18px_38px_rgba(53,19,30,0.13)]`}
    >
      {/* IMAGE + WISHLIST */}
      <div className="relative">
        <button
          type="button"
          onClick={() => onOpen(item.id)}
          aria-label={`View ${item.title}`}
          className="relative block aspect-[3/4] w-full overflow-hidden bg-[#F0E9E2]"
        >
          <Image
            src={item.images[0]}
            alt={item.title}
            fill
            unoptimized
            referrerPolicy="no-referrer"
            priority={priority && index < 3}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />
        </button>

        {/* LIKE */}
        <WishlistButton product={item} />

        {/* QUICK VIEW + ADD TO CART */}
        <div className="absolute inset-x-3 bottom-3 z-10 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onQuickView(item)}
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

          <button
            type="button"
            onClick={() => onOpen(item.id)}
            className="mt-2.5 block w-full text-left line-clamp-1 text-sm font-bold text-[#302321] transition-colors hover:text-[#800A2D] sm:text-[15px]"
          >
            {item.title}
          </button>
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
          <button
            type="button"
            onClick={() => onOpen(item.id)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#800A2D]/25 bg-white py-2.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#800A2D] transition-all duration-200 hover:border-[#800A2D] hover:bg-[#800A2D] hover:text-white"
          >
            <ShoppingBag className="h-4 w-4" />
            View Product
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function MyLoved() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openProductPage = (productId: string | number) => {
    router.push(`/product?id=${encodeURIComponent(String(productId))}`);
  };

  // Jis category me products nahi hain, wo section dikhega hi nahi
  const visibleSections = sections.filter((s) => s.products.length > 0);

  return (
    <section className="bg-[#FAF7F2] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold tracking-[0.3em] text-rose-900 uppercase block">
            Customer Favourites
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
            Most Loved
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light max-w-lg mx-auto">
            The pieces our customers keep coming back for.
          </p>
        </div>

        {visibleSections.map((section, sectionIndex) => (
          <div
            key={section.key}
            className={
              sectionIndex === 0
                ? ''
                : 'mt-16 border-t border-[#E8DCD1] pt-14'
            }
          >
            {/* CATEGORY HEADING */}
            <div className="mb-8 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-[#B99450]">
                {section.eyebrow}
              </span>
              <h3 className="mt-1.5 font-serif text-xl font-bold text-[#541622] sm:text-2xl">
                {section.title}
              </h3>
              <p className="mx-auto mt-1.5 max-w-md text-sm font-light text-neutral-600">
                {section.description}
              </p>
            </div>

            {/* 3 rows of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {section.products.map((item, index) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  index={index}
                  priority={sectionIndex === 0}
                  onOpen={openProductPage}
                  onQuickView={setSelectedProduct}
                />
              ))}
            </div>

            {/* VIEW MORE */}
            <div className="text-center mt-10">
              <button
                type="button"
                onClick={() => router.push(section.href)}
                aria-label={`View more ${section.title}`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#800A2D] hover:bg-[#600721] text-white font-semibold text-sm uppercase tracking-wide rounded-xl shadow-md transition-all"
              >
                <span>View More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        phoneNumber={PHONE_NUMBER}
      />
    </section>
  );
}