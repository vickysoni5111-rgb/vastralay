import { Suspense } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './WatsAppButton/page';
import AiStylingAssistant from './AiStylingAssistant/page';
import AdvertisementModal from './AdvertisementModal/page';
import { ShopProvider } from './context/ShopContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className="bg-[#FFFCF6] text-[#352923] antialiased min-h-screen w-full overflow-x-hidden relative"
        suppressHydrationWarning
      >
        <ShopProvider>
          <Suspense fallback={null}>
            <Navbar />
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