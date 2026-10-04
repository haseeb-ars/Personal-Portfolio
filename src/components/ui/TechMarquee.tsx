"use client";

import { useAppStore } from "@/lib/store";

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
  const { scrollVelocity } = useAppStore();

  const skew = Math.min(Math.max(scrollVelocity * 0.15, -6), 6);

  return (
    <section className="relative py-20 border-t border-b border-white/10 overflow-hidden bg-[#070707]">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[300px] h-[200px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-cyan/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="eyebrow px-6 md:px-12 mb-8 text-xs tracking-widest text-center md:text-left">
        / TECH & PLATFORM STACK
      </div>

      <div
        className="flex whitespace-nowrap overflow-hidden transition-transform duration-100 ease-out"
        style={{ transform: `skewX(${skew}deg)` }}
      >
        <div className="flex animate-marquee-left space-x-10 shrink-0 items-center">
          {TECH_ITEMS.concat(TECH_ITEMS).map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="font-display text-4xl md:text-6xl font-bold tracking-tight text-text/70 hover:text-accent transition-colors duration-300 uppercase">
                {item}
              </span>
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-cyan inline-block glow-lime" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
