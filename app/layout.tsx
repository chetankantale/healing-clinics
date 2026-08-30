import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Healing Clinic | Premium Dermatology & Aesthetic Care',
  description: 'Healing Clinic is a luxury dermatology clinic offering advanced skin, hair and cosmetic treatments with premium care and expert guidance.',
  metadataBase: new URL('https://www.healingclinic.com'),
  alternates: {
    canonical: 'https://www.healingclinic.com/'
  },
  openGraph: {
    title: 'Healing Clinic | Premium Dermatology & Aesthetic Care',
    description: 'Luxury dermatology treatments, advanced skincare and hair restoration at Healing Clinic.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.healingclinic.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healing Clinic | Premium Dermatology & Aesthetic Care',
    description: 'Luxury dermatology treatments, advanced skincare and hair restoration at Healing Clinic.'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Healing Clinic',
  url: 'https://www.healingclinic.com',
  logo: 'https://www.healingclinic.com/logo.png',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-7447681111',
      contactType: 'customer service',
      areaServed: 'Pune'
    }
  ],
  sameAs: ['https://www.facebook.com/healingclinic', 'https://www.instagram.com/healingclinic']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </body>
    </html>
  );
}
