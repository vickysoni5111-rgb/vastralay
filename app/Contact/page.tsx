'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
  Navigation,
  ArrowRight,
  Sparkles,
  Plus,
  Minus,
} from 'lucide-react';

const PHONE_NUMBER = '9782978218';
const EMAIL = 'support@ankittewarijaipur.com';
const ADDRESS = '20/4, Bhrigu Path, Sector 21, Mansarovar, Jaipur, Rajasthan 302020';

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const HERO_IMAGE = '/banner/contactheropage.png';
const LOCATION_IMAGE = '/banner/locationbg.png';

const wa = (msg: string) => `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;

const faqs = [
  {
    q: 'Do you offer custom tailoring and bespoke design services?',
    a: 'Yes. Ankit Tewari Jaipur makes custom-tailored luxury kurtis, traditional shirts and festive attire for weddings. Book a consultation by phone, WhatsApp or the form on this page.',
  },
  {
    q: 'Where is the store in Jaipur?',
    a: `Our store is at ${ADDRESS}. Use the Get directions button on this page to open it in Google Maps. We are open Monday to Saturday, 10 AM to 8 PM.`,
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard domestic orders arrive in 3-5 business days. Custom-made pieces and international orders take about 7-10 business days.',
  },
  {
    q: 'Can I place an order on WhatsApp?',
    a: 'Yes. Tap any WhatsApp button on this page to chat with our team, get the catalogue and place your order directly.',
  },
];

// shared styles
const card =
  'flex h-full flex-col rounded-3xl border border-[#D8C092]/80 bg-white p-6 shadow-[0_12px_34px_rgba(61,30,25,0.08)] sm:p-7';
const iconBox =
  'mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D8C092]/60 bg-[#FAF4EA] text-[#541622]';
const cardTitle = 'font-serif text-lg font-bold text-[#541622]';
const cardText = 'mt-2 flex-1 text-sm font-light leading-relaxed text-[#352923]/75';
const cardFoot = 'mt-6 flex items-center justify-between gap-3 border-t border-[#F0E6D2] pt-4 text-xs';
const sectionTitle = 'font-serif text-2xl font-bold text-[#541622] sm:text-3xl';
const sectionText = 'mt-3 max-w-md text-sm font-light leading-relaxed text-[#352923]/75';
const fieldBase =
  'w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/60 px-4 text-sm text-[#352923] placeholder:text-[#352923]/40 transition focus:border-[#541622] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EFA00F]/40';
const labelClass = 'mb-2 block text-xs font-semibold text-[#541622]';
const wrap = 'mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10';

function getStoreStatus() {
  const now = new Date();
  const open = now.getDay() !== 0 && now.getHours() >= 10 && now.getHours() < 20;
  return open ? 'Open now' : 'Closed now';
}

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [status, setStatus] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bespoke Styling Appointment',
    message: '',
  });

  useEffect(() => {
    setMounted(true);
    setStatus(getStoreStatus());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      '*New Inquiry - Ankit Tewari Jaipur*',
      '',
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Inquiry Type:* ${formData.subject}`,
      `*Message:* ${formData.message}`,
    ].join('\n');
    window.open(wa(text), '_blank');
    setSubmitted(true);
  };

  // Prevent hydration mismatch by returning empty shell until mounted on client
  if (!mounted) {
    return <main className="min-h-screen bg-[#FFFCF6]" />;
  }

  const isOpen = status === 'Open now';

  const locationRows = [
    { icon: MapPin, label: 'Address', value: ADDRESS },
    { icon: Clock, label: 'Store hours', value: `Mon–Sat, 10 AM–8 PM (${status})` },
    { icon: Phone, label: 'Phone', value: `+91 ${PHONE_NUMBER}` },
  ];

  return (
    <main className="min-h-screen bg-[#FFFCF6] pb-20 text-[#352923]" suppressHydrationWarning>
     {/* ───────────── HERO ───────────── */}
<section className={`${wrap} pt-4 sm:pt-5`}>
  <div className="relative overflow-hidden rounded-[28px] bg-[#2a0b11] shadow-xl lg:flex lg:h-[560px] lg:items-center lg:rounded-[32px]">
    {/* Photo: mobile pe poori dikhegi, desktop pe background ban jayegi */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={HERO_IMAGE}
      alt="Ankit Tewari Jaipur"
      className="block h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-center"
    />

    {/* Dark overlay sirf desktop pe (text readable rahe) */}
    <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#2a0b11]/90 via-[#2a0b11]/50 to-transparent lg:block" />

    {/* Mobile pe photo aur text ke beech gold line */}
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B99450] to-transparent lg:hidden" />

    {/* Content */}
    <div className="relative z-10 max-w-2xl px-5 py-7 sm:px-8 sm:py-9 lg:px-16 lg:py-0">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-[11px]">
        <Sparkles size={14} className="text-[#F2788A]" /> Ankit Tewari Jaipur
      </div>

      <h1 className="mt-4 font-serif text-2xl font-bold leading-[1.2] text-white drop-shadow-md sm:text-3xl lg:mt-5 lg:text-4xl">
        Let&rsquo;s plan your next outfit, together.
      </h1>

      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 lg:mt-4">
        Custom sizing, wedding and festive styling, or a question about your order. Message us and a real
        person from our Jaipur store will reply.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-7">
        <Link
          href="/collection"
          className="inline-flex items-center gap-2 rounded-full bg-[#E03A50] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#c92f44] sm:text-sm"
        >
          Explore collection <ArrowRight size={16} />
        </Link>
        <a
          href={wa('Namaste! Mujhe inquiry karni thi.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-black/55 sm:text-sm"
        >
          <MessageCircle size={16} /> WhatsApp inquiry
        </a>
      </div>
    </div>
  </div>
</section>

      {/* ───────────── QUICK CONTACT CARDS ───────────── */}
      <section className={`${wrap} mt-8`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className={card}>
            <div className={iconBox}>
              <MapPin size={22} />
            </div>
            <h3 className={cardTitle}>Visit our store</h3>
            <p className={cardText}>{ADDRESS}</p>
            <div className={cardFoot}>
              <span className="font-semibold text-[#8F1D2C]">Mon–Sat: 10 AM–8 PM</span>
              <span className="flex items-center gap-1.5 font-semibold text-[#541622]">
                <span className={`h-2 w-2 rounded-full ${isOpen ? 'bg-[#20C967]' : 'bg-[#B99450]'}`} />
                {status}
              </span>
            </div>
          </div>

          <div className={card}>
            <div className={iconBox}>
              <Phone size={22} />
            </div>
            <h3 className={cardTitle}>Call or WhatsApp</h3>
            <p className={cardText}>
              Talk to our fashion consultants about sizing, fabrics and custom tailoring.
            </p>
            <div className={cardFoot}>
              <a
                href={wa('Namaste! Mujhe inquiry karni thi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-bold text-[#18AD56] hover:underline"
              >
                <MessageCircle size={14} /> +91 {PHONE_NUMBER}
              </a>
              <a href={`tel:+91${PHONE_NUMBER}`} className="font-semibold text-[#541622] hover:text-[#8F1D2C]">
                Call now
              </a>
            </div>
          </div>

          <div className={card}>
            <div className={iconBox}>
              <Mail size={22} />
            </div>
            <h3 className={cardTitle}>Email us</h3>
            <p className={cardText}>Send bulk orders, press requests or order status questions.</p>
            <div className={cardFoot}>
              <a
                href={`mailto:${EMAIL}`}
                className="min-w-0 truncate font-bold text-[#541622] hover:text-[#8F1D2C]"
              >
                {EMAIL}
              </a>
              <ArrowRight size={14} className="shrink-0 text-[#8F1D2C]" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FORM ───────────── */}
      <section className={`${wrap} mt-16`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* left: intro + whatsapp */}
          <div className="lg:col-span-5">
            <h2 className={sectionTitle}>Write to us</h2>
            <p className={sectionText}>
              Share your size, event date or the outfit you have in mind. Your message opens in WhatsApp, ready
              to send.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-[#352923]/80">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D8C092]/60 bg-[#FAF4EA] text-[#541622]">
                <Clock size={18} />
              </span>
              We reply Monday to Saturday, 10 AM to 8 PM.
            </div>

            <div className="mt-8 rounded-3xl border border-[#D8C092]/60 bg-gradient-to-r from-[#541622] to-[#8F1D2C] p-6 text-[#FFFCF6] shadow-xl sm:p-7">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#20C967] p-2.5 text-white">
                  <MessageCircle size={20} />
                </span>
                <h3 className="font-serif text-base font-bold sm:text-lg">Prefer to chat?</h3>
              </div>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#F3E9D8]/90">
                Get the catalogue, check availability and track your order on WhatsApp.
              </p>
              <a
                href={wa('Namaste! Mujhe collection inquiry karni hai.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full rounded-full bg-[#20C967] py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-[#18AD56]"
              >
                Start WhatsApp chat
              </a>
            </div>
          </div>

          {/* right: form card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#D8C092]/80 bg-white p-6 shadow-[0_12px_40px_rgba(61,30,25,0.08)] sm:p-10">
              {submitted ? (
                <div className="space-y-4 py-14 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D5E9D9] bg-[#EFF8F0] text-[#267442]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#541622] sm:text-2xl">WhatsApp is open</h3>
                  <p className="mx-auto max-w-md text-sm font-light leading-relaxed text-[#352923]/75">
                    Your inquiry is ready in WhatsApp. Tap send there and our team will reply shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 rounded-full bg-[#541622] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#8F1D2C]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} suppressHydrationWarning>
                  <div className="mb-8 border-b border-[#F0E6D2] pb-6">
                    <h3 className="font-serif text-xl font-bold text-[#541622] sm:text-2xl">Send us a message</h3>
                    <p className="mt-1.5 text-sm font-light text-[#352923]/70">
                      All fields are required so we can reply properly.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClass}>Full name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`${fieldBase} h-12`}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email address</label>
                        <input
                          id="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`${fieldBase} h-12`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone number</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="Enter your mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`${fieldBase} h-12`}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className={labelClass}>Inquiry type</label>
                        <div className="relative">
                          <select
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className={`${fieldBase} h-12 appearance-none pr-10`}
                          >
                            <option value="Bespoke Styling Appointment">Bespoke styling appointment</option>
                            <option value="Custom Tailoring Inquiry">Custom tailoring inquiry</option>
                            <option value="Bulk Order & Festive Wholesale">Bulk order &amp; festive wholesale</option>
                            <option value="Online Order & Shipping">Online order &amp; shipping</option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8F1D2C]"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>Your message</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Tell us your size, event date or the outfit you have in mind..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${fieldBase} resize-none py-3`}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#541622] px-6 text-sm font-semibold text-white shadow-md transition hover:bg-[#8F1D2C] focus:outline-none focus:ring-2 focus:ring-[#EFA00F]"
                      >
                        <Send size={16} /> Send on WhatsApp
                      </button>
                      <p className="mt-3 text-center text-xs font-light text-[#352923]/60">
                        Tapping send opens WhatsApp with your details filled in.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── LOCATION (full-width bg image) ───────────── */}
      <section
        className="relative mt-16 flex min-h-[700px] w-full items-center overflow-hidden bg-[#2a0b11] bg-cover bg-center py-16 lg:min-h-[760px]"
        style={{ backgroundImage: `url('${LOCATION_IMAGE}')` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#2a0b11]/90 via-[#2a0b11]/55 to-[#2a0b11]/30" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#EFA00F] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#EFA00F] to-transparent" />

        <div className={`${wrap} relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12`}>
          {/* info panel */}
          <div className="rounded-3xl border border-[#D8C092]/40 bg-[#2a0b11]/60 p-7 text-[#FFFCF6] shadow-2xl backdrop-blur-md sm:p-9 lg:col-span-5">
            <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
              Find us in Mansarovar, Jaipur
            </h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-[#F3E9D8]/85">
              Visit the store to see fabrics, try sizes and book custom tailoring in person.
            </p>

            <ul className="mt-7 space-y-5">
              {locationRows.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFA00F] text-[#352923]">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#F2DCA9]">{label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#FFFCF6]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#EFA00F] px-6 py-3 text-sm font-semibold text-[#352923] shadow-md transition hover:bg-[#df930c]"
              >
                <Navigation size={16} /> Get directions
              </a>
              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} /> Call store
              </a>
            </div>
          </div>

          {/* map */}
          <div className="lg:col-span-7">
            <div className="relative h-[360px] overflow-hidden rounded-3xl border-4 border-[#FFFCF6]/90 bg-[#FFFCF6] shadow-2xl sm:h-[460px] lg:h-[560px]">
              <iframe
                title="Ankit Tewari Jaipur store location, Mansarovar"
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className={`${wrap} mt-16`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className={sectionTitle}>Common questions</h2>
            <p className={sectionText}>
              Can&rsquo;t find your answer here? Message us on WhatsApp and we&rsquo;ll help.
            </p>
            <a
              href={wa('Namaste! Mujhe ek sawal poochna tha.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#20C967] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#18AD56]"
            >
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {faqs.map((faq, idx) => {
              const isFaqOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition ${
                    isFaqOpen ? 'border-[#B99450]' : 'border-[#D8C092]/70'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isFaqOpen}
                    onClick={() => setOpenFaq(isFaqOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-sm font-bold text-[#541622] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EFA00F] sm:p-6 sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isFaqOpen ? 'bg-[#541622] text-white' : 'bg-[#FAF4EA] text-[#8F1D2C]'
                      }`}
                    >
                      {isFaqOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isFaqOpen && (
                    <div className="border-t border-[#F0E6D2] px-5 pb-6 pt-4 text-sm font-light leading-relaxed text-[#352923]/80 sm:px-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="mx-auto mt-16 max-w-4xl px-4 text-center">
        <div className="rounded-3xl border border-[#D8C092] bg-[#FAF4EA] p-8 shadow-sm sm:p-10">
          <h3 className="font-serif text-xl font-bold text-[#541622] sm:text-2xl">
            Want to see the full collection first?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm font-light leading-relaxed text-[#352923]/75">
            Browse our kurtis, handcrafted ethnic shirts and designer menswear.
          </p>
          <Link
            href="/collection"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#541622] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#8F1D2C]"
          >
            Browse the collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}