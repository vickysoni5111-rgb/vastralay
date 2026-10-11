import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function VideoSectionPage() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 bg-[#FAF7F2] text-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Premium Boutique Container with Rich Emerald & Gold Theme */}
        <div className="relative w-full bg-gradient-to-br from-[#0C2318] via-[#133322] to-[#081710] rounded-[3rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-[#224A35]">
          
          {/* Subtle background ambient glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* LEFT SIDE: Authentic Typography & Content */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 z-10">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/15 px-4 py-2 rounded-full border border-[#D4AF37]/30 w-fit">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E6C667]">
                Masterpiece in Motion
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
              Crafted For True Elegance & Celebration
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-xl">
              Immerse yourself in the rich textures and artistic prints of our festive collection. Every single thread embodies traditional heritage fused with contemporary luxury.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/collection"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Explore Collection</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Authentic Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10 text-neutral-300 text-xs uppercase tracking-wider">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck size={18} className="text-[#D4AF37]" />
                <span>100% Handloom Certified</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Star size={18} className="text-[#D4AF37]" />
                <span>Royal Festive Edition</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Video Display with Balanced Framing */}
          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[520px] bg-neutral-950/40 flex items-center justify-center p-4 lg:p-6">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
              <video
                src="https://res.cloudinary.com/wqsxsuzd/video/upload/v1791738588/first.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              {/* Subtle inner shadow for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              
              {/* Live Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white text-[10px] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-amber-300 font-medium">Exclusive View</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}