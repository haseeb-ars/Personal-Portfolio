"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-28 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="eyebrow block mb-3">/ INDUSTRY RECOGNITION & REVIEWS</span>
          <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase text-text">
            TRUSTED BY AGENCIES <br />
            & STORE OWNERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-2xl bg-bg border border-border flex flex-col justify-between space-y-6 hover:border-black transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-text opacity-70" />
                <p className="text-text-muted text-base font-light leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
                    <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase text-text">{t.author}</h3>
                    <span className="text-xs text-text-muted block font-light">{t.role} — {t.company}</span>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold text-text px-3 py-1 rounded-full bg-surface border border-border">
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
