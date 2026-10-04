export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Haseeb Arshed",
    jobTitle: "Senior Shopify Developer & E-Commerce Architect",
    url: "https://shopify-developer.portfolio",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressCountry: "UK",
    },
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://twitter.com",
    ],
    knowsAbout: [
      "Shopify Development",
      "Liquid",
      "Hydrogen",
      "Storefront API",
      "GraphQL",
      "Conversion Rate Optimization",
      "Core Web Vitals",
      "Shopify Functions",
      "Checkout Extensibility",
    ],
    description:
      "Manchester, UK-based expert freelance Shopify partner delivering high-converting Liquid themes, headless Hydrogen apps, 10k+ SKU catalog migrations, and Core Web Vitals optimizations.",
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Shopify Expert Developer Services (Haseeb Arshed)",
    image: "https://shopify-developer.portfolio/og-image.png",
    priceRange: "$$$",
    telephone: "+44-161-SHOPIFY",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressCountry: "UK",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    serviceType: [
      "Conversion Rate Optimization",
      "Custom Shopify Development",
      "Large Catalog Data Migration",
      "Shopify Technical SEO",
      "Emergency Shopify Support & Bug Fixing",
    ],
  };
}
