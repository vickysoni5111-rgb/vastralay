import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './WatsAppButton/page';
import AiStylingAssistant from './AiStylingAssistant/page';
import AdvertisementModal from './AdvertisementModal/page';
import { ShopProvider } from './context/ShopContext';
import Preloader from './components/Preloader';

const headingFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Powerful SEO Metadata for Top Google Ranking
export const metadata: Metadata = {
  metadataBase: new URL('https://vastralaydrankit.in'),
  title: {
    default: 'Vastralay | Best Clothing Collection in Jaipur by Dr. Ankit Tewari',
    template: '%s | Vastralay Jaipur',
  },
  description: 'Explore the best clothing and fashion collection at Vastralay, Jaipur, curated by Dr. Ankit Tewari. Top-quality ethnic, modern, and luxury wear.',
  keywords: [
    'Vastralay',
    'Dr Ankit Tewari',
    'Dr Ankit Tewari Jaipur',
    'Vastralay Jaipur',
    'best clothing collection Jaipur',
    'Vastralay Dr Ankit Tewari',
    'luxury fashion store Jaipur',
    'ethnic wear Jaipur',
  ],
  authors: [{ name: 'Dr. Ankit Tewari' }],
  creator: 'Vastralay',
  publisher: 'Vastralay',
  verification: {
    google: 'M84Kydqg_9c-tKmpb6ruonDEhbxtaWjBm0DSOtdeBc4',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Vastralay | Best Collection by Dr. Ankit Tewari Jaipur',
    description: 'Discover premium fashion and exclusive clothing collections at Vastralay, Jaipur.',
    url: 'https://vastralaydrankit.in',
    siteName: 'Vastralay',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vastralay | Best Collection by Dr. Ankit Tewari Jaipur',
    description: 'Exclusive clothing collection at Vastralay, Jaipur.',
  },
  alternates: {
    canonical: 'https://vastralaydrankit.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#FFFCF6] text-[#352923] antialiased min-h-screen w-full overflow-x-hidden relative"
        suppressHydrationWarning
      >
        <ShopProvider>
          <Suspense fallback={null}>
            <Preloader />
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
          </Suspense>

          <main className="w-full overflow-x-hidden">
            {children}
          </main>

          <AiStylingAssistant />
          <AdvertisementModal />
          <WhatsAppButton />
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}