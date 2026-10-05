"use client";

import { STATS } from "@/data/stats";

export default function StatsStrip() {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 border-t border-b border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
        {STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col justify-between pt-6 md:pt-0 ${idx > 0 ? "md:pl-8" : ""}`}
          >
            <div>
              <span className="font-display text-5xl md:text-7xl font-bold tracking-tight text-text block mb-1">
                {stat.value}
              </span>
              <span className="font-display text-base md:text-lg font-bold uppercase tracking-wider text-text block">
                {stat.label}
              </span>
            </div>
            <p className="text-xs text-text-muted mt-2 font-light leading-relaxed">
              {stat.sublabel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
