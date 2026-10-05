"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 border-t border-border">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 relative z-10">
        <div>
          <span className="eyebrow block mb-3">/ EXPERTISE & SERVICES</span>
          <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase text-text">
            YOUR SHOPIFY <br />
            <span className="text-text-muted">SOLUTIONS</span> IN ONE PLACE
          </h2>
        </div>

        <Link
          href="/expertise"
          className="group inline-flex items-center space-x-3 text-text font-bold text-xs md:text-sm uppercase tracking-widest hover:text-text-muted transition-colors"
        >
          <span>EXPLORE ALL PILLARS</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {SERVICES.map((service) => (
          <div
            key={service.slug}
            className="group relative border-t border-border pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-black transition-colors duration-300"
          >
            {/* Number & Title */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="flex items-baseline space-x-4">
                <span className="font-mono text-sm md:text-base font-bold text-text-muted">
                  /{service.number}
                </span>
                <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase text-text group-hover:text-neutral-700 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-text-muted text-base md:text-lg font-light leading-relaxed max-w-md">
                {service.tagline}
              </p>
            </div>

            {/* Middle: Feature Bullets */}
            <div className="lg:col-span-4 space-y-3">
              <span className="eyebrow block text-[11px] mb-2">Core Scope & Capabilities</span>
              <ul className="space-y-2.5 text-sm text-text-muted">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-text shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Tech Stack Pills */}
            <div className="lg:col-span-3 space-y-3">
              <span className="eyebrow block text-[11px] mb-2">Technologies Used</span>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-surface border border-border text-[11px] font-mono text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
