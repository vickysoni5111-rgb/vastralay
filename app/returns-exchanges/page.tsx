import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ElementType, ReactNode } from "react";
import {
  RotateCcw,
  ChevronRight,
  ChevronDown,
  CalendarCheck,
  PackageCheck,
  Search,
  Wallet,
  Check,
  X,
  Mail,
  MapPin,
  Camera,
  Shirt,
  Tag,
  Receipt,
  ShieldCheck,
  ArrowLeftRight,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Vastralay",
  description:
    "Easy 7-day returns and exchanges on Vastralay orders. Eligibility, process and refund details.",
};

// Yahan se email badal sakte hain
const EMAIL = "vastralayankit9@gmail.com";
const UPDATED = "November 2026";

const heading = "font-[family-name:var(--font-heading)]";

function Card({
  icon: Icon,
  title,
  intro,
  children,
}: {
  icon: ElementType;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#eadcc0] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(89,57,29,0.35)] sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B99450]/15 text-[#a87527]">
          <Icon size={21} />
        </span>
        <h2 className={`${heading} text-xl font-bold text-[#59391d] sm:text-2xl`}>
          {title}
        </h2>
      </div>
      {intro && (
        <p className="mt-4 text-[15px] leading-7 text-[#655342]">{intro}</p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}

const faqs = [
  {
    q: "Can I cancel my order before it ships?",
    a: "Yes. Email us with your order ID before the order is dispatched and we will cancel it and refund you in full.",
  },
  {
    q: "Can I return a discounted or sale item?",
    a: "Items marked “Final Sale” cannot be returned. Other discounted items follow the same 7-day policy as regular items.",
  },
  {
    q: "Who pays for the return pickup?",
    a: "If the product is damaged or wrong, we take care of the pickup at no cost. For other returns, pickup depends on courier availability at your pincode, and we will tell you the options when you write to us.",
  },
  {
    q: "What if my size is out of stock for an exchange?",
    a: "We will offer you a different size, another product of the same value, or a refund. The choice is yours.",
  },
  {
    q: "My refund has not arrived yet. What should I do?",
    a: "Please wait for the full 5–7 business days and check your bank or UPI statement. If it is still missing, email us your order ID and we will track it for you.",
  },
];

export default function ReturnsExchanges() {
  return (
    <div className="bg-[#FFFCF6] text-[#352923]">
      {/* ---------- Hero ---------- */}
      <header className="relative isolate overflow-hidden bg-[#5b1228]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(185,148,80,0.30),transparent_45%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#B99450] to-transparent" />

        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_230px] lg:py-16">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs text-[#f3d9a0]/80"
            >
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <ChevronRight size={13} />
              <span>Customer Care</span>
              <ChevronRight size={13} />
              <span className="text-white">Returns & Exchanges</span>
            </nav>

            <h1
              className={`${heading} mt-6 text-3xl font-bold text-[#fff3d6] sm:text-4xl`}
            >
              Returns & Exchanges
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#fdf0d5]/85 sm:text-base">
              Not the perfect fit or colour? No worries. You have 7 days after
              delivery to return or exchange, and our team will guide you at
              every step.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#B99450] px-4 py-2 text-sm font-semibold text-[#3b230f]">
                <CalendarCheck size={16} />
                7-day return window
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B99450]/60 bg-white/10 px-4 py-2 text-sm text-[#f3d9a0]">
                <Wallet size={16} />
                Refund in 5–7 days
              </span>
            </div>

            <span className="mt-5 inline-block text-xs text-[#f3d9a0]/80">
              Last updated: {UPDATED}
            </span>
          </div>

          {/* Arch-shaped photo */}
          <div className="relative mx-auto hidden h-72 w-56 overflow-hidden rounded-t-[999px] rounded-b-2xl border-[3px] border-[#B99450] bg-[#4a0f21] shadow-2xl lg:block">
            <Image
              src="/model1.png"
              alt=""
              fill
              sizes="230px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-10 sm:px-8 lg:py-14">
        {/* ---------- Journey ---------- */}
        <Card
          icon={RotateCcw}
          title="Your Return Journey"
          intro="From delivery to refund, this is what to expect."
        >
          <div className="relative grid gap-6 sm:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-0.5 bg-[#e6d6b8] sm:block" />
            {[
              { icon: PackageCheck, t: "Order delivered", s: "Day 0" },
              { icon: Mail, t: "Raise a request", s: "Within 7 days" },
              { icon: Search, t: "Pickup and check", s: "1–2 business days" },
              { icon: Wallet, t: "Refund or exchange", s: "5–7 business days" },
            ].map(({ icon: Icon, t, s }) => (
              <div
                key={t}
                className="relative flex items-center gap-4 sm:flex-col sm:gap-3 sm:text-center"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#800A2D] text-[#f3d9a0] ring-4 ring-white">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#59391d]">{t}</p>
                  <p className="text-xs text-[#8c6c43]">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* ---------- Eligible / Not eligible ---------- */}
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-7">
            <h2 className={`${heading} flex items-center gap-2.5 text-xl font-bold text-emerald-900`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Check size={18} strokeWidth={3} />
              </span>
              Can be returned
            </h2>
            <ul className="mt-5 space-y-4">
              {[
                { icon: CalendarCheck, t: "Request raised within 7 days of delivery" },
                { icon: Shirt, t: "Item is unused, unwashed and unaltered" },
                { icon: Tag, t: "Original tags, labels and packaging intact" },
                { icon: Receipt, t: "Order ID or invoice as proof of purchase" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-6 text-emerald-950/80">
                  <Icon size={18} className="mt-0.5 shrink-0 text-emerald-700" />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-200 bg-rose-50/60 p-6 sm:p-7">
            <h2 className={`${heading} flex items-center gap-2.5 text-xl font-bold text-rose-900`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white">
                <X size={18} strokeWidth={3} />
              </span>
              Cannot be returned
            </h2>
            <ul className="mt-5 space-y-4">
              {[
                "Innerwear and accessories (hygiene reasons)",
                "Personalised or made-to-measure products",
                "Items marked “Final Sale”",
                "Products with stains, perfume, damage or wear after delivery",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-6 text-rose-950/80">
                  <X size={18} className="mt-0.5 shrink-0 text-rose-600" />
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ---------- How to request ---------- */}
        <Card
          icon={Mail}
          title="How to Request a Return"
          intro="It takes only a few minutes. Just follow these steps."
        >
          <ol className="grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Email us",
                s: "Send your order ID, the item name and the reason for return.",
              },
              {
                t: "We arrange pickup",
                s: "We schedule a pickup or share simple return instructions.",
              },
              {
                t: "Get your refund or exchange",
                s: "Once the item passes quality check, we process it right away.",
              },
            ].map((step, i) => (
              <li
                key={step.t}
                className="rounded-xl border border-[#eadcc0] bg-[#FFF8E9] p-5"
              >
                <span className={`${heading} text-3xl font-bold text-[#B99450]`}>
                  {i + 1}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-[#59391d]">
                  {step.t}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#655342]">{step.s}</p>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex flex-col gap-4 rounded-xl bg-[#5b1228] p-5 text-[#fdf0d5] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#f3d9a0]">
                Write to us at
              </p>
              <p className="mt-0.5 break-all text-sm">{EMAIL}</p>
              <p className="mt-1 text-xs text-[#fdf0d5]/70">
                Subject: Return request, Order ID
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}?subject=Return%20request%20-%20Order%20ID`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B99450] px-5 py-3 text-sm font-semibold text-[#3b230f] transition hover:bg-[#d3ad66]"
            >
              <Mail size={16} />
              Start a return
            </a>
          </div>
        </Card>

        {/* ---------- Exchange ---------- */}
        <Card
          icon={ArrowLeftRight}
          title="Exchanges"
          intro="Prefer a different size or product instead of a refund? We can swap it for you, subject to stock availability."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#eadcc0] bg-[#FFF8E9] p-5">
              <Shirt size={20} className="text-[#800A2D]" />
              <h3 className="mt-3 text-sm font-semibold text-[#59391d]">
                Size exchange
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#655342]">
                Too tight or too loose? Tell us the size you need and we will
                send it as soon as it is in stock.
              </p>
            </div>
            <div className="rounded-xl border border-[#eadcc0] bg-[#FFF8E9] p-5">
              <Truck size={20} className="text-[#800A2D]" />
              <h3 className="mt-3 text-sm font-semibold text-[#59391d]">
                Different product
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#655342]">
                Choose another style of the same value. For a higher-priced
                item, you only pay the difference.
              </p>
            </div>
          </div>
        </Card>

        {/* ---------- Refunds ---------- */}
        <Card icon={Wallet} title="Refunds">
          <div className="overflow-hidden rounded-xl border border-[#eadcc0]">
            {[
              ["Prepaid orders (UPI, card, net banking)", "Back to original payment method"],
              ["Cash on Delivery orders", "Bank account or UPI of your choice"],
              ["Refund time", "5–7 business days after approval"],
              ["Original shipping charges", "Non-refundable, unless the error is ours"],
            ].map(([a, b], i) => (
              <div
                key={a}
                className={`flex flex-col gap-1 px-4 py-3.5 text-sm sm:flex-row sm:items-center sm:justify-between ${
                  i % 2 === 0 ? "bg-[#FFF8E9]" : "bg-white"
                }`}
              >
                <span className="text-[#655342]">{a}</span>
                <span className="font-semibold text-[#59391d]">{b}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* ---------- Damaged item ---------- */}
        <section className="flex flex-col gap-4 rounded-2xl border border-[#800A2D]/15 border-l-4 border-l-[#800A2D] bg-[#fdf1f3] p-6 sm:flex-row sm:items-start">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#800A2D] text-[#f3d9a0]">
            <Camera size={20} />
          </span>
          <div>
            <h2 className={`${heading} text-lg font-bold text-[#800A2D]`}>
              Received a damaged or wrong item?
            </h2>
            <p className="mt-1 text-sm leading-6 text-[#655342]">
              Please tell us within 48 hours of delivery. Send clear photos of
              the product and the parcel to{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-[#800A2D] underline-offset-2 hover:underline"
              >
                {EMAIL}
              </a>
              . We will replace it or refund you at no extra cost.
            </p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <Card icon={ShieldCheck} title="Frequently Asked Questions">
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-[#eadcc0] bg-white open:bg-[#FFF8E9]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#59391d] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-[#a87527] transition group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-4 text-sm leading-6 text-[#655342]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Card>

        {/* ---------- Contact ---------- */}
        <section className="rounded-2xl bg-gradient-to-br from-[#5b1228] to-[#800A2D] p-6 text-[#fdf0d5] shadow-lg sm:p-8">
          <h2 className={`${heading} text-xl font-bold sm:text-2xl`}>
            Need help with a return?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#fdf0d5]/85">
            Our team in Jaipur is happy to help. Share your order ID and we
            will sort it out quickly.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 break-all rounded-full bg-[#B99450] px-5 py-3 text-sm font-semibold text-[#3b230f] transition hover:bg-[#d3ad66]"
            >
              <Mail size={16} />
              {EMAIL}
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-[#fdf0d5]/85">
              <MapPin size={16} />
              Vastralay, Jaipur, Rajasthan, India
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}