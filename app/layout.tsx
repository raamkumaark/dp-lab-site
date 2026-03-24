<Script
  id="lab-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
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
    }),
  }}
/>