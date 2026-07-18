import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://proautoservice.nl'),
  title: {
    default: 'Pro Auto Service | Vakkundig auto-onderhoud',
    template: '%s | Pro Auto Service',
  },
  description:
    'Vakkundige diagnose, APK, onderhoud en autoreparatie met duidelijke uitleg en persoonlijke service.',
  openGraph: {
    title: 'Pro Auto Service',
    description: 'Vakkundige service. Zorgeloos onderweg.',
    type: 'website',
    locale: 'nl_NL',
    images: ['/images/hero-garage.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.variable} ${barlow.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
