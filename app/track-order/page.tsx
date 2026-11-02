"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ChevronRight,
  Loader2,
  Check,
  Info,
  Mail,
  MapPin,
  Package,
  PackageCheck,
  Truck,
  ShoppingBag,
  RefreshCw,
  Receipt,
} from "lucide-react";

// Yahan se email badal sakte hain
const EMAIL = "vastralayankit9@gmail.com";

const heading = "font-[family-name:var(--font-heading)]";

const STEPS = [
  {
    icon: ShoppingBag,
    label: "Order Placed",
    text: "We have received your order and payment.",
  },
  {
    icon: Package,
    label: "Packed",
    text: "Your outfit is being checked and packed by hand.",
  },
  {
    icon: Truck,
    label: "Shipped",
    text: "Your parcel has left our shop with the courier partner.",
  },
  {
    icon: MapPin,
    label: "Out for Delivery",
    text: "The delivery person is on the way. Please keep your phone on.",
  },
  {
    icon: PackageCheck,
    label: "Delivered",
    text: "Your parcel has been delivered. We hope you love it!",
  },
];

type TrackResult = { status?: string; error?: string };

// API se aaya status kis step par hai, ye nikalta hai
function stepIndex(status: string) {
  const s = status.toLowerCase();
  if (s.includes("out")) return 3;
  if (s.includes("deliver")) return 4;
  if (s.includes("ship") || s.includes("transit")) return 2;
  if (s.includes("pack")) return 1;
  return 0;
}

const inputClass =
  "w-full rounded-xl border border-[#e0cfae] bg-[#FFFCF6] px-4 py-3 text-sm text-[#352923] outline-none transition placeholder:text-[#a8967c] focus:border-[#B99450] focus:ring-2 focus:ring-[#B99450]/30";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<TrackResult | null>(null);
  const [searched, setSearched] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(
        `/api/track?orderId=${encodeURIComponent(orderId.trim())}&email=${encodeURIComponent(email.trim())}`
      );
      const data: TrackResult = await res.json();
      setSearched(orderId.trim());
      setResult(res.ok ? data : { error: data.error ?? "Order not found." });
    } catch {
      setResult({ error: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setResult(null);
    setOrderId("");
    setEmail("");
  }

  const current = result?.status ? stepIndex(result.status) : -1;

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
              <span className="text-white">Track Your Order</span>
            </nav>

            <h1
              className={`${heading} mt-6 text-3xl font-bold text-[#fff3d6] sm:text-4xl`}
            >
              Track Your Order
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#fdf0d5]/85 sm:text-base">
              Excited for your new outfit? Enter your order ID and email to see
              exactly where your parcel is right now.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#B99450] px-4 py-2 text-sm font-semibold text-[#3b230f]">
                <Truck size={16} />
                Live order status
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B99450]/60 bg-white/10 px-4 py-2 text-sm text-[#f3d9a0]">
                <Mail size={16} />
                Tracking ID sent by SMS and email
              </span>
            </div>
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
        {/* ---------- Form ---------- */}
        <section className="rounded-2xl border border-[#eadcc0] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(89,57,29,0.35)] sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B99450]/15 text-[#a87527]">
              <Search size={21} />
            </span>
            <h2
              className={`${heading} text-xl font-bold text-[#59391d] sm:text-2xl`}
            >
              Find Your Order
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-5 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="orderId"
                className="mb-1.5 block text-sm font-medium text-[#59391d]"
              >
                Order ID
              </label>
              <input
                id="orderId"
                className={inputClass}
                placeholder="e.g. VST-10245"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-[#59391d]"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                className={inputClass}
                placeholder="Email used at checkout"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#800A2D] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#600721] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Checking your order…
                  </>
                ) : (
                  <>
                    <Search size={16} />
                    Track order
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#FFF8E9] p-4 text-sm leading-6 text-[#655342]">
            <Receipt size={18} className="mt-0.5 shrink-0 text-[#800A2D]" />
            <p>
              <strong className="text-[#59391d]">Where is my order ID?</strong>{" "}
              You will find it in the confirmation email and SMS we sent right
              after you placed your order.
            </p>
          </div>
        </section>

        {/* ---------- Error ---------- */}
        <div aria-live="polite">
          {result?.error && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm leading-6 text-rose-900"
            >
              <Info size={20} className="mt-0.5 shrink-0 text-rose-600" />
              <p>
                <strong>{result.error}</strong> Please check your order ID and
                email, or write to us at{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold underline underline-offset-2"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          )}

          {/* ---------- Result ---------- */}
          {result?.status && (
            <section className="rounded-2xl border border-[#eadcc0] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(89,57,29,0.35)] sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-[#8c6c43]">Order ID</p>
                  <p
                    className={`${heading} text-xl font-bold text-[#59391d]`}
                  >
                    {searched}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#800A2D] px-4 py-2 text-sm font-semibold text-white">
                  <Truck size={16} />
                  {result.status}
                </span>
              </div>

              {/* Progress */}
              <div className="relative mt-8 grid gap-5 sm:grid-cols-5">
                <div className="absolute left-[10%] right-[10%] top-5 hidden h-0.5 bg-[#e6d6b8] sm:block" />
                <div
                  className="absolute left-[10%] top-5 hidden h-0.5 bg-[#800A2D] transition-all duration-700 sm:block"
                  style={{ width: `${(current / (STEPS.length - 1)) * 80}%` }}
                />
                {STEPS.map(({ icon: Icon, label }, i) => {
                  const done = i <= current;
                  return (
                    <div
                      key={label}
                      className="relative flex items-center gap-4 sm:flex-col sm:gap-3 sm:text-center"
                    >
                      <span
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-white ${
                          done
                            ? "bg-[#800A2D] text-[#f3d9a0]"
                            : "bg-[#efe6d2] text-[#b9a98f]"
                        }`}
                      >
                        {done && i < current ? (
                          <Check size={18} strokeWidth={3} />
                        ) : (
                          <Icon size={18} />
                        )}
                      </span>
                      <span
                        className={`text-sm ${
                          done
                            ? "font-semibold text-[#59391d]"
                            : "text-[#a8967c]"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 rounded-xl bg-[#FFF8E9] p-4 text-sm leading-6 text-[#655342]">
                <strong className="text-[#800A2D]">
                  {STEPS[current].label}:
                </strong>{" "}
                {STEPS[current].text}
              </div>

              <button
                type="button"
                onClick={reset}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#800A2D] transition hover:text-[#600721]"
              >
                <RefreshCw size={15} />
                Track another order
              </button>
            </section>
          )}
        </div>

        {/* ---------- What each status means ---------- */}
        <section className="rounded-2xl border border-[#eadcc0] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(89,57,29,0.35)] sm:p-8">
          <h2
            className={`${heading} text-xl font-bold text-[#59391d] sm:text-2xl`}
          >
            What each status means
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(({ icon: Icon, label, text }) => (
              <div
                key={label}
                className="rounded-xl border border-[#eadcc0] bg-[#FFF8E9] p-4"
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={18} className="text-[#800A2D]" />
                  <h3 className="text-sm font-semibold text-[#59391d]">
                    {label}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#655342]">{text}</p>
              </div>
            ))}
            <Link
              href="/shipping-delivery"
              className="flex items-center justify-between gap-3 rounded-xl border border-[#800A2D]/20 bg-[#fdf1f3] p-4 text-sm font-semibold text-[#800A2D] transition hover:bg-[#fbe6ea]"
            >
              Delivery times and charges
              <ChevronRight size={18} />
            </Link>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="rounded-2xl bg-gradient-to-br from-[#5b1228] to-[#800A2D] p-6 text-[#fdf0d5] shadow-lg sm:p-8">
          <h2 className={`${heading} text-xl font-bold sm:text-2xl`}>
            Cannot find your order?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#fdf0d5]/85">
            Send us your order ID and the name on the order. Our team in Jaipur
            will check it for you right away.
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