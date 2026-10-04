"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useAppStore } from "@/lib/store";

export default function HeroSection() {
  const { setCursor } = useAppStore();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 overflow-hidden">
      {/* Ambient background glow blobs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Top Eyebrow Tag */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-accent pulse-dot" />
          <span className="eyebrow text-xs md:text-sm">/ SHOPIFY EXPERT PARTNER</span>
        </div>
        <span className="hidden md:inline-block font-mono text-xs text-text-muted uppercase tracking-widest">
          Available for Q3/Q4 Projects
        </span>
      </div>

      {/* Main Headline Container */}
      <div className="my-auto py-12 z-10 max-w-7xl">
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold tracking-tight uppercase leading-[0.85] text-text">
          ONE SHOPIFY <br />
          <span className="gradient-text-hero">
            DEVELOPER.
          </span>{" "}
          <br />
          <span className="font-italic-serif text-cyan text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] lowercase tracking-normal normal-case italic font-normal">
            every
          </span>{" "}
          <span className="gradient-text-accent">SOLUTION.</span>
        </h1>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/10 pt-8">
          <p className="text-text-muted text-base md:text-xl max-w-xl font-light leading-relaxed">
            The all-in-one partner for{" "}
            <span className="text-accent font-medium">CRO</span>,{" "}
            <span className="text-cyan font-medium">custom Liquid & Hydrogen</span>,{" "}
            <span className="text-accent font-medium">n8n & API bridge automations</span>,{" "}
            <span className="text-cyan font-medium">CRM lead pipeline re-engagement</span>, and store management.
          </p>

          <div className="flex items-center space-x-6">
            <MagneticButton>
              <Link
                href="/contact"
                onMouseEnter={() => setCursor("hover", "Contact")}
                onMouseLeave={() => setCursor("default")}
                className="group flex items-center space-x-4 bg-accent text-black px-8 py-5 rounded-full font-display text-lg font-bold tracking-wider uppercase hover:bg-accent-hover transition-all duration-300 glow-lime"
              >
                <span>START A PROJECT</span>
                <div className="w-8 h-8 rounded-full bg-black text-accent flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="flex items-center justify-between text-xs text-text-muted z-10 pt-6 border-t border-white/10">
        <div className="flex items-center space-x-2">
          <ArrowDown className="w-4 h-4 text-accent animate-bounce" />
          <span className="uppercase tracking-widest font-mono text-[11px]">SCROLL TO EXPLORE EXPERTISE</span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[11px]">01 / 06 SECTIONS</span>
      </div>
    </section>
  );
}
