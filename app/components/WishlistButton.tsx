'use client';

import { Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import type { Product } from '../data/products';

export default function WishlistButton({ product }: { product: Product }) {
  const { isInWishlist, toggleWishlist } = useShop();
  const active = isInWishlist(product.id);

  return (
    <button
      type="button"
      aria-label={active ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
      onClick={() => toggleWishlist(product)}
      className={`absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border shadow-md backdrop-blur transition-all duration-200 hover:scale-105 active:scale-95 ${
        active
          ? 'border-[#800A2D] bg-[#800A2D] text-white'
          : 'border-white/70 bg-white/95 text-[#4A3734] hover:border-[#800A2D] hover:bg-[#800A2D] hover:text-white'
      }`}
    >
      <Heart className={`h-[18px] w-[18px] ${active ? 'fill-current' : ''}`} />
    </button>
  );
}