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