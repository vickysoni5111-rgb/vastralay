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
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Building2,
  Headphones,
  CalendarCheck,
} from 'lucide-react';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bespoke Styling Appointment',
    message: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const PHONE_NUMBER = '9782978218';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      '*New Royal Inquiry - Ankit Tewari Jaipur*',
      '',
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Inquiry Type:* ${formData.subject}`,
      `*Message:* ${formData.message}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Do you offer custom tailoring and bespoke design services?',
      a: 'Yes! Ankit Tewari Jaipur offers personalized custom tailoring for luxury Kurtis, traditional shirts, and bridal/groom festive attire. You can schedule a consultation via phone or form.',
    },
    {
      q: 'Where is the physical boutique located in Jaipur?',
      a: 'Our flagship store is located in the prime Traditional Heritage Zone of Jaipur, Rajasthan. You are welcome to visit during our working hours.',
    },
    {
      q: 'How long does domestic and international shipping take?',
      a: 'Standard domestic orders arrive within 3-5 business days. Custom crafted pieces and international orders take approximately 7-10 business days.',
    },
    {
      q: 'Can I place an order directly via WhatsApp?',
      a: 'Absolutely! Click on any WhatsApp action button on our store to directly connect with our customer support team for instant order placement.',
    },
  ];

  // Prevent hydration mismatch by returning empty shell until mounted on client
  if (!mounted) {
    return <main className="min-h-screen bg-[#FFFCF6]" />;
  }

  return (
    <main className="min-h-screen bg-[#FFFCF6] text-[#352923] pb-20" suppressHydrationWarning>
      
      {/* ROYAL HERO BANNER SECTION */}
      <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] bg-gradient-to-r from-[#380e16] via-[#541622] to-[#2a0b11] overflow-hidden flex items-center justify-center border-b border-[#D8C092]/40 shadow-xl">
        
        <div className="absolute inset-0 bg-[radial-gradient(#EFA00F/12_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-[#EFA00F]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-[#8F1D2C]/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFA00F] text-[#352923] text-[11px] font-bold uppercase tracking-[0.22em] mb-4 shadow-lg">
            <Sparkles size={13} /> Ankit Tewari Jaipur
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FFFCF6] leading-tight drop-shadow-md">
            Connect With Our <span className="text-[#EFA00F] italic">Royal Concierge</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[#F3E9D8]/90 font-light max-w-2xl mx-auto leading-relaxed">
            Whether you seek custom sizing, bridal wardrobe styling, or order inquiries, our boutique team is here to assist you with quintessential Rajasthani hospitality.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-[#F2DCA9]">
            <span className="flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D8C092]/30">
              <Building2 size={13} className="text-[#EFA00F]" /> Heritage Store Jaipur
            </span>
            <span className="flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D8C092]/30">
              <Headphones size={13} className="text-[#EFA00F]" /> 24/7 Dedicated Support
            </span>
            <span className="flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D8C092]/30">
              <CalendarCheck size={13} className="text-[#EFA00F]" /> Bespoke Styling Available
            </span>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl border border-[#D8C092]/80 p-6 shadow-[0_10px_30px_rgba(61,30,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(61,30,25,0.12)]">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#D8C092]/60 text-[#541622] flex items-center justify-center mb-4 shadow-sm">
              <MapPin size={22} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99450]">Flagship Boutique</span>
            <h3 className="font-serif text-xl font-bold text-[#541622] mt-1">Visit Jaipur Store</h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed font-light">
              Traditional Heritage Zone, Near Main Rajbari, Jaipur, Rajasthan, 302001
            </p>
            <div className="mt-4 pt-3 border-t border-[#F0E6D2] text-[11px] font-bold text-[#8F1D2C] flex items-center justify-between">
              <span>Mon - Sat: 10 AM - 8 PM</span>
              <span className="text-[#EFA00F]">&bull; Open Today</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#D8C092]/80 p-6 shadow-[0_10px_30px_rgba(61,30,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(61,30,25,0.12)]">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#D8C092]/60 text-[#541622] flex items-center justify-center mb-4 shadow-sm">
              <Phone size={22} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99450]">Direct Helpline</span>
            <h3 className="font-serif text-xl font-bold text-[#541622] mt-1">Call / WhatsApp</h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed font-light">
              Speak directly with our fashion consultants for sizing & custom tailoring.
            </p>
            <a
              href={`https://wa.me/91${PHONE_NUMBER}?text=Namaste!%20Mujhe%20inquiry%20karni%20thi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20C967] hover:underline"
            >
              <MessageCircle size={15} /> +91 {PHONE_NUMBER} &rarr;
            </a>
          </div>

          <div className="bg-white rounded-3xl border border-[#D8C092]/80 p-6 shadow-[0_10px_30px_rgba(61,30,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(61,30,25,0.12)]">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#D8C092]/60 text-[#541622] flex items-center justify-center mb-4 shadow-sm">
              <Mail size={22} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99450]">Email Support</span>
            <h3 className="font-serif text-xl font-bold text-[#541622] mt-1">Write To Us</h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed font-light">
              Send us your bulk queries, press inquiries, or order status requests.
            </p>
            <a
              href="mailto:support@ankittewarijaipur.com"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#541622] hover:text-[#EFA00F]"
            >
              support@ankittewarijaipur.com &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* FORM & LOCATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#D8C092]/80 p-6 sm:p-10 shadow-[0_10px_35px_rgba(61,30,25,0.06)]">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#EFF8F0] border border-[#D5E9D9] text-[#267442] rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#541622]">Redirected to WhatsApp!</h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto font-light leading-relaxed">
                    Thank you for contacting Ankit Tewari Jaipur. WhatsApp has opened with your inquiry details. Our concierge will respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#541622] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#8F1D2C] transition shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B99450]">
                      Get In Touch
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#541622] mt-1">
                      Send Us A Royal Message
                    </h2>
                    <p className="text-xs text-gray-600 mt-1 font-light">
                      Fill out the form below and it will seamlessly open on WhatsApp with your details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#541622] mb-1.5 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Vicky Soni"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-4 py-3 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#541622] mb-1.5 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="vicky@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-4 py-3 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#541622] mb-1.5 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 97829 78218"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-4 py-3 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#541622] mb-1.5 uppercase tracking-wider">Inquiry Type</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-4 py-3 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition"
                      >
                        <option value="Bespoke Styling Appointment">Bespoke Styling Appointment</option>
                        <option value="Custom Tailoring Inquiry">Custom Tailoring Inquiry</option>
                        <option value="Bulk Order & Festive Wholesale">Bulk Order & Festive Wholesale</option>
                        <option value="Online Order & Shipping">Online Order & Shipping</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#541622] mb-1.5 uppercase tracking-wider">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify size requirements, event dates, or custom styling requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-4 py-3 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#EFA00F] hover:bg-[#df930c] py-3.5 px-6 text-[#352923] text-xs font-bold uppercase tracking-widest shadow-md transition hover:scale-[1.01]"
                  >
                    <Send size={15} /> Send via WhatsApp
                  </button>
                </form>
              )}

            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-white rounded-3xl border border-[#D8C092]/80 p-4 shadow-[0_10px_35px_rgba(61,30,25,0.06)] flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#541622] flex items-center gap-1.5">
                  <MapPin size={16} className="text-[#8F1D2C]" /> Jaipur Flagship Location
                </span>
                <span className="text-[10px] font-semibold text-[#B99450]">Rajasthan, India</span>
              </div>
              <div className="relative w-full h-[260px] lg:h-full rounded-2xl overflow-hidden border border-[#E8DCD1]">
                <iframe
                  title="Ankit Tewari Jaipur Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113838.25301828062!2d75.71988891040858!3d26.885141680108316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4cdf4c57b323%3A0x5e62f558d7c49372!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#541622] to-[#8F1D2C] rounded-3xl p-6 sm:p-8 text-[#FFFCF6] border border-[#D8C092] shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2.5 rounded-full bg-[#20C967] text-white">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold">Instant Personal Consultation</h4>
                  <p className="text-[11px] text-[#F3E9D8] font-light">Available Mon-Sat: 10:00 AM - 8:00 PM IST</p>
                </div>
              </div>
              <p className="text-xs text-[#F3E9D8]/90 mt-3 leading-relaxed font-light">
                Prefer direct messaging? Chat live with our styling specialists on WhatsApp for instant catalog sharing and order updates.
              </p>
              <a
                href={`https://wa.me/91${PHONE_NUMBER}?text=Namaste!%20Mujhe%20collection%20inquiry%20karni%20hai.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block w-full text-center rounded-full bg-[#20C967] hover:bg-[#18AD56] py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md transition"
              >
                Start WhatsApp Chat
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B99450]">
            Help & Guidance
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#541622]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#D8C092]/70 bg-white overflow-hidden shadow-sm transition"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-serif text-base font-bold text-[#541622]"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#8F1D2C] transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed font-light border-t border-[#F0E6D2] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BOTTOM BAR */}
      <section className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <div className="bg-[#FAF4EA] border border-[#D8C092] rounded-3xl p-8 sm:p-10 shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-[#541622] mb-2">Looking For Our Complete Collection?</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 font-light">
            Explore our curated selection of luxury Kurtis, handcrafted ethnic shirts, and designer menswear.
          </p>
          <Link
            href="/collection"
            className="inline-block rounded-full bg-[#541622] hover:bg-[#8F1D2C] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition"
          >
            Explore Collection Now
          </Link>
        </div>
      </section>

    </main>
  );
}