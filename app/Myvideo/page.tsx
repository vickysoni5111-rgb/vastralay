'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function VideoSectionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.35; 
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* Background Video with Hardware Acceleration & High Clarity Styles */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/wqsxsuzd/video/upload/v1791738754/second.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 transform-gpu backface-hidden [image-rendering:high-quality]"
      />

      {/* Lighter Gradient Overlay to prevent washing out video clarity */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 z-10 pointer-events-none" />

      {/* Center Content / Text */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4 flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-1.5 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-md">
          <Sparkles size={12} className="text-amber-400" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-300">
            Cinematic Experience
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-wide leading-tight drop-shadow-md">
          Crafted For Elegance & Celebration
        </h1>

        {/* Subtitle description */}
        <p className="text-xs sm:text-sm text-neutral-200 font-light max-w-xl leading-relaxed drop-shadow">
          Witness the fine artistry of our handloom prints and royal fabrics in motion. Every weave tells a story of tradition, luxury, and modern comfort.
        </p>

        {/* Call to Action Button */}
        <div className="pt-2">
          <Link
            href="/collection"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-[11px] uppercase tracking-wider rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Discover Collection</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>

    </section>
  );
}