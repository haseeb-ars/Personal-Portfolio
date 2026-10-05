"use client";

import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";
import FooterSection from "@/components/sections/FooterSection";

export default function ExpertisePage() {
  return (
    <div className="pt-36">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <span className="eyebrow block mb-3">/ CORE COMPETENCIES</span>
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-none text-text">
          THE PILLARS OF <br />
          <span className="text-text-muted">SHOPIFY MASTERY</span>
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mt-6 font-light leading-relaxed">
          Comprehensive e-commerce engineering & project management covering every phase from CRO hypothesis testing and custom Liquid development to store operations support.
        </p>
      </section>

      {/* Pillars Breakdown */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-28 space-y-16">
        {SERVICES.map((pillar) => (
          <div
            key={pillar.slug}
            id={pillar.slug}
            className="p-8 md:p-12 rounded-3xl bg-surface border border-border space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-baseline space-x-4">
                <span className="font-mono text-sm md:text-base font-bold text-text-muted">
                  /{pillar.number}
                </span>
                <h2 className="font-display text-3xl md:text-6xl font-bold uppercase tracking-tight text-text">
                  {pillar.title}
                </h2>
              </div>
              <p className="text-text font-mono text-xs md:text-sm tracking-wider uppercase font-semibold">
                / {pillar.tagline}
              </p>
              <p className="text-text-muted text-base md:text-lg font-light leading-relaxed pt-2 max-w-4xl">
                {pillar.description}
              </p>
            </div>

            {/* Features list */}
            <div className="border-t border-border pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillar.features.map((feat) => (
                <div key={feat} className="flex items-center space-x-3 text-sm text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-text shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
              <span className="eyebrow text-xs">Technologies Used:</span>
              {pillar.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-bg border border-border text-xs font-mono text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <FooterSection />
    </div>
  );
}
