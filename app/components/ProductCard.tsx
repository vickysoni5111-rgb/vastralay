'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
  onOpenProduct: (id: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, index = 0, onOpenProduct, onQuickView }: ProductCardProps) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image Frame - Click to Open Product Page */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden bg-stone-100 cursor-pointer"
        onClick={() => onOpenProduct(product.id)}
      >
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          priority={index < 3}
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Discount ribbon */}
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#800A2D] text-white text-[10px] font-bold uppercase tracking-wide rounded-full shadow-md">
          {product.discount}
        </span>

        <button
          onClick={(e) => { e.stopPropagation(); }}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 z-10 p-2.5 bg-white/90 hover:bg-white text-gray-700 hover:text-rose-600 rounded-full shadow-md backdrop-blur-md transition-all active:scale-90"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Hover Buttons */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2.5 bg-white/95 hover:bg-white text-gray-900 font-bold text-xs uppercase rounded-xl shadow-lg border border-gray-200 flex items-center justify-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenProduct(product.id);
            }}
            className="flex-1 py-2.5 bg-[#800A2D] hover:bg-[#600721] text-white font-bold text-xs uppercase rounded-xl shadow-lg flex items-center justify-center gap-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>

      {/* Title & Info */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow gap-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-rose-900 bg-rose-50 px-2 py-0.5 rounded uppercase">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <span className="text-xs font-semibold text-neutral-700">{product.rating}</span>
            </div>
          </div>
          <Link href={`/product?id=${product.id}`}>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1 group-hover:text-[#800A2D] transition-colors">
              {product.title}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="font-extrabold text-gray-900 text-base sm:text-lg">
              ₹{product.price}
            </span>
            <span className="text-gray-400 line-through text-xs">
              ₹{product.originalPrice}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}