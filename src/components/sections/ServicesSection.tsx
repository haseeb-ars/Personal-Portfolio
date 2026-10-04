"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";
import AnimatedShape from "@/components/ui/AnimatedShape";
import { useAppStore } from "@/lib/store";

export default function ServicesSection() {
  const { setCursor } = useAppStore();

  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-surface/40 backdrop-blur-md border-t border-white/10">
      {/* Ambient glow */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 relative z-10">
        <div>
          <span className="eyebrow block mb-3">/ EXPERTISE & SERVICES</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase">
            YOUR SHOPIFY <br />
            <span className="gradient-text-accent">SOLUTIONS</span> IN ONE PLACE
          </h2>
        </div>

        <Link
          href="/expertise"
          onMouseEnter={() => setCursor("hover", "Explore")}
          onMouseLeave={() => setCursor("default")}
          className="group inline-flex items-center space-x-3 text-accent font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
        >
          <span>EXPLORE ALL PILLARS</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      {/* Services Rows */}
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {SERVICES.map((service) => (
          <div
            key={service.slug}
            className="group relative border-t border-white/10 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-accent/50 transition-colors duration-300"
          >
            {/* Number & Title */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
              <div className="flex items-baseline space-x-4">
                <span className="font-display text-4xl md:text-5xl font-bold gradient-text-accent">
                  {service.number}
                </span>
                <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase text-text group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-text-muted text-lg font-light leading-relaxed max-w-md">
                {service.tagline}
              </p>
            </div>

            {/* Middle: CSS 3D Shape Preview Box */}
            <div className="lg:col-span-3 h-48 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-accent/30 transition-colors">
              <AnimatedShape type={service.iconShape} />
            </div>

            {/* Right: Feature Bullets & Tech */}
            <div className="lg:col-span-4 space-y-6">
              <ul className="space-y-3 text-sm text-text-muted">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-text-muted"
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
