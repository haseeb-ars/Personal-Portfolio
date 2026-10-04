"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useAppStore } from "@/lib/store";

export default function FooterSection() {
  const { setCursor } = useAppStore();

  return (
    <footer className="relative w-full pt-28 pb-12 px-6 md:px-12 bg-black border-t border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Giant Oversized Heading */}
        <div className="space-y-8">
          <span className="eyebrow block">/ START A CONVERSATION</span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tight uppercase leading-[0.85] text-text">
            HAVE A STORE TO <br />
            <span className="gradient-text-accent">FIX OR SCALE?</span> <br />
            <span className="text-text/90">TELL ME ABOUT IT.</span>
          </h2>

          <div className="pt-8">
            <MagneticButton>
              <Link
                href="/contact"
                onMouseEnter={() => setCursor("hover", "Contact")}
                onMouseLeave={() => setCursor("default")}
                className="group inline-flex items-center space-x-6 px-10 py-6 rounded-full bg-accent text-black font-display text-xl md:text-2xl font-bold tracking-wider uppercase hover:bg-accent-hover transition-all duration-300 glow-lime-strong"
              >
                <span>LET&apos;S TALK ABOUT YOUR PROJECT</span>
                <div className="w-10 h-10 rounded-full bg-black text-accent flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-16">
          <div className="md:col-span-5 space-y-4">
            <span className="eyebrow block text-xs">Book Strategy Call</span>
            <a
              href="https://calendly.com/haseebarshed2/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-3xl md:text-4xl text-text hover:text-accent transition-colors block"
            >
              SCHEDULE ON CALENDLY
            </a>
            <p className="text-text-muted text-sm flex items-center space-x-2 pt-2">
              <MapPin className="w-4 h-4 text-cyan" />
              <span>Available for Remote Contracts & Agency Retainers</span>
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="eyebrow block text-xs">Quick Links</span>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link href="/work" className="hover:text-accent transition-colors">
                  02 / Works & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-accent transition-colors">
                  04 / 5 Service Pillars
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  05 / About & Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
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
                  className="hover:text-accent transition-colors flex items-center space-x-1"
                >
                  <span>{soc.name}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted space-y-4 sm:space-y-0">
          <span>© {new Date().getFullYear()} Haseeb Arshed. All rights reserved.</span>
          <span className="font-mono text-[11px] uppercase tracking-wider gradient-text-accent">
            Built with Next.js 15, Three.js & GSAP
          </span>
        </div>
      </div>
    </footer>
  );
}
