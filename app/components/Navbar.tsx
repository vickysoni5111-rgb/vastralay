

'use client';
import { useState, useEffect, useMemo, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import {
  Search,
  Heart,
  ShoppingBasket,
  Menu,
  X,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { searchProducts } from '../data/searchProducts';

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

type SearchBoxProps = {
  placeholder: string;
  inputClassName: string;
  iconWrapperClassName: string;
  iconSize: number;
  onNavigate?: () => void;
  hintLeftClass?: string;
};

const searchHints = [
  'Search best kurti',
  'Search best T-shirts',
  'Search male kurta',
  'Search kids dress',
  'Search here...',
];
function SearchBox({
  placeholder,
  inputClassName,
  iconWrapperClassName,
  iconSize,
  onNavigate,
  hintLeftClass = 'left-11',
}: SearchBoxProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // har 2.8 second me agla hint dikhega
  const [hintIndex, setHintIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHintIndex((prev) => (prev + 1) % searchHints.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);
  const results = useMemo(
    () => (query.trim() ? searchProducts(query) : []),
    [query]
  );
  const suggestions = results.slice(0, 6);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goToResults = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    setOpen(false);
    onNavigate?.();
    router.push(`/collection?search=${encodeURIComponent(trimmed)}`);
  };

  const handlePick = () => {
    setOpen(false);
    setQuery('');
    onNavigate?.();
  };

  return (
    <div ref={boxRef} className="relative w-full">
      <span className={iconWrapperClassName}>
        <Search size={iconSize} />
      </span>
      <input
        type="text"
        suppressHydrationWarning
        value={query}
  placeholder={query ? placeholder : ''}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') goToResults();
          if (e.key === 'Escape') setOpen(false);
        }}
        className={inputClassName}
      />
      {/* Auto changing hint text */}
      {!query && (
        <span
          className={`pointer-events-none absolute inset-y-0 ${hintLeftClass} right-4 flex items-center overflow-hidden`}
        >
          <span
            key={hintIndex}
            className="hint-slide whitespace-nowrap text-xs font-medium text-[#8A7B72]"
          >
            {searchHints[hintIndex]}
          </span>
        </span>
      )}
      {open && query.trim() && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-[#D8C092] bg-white shadow-[0_15px_40px_rgba(53,19,30,0.18)]">
          {suggestions.length > 0 ? (
            <>
              <ul className="max-h-[380px] divide-y divide-[#F0E6D2] overflow-y-auto">
                {suggestions.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/product?id=${encodeURIComponent(item.id)}`}
                      onClick={handlePick}
                      className="flex items-center gap-3 px-3 py-2.5 transition hover:bg-[#FAF4EA]"
                    >
                      <div className="relative h-14 w-11 shrink-0 overflow-hidden rounded-md bg-[#F0E9E2]">
                        <Image
                          src={item.images[0].trim()}
                          alt={item.title}
                          fill
                          unoptimized
                          referrerPolicy="no-referrer"
                          sizes="44px"
                          className="object-cover object-top"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-1 text-xs font-bold text-[#352923]">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#B99450]">
                          {item.color}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs font-extrabold text-[#541622]">
                        ₹{item.price}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={goToResults}
                className="w-full border-t border-[#F0E6D2] bg-[#FAF4EA] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#541622] transition hover:bg-[#F3E9D8]"
              >
                View all {results.length}{' '}
                {results.length === 1 ? 'result' : 'results'}
              </button>
            </>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-xs font-bold text-[#352923]">
                No products found for “{query.trim()}”
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                Try a color like red, blue or pink, or a type like kurti or shirt.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
function TopMarquee() {
  const items = Array.from({ length: 6 });

  const Group = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((_, i) => (
        <div key={i} className="flex items-center gap-3 px-6">
          <Image
            src="/logo1.png"
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] rounded-full bg-white object-contain p-[1px] ring-1 ring-[#B99450]/70"
          />
          <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0C4A6E]">
            Vastralay Ankit Tewari Jaipur
          </span>
          <span className="text-[8px] text-[#B99450]">◆</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden border-b border-[#BAE6FD] bg-gradient-to-r from-[#E0F2FE] via-[#F0F9FF] to-[#E0F2FE] py-[7px]">
      <style>{`
        @keyframes topMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .top-marquee-track {
          display: flex;
          width: max-content;
          animation: topMarquee 45s linear infinite;
        }
      `}</style>

      <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="top-marquee-track">
          <Group />
          <Group hidden />
        </div>
      </div>
    </div>
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
    { name: 'About Us', href: '/About' },
    { name: 'All Collection', href: '/collection' },
    { name: 'Kurti', href: '/Kurti' },
    { name: 'Male Kurta', href: '/MaleKurta' },
    { name: 'Shirts', href: '/collection?category=Shirts' },
    { name: 'Childern', href: '/Childern' },
    { name: 'Contact', href: '/Contact' },
  ];

  const isActive = (item: { name: string; href: string }) => {
    if (item.name === 'Home') return pathname === '/';
    if (item.name === 'Childern') return pathname === '/Childern';
    if (item.name === 'About Us') return pathname === '/About';
    if (item.name === 'Contact') return pathname === '/Contact';
    if (item.name === 'Kurti') return pathname === '/Kurti';
    if (item.name === 'Male Kurta') return pathname === '/MaleKurta';
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
badge-pop { animation: badgePop 0.35s ease-out; }
        @keyframes hintSlide {
          0%   { transform: translateY(100%); opacity: 0; }
          15%  { transform: translateY(0); opacity: 1; }
          85%  { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        .hint-slide { animation: hintSlide 2.8s ease-in-out; }
      `}
      </style>

      {/* AUTO SLIDING TOP BAR */}
      <TopMarquee />

      <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-8">
        {/* TOP ROW: Logo, Search Bar, Location, Actions */}
        <div className="flex items-center justify-between gap-4 border-b border-[#EADCC2]/60 pb-3">
          {/* LOGO & BRAND */}
          <Link
            href="/"
            onClick={closeMobile}
            className="group flex shrink-0 items-center gap-3"
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
              <span className="block font-serif text-base font-bold tracking-wide text-[#541622]">
                Ankit Tewari
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B99450]">
                Jaipur
              </span>
            </div>
          </Link>

          {/* SEARCH BAR */}
          <div className="mx-6 hidden max-w-xl flex-1 md:flex">
            <SearchBox
              placeholder="Search kurtis, male kurta, shirts, collections..."
              iconWrapperClassName="absolute inset-y-0 left-0 flex items-center pl-4 text-[#8F1D2C]/60"
              iconSize={18}
              inputClassName="w-full rounded-full border border-[#D8C092] bg-[#FAF4EA]/70 py-2.5 pl-11 pr-4 text-xs font-medium text-[#352923] placeholder-gray-500 shadow-inner transition-all focus:border-[#541622] focus:bg-white focus:outline-none"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-1.5 rounded-full border border-[#D8C092] bg-[#FAF4EA] px-3.5 py-1.5 text-xs font-semibold text-[#541622] lg:flex">
              <MapPin size={14} className="text-[#8F1D2C]" />
              <span>Jaipur</span>
            </div>

            <Link
              href="/cart"
              aria-label={`Shopping basket, ${shownCart} items`}
              className="relative rounded-full border border-[#D8C092]/60 bg-white p-2.5 text-[#352923] shadow-sm transition hover:bg-[#F3E9D8] hover:text-[#8F1D2C]"
            >
              <ShoppingBasket size={18} />
              <CountBadge count={shownCart} />
            </Link>

            <Link
              href="/wishlist"
              aria-label={`Wishlist, ${shownWishlist} items`}
              className="relative rounded-full border border-[#D8C092]/60 bg-white p-2.5 text-[#352923] shadow-sm transition hover:bg-[#F3E9D8] hover:text-[#8F1D2C]"
            >
              <Heart
                size={18}
                className={shownWishlist > 0 ? 'fill-[#E11D48] text-[#E11D48]' : ''}
              />
              <CountBadge count={shownWishlist} />
            </Link>

            <a
              href="https://wa.me/919782978218"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden rounded-full bg-[#25D366] p-2.5 text-white shadow-sm transition hover:scale-105 sm:flex"
            >
              <MessageCircle size={18} />
            </a>

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

        {/* BOTTOM ROW: Category pill links */}
        <div className="hidden items-center justify-center gap-3 pt-3 lg:flex">
          {categoryLinks.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] shadow-sm transition-all duration-200 ${
                  active
                    ? 'scale-105 bg-[#EFA00F] font-bold text-[#352923] shadow-md'
                    : 'border border-[#D8C092] bg-white text-[#352923] hover:border-[#541622] hover:bg-[#FAF4EA] hover:text-[#541622]'
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
        <div className="max-h-[75vh] overflow-y-auto border-t border-[#D8C092] bg-[#FFFCF6] px-5 py-5 shadow-2xl lg:hidden">
          <div className="mb-4">
            <SearchBox
              placeholder="Search products..."
              iconWrapperClassName="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400"
              iconSize={16}
            inputClassName="w-full rounded-full border border-[#D8C092] bg-[#FAF4EA] py-2.5 pl-10 pr-3 text-xs text-[#352923] focus:outline-none"
              hintLeftClass="left-10"
              onNavigate={closeMobile}
            />
          </div>

          <nav className="flex flex-col gap-2">
            {categoryLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobile}
                className={`rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
                  isActive(item)
                    ? 'bg-[#EFA00F] font-bold text-[#352923]'
                    : 'border border-[#EADCC2] bg-white text-[#352923] hover:bg-[#FAF4EA]'
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