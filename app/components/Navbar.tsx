'use client';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  Search,
  Heart,
  ShoppingBasket,
  UserRound,
  Menu,
  X,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

// Count badge: 0 par hide, add hone par pop animation ke saath dikhega
function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;

  return (
    <span
      key={count}
      className="badge-pop absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#E11D48] px-1 text-[10px] font-bold leading-none text-white shadow-md ring-2 ring-white"
    >
      {count > 99 ? '99+' : count}
    </span>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
const { cartCount, wishlistCount } = useShop();

const [mounted, setMounted] = useState(false);
useEffect(() => {
  setMounted(true);
}, []);

const shownCart = mounted ? cartCount : 0;
const shownWishlist = mounted ? wishlistCount : 0;

  const categoryLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Collection', href: '/collection' },
    { name: 'Kurti', href: '/Kurti' },
    { name: 'Shirts', href: '/collection?category=Shirts' },
    { name: 'About Us', href: '/About' },
    { name: 'Contact', href: '/Contact' },
  ];

  const isActive = (item: { name: string; href: string }) => {
    if (item.name === 'Home') return pathname === '/';
    if (item.name === 'About Us') return pathname === '/About';
    if (item.name === 'Contact') return pathname === '/Contact';
    if (item.name === 'Kurti') return pathname === '/Kurti';
    if (item.name === 'All Collection') return pathname === '/collection' && !currentCategory;

    if (item.href.includes('?category=')) {
      const category = item.href.split('?category=')[1];
      return pathname === '/collection' && currentCategory === category;
    }

    return pathname === item.href;
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D8C092]/80 bg-[#FFFCF6] shadow-[0_4px_25px_rgba(61,30,25,0.08)] backdrop-blur-md">
      <style>{`
        @keyframes badgePop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); }
        }
        .badge-pop { animation: badgePop 0.35s ease-out; }
      `}</style>

      <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-8">
        {/* TOP ROW: Logo, Search Bar, Location, Actions */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#EADCC2]/60">
          {/* LOGO & BRAND */}
          <Link
            href="/"
            onClick={closeMobile}
            className="flex shrink-0 items-center gap-3 group"
          >
            <div className="relative h-[48px] w-[48px] overflow-hidden rounded-full border-2 border-[#B99450] bg-white p-0.5 shadow-sm transition duration-300 group-hover:scale-105 sm:h-[56px] sm:w-[56px]">
              <Image
                src="/logo1.png"
                alt="Ankit Tewari Jaipur"
                fill
                priority
                sizes="56px"
                className="rounded-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-base font-bold tracking-wide text-[#541622] block">
                Ankit Tewari
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#B99450] uppercase font-semibold">
                Jaipur
              </span>
            </div>
          </Link>

          {/* SEARCH BAR (Center & Spacious) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#8F1D2C]/60">
                <Search size={18} />
              </span>
              <input
                type="text"
                suppressHydrationWarning
                placeholder="Search kurtis, traditional shirts, collections..."
                className="w-full rounded-full border border-[#D8C092] bg-[#FAF4EA]/70 py-2.5 pl-11 pr-4 text-xs font-medium text-[#352923] placeholder-gray-500 shadow-inner focus:border-[#541622] focus:bg-white focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Location Selector */}
            <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#D8C092] bg-[#FAF4EA] px-3.5 py-1.5 text-xs font-semibold text-[#541622]">
              <MapPin size={14} className="text-[#8F1D2C]" />
              <span>Jaipur</span>
            </div>

            {/* Cart Icon */}
            <Link
              href="/cart"
              aria-label={`Shopping basket, ${shownCart} items`}
              className="relative rounded-full border border-[#D8C092]/60 bg-white p-2.5 text-[#352923] shadow-sm transition hover:bg-[#F3E9D8] hover:text-[#8F1D2C]"
            >
              <ShoppingBasket size={18} />
              <CountBadge count={shownCart} />
            </Link>

            {/* Wishlist Icon */}
            <Link
              href="/wishlist"
              aria-label={`Wishlist, ${shownWishlist} items`}
              className="relative rounded-full border border-[#D8C092]/60 bg-white p-2.5 text-[#352923] shadow-sm transition hover:bg-[#F3E9D8] hover:text-[#8F1D2C]"
            >
              <Heart size={18} className={shownWishlist > 0 ? 'fill-[#E11D48] text-[#E11D48]' : ''} />
              <CountBadge count={shownWishlist} />
            </Link>

            {/* WhatsApp Icon */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden sm:flex rounded-full bg-[#25D366] p-2.5 text-white shadow-sm transition hover:scale-105"
            >
              <MessageCircle size={18} />
            </a>

            {/* Login Button */}
            <Link
              href="/account"
              className="flex items-center gap-1.5 rounded-full bg-[#EFA00F] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#352923] shadow-md transition hover:bg-[#df930c]"
            >
              <UserRound size={15} />
              <span>Login</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle Menu"
              className="rounded-full border border-[#D8C092] bg-white p-2.5 text-[#352923] transition hover:bg-[#F3E9D8] lg:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Perfectly Centered Category Pill Links */}
        <div className="hidden lg:flex items-center justify-center gap-3 pt-3">
          {categoryLinks.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-200 whitespace-nowrap shadow-sm ${
                  active
                    ? 'bg-[#EFA00F] text-[#352923] font-bold shadow-md scale-105'
                    : 'border border-[#D8C092] bg-white text-[#352923] hover:bg-[#FAF4EA] hover:border-[#541622] hover:text-[#541622]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileOpen && (
        <div className="border-t border-[#D8C092] bg-[#FFFCF6] px-5 py-5 shadow-2xl lg:hidden">
          {/* Mobile Search */}
          <div className="mb-4">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-[#D8C092] bg-[#FAF4EA] py-2.5 pl-10 pr-3 text-xs text-[#352923] focus:outline-none"
              />
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {categoryLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobile}
                className={`rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
                  isActive(item)
                    ? 'bg-[#EFA00F] text-[#352923] font-bold'
                    : 'bg-white border border-[#EADCC2] text-[#352923] hover:bg-[#FAF4EA]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}