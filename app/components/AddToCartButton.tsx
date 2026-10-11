'use client';

import { ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import type { Product } from '../data/products';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useShop();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#800A2D] py-3 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-[#5F071F]"
    >
      <ShoppingBag className="h-3.5 w-3.5" />
      Add to Cart
    </button>
  );
}