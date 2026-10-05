"use client";

import { Download } from "lucide-react";
import StatsStrip from "@/components/ui/StatsStrip";
import FooterSection from "@/components/sections/FooterSection";

export default function AboutPage() {
  return (
    <div className="pt-36">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 space-y-8">
        <span className="eyebrow block">/ ABOUT HASEEB ARSHED</span>
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-[0.88] text-text">
          THE ALL-IN-ONE <br />
          SHOPIFY PARTNER
        </h1>

        <p className="text-text-muted text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
          Based in Manchester, UK with 7+ years of engineering experience delivering high-impact Shopify solutions for agencies and direct enterprise clients worldwide.
        </p>

        {/* Download Resume Action */}
        <div className="pt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-black text-white font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-neutral-800 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Story & Positioning */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 space-y-4">
          <span className="eyebrow block text-xs">/ MY POSITIONING</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-text">
            One Engineer. Every Solution.
          </h2>
        </div>

        <div className="md:col-span-7 space-y-6 text-text-muted text-base md:text-lg font-light leading-relaxed">
          <p>
            I bridge the gap between creative design agencies, conversion-focused marketers, and complex enterprise data engineering. Rather than hiring separate contractors for theme design, speed optimization, and GraphQL scripts, you get one seasoned partner who handles it all.
          </p>
          <p>
            From custom Liquid & Hydrogen storefronts to workflow automations (n8n AI bots, custom REST/GraphQL API bridges) and CRM pipeline architecture (re-engaging old leads from dormant sales pipelines in HubSpot & Klaviyo), I build robust, revenue-generating systems.
          </p>
          <p>
            Apart from technical engineering and development, I provide comprehensive e-commerce project management and operational support—taking full ownership of sprint planning, vendor & app integrations, team coordination, catalog rollouts, and ongoing store management.
          </p>
          <p>
            Over the past 7+ years, I have partnered with leading e-commerce agencies across North America and Europe, as well as high-growth D2C brands, shipping over 45+ Shopify stores and managing multi-million variant catalogs.
          </p>
        </div>
      </section>

      {/* Agency & Experience List */}
      <section className="py-20 px-6 md:px-12 border-t border-b border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <span className="eyebrow block">/ EXPERIENCE & AGENCY PARTNERSHIPS</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-bg border border-border space-y-3">
              <span className="font-mono text-sm font-bold text-text-muted block">2021 — PRESENT</span>
              <h3 className="font-display text-2xl font-bold uppercase text-text">Lead Shopify Consultant</h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                Freelance remote engineering for enterprise Shopify Plus merchants and digital marketing agencies.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-bg border border-border space-y-3">
              <span className="font-mono text-sm font-bold text-text-muted block">2019 — 2021</span>
              <h3 className="font-display text-2xl font-bold uppercase text-text">Senior Theme & App Developer</h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                Built custom Liquid OS 2.0 theme frameworks, private GraphQL apps, and slide-out cart upsells for top agencies.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-bg border border-border space-y-3">
              <span className="font-mono text-sm font-bold text-text-muted block">2017 — 2019</span>
              <h3 className="font-display text-2xl font-bold uppercase text-text">Frontend & WebGL Developer</h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                Developed interactive 3D product visualizers, custom animations, and responsive storefronts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
