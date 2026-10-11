'use client';

import { useState, useEffect, Suspense, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  ShoppingBag,
  Search,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import WishlistButton from '../components/WishlistButton';
import AddToCartButton from '../components/AddToCartButton';
import { productsData, Product } from '../data/products';
import QuickViewModal from '../components/QuickViewModal';
import Banner from '../components/banner';

function CollectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const PHONE_NUMBER = '9782978218';

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    const category = categoryParam || 'All';
    setSelectedCategory(category);
  }, [categoryParam]);

  const productHref = (id: string | number) =>
    `/product?id=${encodeURIComponent(String(id))}`;

  const filteredProducts = productsData
    .filter((item) => {
      if (selectedCategory === 'All') return true;

      if (selectedCategory.toLowerCase() === 'men') {
        return ['shirts', 'men'].includes(
          item.category.toLowerCase()
        );
      }

      return (
        item.category.toLowerCase() ===
        selectedCategory.toLowerCase()
      );
    })
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'lowToHigh') return a.price - b.price;
      if (sortBy === 'highToLow') return b.price - a.price;
      return 0;
    });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    router.push('/collection');
  };

  return (
    <main className="min-h-screen bg-[#F7F2EB] text-[#30211F]">
      {/* ROYAL COLLECTION HERO */}
      <section className="relative isolate overflow-hidden bg-[#35131E]">
        <div className="relative min-h-[360px] sm:min-h-[430px] lg:min-h-[500px]">
          <Image
            src="/banner/collectionbanner.png"
            alt="Ankit Tewari Jaipur clothing collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#260C16]/95 via-[#35131E]/75 to-[#35131E]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#260C16]/60 via-transparent to-[#260C16]/15" />

          <div className="pointer-events-none absolute inset-3 border border-[#D9B36B]/50 sm:inset-5 lg:inset-7" />

          <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1500px] items-center px-7 py-12 sm:min-h-[430px] sm:px-12 lg:min-h-[500px] lg:px-20">
            <div className="max-w-[620px]" data-aos="fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9B36B]/50 bg-[#35131E]/65 px-4 py-2.5 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[#E7C783]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F2DCA9] sm:text-xs">
                  ANKIT TEWARI JAIPUR
                </span>
              </div>

              <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-[#FFF9F0] sm:text-5xl md:text-6xl lg:text-7xl">
                Discover Your
                <span className="mt-1 block italic text-[#E8C47C]">
                  Signature Style
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#F5E8DF] sm:text-base sm:leading-8">
                Discover distinctive prints, effortless elegance and
                timeless styles crafted to make every occasion memorable.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('collection-products')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group inline-flex items-center gap-3 rounded-sm border border-[#E8C982] bg-[#D3AC61] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[#2C1518] shadow-xl transition-all duration-300 hover:bg-[#F0D69A]"
                >
                  Explore Collection
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <span className="text-xs font-medium tracking-wide text-[#F2DDB9]">
                  Elegance in every detail
                </span>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-12 bg-[#D9B36B]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9B36B]" />
                <span className="h-px w-6 bg-[#D9B36B]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION PRODUCTS */}
      <section
        id="collection-products"
        className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 sm:py-11 lg:px-10"
      >
        {/* PRODUCT GRID */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-[#E8DED5] bg-white px-5 py-20 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7E9EC]">
              <ShoppingBag className="h-7 w-7 text-[#800A2D]" />
            </div>

            <h2 className="font-serif text-2xl font-semibold text-[#35201D]">
              No Products Found
            </h2>

            <p className="mt-2 text-sm text-[#8A786D]">
              Try another search or explore our complete collection.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-lg bg-[#800A2D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#5F071F]"
            >
              View All Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-flow-dense grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((item, index) => (
              <Fragment key={item.id}>
                <article
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 70}
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

                {index === 7 && (
                  <div className="col-span-full">
                    <Banner />
                  </div>
                )}
              </Fragment>
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

export default function CollectionPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F7F2EB] text-sm font-semibold text-[#800A2D]">
          Loading collection...
        </div>
      }
    >
      <CollectionContent />
    </Suspense>
  );
}