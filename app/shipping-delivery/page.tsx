import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ElementType, ReactNode } from "react";
import {
  Truck,
  ChevronRight,
  ChevronDown,
  Clock,
  Wallet,
  Package,
  PackageCheck,
  MapPin,
  Building2,
  Mountain,
  Mail,
  Search,
  Check,
  Info,
  ShoppingBag,
  Gift,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery | Vastralay",
  description:
    "Delivery timelines, shipping charges and order tracking for Vastralay orders across India.",
};

// Yahan se email, date aur free shipping limit badal sakte hain
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

const zones = [
  {
    icon: Building2,
    name: "Metro cities",
    places: "Delhi, Mumbai, Bengaluru, Kolkata, Chennai and more",
    days: "3–5",
    bar: "w-[42%]",
  },
  {
    icon: MapPin,
    name: "Rest of India",
    places: "All other cities, towns and serviceable pincodes",
    days: "5–8",
    bar: "w-[67%]",
  },
  {
    icon: Mountain,
    name: "Remote areas",
    places: "Hilly, island and far-off locations",
    days: "8–12",
    bar: "w-full",
  },
];

const faqs = [
  {
    q: "Do you deliver all over India?",
    a: "Yes, we ship to most pincodes across India through trusted courier partners. If your pincode is not serviceable, you will see it at checkout.",
  },
  {
    q: "Can I change my delivery address after ordering?",
    a: "You can, as long as the order has not been dispatched. Email us your order ID and the new address as soon as possible.",
  },
  {
    q: "What if I am not available at the time of delivery?",
    a: "The courier partner will call you and reattempt delivery. After repeated failed attempts, the parcel may be returned to us.",
  },
  {
    q: "Is there any extra charge at the time of delivery?",
    a: "No. The shipping charge, if any, is shown at checkout. You do not pay anything extra to the delivery person for prepaid orders.",
  },
  {
    q: "My tracking has not updated for a few days. What should I do?",
    a: "Courier updates can sometimes lag. If there is no movement for 2–3 days, email us your order ID and we will follow up with the courier.",
  },
];

export default function ShippingDelivery() {
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
              <span className="text-white">Shipping & Delivery</span>
            </nav>

            <h1
              className={`${heading} mt-6 text-3xl font-bold text-[#fff3d6] sm:text-4xl`}
            >
              Shipping & Delivery
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#fdf0d5]/85 sm:text-base">
              Every outfit is packed by hand in Jaipur and sent to your doorstep
              anywhere in India, with tracking at every step.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#B99450] px-4 py-2 text-sm font-semibold text-[#3b230f]">
                <Gift size={16} />
                Free shipping above ₹999
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B99450]/60 bg-white/10 px-4 py-2 text-sm text-[#f3d9a0]">
                <Truck size={16} />
                Delivery in 3–8 days
              </span>
            </div>

            <span className="mt-5 inline-block text-xs text-[#f3d9a0]/80">
              Last updated: {UPDATED}
            </span>
          </div>

          {/* Arch-shaped photo */}
          <div className="relative mx-auto hidden h-72 w-56 overflow-hidden rounded-t-[999px] rounded-b-2xl border-[3px] border-[#B99450] bg-[#4a0f21] shadow-2xl lg:block">
            <Image
              src="/model3.png"
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
          icon={Package}
          title="From Our Shop to Your Door"
          intro="Here is what happens after you place an order."
        >
          <div className="relative grid gap-6 sm:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-5 hidden h-0.5 bg-[#e6d6b8] sm:block" />
            {[
              { icon: ShoppingBag, t: "Order placed", s: "Payment confirmed" },
              { icon: Package, t: "Packed by hand", s: "Within 1–2 days" },
              { icon: Truck, t: "Shipped", s: "Tracking ID by SMS" },
              { icon: MapPin, t: "Out for delivery", s: "Courier will call you" },
              { icon: PackageCheck, t: "Delivered", s: "Enjoy your outfit" },
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

        {/* ---------- Delivery zones ---------- */}
        <Card
          icon={Clock}
          title="Delivery Time"
          intro="Orders are processed within 1–2 business days after payment confirmation. The estimates below start from the day of dispatch."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {zones.map(({ icon: Icon, name, places, days, bar }) => (
              <div
                key={name}
                className="rounded-xl border border-[#eadcc0] bg-[#FFF8E9] p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#800A2D] shadow-sm">
                  <Icon size={19} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-[#59391d]">
                  {name}
                </h3>
                <p className="mt-1 min-h-[3rem] text-xs leading-5 text-[#8c6c43]">
                  {places}
                </p>
                <p className={`${heading} mt-3 text-3xl font-bold text-[#800A2D]`}>
                  {days}
                  <span className="ml-1.5 text-sm font-medium text-[#655342]">
                    business days
                  </span>
                </p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-[#e6d6b8]">
                  <div className={`h-1.5 rounded-full bg-[#800A2D] ${bar}`} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* ---------- Shipping charges ---------- */}
        <Card
          icon={Wallet}
          title="Shipping Charges"
          intro="Simple and clear. No hidden fees at checkout or at delivery."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#5b1228] to-[#800A2D] p-6 text-[#fdf0d5]">
              <span className="absolute right-4 top-4 rounded-full bg-[#B99450] px-3 py-1 text-xs font-semibold text-[#3b230f]">
                Best value
              </span>
              <Gift size={22} className="text-[#f3d9a0]" />
              <p className={`${heading} mt-4 text-3xl font-bold text-[#fff3d6]`}>
                Free
              </p>
              <p className="mt-1 text-sm text-[#fdf0d5]/85">
                On all orders above ₹999
              </p>
            </div>

            <div className="rounded-xl border border-[#eadcc0] bg-[#FFF8E9] p-6">
              <Wallet size={22} className="text-[#800A2D]" />
              <p className={`${heading} mt-4 text-3xl font-bold text-[#800A2D]`}>
                ₹60
              </p>
              <p className="mt-1 text-sm text-[#655342]">
                Flat charge on orders up to ₹999
              </p>
            </div>
          </div>
        </Card>

        {/* ---------- Track CTA ---------- */}
        <section className="flex flex-col gap-4 rounded-2xl border border-[#B99450]/50 bg-[#FFF8E9] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#800A2D] text-[#f3d9a0]">
              <Search size={20} />
            </span>
            <div>
              <h2 className={`${heading} text-lg font-bold text-[#59391d]`}>
                Order shipped? Track it live
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#655342]">
                You will get a tracking ID by email and SMS once your parcel
                leaves our shop.
              </p>
            </div>
          </div>
          <Link
            href="/track-order"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#800A2D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#600721]"
          >
            Track your order
            <ChevronRight size={16} />
          </Link>
        </section>

        {/* ---------- Tips ---------- */}
        <Card icon={Info} title="For a Smooth Delivery">
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Enter your full address with the correct pincode.",
              "Keep your phone on, the courier will call before delivery.",
              "Check the parcel for damage before accepting it.",
              "Save your tracking ID from the SMS or email.",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-xl border border-[#eadcc0] bg-[#FFF8E9] p-4 text-sm leading-6 text-[#655342]"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check size={12} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Card>

        {/* ---------- Delays ---------- */}
        <section className="flex flex-col gap-4 rounded-2xl border border-[#800A2D]/15 border-l-4 border-l-[#800A2D] bg-[#fdf1f3] p-6 sm:flex-row sm:items-start">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#800A2D] text-[#f3d9a0]">
            <Clock size={20} />
          </span>
          <div>
            <h2 className={`${heading} text-lg font-bold text-[#800A2D]`}>
              Delays can happen
            </h2>
            <p className="mt-1 text-sm leading-6 text-[#655342]">
              Bad weather, strikes, festival rush or courier issues can
              sometimes delay a delivery. We keep a close watch and will update
              you. If your order is late, write to us at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-[#800A2D] underline-offset-2 hover:underline"
              >
                {EMAIL}
              </a>{" "}
              and we will follow up with the courier.
            </p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <Card icon={Package} title="Frequently Asked Questions">
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
            Questions about your delivery?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#fdf0d5]/85">
            Share your order ID and our team in Jaipur will help you right
            away.
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