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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "@id": "https://devicephysicslab.vercel.app/#organization",
    name: "Device Physics Lab",
    url: "https://devicephysicslab.vercel.app",
    description:
      "Device Physics Lab focuses on organic electronics, charge transport in molecules, photodetectors, and advanced electronic materials.",
    areaOfResearch: [
      "Organic Electronics",
      "Optoelectronics",
      "Charge Transport",
      "Photodetectors",
    ],
    logo: "https://devicephysicslab.vercel.app/logo.png",
    image: "https://devicephysicslab.vercel.app/logo.png",
    parentOrganization: {
      "@type": "Organization",
      name: "SRM University AP",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* ✅ THIS IS THE ONLY IMPORTANT LINE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {children}
      </body>
    </html>
  );
}