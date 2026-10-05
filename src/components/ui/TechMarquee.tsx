"use client";

const TECH_ITEMS = [
  "SHOPIFY PLUS",
  "N8N AUTOMATIONS",
  "CUSTOM API BRIDGES",
  "CRM LEAD RE-ENGAGEMENT",
  "LIQUID OS 2.0",
  "HYDROGEN / REMIX",
  "GRAPHQL ADMIN API",
  "STOREFRONT API",
  "HUBSPOT & KLAVIYO CRM",
  "SHOPIFY FUNCTIONS",
  "CHECKOUT EXTENSIBILITY",
  "CORE WEB VITALS",
  "METAOBJECTS",
  "GA4 & GTM",
  "SANITY CMS",
];

export default function TechMarquee() {
  return (
    <section className="relative py-16 border-t border-b border-border overflow-hidden">
      <div className="eyebrow px-6 md:px-12 mb-6 text-xs tracking-widest text-center md:text-left">
        / TECH & PLATFORM STACK
      </div>

      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee-left space-x-10 shrink-0 items-center">
          {TECH_ITEMS.concat(TECH_ITEMS).map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="font-display text-3xl md:text-5xl font-bold tracking-tight text-text/80 hover:text-text transition-colors duration-300 uppercase">
                {item}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-text/40 inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
