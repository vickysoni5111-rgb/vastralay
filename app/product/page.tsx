'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import {
  Heart,
  Truck,
  RefreshCw,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Star,
  Sparkles,
  Palette,
  Ruler,
  Shirt,
  CheckCircle2,
  Award,
  Minus,
  Plus,
  ShoppingBag,
} from 'lucide-react';
import { productsData } from '../data/products';
import { useShop, SIZES, DEFAULT_SIZE } from '../context/ShopContext';

function ParticularProductContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id') || '1';
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  // Find product by URL ID with safe fallback
  const product = productsData.find((p) => String(p.id) === productId) || productsData[0];
  const liked = isInWishlist(product.id);

  // Helper function for valid image fallback
  const getSafeImage = (imgSrc?: string) => {
    if (!imgSrc || typeof imgSrc !== 'string' || imgSrc.trim() === '') {
      return '/placeholder.png';
    }
    return imgSrc;
  };

  const initialImage = getSafeImage(product?.images?.[0]);
  const [selectedImg, setSelectedImg] = useState<string>(initialImage);
  const [selectedSize, setSelectedSize] = useState<string>(DEFAULT_SIZE);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [zoom, setZoom] = useState({ x: 50, y: 50, show: false });

  const updateZoom = (clientX: number, clientY: number, el: HTMLDivElement) => {
    const { left, top, width, height } = el.getBoundingClientRect();
    setZoom({
      x: ((clientX - left) / width) * 100,
      y: ((clientY - top) / height) * 100,
      show: true,
    });
  };

  // Sync image + quantity when product ID changes in URL
  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImg(getSafeImage(product.images[0]));
    }
    setQuantity(1);
  }, [productId, product]);

  const activeImage = getSafeImage(selectedImg);
  const sizes = SIZES;

  const imageCount = product?.images?.length || 0;
  const activeIndex = Math.max(
    (product?.images || []).findIndex((img) => getSafeImage(img) === activeImage),
    0
  );
  const savings = Number(product?.originalPrice) - Number(product?.price);
  const ratingNum = Number(product?.rating) || 0;

  const hideScrollbar = '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setQuantity(1);
  };

  const faqs = [
    {
      q: 'What material is this suit set made of?',
      a: 'The suit is crafted from soft, breathable Viscose Rayon / Georgette, complemented by a Premium Dupatta.',
    },
    {
      q: 'Is Cash on Delivery (COD) available?',
      a: 'Yes, Cash on Delivery is available across most pincodes in India.',
    },
    {
      q: 'What is the return and exchange policy?',
      a: 'We offer a hassle-free 7 days easy return and exchange policy.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-gray-900 font-sans">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-2 text-xs text-gray-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-[#800A2D] transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link href="/collection" className="hover:text-[#800A2D] transition-colors">
          {product?.category || 'Collection'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="font-semibold text-gray-800 line-clamp-1">{product?.title || 'Product'}</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        {/* TOP SECTION */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm border border-rose-100/60 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">

          {/* Gallery: Thumbnails + Main Image */}
          <div className="lg:col-span-7 flex flex-col lg:flex-row gap-4">
            {/* Thumbnails */}
            <div
              className={`flex lg:flex-col gap-3 order-2 lg:order-1 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pb-1 lg:pb-0 lg:max-h-[620px] ${hideScrollbar}`}
            >
              {product?.images?.map((img, idx) => {
                const safeThumb = getSafeImage(img);
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(safeThumb)}
                    className={`relative w-16 h-20 lg:w-20 lg:h-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all duration-200 bg-stone-50 ${
                      activeImage === safeThumb
                        ? 'border-[#800A2D] shadow-md scale-105'
                        : 'border-transparent ring-1 ring-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={safeThumb}
                      alt={product.title || 'Product Thumbnail'}
                      fill
                      unoptimized
                      referrerPolicy="no-referrer"
                      className="object-cover object-top"
                    />
                  </button>
                );
              })}
            </div>

            {/* Main Image Container */}
            <div
              className="flex-1 relative h-[460px] sm:h-[620px] bg-stone-100 rounded-2xl overflow-hidden order-1 lg:order-2 border border-stone-200 shadow-inner cursor-zoom-in"
              onMouseMove={(e) => updateZoom(e.clientX, e.clientY, e.currentTarget)}
              onMouseLeave={() => setZoom((prev) => ({ ...prev, show: false }))}
            >
              {/* Blurred background */}
              <Image
                src={activeImage}
                alt=""
                aria-hidden="true"
                fill
                unoptimized
                referrerPolicy="no-referrer"
                className="object-cover scale-110 blur-2xl opacity-40"
              />

              {/* Main image (zoom yahin lagta hai) */}
              <Image
                src={activeImage}
                alt={product?.title || 'Product Image'}
                fill
                unoptimized
                referrerPolicy="no-referrer"
                className="object-contain p-2 transition-transform duration-200 ease-out"
                style={{
                  transformOrigin: `${zoom.x}% ${zoom.y}%`,
                  transform: zoom.show ? 'scale(2.2)' : 'scale(1)',
                }}
                priority
              />

              {/* Discount badge */}
              <span className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-[#800A2D] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md pointer-events-none">
                <Sparkles className="w-3.5 h-3.5" />
                {product?.discount}
              </span>

              {/* Wishlist */}
              <button
                type="button"
                aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 z-10 p-3 rounded-full shadow-md backdrop-blur-md transition-all active:scale-90 ${
                  liked
                    ? 'bg-[#800A2D] text-white'
                    : 'bg-white/90 hover:bg-white text-gray-700 hover:text-rose-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              </button>

              {imageCount > 1 && (
                <span className="absolute bottom-4 right-4 z-10 bg-black/60 text-white text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur pointer-events-none">
                  {activeIndex + 1} / {imageCount}
                </span>
              )}
            </div>
          </div>

          {/* Details & Purchasing */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-rose-900 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {product?.category}
              </span>
              <span className="text-[10px] font-mono text-gray-400">ID: {product?.id}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight mt-3">
              {product?.title}
            </h1>

            {/* Rating */}
            {ratingNum > 0 && (
              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-1 rounded-lg">
                  <span className="text-sm font-bold">{product.rating}</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-5 h-5 ${
                        s <= Math.round(ratingNum) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                {ratingNum >= 4.5 && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5" />
                    Top Rated
                  </span>
                )}
              </div>
            )}

            {/* Price */}
            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50/60 border border-rose-100">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-black text-[#800A2D]">₹{product?.price}</span>
                <span className="text-sm text-gray-400 line-through">MRP ₹{product?.originalPrice}</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {product?.discount}
                </span>
              </div>
              <div className="flex items-center justify-between mt-1.5">
                <p className="text-[11px] text-gray-500">Inclusive of all taxes</p>
                {savings > 0 && (
                  <p className="text-xs font-semibold text-emerald-700">Aap bacha rahe ho ₹{savings}</p>
                )}
              </div>
            </div>

            {/* Color / Fit / Fabric chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {product?.color && (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-stone-100 px-3 py-1.5 rounded-full">
                  <Palette className="w-3.5 h-3.5 text-[#800A2D]" />
                  {product.color}
                </span>
              )}
              {product?.fit && (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-stone-100 px-3 py-1.5 rounded-full">
                  <Ruler className="w-3.5 h-3.5 text-[#800A2D]" />
                  {product.fit}
                </span>
              )}
              {product?.fabric && (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-stone-100 px-3 py-1.5 rounded-full">
                  <Shirt className="w-3.5 h-3.5 text-[#800A2D]" />
                  {product.fabric}
                </span>
              )}
            </div>

            {/* Size */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Select Size: <span className="text-[#800A2D]">{selectedSize}</span>
                </span>
                <button className="text-xs font-bold text-rose-700 underline underline-offset-2">Size Chart</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4 py-2.5 text-xs font-bold rounded-xl border transition-all active:scale-95 ${
                      selectedSize === sz
                        ? 'bg-[#800A2D] text-white border-[#800A2D] shadow-md shadow-rose-900/20'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#800A2D] hover:text-[#800A2D]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Quantity</span>
              <div className="flex items-center rounded-xl border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="px-3 py-2.5 rounded-l-xl hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-9 text-center text-sm font-bold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                  className="px-3 py-2.5 rounded-r-xl hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-3.5 bg-white border-2 border-[#800A2D] text-[#800A2D] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-rose-50 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </button>
              <a
                href={`https://wa.me/919782978218?text=${encodeURIComponent(
                  `Order Query: ${product?.title || ''} (ID: ${product?.id}) | Size: ${selectedSize} | Qty: ${quantity}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#00A884] hover:bg-[#008f70] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Order on WhatsApp
              </a>
            </div>

            {/* Pincode Check */}
            <div className="mt-6 p-4 bg-stone-50 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-2.5">
                <Truck className="w-4 h-4 text-rose-800" /> DELIVERY OPTIONS
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter 6-digit Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#800A2D]"
                />
                <button className="px-5 py-2.5 bg-[#0F172A] hover:bg-black text-white text-xs font-bold rounded-xl transition-colors active:scale-95">
                  CHECK
                </button>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center text-center gap-1.5 bg-rose-50/70 border border-rose-100 rounded-xl py-3 px-1">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-[10px] font-semibold text-gray-700 leading-tight">100% Authentic</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 bg-rose-50/70 border border-rose-100 rounded-xl py-3 px-1">
                <RefreshCw className="w-5 h-5 text-emerald-600" />
                <span className="text-[10px] font-semibold text-gray-700 leading-tight">7 Days Easy Return</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 bg-rose-50/70 border border-rose-100 rounded-xl py-3 px-1">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span className="text-[10px] font-semibold text-gray-700 leading-tight">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* About + Rating */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* About & Highlights */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-rose-100/60">
            <h2 className="text-lg font-serif font-bold text-gray-900 mb-3">About this Product</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product?.description || 'Handcrafted premium ethnic collection.'}
            </p>

            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-6 mb-3">Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product?.fit && (
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {product.fit}
                </li>
              )}
              {product?.fabric && (
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {product.fabric} fabric
                </li>
              )}
              {product?.color && (
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Color: {product.color}
                </li>
              )}
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                7 days easy return &amp; exchange
              </li>
            </ul>
          </div>

          {/* Rating card */}
          {ratingNum > 0 && (
            <div className="bg-gradient-to-br from-rose-950 to-[#800A2D] text-white rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-300">Customer Rating</span>
              <div className="flex items-end gap-1 mt-3">
                <span className="text-6xl font-black leading-none">{product.rating}</span>
                <span className="text-lg text-rose-100/80 mb-1">/ 5</span>
              </div>
              <div className="flex items-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-6 h-6 ${
                      s <= Math.round(ratingNum) ? 'fill-amber-300 text-amber-300' : 'text-rose-200/40'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-rose-100/80 mt-3">Average rating of this product</p>
            </div>
          )}
        </section>

        {/* Specifications */}
        <section className="mt-6 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-rose-100/60">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-5">Specifications & Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
              <p className="text-[11px] uppercase tracking-wider text-gray-400">Fit</p>
              <p className="font-semibold text-gray-800 text-sm mt-1">{product?.fit}</p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
              <p className="text-[11px] uppercase tracking-wider text-gray-400">Fabric</p>
              <p className="font-semibold text-gray-800 text-sm mt-1">{product?.fabric}</p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
              <p className="text-[11px] uppercase tracking-wider text-gray-400">Color</p>
              <p className="font-semibold text-gray-800 text-sm mt-1">{product?.color}</p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
              <p className="text-[11px] uppercase tracking-wider text-gray-400">Category</p>
              <p className="font-semibold text-gray-800 text-sm mt-1">{product?.category}</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-6 mb-6 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-rose-100/60">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-5">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  openFaq === idx ? 'border-rose-200 bg-rose-50/40' : 'border-gray-100 bg-stone-50/50'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex justify-between items-center text-xs sm:text-sm font-bold text-gray-800"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-[#800A2D] transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-rose-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default function ParticularProductPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF7F2]" />}>
      <ParticularProductContent />
    </Suspense>
  );
}