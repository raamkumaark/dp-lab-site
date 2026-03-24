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
    "@graph": [
      {
        "@type": "ResearchOrganization",
        "@id": "https://devicephysicslab.vercel.app/#organization",
        name: "Device Physics Lab",
        url: "https://devicephysicslab.vercel.app",
        description:
          "Device Physics Lab focuses on organic electronics, charge transport in molecules, photodetectors, and advanced electronic materials.",
        logo: "https://devicephysicslab.vercel.app/logo.png",
        image: "https://devicephysicslab.vercel.app/logo.png",
        parentOrganization: {
          "@type": "Organization",
          name: "SRM University AP",
        },
      },

      {
        "@type": "Person",
        "@id": "https://devicephysicslab.vercel.app/#pi",
        name: "Dr. Sabyasachi Mukhopadhyay",
        jobTitle: "Associate Professor",
        worksFor: {
          "@id": "https://devicephysicslab.vercel.app/#organization",
        },
        affiliation: {
          "@type": "Organization",
          name: "SRM University AP",
        },
        url: "https://devicephysicslab.vercel.app",
        image: "https://devicephysicslab.vercel.app/pi.jpg",
        knowsAbout: [
          "Organic Electronics",
          "Molecular Electronics",
          "Charge Transport",
          "Optoelectronics",
        ],
        sameAs: [
          "https://scholar.google.com/citations?user=GaleEZ8AAAAJ&hl=en",
          "https://orcid.org/0000-0002-6290-6380",
          "https://www.linkedin.com/in/sabyasachi-m-3ba24615/",
        ],
      },

      {
        "@type": "ScholarlyArticle",
        "@id": "https://devicephysicslab.vercel.app/#paper1",
        headline:
          "Tailoring Lithium-Ion Storage in Li₄WO₅ via Mo Substitution",
        author: [
          {
            "@type": "Person",
            name: "M. Sarathbavan",
          },
          {
            "@id": "https://devicephysicslab.vercel.app/#pi",
          },
        ],
        datePublished: "2026",
        isPartOf: {
          "@type": "Periodical",
          name: "Journal of Physical Chemistry C",
        },
        publisher: {
          "@type": "Organization",
          name: "ACS Publications",
        },
      },

      {
        "@type": "ScholarlyArticle",
        "@id": "https://devicephysicslab.vercel.app/#paper2",
        headline:
          "Energy harvesting from LiNbO₃ piezoelectric nanogenerator",
        author: [
          {
            "@type": "Person",
            name: "M. Sarathbavan",
          },
          {
            "@id": "https://devicephysicslab.vercel.app/#pi",
          },
        ],
        datePublished: "2025",
        isPartOf: {
          "@type": "Periodical",
          name:
            "Journal of Materials Science: Materials in Electronics",
        },
      },

      {
        "@type": "ScholarlyArticle",
        "@id": "https://devicephysicslab.vercel.app/#paper3",
        headline: "Intrachain Folded Aromatic Polyamides",
        author: [
          {
            "@type": "Person",
            name: "S. Samanta",
          },
          {
            "@id": "https://devicephysicslab.vercel.app/#pi",
          },
        ],
        datePublished: "2025",
        isPartOf: {
          "@type": "Periodical",
          name: "Small",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* ✅ FINAL Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {children}
      </body>
    </html>
  );
}