import type { Metadata, Viewport } from "next";
import localFont from "@next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
// import dynamic from 'next/dynamic';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 400 900",
});


const titleBL = "Beso Kavzharadze";
const colorBL = '#90a023'; // Green
const urlBL = 'https://beso-k.nl';
const imageBL = 'https://www.beso-k.nl/_next/image?url=%2Fme.webp&w=384&q=75';
const descriptionBL = "Explore Beso Kavzharadze's extensive skills and expertise. Discover what makes Beso a versatile and dynamic professional.";  
const creatorBL = "B. Kavzharadze - OwlWeb";

export const metadata: Metadata = {
  manifest: "/site.webmanifest.json",
  applicationName: "Website",
  authors: [{ name: "beso-k.nl", url: "https://beso-k.nl/" }],
  generator: "Next.js",
  title: {
    default: titleBL,
    template: "%s | beso-k.nl",
  },
  description: descriptionBL,
  creator: creatorBL,
  publisher: "Vercel",
  robots: "index, follow",
  alternates: { canonical: urlBL },

  icons: {
    icon:['/favicons/favicon.ico?v=4'],
    apple:['/favicons/apple-touch-icon.png?v=4'],
    shortcut:['/favicons/apple-touch-icon.png'],    
  },
  openGraph: {
    type: "website",
    url: urlBL,
    title: titleBL,
    description: descriptionBL,
    siteName: titleBL,
    images: [{ url: imageBL, }],
  },
  
  other: {
    "color-scheme": "dark only",
    "twitter:card": imageBL,
    "twitter:site": urlBL,
    "twitter:creator": creatorBL,
    "twitter:title": titleBL,
    "twitter:description": descriptionBL,
    "twitter:image": imageBL,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": titleBL,
    "mobile-web-app-capable": "yes",
    
  }
};

export const viewport: Viewport = {
  themeColor: colorBL,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
