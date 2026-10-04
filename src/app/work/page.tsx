"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import FooterSection from "@/components/sections/FooterSection";
import { useAppStore } from "@/lib/store";

const CATEGORIES = ["ALL", "Custom Dev", "CRO", "Automations", "CRM", "Large Catalog", "SEO", "Headless"] as const;

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const { setCursor } = useAppStore();

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) =>
        p.categories.includes(activeCategory as any) || p.tags.includes(activeCategory.toUpperCase())
      );

  return (
    <div className="pt-32">
      {/* Page Header */}
      <section className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
        <span className="eyebrow block mb-3">/ PORTFOLIO & ARCHIVE</span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-none">
          SELECTED <br />
          SHOPIFY STORES
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mt-6 font-light">
          A showcase of custom Liquid themes, high-converting CRO redesigns, platform migrations, and complex e-commerce catalog engineering built for scaling brands.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mt-10 border-t border-b border-white/10 py-6">
          {CATEGORIES.map((cat) => {
            const count = cat === "ALL"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.categories.includes(cat as any) || p.tags.includes(cat.toUpperCase())).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === cat
                    ? "bg-accent text-black font-bold shadow-lg shadow-accent/20"
                    : "bg-surface border border-white/10 text-text-muted hover:border-accent/50 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                {cat !== "ALL" && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeCategory === cat ? "bg-black/20 text-black" : "bg-white/10 text-text-muted"}`}>
                    {count > 0 ? count : "SOON"}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="p-12 text-center rounded-2xl bg-surface border border-white/10 space-y-4">
            <p className="text-text-muted font-mono text-sm uppercase tracking-wider">
              No public case studies currently under "{activeCategory}".
            </p>
            <p className="text-xs text-text-muted">
              SEO audits and custom headless architecture available upon request during intake.
            </p>
          </div>
        </div>
      )}

      {/* Grid of Projects */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => {
            const isFlagship = project.slug === "tormino";

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                onMouseEnter={() => setCursor("view", "View")}
                onMouseLeave={() => setCursor("default")}
                className={`group block relative space-y-6 ${isFlagship ? "md:col-span-2 bg-surface/50 p-6 md:p-8 rounded-3xl border border-accent/30 shadow-xl shadow-accent/5" : ""}`}
              >
                {/* Flagship Banner */}
                {isFlagship && (
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <div className="flex items-center space-x-2 text-accent text-xs font-mono tracking-widest uppercase font-bold">
                      <Trophy className="w-4 h-4" />
                      <span>FLAGSHIP CASE STUDY / HIGHEST IMPACT</span>
                    </div>
                    <span className="text-xs font-mono text-text-muted">912,000+ SKUs</span>
                  </div>
                )}

                <div className={`relative ${isFlagship ? "aspect-[21/9]" : "aspect-[16/10]"} rounded-2xl overflow-hidden bg-surface border border-white/10 group-hover:border-accent/50 transition-all duration-500`}>
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className={`font-display ${isFlagship ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"} font-bold uppercase group-hover:text-accent transition-colors`}>
                      {project.title}
                    </h2>
                    <ArrowUpRight className="w-6 h-6 text-text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <p className="text-accent font-mono text-xs md:text-sm font-semibold tracking-wide">
                    {project.oneLineOutcome}
                  </p>

                  <p className="text-text-muted text-sm font-light">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results highlight if available */}
                  {project.results && project.results.length > 0 && (
                    <div className="flex flex-wrap gap-6 pt-3 border-t border-white/10">
                      {project.results.map((res) => (
                        <div key={res.label} className="flex flex-col">
                          <span className="font-display text-2xl font-bold text-accent">
                            {res.value}
                          </span>
                          <span className="text-[10px] text-text-muted uppercase tracking-wider font-mono">
                            {res.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

