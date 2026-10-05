"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-between px-6 md:px-12 pt-36 pb-12 overflow-hidden">
      {/* Top Eyebrow Tag */}
      <div className="flex items-center justify-between z-10 relative">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-text inline-block" />
          <span className="eyebrow text-xs md:text-sm tracking-widest font-mono">
            / SHOPIFY EXPERT PARTNER
          </span>
        </div>
        <span className="hidden md:inline-block font-mono text-xs text-text-muted uppercase tracking-widest">
          Available for Q3/Q4 Projects
        </span>
      </div>

      {/* Main Headline Container */}
      <div className="my-auto py-12 z-10 max-w-7xl relative">
        <h1 className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] font-bold tracking-tight uppercase leading-[0.88] text-text">
          ONE SHOPIFY <br />
          <span className="text-text">DEVELOPER.</span> <br />
          <span className="font-italic-serif text-text/80 text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] lowercase tracking-normal normal-case italic font-normal">
            every
          </span>{" "}
          <span className="text-text">SOLUTION.</span>
        </h1>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-8">
          <p className="text-text-muted text-base md:text-xl max-w-xl font-light leading-relaxed">
            The all-in-one partner for{" "}
            <strong className="text-text font-semibold">CRO</strong>,{" "}
            <strong className="text-text font-semibold">custom Liquid & Hydrogen</strong>,{" "}
            <strong className="text-text font-semibold">n8n & API bridge automations</strong>,{" "}
            <strong className="text-text font-semibold">CRM lead pipeline re-engagement</strong>, and store management.
          </p>

          <div className="flex items-center space-x-6">
            <MagneticButton>
              <Link
                href="/contact"
                className="group flex items-center space-x-4 bg-black text-white px-8 py-4 md:py-5 rounded-full font-display text-base md:text-lg font-bold tracking-wider uppercase hover:bg-neutral-800 transition-all duration-300"
              >
                <span>START A PROJECT</span>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="flex items-center justify-between text-xs text-text-muted z-10 pt-6 border-t border-border relative">
        <div className="flex items-center space-x-2">
          <ArrowDown className="w-4 h-4 text-text animate-bounce" />
          <span className="uppercase tracking-widest font-mono text-[11px]">SCROLL TO EXPLORE EXPERTISE</span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[11px]">01 / 06 SECTIONS</span>
      </div>
    </section>
  );
}
