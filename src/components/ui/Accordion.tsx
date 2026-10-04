"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useAppStore } from "@/lib/store";

export interface AccordionItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>("01");
  const { setCursor } = useAppStore();

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full divide-y divide-white/10 border-t border-b border-white/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-8 group">
            <button
              onClick={() => toggle(item.id)}
              onMouseEnter={() => setCursor("hover", isOpen ? "Close" : "Read")}
              onMouseLeave={() => setCursor("default")}
              className="w-full flex items-start justify-between text-left focus:outline-none"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full pr-8">
                <span className="md:col-span-2 font-mono text-sm text-accent tracking-widest pt-1">
                  / {item.number}
                </span>
                <div className="md:col-span-10">
                  <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="eyebrow block mt-2 text-xs opacity-70">
                    / {item.tagline}
                  </span>
                </div>
              </div>

              {/* Plus/Minus Icon */}
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text group-hover:border-accent group-hover:text-accent transition-colors flex-shrink-0">
                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6 pb-2">
                    <div className="md:col-start-3 md:col-span-9">
                      <p className="text-text-muted text-lg leading-relaxed max-w-2xl font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
