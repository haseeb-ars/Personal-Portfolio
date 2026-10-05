"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { ArrowUpRight, MapPin } from "lucide-react";

const MENU_ITEMS = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "Works", href: "/work" },
  { number: "03", label: "Case Studies", href: "/work" },
  { number: "04", label: "Expertise", href: "/expertise" },
  { number: "05", label: "About", href: "/about" },
  { number: "06", label: "Contact", href: "/contact" },
];

export default function MenuOverlay() {
  const { isMenuOpen, setMenuOpen } = useAppStore();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[8000] bg-[#F5F5F0]/98 backdrop-blur-xl flex flex-col justify-between p-8 md:p-16 text-text overflow-y-auto border-b border-border"
        >
          {/* Top Info */}
          <div className="flex items-center justify-between border-b border-border pb-6 pt-16 md:pt-8">
            <span className="eyebrow text-xs tracking-widest">/ NAVIGATION</span>
            <span className="text-xs text-text-muted uppercase tracking-widest font-mono">
              Shopify Expert Partner
            </span>
          </div>

          {/* Main Links Container */}
          <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
            <nav className="lg:col-span-7 flex flex-col space-y-4">
              {MENU_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group inline-flex items-baseline space-x-6 text-text hover:text-text-muted transition-colors duration-300"
                  >
                    <span className="font-mono text-sm md:text-base text-text-muted">
                      {item.number}
                    </span>
                    <span className="font-display text-5xl md:text-7xl font-bold tracking-tight uppercase group-hover:translate-x-3 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Column: Contact & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12 space-y-8"
            >
              <div>
                <span className="eyebrow block mb-3 text-xs">Location & Remote</span>
                <p className="text-text-muted text-sm flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-text shrink-0" />
                  <span>Manchester, UK — Remote & Worldwide Contracts</span>
                </p>
              </div>

              <div>
                <span className="eyebrow block mb-3 text-xs">Direct Call</span>
                <a
                  href="https://calendly.com/haseebarshed2/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center space-x-2 px-6 py-3 border border-text text-text bg-transparent hover:bg-black hover:text-white transition-all rounded-full font-bold text-xs tracking-wider uppercase"
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div>
                <span className="eyebrow block mb-3 text-xs">Social & Profiles</span>
                <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                  {[
                    { name: "GitHub", href: "https://github.com" },
                    { name: "LinkedIn", href: "https://linkedin.com" },
                    { name: "Twitter / X", href: "https://twitter.com" },
                  ].map((net) => (
                    <a
                      key={net.name}
                      href={net.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-text transition-colors flex items-center space-x-1"
                    >
                      <span>{net.name}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border pt-6 text-xs text-text-muted space-y-2 sm:space-y-0">
            <span>© {new Date().getFullYear()} Haseeb Arshed — All Rights Reserved.</span>
            <span className="font-mono text-[11px]">Senior Shopify Developer & Architect</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
