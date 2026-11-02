"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Truck,
  RotateCcw,
  Shirt,
  Wallet,
  LayoutGrid,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const EMAIL = "vastralayankit9@gmail.com";
const PHONE_DISPLAY = "+91 9782978218";
const PHONE_LINK = "tel:+91 9782978218";

const categories = [
  { key: "All", Icon: LayoutGrid },
  { key: "Orders & Delivery", Icon: Truck },
  { key: "Returns", Icon: RotateCcw },
  { key: "Products", Icon: Shirt },
  { key: "Payments", Icon: Wallet },
];

const faqs = [
  {
    id: 1,
    category: "Orders & Delivery",
    q: "How long does delivery take?",
    a: "Most orders arrive within 3–8 business days depending on your location. Please see our Shipping & Delivery page for the full timeline.",
  },
  {
    id: 2,
    category: "Orders & Delivery",
    q: "How can I track my order?",
    a: "Visit the Track Your Order page and enter your Order ID along with the phone number or email used while ordering.",
  },
  {
    id: 3,
    category: "Orders & Delivery",
    q: "Do you deliver all over India?",
    a: "Yes, we deliver across India. Delivery time may vary slightly for remote locations.",
  },
  {
    id: 4,
    category: "Orders & Delivery",
    q: "Can I change or cancel my order after placing it?",
    a: "You can request a change or cancellation before your order is dispatched. Please contact us as soon as possible with your Order ID.",
  },
  {
    id: 5,
    category: "Returns",
    q: "Can I return or exchange a product?",
    a: "Yes, you can request a return or exchange within 7 days of delivery, provided the item is unused, unwashed and has its original tags.",
  },
  {
    id: 6,
    category: "Returns",
    q: "When will I receive my refund?",
    a: "Once the returned item passes our quality check, your refund is processed within 5–7 business days to the original payment method.",
  },
  {
    id: 7,
    category: "Products",
    q: "How do I choose the right size?",
    a: "Please check the size details on each product page. If you are unsure, contact us and we will gladly help you pick the perfect fit.",
  },
  {
    id: 8,
    category: "Products",
    q: "Do you offer products for women and kids too?",
    a: "Yes! Besides men's shirts, we have beautiful kurti sets for women and traditional wear for children.",
  },
  {
    id: 9,
    category: "Products",
    q: "Will the product colour match the photos exactly?",
    a: "We try our best to show true colours, but slight variations can happen due to lighting and screen settings.",
  },
  {
    id: 10,
    category: "Payments",
    q: "Which payment methods do you accept?",
    a: "We accept UPI, cards, net banking and other popular payment options available at checkout. All payments are processed securely.",
  },
];

const supportCards = [
  {
    Icon: Phone,
    title: "Call Us",
    text: PHONE_DISPLAY,
    href: PHONE_LINK,
  },
  {
    Icon: Mail,
    title: "Email Us",
    text: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    Icon: Clock,
    title: "Support Hours",
    text: "Mon – Sat, 10 AM – 7 PM",
    href: undefined,
  },
];

export default function FaqsPage() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<number | null>(1);

  const visible =
    active === "All" ? faqs : faqs.filter((f) => f.category === active);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff8e9] via-[#fdf0d5] to-[#fff8e9] text-[#49301d]">
      {/* ================= BANNER ================= */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/banner/footer.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark brown overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3b2210]/90 via-[#5b3218]/80 to-[#3b2210]/95" />

        {/* Gold glow accents */}
        <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-[#B99450]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#B99450]/20 blur-3xl" />

        {/* Top gold line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#B99450] to-transparent" />

        <div className="relative mx-auto max-w-4xl px-5 pb-28 pt-14 text-center sm:px-8 sm:pb-32 sm:pt-20">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-[#e8d4a8]/80">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#f3dfb2]">FAQs & Support</span>
          </nav>

          {/* Eyebrow with side lines */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B99450] sm:w-16" />
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#e0be7d]">
              Help Centre
            </p>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B99450] sm:w-16" />
          </div>

          <h1 className="mt-5 font-serif text-4xl font-bold tracking-[0.08em] text-[#fff3d6] drop-shadow-md sm:text-6xl">
            FAQs & Support
          </h1>

          {/* Ornament divider */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#B99450]/70" />
            <span className="h-2.5 w-2.5 rotate-45 border border-[#e0be7d] bg-[#B99450]" />
            <span className="h-px w-16 bg-[#B99450]/70" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#f1e3c3]/90 sm:text-base">
            Quick answers to the questions our customers ask the most. Can't
            find what you need? We're always happy to help.
          </p>
        </div>

        {/* Curved bottom edge */}
        <svg
          className="absolute bottom-0 left-0 h-10 w-full text-[#fff8e9] sm:h-14"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,48 C240,90 480,0 720,32 C960,64 1200,88 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      {/* ================= SUPPORT CARDS ================= */}
      <div className="relative z-10 mx-auto -mt-6 max-w-5xl px-5 sm:-mt-8 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {supportCards.map(({ Icon, title, text, href }) => {
            const content = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d9bd8b] to-[#B99450] text-white shadow-md">
                  <Icon size={20} />
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9b7137]">
                    {title}
                  </p>
                  <p className="mt-1 break-words text-sm font-semibold text-[#5b3218]">
                    {text}
                  </p>
                </div>
              </>
            );

            const cardClass =
              "flex items-center gap-4 rounded-2xl border border-[#d9bd8b] bg-white/90 p-4 shadow-lg backdrop-blur transition duration-300";

            return href ? (
              <a
                key={title}
                href={href}
                className={`${cardClass} hover:-translate-y-1 hover:border-[#B99450] hover:shadow-xl`}
              >
                {content}
              </a>
            ) : (
              <div key={title} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-16">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#5b3218] sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-14 rounded-full bg-[#B99450]" />
        </div>

        {/* Category pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {categories.map(({ key, Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setActive(key);
                  setOpen(null);
                }}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide shadow-sm transition duration-300 sm:text-[13px] ${
                  isActive
                    ? "border-[#8b5e2b] bg-gradient-to-r from-[#8b5e2b] to-[#6b4420] text-white shadow-md"
                    : "border-[#d9bd8b] bg-white/80 text-[#785020] hover:-translate-y-0.5 hover:border-[#B99450] hover:bg-[#B99450]/10"
                }`}
              >
                <Icon size={14} />
                {key}
              </button>
            );
          })}
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {visible.map((item) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl border bg-white/80 shadow-sm backdrop-blur transition duration-300 ${
                  isOpen
                    ? "border-[#B99450] shadow-lg"
                    : "border-[#d9bd8b]/70 hover:border-[#B99450]/70 hover:shadow-md"
                }`}
              >
                {/* Gold accent bar */}
                <span
                  className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#e0be7d] to-[#B99450] transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition duration-300 ${
                      isOpen
                        ? "border-[#B99450] bg-gradient-to-br from-[#d9bd8b] to-[#B99450] text-white shadow"
                        : "border-[#d9bd8b] bg-[#B99450]/10 text-[#9a6421]"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>

                  <span className="flex-1">
                    <span className="block font-serif text-base font-bold text-[#5b3218] sm:text-lg">
                      {item.q}
                    </span>
                    <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a8864f]">
                      {item.category}
                    </span>
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#8b5e2b] text-white"
                        : "bg-[#B99450]/15 text-[#a87527]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 border-t border-dashed border-[#d9bd8b] pb-5 pt-4 sm:mx-6 sm:pb-6">
                      <p className="text-sm leading-7 text-[#655342] sm:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help box */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-[#B99450]/60 bg-gradient-to-br from-[#5b3218] via-[#6b4420] to-[#3b2210] p-8 text-center shadow-xl sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#B99450]/25 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#B99450]/20 blur-2xl" />

          <h3 className="relative font-serif text-2xl font-bold text-[#fff3d6]">
            Still need help?
          </h3>
          <p className="relative mx-auto mt-3 max-w-md text-sm leading-6 text-[#f1e3c3]/90">
            Can't find your answer here? Our team is happy to assist you with
            anything you need.
          </p>
          <Link
            href="/Contact"
            className="relative mt-6 inline-block rounded-full bg-gradient-to-r from-[#d9bd8b] to-[#B99450] px-8 py-3 text-sm font-bold text-[#3b2210] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}