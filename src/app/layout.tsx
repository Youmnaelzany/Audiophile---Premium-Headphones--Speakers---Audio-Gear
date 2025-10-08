import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Header from "@/components/navigation/Header";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile – Premium Headphones, Speakers & Audio Gear",
  description:
    "Explore Audiophile’s collection of high-end headphones, speakers, and audio accessories. Experience immersive sound quality, sleek design, and cutting-edge technology — all in one place.",
  keywords: [
    "audiophile",
    "headphones",
    "speakers",
    "audio gear",
    "sound systems",
    "premium audio",
    "wireless headphones",
    "home audio",
    "hi-fi speakers",
    "music accessories",
  ],
  openGraph: {
    title: "Audiophile – Premium Headphones, Speakers & Audio Gear",
    description:
      "Shop premium headphones, speakers, and audio accessories built for true sound lovers. Discover quality, design, and performance at Audiophile.",
    url: "https://yourdomain.com",
    siteName: "Audiophile",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Audiophile premium audio products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audiophile – Premium Headphones & Speakers",
    description:
      "Discover high-end audio gear for true sound enthusiasts. Explore premium headphones, speakers, and accessories at Audiophile.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} antialiased`}>
        <Header />
        <div className="mx-auto max-w-7xl">{children}</div>
      </body>
    </html>
  );
}
