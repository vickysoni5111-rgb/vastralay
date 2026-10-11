'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, ArrowRight, Truck, RefreshCw, Lock } from 'lucide-react';

export default function CollectionCardOne() {
  return (
    <div className="bg-[#541622] rounded-2xl overflow-hidden shadow-lg border border-[#D8C092]/30 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center p-5 sm:p-6 lg:p-7 text-[#FFFCF6] relative w-full max-w-[1050px] mx-auto my-6">
      
      {/* Left Content */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-3 z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#FFFCF6]/10 border border-[#D8C092]/40 px-3 py-1 rounded-full w-fit">
          <Sparkles className="w-3.5 h-3.5 text-[#EFA00F]" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#F3E9D8] uppercase">
            Masterpiece In Motion - Vol 1
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight leading-snug text-[#FFFCF6]">
          Crafted For True <span className="text-[#EFA00F] italic">Elegance</span> & Celebration
        </h2>

        {/* Description */}
        <p className="text-[#F3E9D8]/90 text-xs leading-relaxed font-light max-w-lg">
          Immerse yourself in the rich textures, royal craftsmanship, and artistic prints of our exclusive festive collection. Every single thread embodies traditional heritage fused with contemporary luxury.
        </p>

        {/* Explore Button */}
        <div className="pt-1 flex flex-wrap gap-3">
          <Link
            href="/collection"
            className="px-5 py-2.5 bg-[#EFA00F] hover:bg-[#df930c] text-[#352923] font-bold text-xs tracking-wider uppercase rounded-full shadow-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#D8C092]/20 my-1"></div>

        {/* Trust Badges / Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          <div className="flex flex-col items-center text-center bg-black/20 p-2 rounded-xl border border-[#D8C092]/20">
            <Truck className="w-6 h-6 text-[#EFA00F] mb-1" />
            <span className="text-[10px] font-bold tracking-wider text-[#FFFCF6] uppercase">Fast Delivery</span>
          </div>
          <div className="flex flex-col items-center text-center bg-black/20 p-2 rounded-xl border border-[#D8C092]/20">
            <ShieldCheck className="w-6 h-6 text-[#EFA00F] mb-1" />
            <span className="text-[10px] font-bold tracking-wider text-[#FFFCF6] uppercase">100% Handloom</span>
          </div>
          <div className="flex flex-col items-center text-center bg-black/20 p-2 rounded-xl border border-[#D8C092]/20">
            <RefreshCw className="w-6 h-6 text-[#EFA00F] mb-1" />
            <span className="text-[10px] font-bold tracking-wider text-[#FFFCF6] uppercase">Easy Returns</span>
          </div>
          <div className="flex flex-col items-center text-center bg-black/20 p-2 rounded-xl border border-[#D8C092]/20">
            <Lock className="w-6 h-6 text-[#EFA00F] mb-1" />
            <span className="text-[10px] font-bold tracking-wider text-[#FFFCF6] uppercase">Secure Pay</span>
          </div>
        </div>

      </div>

      {/* Right Video Player (Cloudinary Link) */}
      <div className="lg:col-span-5 z-10 flex justify-center">
        <div className="relative group rounded-2xl overflow-hidden bg-black/40 border border-[#D8C092]/30 shadow-md w-full max-w-[280px] aspect-[3/4]">
          <video
            src="https://res.cloudinary.com/wqsxsuzd/video/upload/v1791738588/first.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D8C092]/30 flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#EFA00F] animate-ping"></span>
            <span className="text-[9px] font-bold tracking-wider uppercase text-[#FFFCF6]">Exclusive Showcase 01</span>
          </div>
        </div>
      </div>

    </div>
  );
}