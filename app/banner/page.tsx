'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const bannerSlides = [
  {
    id: 1,
    image: '/model3.png',
    title: 'Crimson Heritage Print',
    subtitle: 'Royal Red Edition',
    description: 'Make a bold statement with our rich crimson ethnic shirt, featuring intricate artistic motifs tailored for grand celebrations.',
    bgColor: 'from-[#4A1515] via-[#2E0B0B] to-[#1A0505]', // Deep Red Theme
    accentColor: 'text-red-300',
    btnBg: 'bg-red-500 hover:bg-red-400 text-white',
    dotColor: 'bg-red-500',
  },
  {
    id: 2,
    image: '/model4.png',
    title: 'Ivory Floral Elegance',
    subtitle: 'Classic Summer Wear',
    description: 'Experience lightweight sophistication with delicate blue botanical prints set against a pristine ivory cotton canvas.',
    bgColor: 'from-[#2A3439] via-[#1B2226] to-[#111518]', // Sophisticated Slate/Ivory Tone
    accentColor: 'text-blue-200',
    btnBg: 'bg-blue-400 hover:bg-blue-300 text-neutral-950',
    dotColor: 'bg-blue-400',
  },
  {
    id: 3,
    image: '/model5.png',
    title: 'Deep Olive & Bronze Fusion',
    subtitle: 'Vintage Craftsmanship',
    description: 'A masterpiece in dark earthy tones, combining textured abstract prints with supreme modern comfort.',
    bgColor: 'from-[#2C2822] via-[#1A1713] to-[#0F0E0B]', // Rich Olive/Dark Earth Tone
    accentColor: 'text-amber-300',
    btnBg: 'bg-amber-500 hover:bg-amber-400 text-neutral-950',
    dotColor: 'bg-amber-500',
  },
  {
    id: 4,
    image: '/model6.png',
    title: 'Retro Khaki Motif',
    subtitle: 'Heritage Collection',
    description: 'Timeless geometric patterns fused with warm khaki and olive hues for an effortless sophisticated look.',
    bgColor: 'from-[#33312A] via-[#211F1A] to-[#14120F]', // Vintage Khaki Tone
    accentColor: 'text-yellow-200',
    btnBg: 'bg-yellow-500 hover:bg-yellow-400 text-neutral-950',
    dotColor: 'bg-yellow-500',
  },
  {
    id: 5,
    image: '/model7.png',
    title: 'Golden Mustard Sunburst',
    subtitle: 'Festive Special',
    description: 'Brighten up every occasion with vibrant mustard leaf patterns designed to keep you looking radiant and sharp.',
    bgColor: 'from-[#3D3216] via-[#261E0D] to-[#141006]', // Warm Mustard/Gold Tone
    accentColor: 'text-yellow-300',
    btnBg: 'bg-amber-400 hover:bg-amber-300 text-neutral-950',
    dotColor: 'bg-amber-400',
  },
];

export default function BannerPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide change every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const slide = bannerSlides[currentIndex];

  return (
    <section className="w-full py-12 px-4 sm:px-8 lg:px-12 bg-white">
      {/* Dynamic Background Container matching current slide color */}
      <div 
        className={`relative w-full max-w-7xl mx-auto min-h-[520px] lg:h-[600px] bg-gradient-to-br ${slide.bgColor} rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-700 ease-in-out border border-white/10`}
      >
        
        {/* Soft background glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* LEFT SIDE: Dynamic Content */}
        <div className="w-full lg:w-7/12 h-full flex flex-col justify-center px-8 sm:px-14 py-12 z-10 space-y-6">
          
          {/* Tag Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full w-fit border border-white/20">
            <Sparkles size={14} className={slide.accentColor} />
            <span className={`text-xs font-semibold uppercase tracking-widest ${slide.accentColor}`}>
              {slide.subtitle}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
            {slide.title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed max-w-lg">
            {slide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/collection"
              className={`px-7 py-3.5 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition duration-300 flex items-center space-x-2 ${slide.btnBg}`}
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider rounded-xl backdrop-blur-md transition duration-300 border border-white/20 flex items-center space-x-2"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Controls & Slide Indicators */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 max-w-md">
            <div className="flex items-center space-x-2">
              {bannerSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === currentIndex ? `w-8 ${slide.dotColor}` : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Seamless Glitch-Free Image Transition */}
        <div className="w-full lg:w-5/12 h-[380px] lg:h-full relative overflow-hidden bg-black/20 flex items-center justify-center">
          {bannerSlides.map((item, idx) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={idx === 0}
                className="object-cover object-center w-full h-full"
              />
              {/* Subtle edge shadow for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/30 lg:via-transparent lg:to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}