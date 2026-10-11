'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Feather, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function KurtiBannerSection() {
  const brandFeatures = [
    {
      icon: Feather,
      title: 'Authentic Craftsmanship',
      desc: 'Inspired by traditional Indian flora & royal motifs',
    },
    {
      icon: ShieldCheck,
      title: 'Premium Organic Fabrics',
      desc: 'Breathable, eco-friendly luxury weaves',
    },
    {
      icon: HeartHandshake,
      title: 'Sustainably Crafted',
      desc: 'Ethically made with timeless royal elegance',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F2EB] py-12 sm:py-16">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        {/* Main Banner Card */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#D8C092]/50 bg-[#1A0B0E] shadow-[0_25px_60px_-15px_rgba(42,11,17,0.35)] transition-all duration-700 hover:border-[#EFA00F]/60">
          
          {/* Background Image with Parallax-like Zoom on Hover */}
          <div className="relative h-[480px] w-full sm:h-[550px] lg:h-[620px]">
            <Image
              src="/banner/morehomepage.png"
              alt="Royal Peacock & Botanical Heritage Banner"
              fill
              priority
              quality={90}
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlays for Content Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B0E]/95 via-[#1A0B0E]/70 to-transparent lg:w-3/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B0E]/90 via-transparent to-black/30" />
          </div>

          {/* Floating Content Card (Overlay) */}
          <div className="absolute inset-0 flex items-center p-6 sm:p-12 lg:p-16">
            <div className="max-w-xl text-left">
              
              {/* Top Tagline Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D8C092]/40 bg-black/40 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#EFA00F] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#F3E9D8]">
                  Royal Heritage Collection
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-[#FFFCF6]">
                Rooted in Nature,{' '}
                <span className="block italic text-[#EFA00F] sm:inline">
                  Woven in Luxury
                </span>
              </h2>

              {/* Subtitle Description */}
              <p className="mt-4 text-xs sm:text-sm lg:text-base font-light leading-relaxed text-[#F3E9D8]/90">
                Experience the majestic elegance of royal courts merged with modern sustainable grace. Every thread tells a story of artistic heritage and unmatched comfort.
              </p>

              {/* Features Chips */}
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                <span className="rounded-full border border-[#D8C092]/30 bg-black/30 px-3.5 py-1 text-[11px] font-medium text-[#F3E9D8] backdrop-blur-sm">
                  ✦ Hand-motive Prints
                </span>
                <span className="rounded-full border border-[#D8C092]/30 bg-black/30 px-3.5 py-1 text-[11px] font-medium text-[#F3E9D8] backdrop-blur-sm">
                  ✦ Royal Peacock Motifs
                </span>
                <span className="rounded-full border border-[#D8C092]/30 bg-black/30 px-3.5 py-1 text-[11px] font-medium text-[#F3E9D8] backdrop-blur-sm">
                  ✦ Festive Elegance
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/kurti"
                  className="group/btn inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#EFA00F] to-[#df930c] px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2A0B11] shadow-[0_10px_25px_rgba(239,160,15,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(239,160,15,0.5)] active:scale-95"
                >
                  <span>Explore Heritage Range</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>

            </div>
          </div>

          {/* Floating Aesthetic Corner Badge */}
          <div className="hidden sm:flex absolute right-6 top-6 items-center gap-2 rounded-2xl border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-semibold text-white/90">Eco-Friendly Craftsmanship</span>
          </div>
        </div>

        {/* Pre-Footer Highlight Cards Grid (Footer ke upar trust values show karne ke liye) */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {brandFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group flex items-start gap-4 rounded-2xl border border-[#D8C092]/30 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#EFA00F]/50 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2A0B11] to-[#541622] text-[#EFA00F] shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#30211F] group-hover:text-[#8F1D2C]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#614E4A] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}