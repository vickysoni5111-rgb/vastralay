import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-[#121212] text-gray-300 overflow-hidden pt-16 pb-8 border-t border-gray-800">
      
      {/* Left Side Decorative Image */}
      <div className="absolute left-0 bottom-0 top-0 w-28 md:w-44 pointer-events-none opacity-30 md:opacity-75 z-0">
        <Image 
          src="/footer-left.png" 
          alt="Footer Left Border Design" 
          fill
          className="object-cover object-left"
          sizes="(max-width: 768px) 112px, 176px"
        />
      </div>

      {/* Right Side Decorative Image */}
      <div className="absolute right-0 bottom-0 top-0 w-28 md:w-44 pointer-events-none opacity-30 md:opacity-75 z-0">
        <Image 
          src="/footer-right.png" 
          alt="Footer Right Border Design" 
          fill
          className="object-cover object-right"
          sizes="(max-width: 768px) 112px, 176px"
        />
      </div>

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
              ETHNIC VIBES
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover our exclusive collection of handcrafted ethnic wear, traditional prints, and modern fusion styles designed for every occasion.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition text-white">
                <FaInstagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition text-white">
                <FaFacebookF size={16} />
              </a>
              <a href="#" aria-label="Share" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition text-white">
                <Share2 size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition text-white">
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 uppercase tracking-wider border-b border-gray-800 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-amber-500 transition">Shop All Shirts</Link></li>
              <li><Link href="/" className="hover:text-amber-500 transition">New Arrivals</Link></li>
              <li><Link href="/" className="hover:text-amber-500 transition">About Our Brand</Link></li>
              <li><Link href="/" className="hover:text-amber-500 transition">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-amber-500 transition">FAQs & Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 uppercase tracking-wider border-b border-gray-800 pb-2 inline-block">
              Customer Care
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-amber-500 transition">Shipping & Delivery</Link></li>
              <li><Link href="/" className="hover:text-amber-500 transition">Returns & Exchanges</Link></li>
              <li><Link href="/" className="hover:text-amber-500 transition">Track Your Order</Link></li>
              <li><Link href="/" className="hover:text-amber-500 transition">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-amber-500 transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 uppercase tracking-wider border-b border-gray-800 pb-2 inline-block">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                <span>123 Ethnic Fashion Street, Design District, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-amber-500 flex-shrink-0" size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-amber-500 flex-shrink-0" size={16} />
                <span>support@ethnicvibes.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800/80 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ethnic Vibes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-gray-400 transition">Privacy Policy</Link>
            <Link href="/" className="hover:text-gray-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}