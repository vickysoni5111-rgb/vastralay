'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Award,
  Star,
  CheckCircle2,
  ArrowRight,
  X,
  BookOpen,
  Trophy,
  GraduationCap,
  Briefcase,
  Users,
  Coffee,
  ShieldCheck,
  Plane,
} from 'lucide-react';
import Collectionvideo1Page from '../collectionvideo1/page';

interface CelebrityStory {
  name: string;
  image: string;
  title: string;
  desc: string;
  badge: string;
  fullStory: string;
}

// Vastralay shirt banne ka process (ek ke baad ek step, isliye numbered)
const processSteps = [
  {
    title: 'Raw material',
    text: 'We bring white thaan fabric as raw material to our in-house production unit.',
    duration: 'Fabric ready',
  },
  {
    title: 'Soaking',
    text: 'The fabric is soaked in water so it is clean and ready to take colour and print.',
    duration: '4 days',
  },
  {
    title: 'Design',
    text: 'The laser-machine plates are designed by our owner, Ankit Tewari himself.',
    duration: 'Designed in-house',
  },
  {
    title: 'Cutting in Bagru',
    text: 'The plates travel to Bagru, a village far from the city, where they are cut exactly to our design and sent back to us.',
    duration: 'Back in 5–6 days',
  },
  {
    title: 'Block printing',
    text: 'Our block printing work begins, and every printed piece is left to dry properly.',
    duration: '6 days to dry',
  },
  {
    title: 'Cutting & stitching',
    text: 'Finally, shirt cutting starts and the shirts are manufactured in sizes Small to XXL.',
    duration: '3XL–7XL on request',
  },
];

export default function AboutPage() {
  const [activeModal, setActiveModal] = useState<CelebrityStory | null>(null);

  const celebritySuccess: CelebrityStory[] = [
    {
      name: 'Puja',
      image: '/banner/puja.png',
      title: 'Celebrity Styling & Ethnic Grace',
      desc: 'Adorning our traditional handcrafted outfits, Puja has gracefully showcased unmatched elegance, poise, and royal charm at prominent fashion events.',
      badge: 'Success Story #1',
      fullStory: `Puja’s journey with Ankit Tewari Jaipur represents a breathtaking celebration of modern ethnic grace. As a prominent face in the world of performing arts and fashion, Puja chose our signature handcrafted red and gold ensemble for her grand public appearance at the cultural summit in 2023. 

      The meticulous block-printing and fine Zari detailing mirror the royal courts of Rajasthan, tailored precisely to meet contemporary high-fashion standards. Vastralay has always stood for empowering independent spirits through authentic heritage wear, and Puja’s effortless styling brought a vibrant new narrative to traditional Rajasthani textiles. Her appearance sparked widespread acclaim across top lifestyle magazines, establishing a gold standard for festive elegance.`
    },
    {
      name: 'Hitesh',
      image: '/banner/hitesh.png',
      title: 'Traditional Designer Wear Icon',
      desc: 'Representing our classic kurtis and premium designer shirts on grand stages, Hitesh has elevated the brand reputation to extraordinary new heights.',
      badge: 'Success Story #2',
      fullStory: `Hitesh’s collaboration with Ankit Tewari Jaipur redefines menswear and traditional styling. Known for his sharp aesthetic and passion for artisanal clothing, Hitesh partnered with our design house to launch the exclusive "Royal Heritage" men's collection. 

      By blending traditional Jaipur prints with modern slim-fit cuts, he demonstrated that timeless craftsmanship is exceptionally versatile. Whether stepping onto red carpets or leading entrepreneurial symposiums, Hitesh carries forward the legacy of Vastralay with unmatched confidence and poise. His dedication to championing local weavers and artisans has been a cornerstone of our brand's phenomenal growth.`
    },
    {
      name: 'Nusrat',
      image: '/banner/nusrat.png',
      title: 'Red Carpet Heritage Look',
      desc: 'Nusrat stunning red carpet appearance stands as a true testament to the perfect fusion of Jaipur heritage craftsmanship and contemporary fashion.',
      badge: 'Success Story #3',
      fullStory: `Nusrat’s association with Ankit Tewari Jaipur highlights the global appeal of traditional Indian couture. When she graced the high-profile awards gala in our custom-designed heritage attire, it turned heads internationally. 

      The intricate embroidery, breathable luxury fabrics, and regal color palettes were curated specially by our master craftsmen in Jaipur. Nusrat’s endorsement underscored the mission of Vastralay: to take authentic Indian artistry to global platforms without compromising on comfort or modern luxury. Her inspiring journey continues to motivate young fashion enthusiasts to embrace indigenous weaves.`
    },

  {
      name: 'Macdonald',
      image: '/banner/macdonald.png  ',
      title: 'Red Carpet Heritage Look',
      desc: 'Macdonald stunning red carpet appearance stands as a true testament to the perfect fusion of Jaipur heritage craftsmanship and contemporary fashion.',
      badge: 'Success Story #3',
      fullStory: `Macdonald association with Ankit Tewari Jaipur highlights the global appeal of traditional Indian couture. When she graced the high-profile awards gala in our custom-designed heritage attire, it turned heads internationally. 

      The intricate embroidery, breathable luxury fabrics, and regal color palettes were curated specially by our master craftsmen in Jaipur. Macdonald endorsement underscored the mission of Vastralay: to take authentic Indian artistry to global platforms without compromising on comfort or modern luxury. Her inspiring journey continues to motivate young fashion enthusiasts to embrace indigenous weaves.`
    },


  ];

  const awardsList = [
    {
      title: 'National Business Award',
      image: '/banner/nationalbusinessaward.png',
      category: 'Business Excellence',
      description: 'Recognized for outstanding leadership and rapid growth in the traditional ethnic retail sector.',
    },
    {
      title: 'National Pride Award',
      image: '/banner/nationalprideaward.png',
      category: 'Heritage Contribution',
      description: 'Honored for preserving and promoting authentic Rajasthani craftsmanship across India.',
    },
    {
      title: 'Champion Award',
      image: '/banner/campionaward.png',
      category: 'Industry Leadership',
      description: 'Awarded for exceptional commitment to quality, design innovation, and customer satisfaction.',
    },
    {
      title: 'International Icon Book',
      image: '/banner/internationiconbook.png',
      category: 'Global Recognition',
      description: 'Featured among international icons for transforming traditional fashion into a global trend.',
    },
    {
      title: 'IIA Award',
      image: '/banner/iia.png',
      category: 'Artisanal Excellence',
      description: 'Celebrating superior design standards and empowering local weavers and artisans.',
    },
    {
      title: 'Indian Icon Award',
      image: '/banner/indianicon.png',
      category: 'Cultural Milestone',
      description: 'Acknowledged as a pioneering brand bridging royal heritage with contemporary haute couture.',
    },





  ];

  return (
    <main className="min-h-screen bg-[#FFFCF6] text-[#352923] pb-20 relative">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden flex items-center">
        <video
          src="https://res.cloudinary.com/wqsxsuzd/video/upload/v1791740480/about_1_1_1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2A0F17]/95 via-[#352923]/75 to-transparent backdrop-blur-[1px]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 items-center">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFA00F] text-[#352923] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 shadow-lg">
              <Sparkles size={13} /> EDITORIAL INSIGHTS & HERITAGE
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FFFCF6] leading-[1.15] drop-shadow-md">
              Tradition Meets <span className="text-[#EFA00F] italic">Royal Elegance</span>
            </h1>
            
            <p className="mt-4 text-xs sm:text-sm lg:text-base text-[#F3E9D8] leading-relaxed font-light max-w-xl">
              Bringing the rich heritage and timeless craftsmanship of Jaipur to top stars and fashion lovers worldwide. Every single thread tells a royal story.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-[#F2DCA9]">
              <span className="h-2 w-2 rounded-full bg-[#EFA00F]" />
              <span>Verified celebrity partnerships & national awards recognized</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STORY INTRO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B99450]">
          Our Journey & Heritage
        </span>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#541622]">
          Vastralay: Craftsmanship, Artistry, and Trust
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          Ankit Tewari Jaipur is not just a clothing label; it is a celebration of Rajasthan&apos;s royal legacy. Through Vastralay, we bridge generations of traditional artisans with modern global fashion, creating masterpieces that exude sophistication and pure elegance.
        </p>
      </section>

      {/* ================= ABOUT THE OWNER ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6" aria-labelledby="owner-heading">
        <div className="overflow-hidden rounded-3xl border border-[#D8C092]/80 bg-white shadow-[0_14px_40px_rgba(61,30,25,0.08)]">
          <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[380px_1fr] lg:gap-14 lg:p-12">
            {/* OWNER PHOTO (jharokha arch frame) */}
            <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
              <div className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-t-[999px] rounded-b-3xl border-2 border-[#B99450]/60" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-3xl bg-[#FAF4EA] shadow-xl ring-1 ring-[#D8C092]">
                <Image
                  src="/banner/ownerpic.png"
                  alt="Dr. Ankit Tewari, founder of Vastralay"
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* OWNER DETAILS */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B99450]">
                Meet the Founder
              </span>
              <h2
                id="owner-heading"
                className="mt-2 font-serif text-3xl font-bold text-[#541622] sm:text-4xl"
              >
                Dr. Ankit Tewari
              </h2>

              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3 text-sm font-medium text-[#352923]">
                  <GraduationCap size={18} className="mt-0.5 shrink-0 text-[#B99450]" />
                  Honorary Doctorate
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-[#352923]">
                  <Briefcase size={18} className="mt-0.5 shrink-0 text-[#B99450]" />
                  HR &amp; General Manager, Shiv Vilas Group
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-[#352923]">
                  <Users size={18} className="mt-0.5 shrink-0 text-[#B99450]" />
                  Board Member, HR Federation (India &amp; Nepal)
                </li>
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                A reader, photographer and entrepreneur, Ankit Tewari looks back on his
                career as a roller-coaster ride. Through every turn, he has built his
                path on his own terms.
              </p>

              <blockquote className="mt-6 border-l-4 border-[#B99450] bg-[#FAF4EA] py-4 pl-5 pr-4 font-serif text-base italic leading-relaxed text-[#541622] sm:text-lg">
                “Rather than seeking support from my family business, I chose to carve
                my path independently. Being myself throughout this journey was both
                empowering and challenging.”
              </blockquote>

              <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                It forced him to confront self-doubt. Whenever it appears, he
                navigates it with resilience and determination.
              </p>
            </div>
          </div>

          {/* BEYOND WORK */}
          <div className="grid gap-px border-t border-[#F0E6D2] bg-[#F0E6D2] md:grid-cols-3">
            <div className="bg-white p-6 sm:p-8">
              <Coffee size={22} className="text-[#B99450]" />
              <h3 className="mt-3 font-serif text-lg font-bold text-[#541622]">
                Family comes first
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                Work and family are tough to balance, so he makes sure to have
                breakfast with his parents.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8">
              <ShieldCheck size={22} className="text-[#B99450]" />
              <h3 className="mt-3 font-serif text-lg font-bold text-[#541622]">
                A safe workplace for all
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                He advocates a safe working environment, and believes young men are
                often dismissed or not taken seriously because of age and gender.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8">
              <Plane size={22} className="text-[#B99450]" />
              <h3 className="mt-3 font-serif text-lg font-bold text-[#541622]">
                Leisure means family
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                When he finds time to unwind, he travels with his family.
              </p>
            </div>
          </div>

          {/* MUSE LINE */}
          <div className="bg-gradient-to-r from-[#380e16] via-[#541622] to-[#380e16] px-6 py-8 text-center sm:px-10">
            <p className="font-serif text-2xl font-bold text-[#F6E3B4] sm:text-3xl">
              “I am my own muse.”
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#F3E9D8]/90">
              Inspired by Frida Kahlo: I am the subject I know best, the subject I
              want to know better. He believes everyone is unique in their own way,
              and that when you stay true to yourself and focus on what you are
              passionate about, you can prove yourself.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VASTRALAY STORY & PROCESS ================= */}
      <section
        className="mt-20 bg-gradient-to-br from-[#380e16] via-[#541622] to-[#2a0b11] py-16 text-white sm:py-20"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9B968]">
              Something about our clothing brand
            </span>
            <h2
              id="process-heading"
              className="mt-2 font-serif text-3xl font-bold text-[#FFFCF6] sm:text-4xl"
            >
              Vastralay, made in our own unit since 1996
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#F3E9D8]/90 sm:text-base">
              Vastralay was established in 1996. We run our own in-house production
              with all our machines. This is how a Vastralay shirt is made, from
              plain white fabric to the finished piece.
            </p>
          </div>

          {/* KEY FACTS */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-[#D8C092]/25 rounded-2xl border border-[#D8C092]/25 bg-white/[0.05]">
            <div className="px-3 py-5 text-center">
              <p className="font-serif text-2xl font-bold text-[#EFA00F] sm:text-4xl">1996</p>
              <p className="mt-1 text-[11px] text-[#F3E9D8]/80 sm:text-xs">Established</p>
            </div>
            <div className="px-3 py-5 text-center">
              <p className="font-serif text-2xl font-bold text-[#EFA00F] sm:text-4xl">S – XXL</p>
              <p className="mt-1 text-[11px] text-[#F3E9D8]/80 sm:text-xs">Regular sizes</p>
            </div>
            <div className="px-3 py-5 text-center">
              <p className="font-serif text-2xl font-bold text-[#EFA00F] sm:text-4xl">3XL – 7XL</p>
              <p className="mt-1 text-[11px] text-[#F3E9D8]/80 sm:text-xs">On client request</p>
            </div>
          </div>

          {/* PROCESS STEPS */}
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex flex-col rounded-2xl border border-[#D8C092]/25 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#D9B968]/60 hover:bg-white/[0.09]"
              >
                <span className="font-serif text-4xl font-bold leading-none text-[#EFA00F]/90">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-serif text-xl font-bold text-[#FFFCF6]">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#F3E9D8]/85">
                  {step.text}
                </p>
                <span className="mt-4 inline-flex w-fit rounded-full border border-[#D9B968]/40 bg-[#EFA00F]/10 px-3 py-1 text-xs font-semibold text-[#F6E3B4]">
                  {step.duration}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CELEBRITY SUCCESS CARDS SECTION */}
      <section className="mt-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#8F1D2C] bg-[#FAF4EA] border border-[#D8C092] px-4 py-1.5 rounded-full">
            <Award size={15} /> Celebrity Success Wall
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#541622]">
            Loved By Celebrities & Icons
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Explore how our exclusive collections have graced special occasions with timeless charm.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {celebritySuccess.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col md:flex-row items-stretch rounded-3xl border border-[#D8C092]/80 bg-white overflow-hidden shadow-[0_10px_30px_rgba(61,30,25,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(61,30,25,0.12)]"
            >
              <div className="relative w-full md:w-[380px] h-[340px] md:h-auto shrink-0 overflow-hidden bg-[#FAF4EA]">
                <Image
                  src={item.image.trim()}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="hidden md:flex items-center justify-between mb-3">
                    <span className="bg-[#541622] text-[#FFFCF6] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#B99450]">
                      VASTRALAY FOUNDER & ICON
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#541622]">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-[#FAF4EA] px-3 py-1 rounded-full border border-[#D8C092]/60">
                      <Star size={14} className="text-[#EFA00F] fill-[#EFA00F]" />
                      <span className="text-xs font-bold text-[#541622]">Featured Star</span>
                    </div>
                  </div>

                  <h4 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#8F1D2C]">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F0E6D2] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-[#8F1D2C] flex items-center gap-1.5">
                    <CheckCircle2 size={16} /> Verified Brand Partnership
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => setActiveModal(item)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#541622] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#8F1D2C]"
                  >
                    <BookOpen size={14} /> Read <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <Collectionvideo1Page />
      </div>

      {/* AWARDS & CERTIFICATES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#8F1D2C] bg-[#FAF4EA] border border-[#D8C092] px-4 py-1.5 rounded-full">
            <Trophy size={15} /> Honors & Recognition
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#541622]">
            Awards & National Certifications
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Celebrating milestones of trust, excellence, and dedication to traditional artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsList.map((award, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl border border-[#D8C092]/80 bg-white p-6 shadow-[0_5px_20px_rgba(61,30,25,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(61,30,25,0.1)]"
            >
              <div className="relative h-[220px] w-full rounded-xl bg-[#FAF4EA] border border-[#E8DCD1] p-4 flex items-center justify-center overflow-hidden mb-5">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B99450]">
                    {award.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#541622] mt-1">
                    {award.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed font-light">
                    {award.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0E6D2] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#8F1D2C]">
                    Verified & Certified
                  </span>
                  <span className="text-[11px] font-bold text-[#541622]">
                    Ankit Tewari Jaipur
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED POPUP MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFCF6] rounded-3xl border border-[#D8C092] p-6 sm:p-8 shadow-2xl">
            
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close Modal"
              className="absolute right-5 top-5 rounded-full bg-[#FAF4EA] p-2 text-[#541622] border border-[#D8C092] transition hover:bg-[#541622] hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#541622] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {activeModal.badge}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B99450]">
                Vastralay Exclusive Story
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#541622]">
              {activeModal.name} - {activeModal.title}
            </h3>

            <div className="relative w-full h-[320px] sm:h-[380px] my-5 rounded-2xl overflow-hidden border border-[#D8C092]/60 bg-[#FAF4EA]">
              <Image
                src={activeModal.image.trim()}
                alt={activeModal.name}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 font-light">
              <p>{activeModal.fullStory}</p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-full bg-[#541622] px-7 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#8F1D2C]"
              >
                Close Story
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}