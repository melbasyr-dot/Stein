import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import PixelScripts from '@/components/ui/PixelScripts';

export const metadata: Metadata = {
  title: 'ناما للجمال | Nama Beauty - منتجات جمال فاخرة للمرأة السعودية',
  description: 'اكتشفي سر الجمال الحقيقي مع ناما للجمال. منتجات بيوتين للشعر، كولاجين بحري لمكافحة التجاعيد، ومغنيسيوم للهالات السوداء. توصيل سريع في السعودية.',
  keywords: 'ناما للجمال, بيوتين, كولاجين بحري, مغنيسيوم, صحة الشعر, مكافحة التجاعيد, الهالات السوداء, جمال المرأة السعودية',
  openGraph: {
    title: 'ناما للجمال | Nama Beauty',
    description: 'منتجات جمال فاخرة مدعومة بالعلم للمرأة السعودية',
    url: 'https://namabeauty.shop',
    siteName: 'Nama Beauty | ناما للجمال',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ناما للجمال | Nama Beauty',
    description: 'منتجات جمال فاخرة مدعومة بالعلم',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <PixelScripts />
      </head>
      <body className="font-arabic antialiased">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              fontFamily: 'Cairo, sans-serif',
              direction: 'rtl',
              textAlign: 'right',
              background: '#1a1008',
              color: '#f9f2e5',
              border: '1px solid #d4920f',
            },
          }}
        />
      </body>
    </html>
  );
}
