"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface AccordionItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>("01");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full divide-y divide-border border-t border-b border-border">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-8 group">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-start justify-between text-left focus:outline-none cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full pr-8">
                <span className="md:col-span-2 font-mono text-sm text-text-muted tracking-widest pt-1">
                  / {item.number}
                </span>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight uppercase text-text group-hover:text-neutral-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="eyebrow block mt-2 text-xs">
                    / {item.tagline}
                  </span>
                </div>
              </div>

              {/* Plus/Minus Icon */}
              <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text group-hover:border-black transition-colors shrink-0">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6 pb-2">
                    <div className="md:col-start-3 md:col-span-9">
                      <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl font-light">
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
