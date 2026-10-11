import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const collectionCards = [
  {
    id: 1,
    title: 'SIGNATURE BLACK EDITION',
    image: '/black.png',
    link: '/product?id=18',
  },
  {
    id: 2,
    title: 'ROYAL HERITAGE MOTIF',
    image: '/pic09.png',
    link: '/product?id=25',
  },
  {
    id: 3,
    title: 'FESTIVE GOLD WEAVE',
    image: '/pic998.png',
    link: '/product?id=31',
  },
  {
    id: 4,
    title: 'PRINTED INDIGO BLISS',
    image: '/model1.png',
    link: '/product?id=9',
  },
  {
    id: 5,
    title: 'AZURE BLUE ELEGANCE',
    image: '/model7.png',
    link: '/product?id=10',
  },
];

export default function CardPage() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 bg-[#FAF7F2] text-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-block px-4 py-1.5 bg-[#EFECE6] border border-[#D9D3C7] rounded-full">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8C6D3B]">
              ✨ CURATED MASTERPIECES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-wide text-neutral-900">
            Explore Our Signature Styles
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-light">
            Step into timeless elegance with our arch-framed designer collection tailored for every grand celebration.
          </p>
        </div>

        {/* Arch Cards Grid (5 Cards layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {collectionCards.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative h-[480px] rounded-t-[160px] rounded-b-2xl overflow-hidden bg-neutral-200 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-[#E7E1D6]"
            >
              {/* Image Container with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Dark Gradient Overlay at the bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-90" />
              </div>

              {/* Content Positioned at Bottom (No Buttons, Reference Match Style) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10 space-y-2">
                
                {/* Title */}
                <h3 className="text-sm sm:text-base font-serif font-bold text-white tracking-wider uppercase drop-shadow-md">
                  {item.title}
                </h3>

                {/* Bottom Text Link with Underline line */}
                <div className="pt-2 pb-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-amber-300 border-b border-amber-300/60 pb-0.5 transition-colors duration-300 group-hover:border-white group-hover:text-white">
                    Click to View Details
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}