import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { site } from '@/lib/site';
import './globals.css';

const geist = Geist({ subsets: ['latin', 'latin-ext'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin', 'latin-ext'], variable: '--font-geist-mono', display: 'swap' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin', 'latin-ext'], variable: '--font-bebas', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Public Solar — Panouri fotovoltaice și baterii la cheie | Buzău',
    template: '%s | Public Solar',
  },
  description:
    'Instalator național validat AFM. Sisteme fotovoltaice și baterii la cheie pentru case și companii, dosar Casa Verde și prosumator, montaj și mentenanță. Din 2004, Buzău.',
  keywords: ['panouri fotovoltaice', 'Casa Verde', 'Casa Verde Baterii 2026', 'baterii', 'prosumator', 'Buzău', 'instalator AFM', 'RePowerEU'],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Public Solar',
    title: 'Public Solar — Energie curată, produsă pe acoperișul tău',
    description: 'Sisteme fotovoltaice și baterii la cheie. Instalator național validat AFM, din 2004.',
  },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#0E3B26',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Public Solar — Public Creation S.R.L.',
  url: site.url,
  telephone: '+40746333332',
  email: site.email,
  foundingDate: '2004',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Șos. Brăilei nr. 6',
    addressLocality: 'Buzău',
    addressCountry: 'RO',
  },
  openingHours: 'Mo-Fr 08:00-16:00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${geist.variable} ${geistMono.variable} ${bebas.variable}`}>
      <body>
        <a href="#continut" className="skip-link">
          Sari la conținut
        </a>
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
