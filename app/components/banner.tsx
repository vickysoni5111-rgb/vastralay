'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const PHONE_NUMBER = '9782978218';

  const slides = [
    {
      id: 1,
      image: '/banner/banner2.png',
      badge: 'SUMMER BREEZE COLLECTION',
      title: 'Light Sky Blue Elegance',
      description: 'Handcrafted with breathable premium textiles and delicate Jaipuri block motifs. Perfect for sunlit celebrations and daytime sophistication.',
      bgColor: 'bg-[#1c334d]', // Halka Asmani Blue Theme
      btnBg: 'bg-sky-400 hover:bg-sky-300 text-slate-950',
    },
    {
      id: 2,
      image: '/banner/banner3.png',
      badge: 'MIDNIGHT COUTURE',
      title: 'Dark Blue & Black Fusion',
      description: 'An alluring blend of deep sapphire blues and onyx black texturing. Designed for grand evening galas and royal red carpet presence.',
      bgColor: 'bg-[#060a12]', // Dark Blue + Black Theme
      btnBg: 'bg-[#EFA00F] hover:bg-[#df930c] text-slate-950',
    },
    {
      id: 3,
      image: '/banner/banner1.png',
      badge: 'EXCLUSIVE FESTIVE EDITION',
      title: 'Classic Indigo Luxury',
      description: 'Handcrafted with breathable premium textiles and delicate Jaipuri block motifs for supreme traditional elegance.',
      bgColor: 'bg-[#152238]', // Light Dark Blue Theme
      btnBg: 'bg-amber-400 hover:bg-amber-300 text-slate-950',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <div className="w-full max-w-[1280px] mx-auto my-6 px-4">
      {/* CARD CONTAINER */}
      <div className={`relative w-full rounded-3xl overflow-hidden shadow-2xl transition-colors duration-700 ${slide.bgColor} text-white grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[480px]`}>
        
        {/* LEFT CONTENT AREA */}
        <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#EFA00F]" />
              <span className="text-[10px] font-extrabold tracking-[0.22em] text-gray-200 uppercase">
                {slide.badge}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-[#FFFCF6]">
              {slide.title}
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-light max-w-md">
              {slide.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/collection"
                className={`px-6 py-3 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${slide.btnBg}`}
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/91${PHONE_NUMBER}?text=Namaste!%20Mujhe%20is%20outfit%20ke%20bare%20me%20inquiry%20karni%20hai.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-md transition flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#20C967]" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-6">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlide ? 'w-7 bg-[#EFA00F]' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition"
                aria-label="Next Slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE AREA (Exact Full Fill without side gaps) */}
        <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[440px] lg:h-full bg-black/20 overflow-hidden">
          {slides.map((s, index) => (
            <div
              key={s.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center w-full h-full"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}