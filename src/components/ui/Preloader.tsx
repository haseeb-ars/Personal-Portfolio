"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const { isLoaded, setIsLoaded } = useAppStore();

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 20) + 15;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 150);
      } else {
        setCount(current);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [setIsLoaded]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#0A0A0A] p-8 md:p-16 select-none pointer-events-none"
        >
          {/* Header Tagline */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase text-text-muted">
            <span className="text-accent">/ SHOPIFY EXPERT</span>
            <span>THE ALL-IN-ONE SHOPIFY PARTNER</span>
          </div>

          {/* Center Counter */}
          <div className="my-auto flex flex-col items-center">
            <motion.h1
              className="font-display text-8xl md:text-[14rem] font-bold tracking-tighter leading-none text-text"
            >
              {count}
              <span className="text-accent text-5xl md:text-8xl">%</span>
            </motion.h1>
            <p className="mt-4 font-italic-serif text-xl text-text-muted italic">
              Initializing Experience...
            </p>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full space-y-2">
            <div className="h-[2px] w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${count}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between text-[10px] tracking-wider text-text-muted uppercase">
              <span>INITIALIZING GRAPHICS</span>
              <span>SHOPIFY ARCHITECTURE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
