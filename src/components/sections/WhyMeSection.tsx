"use client";

import Accordion, { AccordionItem } from "@/components/ui/Accordion";

const WHY_ME_ITEMS: AccordionItem[] = [
  {
    id: "01",
    number: "1",
    title: "Quality without compromise",
    tagline: "PASSION FOR EXCELLENCE",
    description: "I don't associate my code with anything that isn't built to the highest architectural standards. Every Liquid section, GraphQL query, and Hydrogen route is written cleanly, fully typed, and structured for maximum maintainability.",
  },
  {
    id: "02",
    number: "2",
    title: "Performance and experience is everything",
    tagline: "CORE WEB VITALS & UX",
    description: "Creating sub-second, intuitive, and remarkable buying experiences is what sets elite stores apart. Speed isn't just a metric—it directly dictates your conversion rate, ad spend efficiency, and customer lifetime value.",
  },
  {
    id: "03",
    number: "3",
    title: "Do it once, do it right",
    tagline: "TRANSPARENCY & CRAFTSMANSHIP",
    description: "No quick band-aids or bloated third-party app shortcuts. I inspect root causes, eliminate technical debt, and build resilient solutions so your store operates smoothly under flash-sale surges.",
  },
  {
    id: "04",
    number: "4",
    title: "Project Management & Operational Support",
    tagline: "BEYOND TECHNICAL CODE",
    description: "Apart from high-level technical engineering, I provide end-to-end store and project management support—handling sprint management, coordinating third-party developers & design teams, managing catalog rollouts, and overseeing store operations.",
  },
];

export default function WhyMeSection() {
  return (
    <section className="w-full py-28 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="eyebrow block mb-3">/ WHY WORK WITH ME</span>
          <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase text-text">
            THE ALL-IN-ONE <br />
            SHOPIFY PARTNER
          </h2>
        </div>

        <Accordion items={WHY_ME_ITEMS} />
      </div>
    </section>
  );
}
