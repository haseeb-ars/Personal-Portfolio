"use client";

import Link from "next/link";
import { useAppStore } from "@/lib/store";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { isMenuOpen, toggleMenu } = useAppStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-[9000] px-6 md:px-12 py-6 flex items-center justify-between pointer-events-none">
      {/* Brand Logo */}
      <Link
        href="/"
        className="pointer-events-auto group flex items-center space-x-3"
      >
        <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-display text-lg font-bold group-hover:scale-105 transition-transform duration-300">
          H
        </span>
        <div className="flex flex-col">
          <span className="font-display text-lg md:text-xl font-bold tracking-tight text-text leading-none uppercase">
            Haseeb Arshed
          </span>
          <span className="text-[10px] tracking-widest text-text-muted uppercase font-mono mt-0.5">
            / SHOPIFY EXPERT • MANCHESTER, UK
          </span>
        </div>
      </Link>

      {/* Right Action Items */}
      <div className="flex items-center space-x-4 pointer-events-auto">
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-border bg-bg/80 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-text hover:bg-black hover:text-white transition-all duration-300"
        >
          Hire Shopify Expert
        </Link>

        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="group flex items-center space-x-2 px-5 py-2.5 rounded-full bg-bg/80 border border-border backdrop-blur-md hover:border-black transition-all duration-300 cursor-pointer"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text">
            {isMenuOpen ? "CLOSE" : "MENU"}
          </span>
          <div className="w-4 h-4 flex items-center justify-center text-text">
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </div>
        </button>
      </div>
    </header>
  );
}
