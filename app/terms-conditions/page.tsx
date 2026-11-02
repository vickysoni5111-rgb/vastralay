import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ElementType, ReactNode } from "react";
import {
  FileText,
  ChevronRight,
  UserCheck,
  KeyRound,
  Tag,
  CreditCard,
  Truck,
  RotateCcw,
  Ban,
  Copyright,
  ShieldCheck,
  Scale,
  RefreshCw,
  Gavel,
  Mail,
  MapPin,
  Check,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vastralay",
  description:
    "The terms that apply when you browse or shop on the Vastralay website.",
};

// Yahan se email aur date badal sakte hain
const EMAIL = "vastralayankit9@gmail.com";
const UPDATED = "November 2026";

const heading = "font-[family-name:var(--font-heading)]";
const linkClass =
  "font-semibold text-[#800A2D] underline-offset-2 hover:underline";

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B99450]/20 text-[#7a5a20]">
            <Check size={12} strokeWidth={3} />
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

const clauses: {
  id: string;
  icon: ElementType;
  title: string;
  body: ReactNode;
}[] = [
  {
    id: "acceptance",
    icon: FileText,
    title: "Acceptance of Terms",
    body: (
      <p>
        By visiting, browsing or buying from the Vastralay website, you agree
        to these Terms & Conditions. If you do not agree with any part of them,
        please do not use the website.
      </p>
    ),
  },
  {
    id: "eligibility",
    icon: UserCheck,
    title: "Eligibility",
    body: (
      <p>
        You must be 18 years or older to place an order. If you are younger,
        you may use the website only under the supervision of a parent or
        guardian, who accepts these terms on your behalf.
      </p>
    ),
  },
  {
    id: "account",
    icon: KeyRound,
    title: "Your Account",
    body: (
      <>
        <p>
          You are responsible for the information you give us and for keeping
          your account details safe.
        </p>
        <Bullets
          items={[
            "Provide correct and complete details such as name, phone number and address.",
            "Do not share your password with anyone.",
            "Tell us right away if you notice any unauthorised use of your account.",
          ]}
        />
      </>
    ),
  },
  {
    id: "products",
    icon: Tag,
    title: "Products and Pricing",
    body: (
      <>
        <p>
          We take great care to show our kurtas, shirts and children’s wear
          accurately. Because of screen settings and lighting, the colour you
          see may look slightly different in real life. Small variations in
          handwork and prints are natural.
        </p>
        <p>
          All prices are in Indian Rupees (₹) and include applicable taxes
          unless stated otherwise. If a price or product detail is listed
          wrongly by mistake, we may correct it or cancel the order and refund
          you in full.
        </p>
      </>
    ),
  },
  {
    id: "orders",
    icon: CreditCard,
    title: "Orders and Payments",
    body: (
      <Bullets
        items={[
          "An order is confirmed only after successful payment, or after our confirmation for Cash on Delivery.",
          "We may refuse or cancel an order because of stock issues, suspected fraud, incorrect information or any other valid reason.",
          "If we cancel a paid order, the full amount is refunded to your original payment method.",
          "Payments are handled by secure third-party gateways. We never see or store your card details or UPI PIN.",
        ]}
      />
    ),
  },
  {
    id: "shipping",
    icon: Truck,
    title: "Shipping and Delivery",
    body: (
      <p>
        Delivery timelines, shipping charges and tracking are explained in our{" "}
        <Link href="/shipping-delivery" className={linkClass}>
          Shipping & Delivery
        </Link>{" "}
        policy. Delivery dates are estimates and may change because of weather,
        strikes or courier delays.
      </p>
    ),
  },
  {
    id: "returns",
    icon: RotateCcw,
    title: "Returns and Refunds",
    body: (
      <p>
        You can request a return or exchange within 7 days of delivery, as long
        as the product meets the conditions in our{" "}
        <Link href="/returns-exchanges" className={linkClass}>
          Returns & Exchanges
        </Link>{" "}
        policy. That policy forms part of these terms.
      </p>
    ),
  },
  {
    id: "conduct",
    icon: Ban,
    title: "Acceptable Use",
    body: (
      <>
        <p>While using our website, you agree not to:</p>
        <Bullets
          items={[
            "Use it for any unlawful or fraudulent purpose.",
            "Try to hack, disrupt or overload the website or its servers.",
            "Use bots or scrapers to copy our products, prices or images.",
            "Post false, abusive or misleading content, including in reviews.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ip",
    icon: Copyright,
    title: "Intellectual Property",
    body: (
      <p>
        All logos, product photographs, designs, text, videos and other
        content on this website belong to Vastralay or its licensors. You may
        not copy, reproduce, sell or use them for commercial purposes without
        our written permission.
      </p>
    ),
  },
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "Privacy",
    body: (
      <p>
        How we collect and use your personal information is explained in our{" "}
        <Link href="/privacy-policy" className={linkClass}>
          Privacy Policy
        </Link>
        . By using the website, you agree to that policy as well.
      </p>
    ),
  },
  {
    id: "liability",
    icon: Scale,
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent allowed by law, Vastralay is not liable for any
        indirect or incidental loss arising from the use of this website or
        from events outside our reasonable control. Our total liability for any
        order is limited to the amount you paid for that order.
      </p>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these terms from time to time. The latest version is
        always on this page with the date shown at the top. If you keep using
        the website after a change, it means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "law",
    icon: Gavel,
    title: "Governing Law",
    body: (
      <p>
        These terms are governed by the laws of India. Any dispute will be
        subject to the exclusive jurisdiction of the courts at Jaipur,
        Rajasthan.
      </p>
    ),
  },
];

const highlights = [
  { icon: UserCheck, t: "18+ to order", s: "Or shop with a parent or guardian." },
  { icon: CreditCard, t: "Payment confirms it", s: "Your order is confirmed after payment." },
  { icon: Tag, t: "Prices in ₹", s: "Taxes included unless stated." },
  { icon: Copyright, t: "Content is ours", s: "Photos and designs need permission to use." },
];

export default function TermsConditions() {
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
              <span className="text-white">Terms & Conditions</span>
            </nav>

            <h1
              className={`${heading} mt-6 text-3xl font-bold text-[#fff3d6] sm:text-4xl`}
            >
              Terms & Conditions
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#fdf0d5]/85 sm:text-base">
              Please read these terms carefully. They explain the rules for
              using our website and shopping with Vastralay, written in simple
              words.
            </p>

            <span className="mt-6 inline-block rounded-full border border-[#B99450]/50 bg-white/10 px-3 py-1 text-xs text-[#f3d9a0]">
              Last updated: {UPDATED}
            </span>
          </div>

          {/* Arch-shaped photo */}
          <div className="relative mx-auto hidden h-72 w-56 overflow-hidden rounded-t-[999px] rounded-b-2xl border-[3px] border-[#B99450] bg-[#4a0f21] shadow-2xl lg:block">
            <Image
              src="/model7.png"
              alt=""
              fill
              sizes="230px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-10 sm:px-8 lg:py-14">
        {/* ---------- Highlights ---------- */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, t, s }) => (
            <div
              key={t}
              className="rounded-2xl border border-[#eadcc0] bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#800A2D] text-[#f3d9a0]">
                <Icon size={19} />
              </span>
              <h3 className={`${heading} mt-4 text-lg font-bold text-[#59391d]`}>
                {t}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#655342]">{s}</p>
            </div>
          ))}
        </div>

        {/* ---------- Contents ---------- */}
        <section className="rounded-2xl border border-[#eadcc0] bg-[#FFF8E9] p-6 sm:p-7">
          <h2 className={`${heading} text-lg font-bold text-[#59391d]`}>
            In these terms
          </h2>
          <ol className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {clauses.map((c, i) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-[#59391d] transition hover:bg-white"
                >
                  <span className={`${heading} w-6 text-base font-bold text-[#B99450]`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:text-[#800A2D]">{c.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Clauses ---------- */}
        {clauses.map((c, i) => {
          const Icon = c.icon;
          return (
            <section
              key={c.id}
              id={c.id}
              className="scroll-mt-56 rounded-2xl border border-[#eadcc0] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(89,57,29,0.35)] sm:p-8"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <span
                  className={`${heading} hidden w-12 shrink-0 text-4xl font-bold leading-none text-[#B99450] sm:block`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B99450]/15 text-[#a87527]">
                      <Icon size={20} />
                    </span>
                    <h2
                      className={`${heading} text-xl font-bold text-[#59391d] sm:text-2xl`}
                    >
                      {c.title}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#655342]">
                    {c.body}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ---------- Note ---------- */}
        <section className="flex flex-col gap-4 rounded-2xl border border-[#800A2D]/15 border-l-4 border-l-[#800A2D] bg-[#fdf1f3] p-6 sm:flex-row sm:items-start">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#800A2D] text-[#f3d9a0]">
            <Info size={20} />
          </span>
          <div>
            <h2 className={`${heading} text-lg font-bold text-[#800A2D]`}>
              Something unclear?
            </h2>
            <p className="mt-1 text-sm leading-6 text-[#655342]">
              If any part of these terms is confusing, just ask us. We are
              happy to explain it before you place your order.
            </p>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="rounded-2xl bg-gradient-to-br from-[#5b1228] to-[#800A2D] p-6 text-[#fdf0d5] shadow-lg sm:p-8">
          <h2 className={`${heading} text-xl font-bold sm:text-2xl`}>
            Questions about these terms?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#fdf0d5]/85">
            Write to us and our team in Jaipur will get back to you as soon as
            possible.
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