import type { Metadata } from "next";
import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import {
  ShieldCheck,
  Ban,
  Lock,
  User,
  ShoppingBag,
  Smartphone,
  Truck,
  CreditCard,
  Cookie,
  Clock,
  Baby,
  RefreshCw,
  Mail,
  MapPin,
  ChevronRight,
  Eye,
  Share2,
  UserCheck,
  FileText,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Vastralay",
  description:
    "How Vastralay collects, uses and protects your personal information.",
};

// Yahan se email aur date badal sakte hain
const EMAIL = "vastralayankit9@gmail.com";
const UPDATED = "November 2026";

const heading = "font-[family-name:var(--font-heading)]";

const jump = [
  { id: "collect", label: "What we collect" },
  { id: "use", label: "How we use it" },
  { id: "sharing", label: "Sharing" },
  { id: "cookies", label: "Cookies" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your rights" },
  { id: "contact", label: "Contact" },
];

function Card({
  id,
  icon: Icon,
  title,
  intro,
  children,
}: {
  id: string;
  icon: ElementType;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-[#eadcc0] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(89,57,29,0.35)] sm:p-8"
    >
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

function MiniCard({
  icon: Icon,
  title,
  text,
}: {
  icon: ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[#eadcc0] bg-[#FFF8E9] p-4">
      <div className="flex items-center gap-2.5">
        <Icon size={18} className="text-[#800A2D]" />
        <h3 className="text-sm font-semibold text-[#59391d]">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-6 text-[#655342]">{text}</p>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FFFCF6] text-[#352923]">
      {/* ---------- Hero ---------- */}
      <header className="relative isolate overflow-hidden bg-[#5b1228]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(185,148,80,0.30),transparent_45%),radial-gradient(circle_at_88%_85%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#B99450] to-transparent" />

        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:py-16">
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
            <span className="text-white">Privacy Policy</span>
          </nav>

          <div className="mt-6 flex items-start gap-5">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#B99450]/60 bg-white/10 text-[#f3d9a0] sm:flex">
              <ShieldCheck size={30} />
            </span>
            <div>
              <h1
                className={`${heading} text-3xl font-bold text-[#fff3d6] sm:text-4xl`}
              >
                Privacy Policy
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#fdf0d5]/85 sm:text-base">
                Your trust matters to us. This page explains in simple words
                what personal information Vastralay collects, why we collect it
                and how we keep it safe.
              </p>
              <span className="mt-4 inline-block rounded-full border border-[#B99450]/50 bg-white/10 px-3 py-1 text-xs text-[#f3d9a0]">
                Last updated: {UPDATED}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-10 sm:px-8 lg:py-14">
        {/* ---------- Quick summary ---------- */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Ban,
              title: "We never sell your data",
              text: "Your details are used only to serve your orders.",
            },
            {
              icon: Lock,
              title: "Payments stay secure",
              text: "Handled by trusted gateways. We do not store card details.",
            },
            {
              icon: UserCheck,
              title: "You are in control",
              text: "Ask us to view, correct or delete your data anytime.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#eadcc0] bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#800A2D] text-[#f3d9a0]">
                <Icon size={19} />
              </span>
              <h3 className={`${heading} mt-4 text-lg font-bold text-[#59391d]`}>
                {title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#655342]">{text}</p>
            </div>
          ))}
        </div>

        {/* ---------- Jump links ---------- */}
        <nav
          aria-label="On this page"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {jump.map((j) => (
            <a
              key={j.id}
              href={`#${j.id}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-[#e6d6b8] bg-white px-4 py-2 text-[13px] font-medium text-[#59391d] transition hover:border-[#B99450] hover:bg-[#FFF8E9]"
            >
              {j.label}
            </a>
          ))}
        </nav>

        {/* ---------- 1. Collect ---------- */}
        <Card
          id="collect"
          icon={Eye}
          title="Information We Collect"
          intro="We collect only what we need to take your order and look after you as a customer."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard
              icon={User}
              title="Your details"
              text="Name, email address and phone number when you create an account or place an order."
            />
            <MiniCard
              icon={MapPin}
              title="Delivery and billing"
              text="Shipping and billing addresses so your parcel reaches the right door."
            />
            <MiniCard
              icon={ShoppingBag}
              title="Shopping activity"
              text="Your orders, cart, wishlist, returns and the messages you send to our support team."
            />
            <MiniCard
              icon={Smartphone}
              title="Device and usage"
              text="Browser, device type and the pages you view, collected through cookies to improve the website."
            />
          </div>
          <p className="mt-5 rounded-xl bg-[#fdf1f3] p-4 text-sm leading-6 text-[#655342]">
            <strong className="text-[#800A2D]">About payments:</strong> UPI,
            card and net banking payments are processed by secure third-party
            gateways. Vastralay does not see or store your card number, CVV or
            UPI PIN.
          </p>
        </Card>

        {/* ---------- 2. Use ---------- */}
        <Card
          id="use"
          icon={FileText}
          title="How We Use Your Information"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard
              icon={Truck}
              title="Orders and delivery"
              text="To confirm, pack, ship and deliver what you ordered, and to share tracking updates."
            />
            <MiniCard
              icon={RefreshCw}
              title="Returns and refunds"
              text="To process exchanges, returns and refunds quickly and correctly."
            />
            <MiniCard
              icon={Mail}
              title="Support and updates"
              text="To reply to your questions and send important order messages by email or SMS."
            />
            <MiniCard
              icon={ShieldCheck}
              title="Better experience"
              text="To improve our collections, website speed and customer service. Offers are sent only if you agree."
            />
          </div>
        </Card>

        {/* ---------- 3. Sharing ---------- */}
        <Card
          id="sharing"
          icon={Share2}
          title="Who We Share It With"
          intro="We share only the minimum information needed, and only with partners who help us complete your order. We never sell or rent your data."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <MiniCard
              icon={Truck}
              title="Courier partners"
              text="Name, address and phone number, to deliver your parcel."
            />
            <MiniCard
              icon={CreditCard}
              title="Payment gateways"
              text="Order amount and payment details, to process your payment safely."
            />
            <MiniCard
              icon={Scale}
              title="Authorities"
              text="Only when required by Indian law or a valid legal request."
            />
          </div>
        </Card>

        {/* ---------- 4. Cookies ---------- */}
        <Card
          id="cookies"
          icon={Cookie}
          title="Cookies"
          intro="Cookies are small files saved in your browser. They help the website remember you and work properly."
        >
          <div className="overflow-hidden rounded-xl border border-[#eadcc0]">
            {[
              {
                name: "Essential",
                text: "Keep your cart, wishlist and sign-in working.",
                tag: "Always on",
              },
              {
                name: "Preferences",
                text: "Remember your choices such as location and recently viewed items.",
                tag: "Optional",
              },
              {
                name: "Analytics",
                text: "Show us which pages are popular so we can improve them.",
                tag: "Optional",
              },
            ].map((row, i) => (
              <div
                key={row.name}
                className={`flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  i % 2 === 0 ? "bg-[#FFF8E9]" : "bg-white"
                }`}
              >
                <div>
                  <p className="text-sm font-semibold text-[#59391d]">
                    {row.name}
                  </p>
                  <p className="text-sm text-[#655342]">{row.text}</p>
                </div>
                <span
                  className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    row.tag === "Always on"
                      ? "bg-[#800A2D] text-white"
                      : "bg-[#B99450]/20 text-[#7a5a20]"
                  }`}
                >
                  {row.tag}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-[#655342]">
            You can block or delete cookies in your browser settings. Some
            features, like the cart, may not work without essential cookies.
          </p>
        </Card>

        {/* ---------- 5. Security + retention + children ---------- */}
        <Card
          id="security"
          icon={Lock}
          title="Security, Storage and Children"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <MiniCard
              icon={Lock}
              title="How we protect it"
              text="Secure connection (HTTPS), limited staff access and trusted payment partners. No system is 100% secure, but we work hard to keep your data safe."
            />
            <MiniCard
              icon={Clock}
              title="How long we keep it"
              text="Only as long as needed for your orders, returns, support and legal or tax requirements. After that it is deleted or anonymised."
            />
            <MiniCard
              icon={Baby}
              title="Children"
              text="Our website is meant for adults. Anyone under 18 should shop with a parent or guardian."
            />
          </div>
        </Card>

        {/* ---------- 6. Rights ---------- */}
        <Card
          id="rights"
          icon={UserCheck}
          title="Your Rights"
          intro="You decide what happens to your information. Email us and we will help."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard
              icon={Eye}
              title="Access"
              text="Ask for a copy of the personal data we hold about you."
            />
            <MiniCard
              icon={RefreshCw}
              title="Correction"
              text="Ask us to fix wrong or outdated details."
            />
            <MiniCard
              icon={Ban}
              title="Deletion"
              text="Ask us to delete your data, except what we must keep by law."
            />
            <MiniCard
              icon={Mail}
              title="Opt out"
              text="Stop promotional emails or messages whenever you like."
            />
          </div>
        </Card>

        {/* ---------- Changes ---------- */}
        <p className="px-1 text-sm leading-6 text-[#655342]">
          We may update this policy from time to time. The latest version is
          always on this page, with the date shown at the top. Using our website
          after an update means you accept the revised policy.
        </p>

        {/* ---------- Contact ---------- */}
        <section
          id="contact"
          className="scroll-mt-24 rounded-2xl bg-gradient-to-br from-[#5b1228] to-[#800A2D] p-6 text-[#fdf0d5] shadow-lg sm:p-8"
        >
          <h2 className={`${heading} text-xl font-bold sm:text-2xl`}>
            Questions about your privacy?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#fdf0d5]/85">
            Write to us and we will reply as soon as possible, usually within a
            few working days.
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