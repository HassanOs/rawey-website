import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/contexts/store-context';
import Header from '@/components/header';
import Footer from '@/components/footer';

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL ? (process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) : undefined;

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  title: 'RAWEY | Luxury Perfumes',
  description: 'Rawey is a luxury perfume house crafting timeless scents with the finest ingredients. Discover our signature, noir, blanc, and reserve collections.',
  keywords: ['luxury perfume', 'fragrance', 'niche perfume', 'rawey', 'oud', 'signature scent'],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'RAWEY | Luxury Perfumes',
    description: 'Timeless scents that define elegance.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full min-h-screen dark`}
    >
      <body className="min-h-screen min-w-full flex flex-col antialiased font-sans bg-background text-foreground overflow-x-hidden">
        <StoreProvider>
          <Header />
          <main className="flex-1 min-h-screen min-w-full">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
