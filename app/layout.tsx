import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Device Physics Lab | Organic Electronics & Optoelectronics Research",
  description:
    "Device Physics Lab focuses on organic electronics, charge transport in molecules, photodetectors, and advanced electronic materials research.",

  keywords: [
    "Device Physics Lab",
    "Organic Electronics",
    "Optoelectronics",
    "Charge Transport",
    "Photodetectors",
    "Electronic Materials",
    "Research Lab India",
  ],

  authors: [{ name: "Device Physics Lab" }],

  openGraph: {
    title: "Device Physics Lab",
    description:
      "Research in organic electronics, molecular charge transport, and optoelectronic devices.",
    url: "https://devicephysicslab.vercel.app",
    siteName: "Device Physics Lab",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}