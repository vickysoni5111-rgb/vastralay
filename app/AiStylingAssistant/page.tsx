'use client';

import { useState, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Phone, MapPin, CheckCircle2, ChevronRight, ShoppingBag } from 'lucide-react';

export default function AiStylingAssistant() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1); // Step 1: Personal Details, Step 2: Product Preferences, Step 3: Success

  // Form States
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [preferences, setPreferences] = useState({
    categories: [] as string[],
    occasion: 'Festive & Wedding',
    colorPreference: 'Royal Maroon & Gold',
    size: 'Medium (M)',
  });

  useEffect(() => {
    setMounted(true);
    // Auto-open widget automatically after entering website
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const categoryOptions = [
    'Luxury Kurti Set',
    'Designer T-Shirt',
    'Handcrafted Ethnic Shirt',
    'Lehenga / Festive Attire',
    'Bespoke Tailored Outfit',
  ];

  const toggleCategory = (item: string) => {
    if (preferences.categories.includes(item)) {
      setPreferences({
        ...preferences,
        categories: preferences.categories.filter((c) => c !== item),
      });
    } else {
      setPreferences({
        ...preferences,
        categories: [...preferences.categories, item],
      });
    }
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!personalDetails.name || !personalDetails.phone || !personalDetails.address) return;
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (preferences.categories.length === 0) return;

    setStep(3);

    const PHONE_NUMBER = '9782978218';
    
    const message = 
      `*👑 NEW AI STYLING INQUIRY - ANKIT TEWARI JAIPUR*%0A%0A` +
      `*👤 CUSTOMER DETAILS:*%0A` +
      `• *Name:* ${encodeURIComponent(personalDetails.name)}%0A` +
      `• *Phone:* ${encodeURIComponent(personalDetails.phone)}%0A` +
      `• *Address:* ${encodeURIComponent(personalDetails.address)}%0A%0A` +
      `*🛍️ OUTFIT PREFERENCES:*%0A` +
      `• *Interested In:* ${encodeURIComponent(preferences.categories.join(', '))}%0A` +
      `• *Occasion:* ${encodeURIComponent(preferences.occasion)}%0A` +
      `• *Color Choice:* ${encodeURIComponent(preferences.colorPreference)}%0A` +
      `• *Preferred Size:* ${encodeURIComponent(preferences.size)}`;

    const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const resetAssistant = () => {
    setStep(1);
    setPersonalDetails({ name: '', phone: '', address: '' });
    setPreferences({
      categories: [],
      occasion: 'Festive & Wedding',
      colorPreference: 'Royal Maroon & Gold',
      size: 'Medium (M)',
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans" suppressHydrationWarning>
      
      {/* FLOATING TRIGGER BUTTON (When closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 bg-gradient-to-r from-[#380e16] via-[#541622] to-[#8F1D2C] hover:from-[#541622] hover:to-[#a32233] text-[#FFFCF6] px-5 py-3.5 rounded-full shadow-[0_10px_35px_rgba(84,22,34,0.35)] border border-[#D8C092]/60 transition-all duration-300 hover:scale-105"
          aria-label="Open AI Robot Stylist"
        >
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EFA00F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EFA00F]"></span>
          </span>
          <Bot size={22} className="text-[#EFA00F] animate-bounce" />
          <span className="text-xs font-bold uppercase tracking-widest">AI Stylist Bot</span>
        </button>
      )}

      {/* CHAT WIDGET POPUP */}
      {isOpen && (
        <div className="w-[360px] sm:w-[410px] bg-[#FFFCF6] border border-[#D8C092] rounded-3xl shadow-[0_20px_60px_rgba(53,41,35,0.25)] overflow-hidden flex flex-col transition-all animate-in fade-in slide-in-from-bottom-5">
          
          {/* HEADER WITH ROBOT ICON */}
          <div className="bg-gradient-to-r from-[#380e16] via-[#541622] to-[#2a0b11] p-4 text-white flex items-center justify-between border-b border-[#D8C092]/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#EFA00F] to-[#ffd073] text-[#352923] flex items-center justify-center font-bold shadow-md border border-[#FFFCF6]/30">
                <Bot size={24} className="text-[#352923]" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold tracking-wide text-[#FFFCF6] flex items-center gap-1.5">
                  Vastralay AI Bot <Sparkles size={13} className="text-[#EFA00F]" />
                </h3>
                <p className="text-[10px] text-[#F3E9D8]/80 font-light flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online • Automated Personal Stylist
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#FFFCF6]/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition"
              aria-label="Close Assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* BODY */}
          <div className="p-5 max-h-[440px] overflow-y-auto space-y-4 bg-[#FAF4EA]/40">
            
            {/* Greeting */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#541622] text-[#EFA00F] flex items-center justify-center shrink-0 border border-[#D8C092]/60 shadow-xs">
                <Bot size={18} />
              </div>
              <div className="bg-white border border-[#D8C092]/60 p-3.5 rounded-2xl rounded-tl-none text-xs text-[#352923] shadow-xs leading-relaxed">
                Namaste! 🤖 I am your AI Royal Stylist Bot. Fill in your details below to get customized outfit suggestions directly on your WhatsApp!
              </div>
            </div>

            {/* STEP 1: PERSONAL DETAILS */}
            {step === 1 && (
              <form onSubmit={handlePersonalSubmit} className="bg-white border border-[#D8C092]/80 p-4 rounded-2xl shadow-xs space-y-3.5">
                <div className="flex items-center justify-between border-b border-[#F0E6D2] pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B99450] flex items-center gap-1.5">
                    <User size={13} /> Step 1: Your Information
                  </span>
                  <span className="text-[10px] font-semibold text-[#8F1D2C]">1 of 2</span>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#541622] mb-1 uppercase tracking-wider">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={personalDetails.name}
                    onChange={(e) => setPersonalDetails({ ...personalDetails, name: e.target.value })}
                    className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-3.5 py-2.5 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#541622] mb-1 uppercase tracking-wider">WhatsApp Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={personalDetails.phone}
                    onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })}
                    className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-3.5 py-2.5 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#541622] mb-1 uppercase tracking-wider">Delivery Address / City</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="e.g. C-Scheme, Jaipur, Rajasthan"
                    value={personalDetails.address}
                    onChange={(e) => setPersonalDetails({ ...personalDetails, address: e.target.value })}
                    className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-3.5 py-2.5 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#541622] hover:bg-[#8F1D2C] py-3 px-4 text-white text-xs font-bold uppercase tracking-wider shadow-md transition"
                >
                  Continue to Preferences <ChevronRight size={15} />
                </button>
              </form>
            )}

            {/* STEP 2: INTEREST & PREFERENCES */}
            {step === 2 && (
              <form onSubmit={handleFinalSubmit} className="bg-white border border-[#D8C092]/80 p-4 rounded-2xl shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#F0E6D2] pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B99450] flex items-center gap-1.5">
                    <ShoppingBag size={13} /> Step 2: Choose Interests
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[10px] text-gray-500 hover:text-[#541622] underline"
                  >
                    Edit Info
                  </button>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-[10px] font-bold text-[#541622] mb-1.5 uppercase tracking-wider">
                    Select What You're Interested In (Multiple):
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {categoryOptions.map((cat, idx) => {
                      const isSelected = preferences.categories.includes(cat);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                            isSelected
                              ? 'bg-[#541622] text-white border-[#541622] shadow-xs'
                              : 'bg-[#FAF4EA]/60 text-[#352923] border-[#D8C092]/60 hover:bg-[#D8C092]/20'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}{cat}
                        </button>
                      );
                    })}
                  </div>
                  {preferences.categories.length === 0 && (
                    <p className="text-[10px] text-red-600 mt-1">* Please select at least one item</p>
                  )}
                </div>

                {/* Size Selection */}
                <div>
                  <label className="block text-[10px] font-bold text-[#541622] mb-1 uppercase tracking-wider">Preferred Size</label>
                  <select
                    value={preferences.size}
                    onChange={(e) => setPreferences({ ...preferences, size: e.target.value })}
                    className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-3.5 py-2 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition"
                  >
                    <option value="Small (S)">Small (S)</option>
                    <option value="Medium (M)">Medium (M)</option>
                    <option value="Large (L)">Large (L)</option>
                    <option value="XL / XXL">XL / XXL</option>
                    <option value="Custom Tailored Measurements">Custom Tailored Measurements</option>
                  </select>
                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-[10px] font-bold text-[#541622] mb-1 uppercase tracking-wider">Occasion</label>
                  <select
                    value={preferences.occasion}
                    onChange={(e) => setPreferences({ ...preferences, occasion: e.target.value })}
                    className="w-full rounded-xl border border-[#D8C092]/80 bg-[#FAF4EA]/50 px-3.5 py-2 text-xs text-[#352923] focus:bg-white focus:outline-none focus:border-[#541622] transition"
                  >
                    <option value="Wedding / Engagement">Wedding / Engagement</option>
                    <option value="Festive Celebration">Festive Celebration</option>
                    <option value="Party & Evening Wear">Party & Evening Wear</option>
                    <option value="Casual & Daily Royal">Casual & Daily Royal</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={preferences.categories.length === 0}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#EFA00F] hover:bg-[#df930c] disabled:opacity-50 py-3 px-4 text-[#352923] text-xs font-bold uppercase tracking-widest shadow-md transition"
                >
                  <Send size={15} /> Send Profile via WhatsApp
                </button>
              </form>
            )}

            {/* STEP 3: SUCCESS STATE */}
            {step === 3 && (
              <div className="py-6 text-center space-y-3 bg-white border border-[#D8C092]/80 rounded-2xl p-5 shadow-xs">
                <div className="w-12 h-12 bg-[#EFF8F0] border border-[#D5E9D9] text-[#267442] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={26} />
                </div>
                <h4 className="font-serif text-base font-bold text-[#541622]">Details Transferred!</h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Opening WhatsApp with your personalized inquiry profile... Our royal team will connect with you shortly.
                </p>
                <button
                  onClick={resetAssistant}
                  className="mt-2 text-[11px] font-bold text-[#8F1D2C] hover:underline uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

          </div>

          {/* FOOTER */}
          <div className="bg-[#FAF4EA] px-4 py-2 border-t border-[#D8C092]/60 text-center text-[10px] text-gray-500 font-light">
         Vastralay • AI Concierge Bot
          </div>

        </div>
      )}

    </div>
  );
}