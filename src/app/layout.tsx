import type { Metadata } from 'next';
import { Unbounded, Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Header } from '@/components/layout/Navbar';
import SmoothScroll from '@/components/providers/SmoothScroll';
import SplashScreen from '@/components/layout/SplashScreen';
import Chatbot from '@/components/bot/Chatbot';
import { ChatHistoryProvider } from '@/components/bot/HistoryChatbot';

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin'],
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Awa Construction',
  description: 'Jasa renovasi dan konsultasi gratis untuk kontruksi outlet ataupun ruko anda',
  keywords: ['Awa Construction', 'Renovasi', 'Konsultasi', 'Kontruksi', 'Outlet', 'Ruko','Sagawa Group', 'Sagawa Media', 'Sagawa', 'kemitraan'],
  authors: [{ name: 'Awa Construction' }],
  creator: 'Awa Construction',
  publisher: 'Awa Construction',
  openGraph: {
    title: 'Awa Construction',
    description: 'Jasa renovasi dan konsultasi gratis untuk kontruksi outlet ataupun ruko anda',
    url: 'https://awa-construction.vercel.app',
    siteName: 'Awa Construction',
    images: [
      {
        url: 'https://awa-construction.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Awa Construction',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awa Construction',
    description: 'Jasa renovasi dan konsultasi gratis untuk kontruksi outlet ataupun ruko anda',
    images: ['https://awa-construction.vercel.app/og-image.png'],
  },
};

import { LanguageProvider } from '@/contexts/LanguageContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${unbounded.variable} ${nunitoSans.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <ChatHistoryProvider>
            <SplashScreen />
            <SmoothScroll>
              <Header />
              {children}
              <Chatbot />
            </SmoothScroll>
          </ChatHistoryProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
