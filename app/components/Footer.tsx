"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Share2, Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/vastralay.india/";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Shop All Shirts", href: "/" },
      { label: "New Arrivals", href: "/" },
      { label: "About Our Brand", href: "/" },
      { label: "Contact Us", href: "/" },
      { label: "FAQs & Support", href: "/" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Shipping & Delivery", href: "/" },
      { label: "Returns & Exchanges", href: "/" },
      { label: "Track Your Order", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Terms & Conditions", href: "/" },
    ],
  },
];

// Tailwind ko poori class string chahiye, isliye colors yahan full likhe hain
const socialLinks = [
  {
    label: "Instagram",
    Icon: FaInstagram,
    href: INSTAGRAM_URL,
    color:
      "hover:border-transparent hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] hover:text-white active:border-transparent active:bg-gradient-to-tr active:from-[#feda75] active:via-[#d62976] active:to-[#4f5bd5] active:text-white focus-visible:border-transparent focus-visible:bg-gradient-to-tr focus-visible:from-[#feda75] focus-visible:via-[#d62976] focus-visible:to-[#4f5bd5] focus-visible:text-white",
  },
  {
    label: "Facebook",
    Icon: FaFacebookF,
    href: INSTAGRAM_URL, // baad me Facebook page ka link daal dena
    color:
      "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white active:border-[#1877F2] active:bg-[#1877F2] active:text-white focus-visible:border-[#1877F2] focus-visible:bg-[#1877F2] focus-visible:text-white",
  },
  {
    label: "Twitter",
    Icon: FaTwitter,
    href: INSTAGRAM_URL, // baad me Twitter ka link daal dena
    color:
      "hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white active:border-[#1DA1F2] active:bg-[#1DA1F2] active:text-white focus-visible:border-[#1DA1F2] focus-visible:bg-[#1DA1F2] focus-visible:text-white",
  },
];

const headingClass =
  "relative mb-5 pb-3 text-[13px] font-bold uppercase tracking-[0.18em] text-[#59391d] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:rounded-full after:bg-[#B99450] max-sm:text-xs";

export default function Footer() {
  const handleShare = async () => {
    const url = window.location.origin;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Vastralay", url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Website link copy ho gaya!");
      }
    } catch {
      // user ne share cancel kar diya
    }
  };

  return (
    <footer className="relative isolate w-full overflow-hidden text-[#49301d]">
      {/* Top gold accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#B99450] to-transparent" />

      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/banner/footer.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fff8e9]/90 via-[#fff8e9]/80 to-[#fdf0d5]/90" />

      {/* Main content (pb-28 => floating bot/WhatsApp button ke liye jagah) */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-12 sm:px-8 lg:px-12 lg:pt-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-x-12">
          {/* Brand */}
          <div className="col-span-2 space-y-5 text-center sm:text-left lg:col-span-1">
            <Link
              href="/"
              className="group flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#B99450] bg-white p-0.5 shadow-md transition duration-300 group-hover:scale-105">
                <Image
                  src="/logo1.png"
                  alt="Ankit Tewari Jaipur"
                  fill
                  sizes="64px"
                  className="rounded-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <h2 className="font-serif text-2xl font-bold tracking-[0.1em] text-[#5b3218]">
                  VASTRALAY
                </h2>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b7137]">
                  Where Tradition Meets Elegance
                </p>
              </div>
            </Link>

            <p className="mx-auto max-w-xs text-sm leading-6 text-[#655342] sm:mx-0">
              Discover timeless ethnic wear, beautiful traditional prints and
              elegant styles crafted for every special occasion.
            </p>

            {/* Social icons */}
            <div className="flex justify-center gap-3 sm:justify-start">
              {socialLinks.map(({ label, Icon, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#d9bd8b] bg-white/80 text-[#785020] shadow-sm outline-none transition duration-300 hover:-translate-y-1 ${color}`}
                >
                  <Icon size={16} />
                </a>
              ))}

              {/* Share: phone me native share, desktop pe link copy */}
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9bd8b] bg-white/80 text-[#785020] shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:border-[#8b5e2b] hover:bg-[#8b5e2b] hover:text-white active:bg-[#8b5e2b] active:text-white"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1">
              <h3 className={headingClass}>{group.title}</h3>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-[13px] leading-5 text-[#655342] transition duration-200 hover:translate-x-1 hover:text-[#9a6421] sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className={headingClass}>Get in Touch</h3>

            <ul className="space-y-4 text-sm text-[#655342]">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B99450]/15 text-[#a87527]">
                  <MapPin size={17} />
                </span>
                <span>Jaipur, Rajasthan, India</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B99450]/15 text-[#a87527]">
                  <Phone size={17} />
                </span>
                <a
                  href="tel:+919876543210"
                  className="transition hover:text-[#9a6421]"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B99450]/15 text-[#a87527]">
                  <Mail size={17} />
                </span>
                <a
                  href="mailto:support@vastralay.com"
                  className="break-all transition hover:text-[#9a6421]"
                >
                  support@vastralay.com
                </a>
              </li>
            </ul>

            <p className="mt-5 text-xs italic leading-5 text-[#8c6c43]">
              Tradition in every thread. Elegance in every detail.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#cdb486]/70 pt-6 text-center text-xs text-[#78644d] md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Vastralay. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#9a6421]"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-[#9a6421]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}