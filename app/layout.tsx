import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebPerdana - Jasa Pembuatan Website & Aplikasi Mobile Profesional",
  description:
    "WebPerdana adalah software house terpercaya di Indonesia yang menyediakan jasa pembuatan website, aplikasi mobile, dan solusi digital untuk bisnis Anda. Hubungi kami sekarang!",
  keywords:
    "jasa pembuatan website, aplikasi mobile, software house indonesia, web development, mobile development, webperdana",
  authors: [{ name: "WebPerdana Team" }],
  creator: "WebPerdana",
  publisher: "WebPerdana",
  robots: "index, follow",
  alternates: {
    canonical: "https://webperdana.com",
    languages: {
      "id-ID": "https://webperdana.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://webperdana.com",
    siteName: "WebPerdana",
    title: "WebPerdana - Software House Terpercaya Indonesia",
    description:
      "Solusi digital terbaik untuk bisnis Anda. Jasa pembuatan website dan aplikasi mobile profesional.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebPerdana - Software House Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebPerdana - Software House Terpercaya Indonesia",
    description:
      "Solusi digital terbaik untuk bisnis Anda. Jasa pembuatan website dan aplikasi mobile profesional.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "WebPerdana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <link rel="canonical" href="https://webperdana.com" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
