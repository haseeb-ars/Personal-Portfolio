"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FooterSection() {
  return (
    <footer className="relative w-full pt-28 pb-12 px-6 md:px-12 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Giant Oversized Heading */}
        <div className="space-y-8">
          <span className="eyebrow block">/ START A CONVERSATION</span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] font-bold tracking-tight uppercase leading-[0.88] text-text">
            HAVE A STORE TO <br />
            <span className="text-text-muted">FIX OR SCALE?</span> <br />
            <span>TELL ME ABOUT IT.</span>
          </h2>

          <div className="pt-6">
            <MagneticButton>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-6 px-8 py-5 rounded-full bg-black text-white font-display text-lg md:text-xl font-bold tracking-wider uppercase hover:bg-neutral-800 transition-all duration-300"
              >
                <span>LET&apos;S TALK ABOUT YOUR PROJECT</span>
                <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border pt-16">
          <div className="md:col-span-5 space-y-4">
            <span className="eyebrow block text-xs">Book Strategy Call</span>
            <a
              href="https://calendly.com/haseebarshed2/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl md:text-4xl text-text hover:text-text-muted transition-colors block font-bold"
            >
              SCHEDULE ON CALENDLY
            </a>
            <p className="text-text-muted text-sm flex items-center space-x-2 pt-2">
              <MapPin className="w-4 h-4 text-text shrink-0" />
              <span>Available for Remote Contracts & Agency Retainers</span>
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="eyebrow block text-xs">Quick Links</span>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link href="/work" className="hover:text-text transition-colors">
                  02 / Works & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-text transition-colors">
                  04 / Service Pillars
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-text transition-colors">
                  05 / About & Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-text transition-colors">
                  06 / Contact & Calendly
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <span className="eyebrow block text-xs">Social & Profiles</span>
            <div className="flex flex-wrap gap-4 text-sm text-text-muted">
              {[
                { name: "GitHub", href: "https://github.com" },
                { name: "LinkedIn", href: "https://linkedin.com" },
                { name: "Twitter / X", href: "https://twitter.com" },
                { name: "Shopify Community", href: "https://community.shopify.com" },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors flex items-center space-x-1"
                >
                  <span>{soc.name}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted space-y-4 sm:space-y-0">
          <span>© {new Date().getFullYear()} Haseeb Arshed. All rights reserved.</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
            Built with Next.js 15 & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
