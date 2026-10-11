'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  X,
  MessageCircle,
  ExternalLink,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Shirt,
  Palette,
  Ruler,
  Heart,
  ShoppingBag,
  Minus,
  Plus,
} from 'lucide-react';
import { Product } from '../data/products';
import { useShop, SIZES, DEFAULT_SIZE } from '../context/ShopContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  phoneNumber: string;
}

export default function QuickViewModal({ product, onClose, phoneNumber }: QuickViewModalProps) {
  // 1. ALL HOOKS MUST BE CALLED FIRST (TOP-LEVEL)
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  // Safely extract images list (array check)
  const imageList = product
    ? Array.isArray(product.images)
      ? product.images
      : Object.values(product.images || {}).filter(Boolean) as string[]
    : [];

  const [activeImage, setActiveImage] = useState<string>('');
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });
  const [visible, setVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(DEFAULT_SIZE);
  const [quantity, setQuantity] = useState(1);

  // Open animation + size/quantity reset jab naya product khule
  useEffect(() => {
    if (product) {
      setActiveImage('');
      setSelectedSize(DEFAULT_SIZE);
      setQuantity(1);
      setVisible(false);
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }
    setVisible(false);
  }, [product]);

  // 2. EARLY RETURN MUST COME AFTER ALL HOOKS
  if (!product) return null;

  const currentImage = imageList.includes(activeImage) ? activeImage : imageList[0] || '';
  const currentIndex = Math.max(imageList.indexOf(currentImage), 0);

  const extra = product as Product & {
    rating?: number;
    color?: string;
    fit?: string;
    fabric?: string;
  };

  const savings = Number(product.originalPrice) - Number(product.price);
  const liked = isInWishlist(product.id);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y, show: true });
  };

  const handleWhatsAppBuy = () => {
    const text = encodeURIComponent(
      `Namaste! Mujhe ye buy karna hai:\n*ID:* ${product.id}\n*Product:* ${product.title}\n*Size:* ${selectedSize}\n*Qty:* ${quantity}\n*Price:* ₹${Number(product.price) * quantity}`
    );
    window.open(`https://wa.me/91${phoneNumber}?text=${text}`, '_blank');
  };

  const handleGoToProductPage = () => {
    onClose();
    router.push(`/product?id=${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setQuantity(1);
  };

  const hideScrollbar = '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white rounded-3xl max-w-4xl w-full overflow-y-auto md:overflow-hidden shadow-2xl border border-white/20 relative flex flex-col md:flex-row max-h-[92vh] md:h-[min(88vh,660px)] transition-all duration-300 ease-out ${hideScrollbar} ${
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 bg-white/90 hover:bg-[#800A2D] text-gray-800 hover:text-white rounded-full shadow-lg backdrop-blur transition-all duration-200 hover:rotate-90 active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Wishlist Button (close button ke bagal me) */}
        <button
          onClick={() => toggleWishlist(product)}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-4 right-16 z-30 p-2 rounded-full shadow-lg backdrop-blur transition-all duration-200 active:scale-90 ${
            liked
              ? 'bg-[#800A2D] text-white'
              : 'bg-white/90 text-gray-800 hover:bg-[#800A2D] hover:text-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
        </button>

        {/* Left Side: Images & Zoom */}
        <div className="w-full md:w-1/2 p-4 sm:p-5 flex flex-col items-center bg-gradient-to-b from-stone-50 to-rose-50/60 md:h-full">
          <div
            className="relative w-full h-[46vh] md:h-auto md:flex-1 min-h-0 rounded-2xl overflow-hidden bg-stone-100 cursor-crosshair shadow-lg ring-1 ring-black/5"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomPos((prev) => ({ ...prev, show: false }))}
          >
            {currentImage && (
              <Image
                src={currentImage}
                alt={product.title}
                fill
                unoptimized
                referrerPolicy="no-referrer"
                className="object-cover object-top transition-transform duration-200"
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: zoomPos.show ? 'scale(2.2)' : 'scale(1)',
                }}
              />
            )}

            {/* Discount badge */}
            <span className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-[#800A2D] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
              <Sparkles className="w-3 h-3" />
              {product.discount}
            </span>

            {/* Image counter */}
            {imageList.length > 1 && (
              <span className="absolute bottom-3 right-3 z-10 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur">
                {currentIndex + 1} / {imageList.length}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {imageList.length > 1 && (
            <div className={`flex gap-2.5 mt-3 overflow-x-auto w-full justify-center pb-1 shrink-0 ${hideScrollbar}`}>
              {imageList.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-12 h-14 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    currentImage === imgUrl
                      ? 'border-[#800A2D] scale-105 shadow-lg'
                      : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`angle-${index}`}
                    fill
                    unoptimized
                    referrerPolicy="no-referrer"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Info & Actions */}
        <div className="w-full md:w-1/2 flex flex-col md:h-full">
          <div className={`flex-1 min-h-0 p-5 sm:p-7 pb-3 md:overflow-y-auto ${hideScrollbar}`}>
            <div className="flex items-center gap-2 pr-24">
              <span className="text-[11px] font-bold text-rose-900 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <span className="text-[10px] font-mono text-gray-400">ID: {product.id}</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-3 leading-tight">
              {product.title}
            </h2>

            {/* Rating */}
            {extra.rating ? (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        s <= Math.round(extra.rating as number)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">{extra.rating}</span>
              </div>
            ) : null}

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-2.5 flex-wrap">
              <span className="text-3xl font-extrabold text-[#800A2D]">
                ₹{product.price}
              </span>
              <span className="text-base text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {product.discount}
              </span>
            </div>
            {savings > 0 && (
              <p className="text-xs font-semibold text-emerald-700 mt-1">
                Aap bacha rahe ho ₹{savings}
              </p>
            )}

            <div className="h-px bg-gradient-to-r from-rose-200 via-gray-200 to-transparent my-3" />

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description || 'Handcrafted premium ethnic collection.'}
            </p>

            {/* Quick info chips */}
            {(extra.color || extra.fit || extra.fabric) && (
              <div className="mt-3 flex flex-wrap gap-2">
                {extra.color && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-stone-100 px-3 py-1.5 rounded-full">
                    <Palette className="w-3.5 h-3.5 text-[#800A2D]" />
                    {extra.color}
                  </span>
                )}
                {extra.fit && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-stone-100 px-3 py-1.5 rounded-full">
                    <Ruler className="w-3.5 h-3.5 text-[#800A2D]" />
                    {extra.fit}
                  </span>
                )}
                {extra.fabric && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-stone-100 px-3 py-1.5 rounded-full">
                    <Shirt className="w-3.5 h-3.5 text-[#800A2D]" />
                    {extra.fabric}
                  </span>
                )}
              </div>
            )}

            {/* Size select */}
            <div className="mt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Select Size: <span className="text-[#800A2D]">{selectedSize}</span>
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {SIZES.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3 py-2 text-[11px] font-bold rounded-lg border transition-all active:scale-95 ${
                      selectedSize === sz
                        ? 'bg-[#800A2D] text-white border-[#800A2D] shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#800A2D] hover:text-[#800A2D]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center text-center gap-1 bg-rose-50/70 border border-rose-100 rounded-xl py-2.5 px-1">
                <Truck className="w-4 h-4 text-[#800A2D]" />
                <span className="text-[10px] font-semibold text-gray-700 leading-tight">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1 bg-rose-50/70 border border-rose-100 rounded-xl py-2.5 px-1">
                <ShieldCheck className="w-4 h-4 text-[#800A2D]" />
                <span className="text-[10px] font-semibold text-gray-700 leading-tight">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1 bg-rose-50/70 border border-rose-100 rounded-xl py-2.5 px-1">
                <RotateCcw className="w-4 h-4 text-[#800A2D]" />
                <span className="text-[10px] font-semibold text-gray-700 leading-tight">Easy Exchange</span>
              </div>
            </div>
          </div>

          {/* Action Buttons (hamesha neeche visible) */}
          <div className="shrink-0 px-5 sm:px-7 pb-5 sm:pb-6 pt-3 flex flex-col gap-2.5 border-t border-gray-100 bg-white">
            {/* Quantity + Add to Cart */}
            <div className="flex items-stretch gap-2.5">
              <div className="flex items-center rounded-xl border border-gray-200">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="px-3 py-3 hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent rounded-l-xl"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                  className="px-3 py-3 hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent rounded-r-xl"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-3.5 bg-white border-2 border-[#800A2D] text-[#800A2D] hover:bg-rose-50 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>

            <button
              onClick={handleGoToProductPage}
              className="w-full py-3.5 bg-[#800A2D] hover:bg-[#600721] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-rose-900/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Full Details & Sizes</span>
            </button>

            <button
              onClick={handleWhatsAppBuy}
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}