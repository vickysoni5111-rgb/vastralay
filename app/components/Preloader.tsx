'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Kitni der preloader dikhega (milliseconds)
const SHOW_TIME = 2400;
// Fade out kitni der me hoga
const FADE_TIME = 700;

export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // loading ke time page scroll band
    document.body.style.overflow = 'hidden';

    const leaveTimer = setTimeout(() => setLeaving(true), SHOW_TIME);
    const removeTimer = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = '';
    }, SHOW_TIME + FADE_TIME);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (gone) return null;

  return (
    <div
      role="status"
      aria-label="Loading Ankit Tewari Jaipur"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#FFFCF6] to-[#E0F2FE] transition-all ease-in-out ${
        leaving ? 'pointer-events-none scale-105 opacity-0' : 'scale-100 opacity-100'
      }`}
      style={{ transitionDuration: `${FADE_TIME}ms` }}
    >
      <style>{`
        @keyframes plSpin { to { transform: rotate(360deg); } }
        @keyframes plSpinRev { to { transform: rotate(-360deg); } }
        @keyframes plPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(185,148,80,0.35); }
          50% { transform: scale(1.04); box-shadow: 0 0 0 22px rgba(185,148,80,0); }
        }
        @keyframes plRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes plBar { from { width: 0%; } to { width: 100%; } }
        @keyframes plShine {
          from { transform: translateX(-100%); }
          to { transform: translateX(300%); }
        }
        @keyframes plFloat {
          0%, 100% { transform: translateY(0) rotate(45deg); opacity: .5; }
          50% { transform: translateY(-14px) rotate(45deg); opacity: 1; }
        }
        .pl-ring-1 { animation: plSpin 6s linear infinite; }
        .pl-ring-2 { animation: plSpinRev 9s linear infinite; }
        .pl-logo { animation: plPulse 2s ease-in-out infinite; }
        .pl-rise-1 { opacity: 0; animation: plRise .8s ease-out .3s forwards; }
        .pl-rise-2 { opacity: 0; animation: plRise .8s ease-out .6s forwards; }
        .pl-rise-3 { opacity: 0; animation: plRise .8s ease-out .9s forwards; }
        .pl-bar { animation: plBar ${SHOW_TIME}ms cubic-bezier(.4,.1,.3,1) forwards; }
        .pl-shine { animation: plShine 1.4s ease-in-out infinite; }
        .pl-dia { animation: plFloat 3s ease-in-out infinite; }
      `}</style>

      {/* soft glow background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BAE6FD]/40 blur-3xl" />

      {/* floating gold diamonds */}
      <span className="pl-dia absolute left-[18%] top-[22%] h-2.5 w-2.5 bg-[#B99450]" />
      <span className="pl-dia absolute right-[20%] top-[30%] h-2 w-2 bg-[#38BDF8]" style={{ animationDelay: '.8s' }} />
      <span className="pl-dia absolute bottom-[26%] left-[24%] h-2 w-2 bg-[#38BDF8]" style={{ animationDelay: '1.4s' }} />
      <span className="pl-dia absolute bottom-[20%] right-[22%] h-2.5 w-2.5 bg-[#B99450]" style={{ animationDelay: '.4s' }} />

      {/* LOGO WITH ROTATING RINGS */}
      <div className="relative flex h-[190px] w-[190px] items-center justify-center sm:h-[220px] sm:w-[220px]">
        <span className="pl-ring-1 absolute inset-0 rounded-full border-2 border-dashed border-[#B99450]/80" />
        <span className="pl-ring-2 absolute inset-3 rounded-full border border-[#0C4A6E]/30 border-t-[#0C4A6E] border-r-transparent" />

        <div className="pl-logo relative h-[130px] w-[130px] overflow-hidden rounded-full border-[3px] border-[#B99450] bg-white p-1 shadow-xl sm:h-[150px] sm:w-[150px]">
          <Image
            src="/logo1.png"
            alt="Ankit Tewari Jaipur"
            fill
            priority
            sizes="150px"
            className="rounded-full object-contain"
          />
        </div>
      </div>

      {/* BRAND NAME */}
      <h1 className="pl-rise-1 mt-8 font-serif text-3xl font-bold tracking-wide text-[#541622] sm:text-4xl">
        Ankit Tewari
      </h1>

      <div className="pl-rise-2 mt-2 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B99450] sm:w-12" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#B99450] sm:text-xs">
          Vastralay Jaipur
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B99450] sm:w-12" />
      </div>

      {/* PROGRESS BAR */}
      <div className="pl-rise-3 mt-9 w-[200px] sm:w-[260px]">
        <div className="relative h-[5px] w-full overflow-hidden rounded-full bg-[#BAE6FD]/70">
          <div className="pl-bar relative h-full overflow-hidden rounded-full bg-gradient-to-r from-[#0C4A6E] via-[#38BDF8] to-[#B99450]">
            <span className="pl-shine absolute inset-y-0 left-0 w-1/3 bg-white/50 blur-[2px]" />
          </div>
        </div>
        <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0C4A6E]/70">
          Loading Collection
        </p>
      </div>
    </div>
  );
}