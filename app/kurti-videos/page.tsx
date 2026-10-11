'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Volume2, VolumeX, Play, Pause, Eye } from 'lucide-react';

const VIDEO_ONE = 'https://res.cloudinary.com/wqsxsuzd/video/upload/v1791736838/feshion1video.mp4';
const VIDEO_TWO = 'https://res.cloudinary.com/wqsxsuzd/video/upload/v1791736689/yellokurti-video.mp4';

function VideoFrame({
  src,
  tag,
  label,
  price,
  className = '',
}: {
  src: string;
  tag: string;
  label: string;
  price?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => setIsPlaying(false));
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      onClick={togglePlay}
      className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-[#D8C092]/40 bg-gradient-to-b from-[#1a080c] to-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-2 hover:border-[#EFA00F]/70 hover:shadow-[0_30px_70px_-10px_rgba(239,160,15,0.25)] ${className}`}
    >
      {/* Background Glow on Hover */}
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#EFA00F]/20 to-[#8F1D2C]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Video Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.9rem]">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay for Text Visibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

        {/* Top Badges & Controls */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
          {/* Live Tag */}
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EFA00F] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EFA00F]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
              {tag}
            </span>
          </div>

          {/* Mute/Unmute Toggle Button */}
          <button
            onClick={toggleMute}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-white/80" /> : <Volume2 className="h-4 w-4 text-[#EFA00F]" />}
          </button>
        </div>

        {/* Play/Pause Overlay Indicator on Hover */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md">
            {isPlaying ? <Pause className="h-5 w-5 fill-white" /> : <Play className="h-5 w-5 fill-white ml-0.5" />}
          </div>
        </div>

        {/* Bottom Details Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
            <p className="font-serif text-lg sm:text-xl font-bold text-white drop-shadow-md">
              {label}
            </p>
            
            {price && (
              <p className="mt-1 text-xs font-semibold text-[#EFA00F]">
                Starting from <span className="text-sm font-bold text-white">{price}</span>
              </p>
            )}

            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/80 group-hover:text-white">
                <Eye className="h-3.5 w-3.5 text-[#EFA00F]" /> Quick Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KurtiVideosPage() {
  const highlights = ['Handcrafted Prints', 'Premium Fabrics', 'Festive Ready'];

  return (
    <main className="min-h-screen bg-[#F7F2EB] text-[#30211F]">
      <section className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 sm:py-16 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D8C092]/40 bg-gradient-to-br from-[#1d070a] via-[#42121b] to-[#25080e] p-6 shadow-2xl sm:p-12 lg:p-16">
          
          {/* Ambient Glow Effects */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#EFA00F]/20 blur-[130px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-[#8F1D2C]/40 blur-[130px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:col-span-5 lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D8C092]/40 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-inner">
                <Sparkles className="h-4 w-4 text-[#EFA00F] animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#F3E9D8]">
                  Fashion In Motion
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 font-serif text-3xl font-bold leading-[1.15] text-[#FFFCF6] sm:text-4xl lg:text-5xl">
                See Our Kurtis{' '}
                <span className='block italic text-[#EFA00F] sm:inline'>
                  Come Alive
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-md text-sm sm:text-base font-light leading-relaxed text-[#F3E9D8]/90 lg:mx-0">
                Watch the fluid grace of handcrafted fabrics, intricate embroidery details, and rich colors designed to elevate your everyday and festive wear.
              </p>

              {/* Feature Chips */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D8C092]/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#F3E9D8] backdrop-blur-sm transition-all hover:bg-white/15"
                  >
                    ✦ {item}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/kurti"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#EFA00F] to-[#df930c] px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2a0b11] shadow-[0_10px_25px_rgba(239,160,15,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(239,160,15,0.5)] active:scale-95"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT VIDEO GRID */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
              <VideoFrame
                src={VIDEO_ONE}
                tag="Fashion Edit"
                label="Festive Style Story"
                price="₹1,499"
              />
              <VideoFrame
                src={VIDEO_TWO}
                tag="Trending"
                label="Yellow Kurti Story"
                price="₹1,899"
                className="mt-6 sm:mt-10"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}