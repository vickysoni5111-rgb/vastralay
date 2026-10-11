'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Truck, RefreshCw, Headphones } from 'lucide-react';
import  Festival from './Festival/page';
import BannerPage from './banner/page';
import CardPage from './card/page';
import VideoSectionPage from './Videos/page';
import MyLoved from './components/MyLoved';
import Myvideo from './Myvideo/page'


const sliderImages = [
  {
    id: 1,
    image: '/homepage1.png',
    title: 'Exquisite Ethnic Collection',
    subtitle: 'Discover Handcrafted Traditional Wear',
    description: 'Elevate your festive and casual wardrobe with our exclusive designer prints.',
  },
  {
    id: 2,
    image: '/homepage2.png',
    title: 'Royal Heritage Styles',
    subtitle: 'Crafted for Perfection',
    description: 'Experience unmatched comfort with our premium cotton-blend ethnic shirts.',
  },
  {
    id: 3,
    image: '/homepage3.png',
    title: 'Festive & Casual Fusion',
    subtitle: 'Trendsetting Designs',
    description: 'Stand out in every celebration with vibrant patterns and rich textures.',
  },
  {
    id: 4,
    image: '/homepage4.png',
    title: 'New Arrival Specials',
    subtitle: 'Up to 30% OFF',
    description: 'Explore the latest trends handpicked just for your unique style.',
  },
];

const trustPoints = [
  {
    icon: Truck,
    title: 'Free Shipping',
    detail: 'On orders above ₹999',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    detail: '7-day hassle-free exchange',
  },
  {
    icon: ShieldCheck,
    title: '100% Authentic',
    detail: 'Handcrafted quality fabrics',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    detail: 'Dedicated customer care',
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <>
     
      <div className="min-h-screen bg-white text-neutral-900">

       
        <section className="relative w-full h-[62vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden bg-neutral-900">
          {sliderImages.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Blurred backdrop fills the box completely */}
              <Image
                src={slide.image}
                alt=""
                aria-hidden="true"
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover scale-110 blur-2xl opacity-50"
              />

              {/* Real image: object-contain guarantees the WHOLE picture shows */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-contain"
              />

              {/* Gradient just at the bottom so the text stays legible without covering the image */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              <div className="absolute inset-0 flex items-end z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-10 sm:pb-14">
                <div className="max-w-xl space-y-4">
                  <span className="inline-block px-3 py-1 bg-white text-neutral-900 text-xs font-semibold tracking-widest uppercase rounded">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-wide leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href="/collection"
                      className="px-7 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm rounded shadow transition duration-300 flex items-center space-x-2"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/collection"
                      className="px-7 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium text-sm rounded transition duration-300 border border-white/40"
                    >
                      View Lookbook
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-neutral-900 transition shadow"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-neutral-900 transition shadow"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

          

        <section className="bg-white py-10 px-6 -mt-12 relative z-30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="bg-[#FBF9F5] border border-[#E7E1D6] border-t-2 border-t-[#A6772C] rounded-md p-6 flex items-center gap-4"
              >
                <div className="shrink-0 w-11 h-11 rounded-full border border-[#A6772C]/40 flex items-center justify-center text-[#8A6D3B]">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

 


<Festival/>

        <CardPage/>
      <Myvideo/>
<MyLoved/>
<BannerPage/>
<VideoSectionPage/>
      </div>
  
    </>
  );
}