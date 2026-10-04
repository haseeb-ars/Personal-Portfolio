"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";
import AnimatedShape from "@/components/ui/AnimatedShape";
import FooterSection from "@/components/sections/FooterSection";

export default function ExpertisePage() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <span className="eyebrow block mb-3">/ CORE COMPETENCIES</span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-none">
          THE PILLARS OF <br />
          <span className="gradient-text-accent">SHOPIFY MASTERY</span>
        </h1>
        <p className="text-text-muted text-xl max-w-2xl mt-6 font-light leading-relaxed">
          Comprehensive e-commerce engineering & project management covering every phase from CRO hypothesis testing and custom Liquid development to store operations support.
        </p>
      </section>

      {/* Pillars Breakdown */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-28 space-y-24">
        {SERVICES.map((pillar) => (
          <div
            key={pillar.slug}
            id={pillar.slug}
            className="p-8 md:p-12 rounded-3xl bg-surface/40 border border-white/10 hover:border-accent/40 transition-colors space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-baseline space-x-4">
                  <span className="font-display text-5xl font-bold gradient-text-accent">
                    {pillar.number}
                  </span>
                  <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
                    {pillar.title}
                  </h2>
                </div>
                <p className="text-accent font-mono text-sm tracking-wider uppercase">
                  / {pillar.tagline}
                </p>
                <p className="text-text-muted text-lg font-light leading-relaxed pt-2">
                  {pillar.description}
                </p>
              </div>

              <div className="lg:col-span-5 h-64 rounded-2xl bg-black/80 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <AnimatedShape type={pillar.iconShape} />
              </div>
            </div>

            {/* Features list */}
            <div className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillar.features.map((feat) => (
                <div key={feat} className="flex items-center space-x-3 text-sm text-text-muted">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <span className="eyebrow text-xs">Technologies Used:</span>
              {pillar.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text-muted"
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
