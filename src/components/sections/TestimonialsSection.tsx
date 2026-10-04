"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-28 px-6 md:px-12 bg-surface/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="eyebrow block mb-3">/ INDUSTRY RECOGNITION & REVIEWS</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase">
            TRUSTED BY AGENCIES <br />
            & STORE OWNERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between space-y-6 hover:border-accent/40 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-accent opacity-80" />
                <p className="text-text-muted text-base font-light leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20">
                    <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold uppercase text-text">{t.author}</h4>
                    <span className="text-xs text-text-muted block font-light">{t.role} — {t.company}</span>
                  </div>
                </div>

                <span className="font-display text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
