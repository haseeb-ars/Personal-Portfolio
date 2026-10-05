"use client";

import { PROCESS_STEPS } from "@/data/process";

export default function ProcessSection() {
  return (
    <section className="w-full py-28 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="eyebrow block mb-3">/ WORKING METHODOLOGY</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase text-text">
              FIVE-STEP <br />
              EXECUTION PROCESS
            </h2>
          </div>
          <p className="text-text-muted text-base max-w-md font-light">
            A structured, transparent engineering process refined over 7+ years of delivering high-converting Shopify stores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-black transition-all duration-300 flex flex-col justify-between h-full space-y-6"
            >
              <div>
                <span className="font-mono text-xs font-bold text-text-muted uppercase block mb-1">
                  / {step.step}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block mb-3">
                  {step.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-text group-hover:text-neutral-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-text-muted text-xs font-light mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <span className="text-[10px] uppercase font-mono font-bold text-text block mb-2">Key Deliverables</span>
                <ul className="space-y-1 text-[11px] text-text-muted">
                  {step.deliverables.map((del) => (
                    <li key={del}>• {del}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
