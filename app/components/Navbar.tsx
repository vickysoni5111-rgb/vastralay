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
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { searchProducts } from '../data/searchProducts';

// Asli WhatsApp logo (lucide me WhatsApp ka brand icon nahi hota)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// Count badge: 0 par hide, add hone par pop animation ke saath dikhega
function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;

  return (
    <span
      key={count}
      className="badge-pop absolute -right-1.5 -top-1.5 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-gradient-to-br from-[#E11D48] to-[#B3123A] px-1 text-[10px] font-bold leading-none text-white shadow-md ring-2 ring-[#FFFCF6]"
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
  hintLeftClass = 'left-12',
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
            className="hint-slide whitespace-nowrap text-[13px] font-medium text-[#8A7B72]"
          >
            {searchHints[hintIndex]}
          </span>
        </span>
      )}

      {open && query.trim() && (
        <div className="dropdown-in absolute left-0 right-0 top-full z-50 mt-3 overflow-hidden rounded-2xl border border-[#E6D3A8] bg-white shadow-[0_25px_60px_rgba(53,19,30,0.22)]">
          {suggestions.length > 0 ? (
            <>
              <div className="border-b border-[#F0E6D2] bg-gradient-to-r from-[#FAF4EA] to-white px-4 py-2 text-[11px] font-semibold tracking-wide text-[#B99450]">
                Suggested for you
              </div>
              <ul className="max-h-[380px] divide-y divide-[#F6EEDD] overflow-y-auto">
                {suggestions.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/product?id=${encodeURIComponent(item.id)}`}
                      onClick={handlePick}
                      className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-[#FAF4EA]"
                    >
                      <div className="relative h-14 w-11 shrink-0 overflow-hidden rounded-lg bg-[#F0E9E2] ring-1 ring-[#E6D3A8]">
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
                        <p className="line-clamp-1 text-[13px] font-semibold text-[#352923]">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[11px] font-medium capitalize text-[#B99450]">
                          {item.color}
                        </p>
                      </div>

                      <span className="shrink-0 text-sm font-bold text-[#541622]">
                        ₹{item.price}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={goToResults}
                className="w-full bg-[#541622] px-4 py-3 text-center text-xs font-semibold tracking-wide text-[#F6E3B4] transition hover:bg-[#3E0F19]"
              >
                View all {results.length}{' '}
                {results.length === 1 ? 'result' : 'results'}
              </button>
            </>
          ) : (
            <div className="px-4 py-7 text-center">
              <p className="text-sm font-semibold text-[#352923]">
                No products found for “{query.trim()}”
              </p>
              <p className="mt-1 text-xs text-gray-500">
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
        <div key={i} className="flex items-center gap-4 px-7">
          <Image
            src="/logo1.png"
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] rounded-full bg-white object-contain p-[1px] ring-1 ring-[#D9B968]"
          />
          <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.3em] text-[#F3DFAE]">
            Vastralay Ankit Tewari Jaipur
          </span>
          <span className="text-[9px] text-[#D9B968]">◆</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#3A0E18] via-[#541622] to-[#3A0E18] py-[4px]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D9B968] to-transparent" />

      <div className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
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

  // scroll hone par navbar ka shadow gehra hoga
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navbar fixed hai, isliye uski height naap kar page ke content ko neeche rakhte hain
  const headerInnerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  useEffect(() => {
    const el = headerInnerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
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
    if (item.name === 'All Collection')
      return pathname === '/collection' && !currentCategory;

    if (item.href.includes('?category=')) {
      const category = item.href.split('?category=')[1];
      return pathname === '/collection' && currentCategory === category;
    }

    return pathname === item.href;
  };

  const closeMobile = () => setMobileOpen(false);

  const iconBtn =
    'relative flex h-10 w-10 items-center justify-center rounded-full border border-[#E6D3A8] bg-white text-[#541622] shadow-[0_2px_8px_rgba(84,22,34,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B99450] hover:bg-[#FAF4EA] hover:shadow-[0_6px_16px_rgba(84,22,34,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99450]';

  return (
    <>
    {/* Spacer: fixed navbar ke neeche content na chhupe */}
    <div
      aria-hidden="true"
      className="h-[87px] sm:h-[93px] lg:h-[138px]"
      style={headerHeight ? { height: headerHeight } : undefined}
    />
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full bg-[#FFFCF6]/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? 'shadow-[0_10px_35px_rgba(61,30,25,0.16)]'
          : 'shadow-[0_4px_20px_rgba(61,30,25,0.06)]'
      }`}
    >
      <style>{`
        @keyframes badgePop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); }
        }
        .badge-pop { animation: badgePop 0.35s ease-out; }

        @keyframes hintSlide {
          0%   { transform: translateY(100%); opacity: 0; }
          15%  { transform: translateY(0); opacity: 1; }
          85%  { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        .hint-slide { animation: hintSlide 2.8s ease-in-out; }

        @keyframes topMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .top-marquee-track {
          display: flex;
          width: max-content;
          animation: topMarquee 45s linear infinite;
        }
        .top-marquee-track:hover { animation-play-state: paused; }

        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-in { animation: dropdownIn 0.2s ease-out; }

        @keyframes menuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .menu-in { animation: menuIn 0.25s ease-out; }

        @media (prefers-reduced-motion: reduce) {
          .top-marquee-track, .hint-slide, .badge-pop,
          .dropdown-in, .menu-in { animation: none; }
        }
      `}</style>

      <div ref={headerInnerRef}>
      {/* AUTO SLIDING TOP BAR */}
      <TopMarquee />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-8">
        {/* TOP ROW: Logo, Search Bar, Location, Actions */}
        <div className="flex items-center justify-between gap-4 py-2">
          {/* LOGO & BRAND */}
          <Link
            href="/"
            onClick={closeMobile}
            className="group flex shrink-0 items-center gap-3.5"
          >
            <div className="relative h-[40px] w-[40px] rounded-full bg-gradient-to-br from-[#E9CF8E] via-[#B99450] to-[#8C6A2B] p-[2.5px] shadow-[0_4px_14px_rgba(185,148,80,0.45)] transition duration-300 group-hover:scale-105 sm:h-[46px] sm:w-[46px]">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#1F3B6F]">
                <Image
                  src="/logo1.png"
                  alt="Ankit Tewari Jaipur"
                  fill
                  priority
                  sizes="46px"
                  className="scale-[1.12] object-cover object-center"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="block font-serif text-[19px] font-bold leading-none tracking-wide text-[#541622]">
                Ankit Tewari
              </span>
              <span className="mt-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#B99450]">
                <span className="h-px w-5 bg-[#B99450]" />
                Jaipur
              </span>
            </div>
          </Link>

          {/* SEARCH BAR */}
          <div className="mx-4 hidden max-w-xl flex-1 md:flex lg:mx-8">
            <SearchBox
              placeholder="Search kurtis, male kurta, shirts, collections..."
              iconWrapperClassName="absolute inset-y-0 left-0 flex items-center pl-5 text-[#8F1D2C]/70"
              iconSize={18}
              inputClassName="w-full rounded-full border border-[#E6D3A8] bg-white py-2 pl-12 pr-5 text-[13px] font-medium text-[#352923] placeholder-gray-500 shadow-[inset_0_1px_3px_rgba(84,22,34,0.06)] transition-all duration-200 hover:border-[#B99450] focus:border-[#B99450] focus:outline-none focus:ring-4 focus:ring-[#B99450]/20"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-[#E6D3A8] bg-gradient-to-b from-white to-[#FAF4EA] px-4 py-2 text-[13px] font-semibold text-[#541622] shadow-[0_2px_8px_rgba(84,22,34,0.06)] lg:flex">
              <MapPin size={15} className="text-[#B99450]" />
              <span>Jaipur</span>
            </div>

            <Link
              href="/cart"
              aria-label={`Shopping basket, ${shownCart} items`}
              className={iconBtn}
            >
              <ShoppingBasket size={19} />
              <CountBadge count={shownCart} />
            </Link>

            <Link
              href="/wishlist"
              aria-label={`Wishlist, ${shownWishlist} items`}
              className={iconBtn}
            >
              <Heart
                size={19}
                className={shownWishlist > 0 ? 'fill-[#E11D48] text-[#E11D48]' : ''}
              />
              <CountBadge count={shownWishlist} />
            </Link>

            <a
              href="https://wa.me/919782978218"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2BE070] to-[#1DA851] text-white shadow-[0_6px_16px_rgba(37,211,102,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(37,211,102,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:flex"
            >
              <WhatsAppIcon className="h-[23px] w-[23px]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              className={`${iconBtn} lg:hidden`}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Category links */}
        <div className="hidden border-t border-transparent lg:block">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D9B968]/70 to-transparent" />
          <nav className="flex items-center justify-center gap-1.5 py-1.5">
            {categoryLinks.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] tracking-[0.04em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99450] ${
                    active
                      ? 'bg-gradient-to-b from-[#6A1B2C] to-[#541622] font-semibold text-[#F6E3B4] shadow-[0_6px_16px_rgba(84,22,34,0.3)]'
                      : 'font-medium text-[#4A3A33] hover:bg-[#541622]/[0.06] hover:text-[#541622]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B99450]/60 to-transparent" />
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileOpen && (
        <div className="menu-in max-h-[75vh] overflow-y-auto border-t border-[#E6D3A8] bg-[#FFFCF6] px-5 py-5 shadow-2xl lg:hidden">
          <div className="mb-5">
            <SearchBox
              placeholder="Search products..."
              iconWrapperClassName="absolute inset-y-0 left-0 flex items-center pl-4 text-[#8F1D2C]/70"
              iconSize={16}
              inputClassName="w-full rounded-full border border-[#E6D3A8] bg-white py-3 pl-11 pr-4 text-[13px] text-[#352923] focus:border-[#B99450] focus:outline-none focus:ring-4 focus:ring-[#B99450]/20"
              hintLeftClass="left-11"
              onNavigate={closeMobile}
            />
          </div>

          <nav className="flex flex-col gap-2">
            {categoryLinks.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobile}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? 'bg-gradient-to-r from-[#6A1B2C] to-[#541622] font-semibold text-[#F6E3B4] shadow-md'
                      : 'border border-[#EADCC2] bg-white font-medium text-[#352923] hover:bg-[#FAF4EA]'
                  }`}
                >
                  {item.name}
                  {active && <span className="text-[9px] text-[#D9B968]">◆</span>}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#EADCC2] pt-4">
            <div className="flex items-center gap-2 rounded-full border border-[#E6D3A8] bg-[#FAF4EA] px-4 py-2 text-xs font-semibold text-[#541622]">
              <MapPin size={14} className="text-[#B99450]" />
              <span>Jaipur</span>
            </div>
            <a
              href="https://wa.me/919782978218"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-br from-[#2BE070] to-[#1DA851] px-4 py-2 text-xs font-semibold text-white shadow-md"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
}