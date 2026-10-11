'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FestivalHeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const festivalBanners = [
    { src: '/banner/karwachot.png', title: 'Karwa Chauth Special' },
    { src: '/banner/navratri.png', title: 'Navratri Celebrations' },
    { src: '/banner/krishnajanmasthmibanner.png', title: 'Janmashtami Collection' },
    { src: '/banner/ganeshchaturthi.png', title: 'Ganesh Chaturthi Special' },
    { src: '/banner/diwalibanner.png', title: 'Diwali Grand Edition' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % festivalBanners.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [festivalBanners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % festivalBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + festivalBanners.length) % festivalBanners.length);
  };

  return (
    <section className="w-full py-4 px-2 sm:px-4 lg:px-6 bg-transparent">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Transparent Banner Card Container */}
        <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl bg-transparent">
          
          {/* Background Images Slider - Full Size */}
          {festivalBanners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
            >
              {/* Blurred background fill */}
              <Image
                src={banner.src}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover scale-110 blur-2xl opacity-60"
              />

              {/* Full image, bina crop ke */}
              <Image
                src={banner.src}
                alt={banner.title}
                fill
                priority={index === 0}
                className="object-contain object-center"
              />
            </div>
          ))}

          {/* Right Bottom Next/Prev Controls */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}