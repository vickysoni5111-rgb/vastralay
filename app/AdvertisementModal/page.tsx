'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdvertisementModal() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Correct paths according to public/banner/ folder
  const slides = [
    {
      src: '/banner/advertisementkurti.png',
      alt: 'Advertisement Kurti Showcase',
    },
    {
      src: '/banner/advertisementmale.png',
      alt: 'Advertisement Male Showcase',
    },
  ];

  useEffect(() => {
    setMounted(true);

    // Scroll trigger: Opens modal when user scrolls slightly down (after chatbot)
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-sliding interval (3 seconds)
  useEffect(() => {
    if (!isVisible) return;

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(slideTimer);
  }, [isVisible, slides.length]);

  if (!mounted || !isVisible) return null;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* BANNER MODAL CONTAINER */}
      <div className="relative w-full max-w-xl bg-transparent rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden border border-[#D8C092]/50">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition shadow-lg"
          aria-label="Close Banner"
        >
          <X size={20} />
        </button>

        {/* ONLY IMAGES SLIDER */}
        <div className="relative w-full h-[450px] sm:h-[520px] bg-black overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-contain object-center bg-black"
              />
            </div>
          ))}

          {/* MANUAL NAVIGATION ARROWS */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition"
            aria-label="Previous Image"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition"
            aria-label="Next Image"
          >
            <ChevronRight size={22} />
          </button>

          {/* CAROUSEL DOT INDICATORS AT BOTTOM */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-xs">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-6 bg-[#EFA00F]' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}