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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}