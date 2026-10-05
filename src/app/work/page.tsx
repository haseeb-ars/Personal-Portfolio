"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import FooterSection from "@/components/sections/FooterSection";

const CATEGORIES = ["ALL", "Custom Dev", "CRO", "Automations", "CRM", "Large Catalog", "SEO", "Headless"] as const;

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) =>
        p.categories.includes(activeCategory as any) || p.tags.includes(activeCategory.toUpperCase())
      );

  return (
    <div className="pt-36">
      {/* Page Header */}
      <section className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
        <span className="eyebrow block mb-3">/ PORTFOLIO & ARCHIVE</span>
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-none text-text">
          SELECTED <br />
          SHOPIFY STORES
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-2xl mt-6 font-light">
          A showcase of custom Liquid themes, high-converting CRO redesigns, platform migrations, and complex e-commerce catalog engineering built for scaling brands.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mt-10 border-t border-b border-border py-6">
          {CATEGORIES.map((cat) => {
            const count = cat === "ALL"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.categories.includes(cat as any) || p.tags.includes(cat.toUpperCase())).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-black text-white font-bold"
                    : "bg-surface border border-border text-text-muted hover:border-black hover:text-text"
                }`}
              >
                <span>{cat}</span>
                {cat !== "ALL" && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeCategory === cat ? "bg-white/20 text-white" : "bg-black/5 text-text-muted"}`}>
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
          <div className="p-12 text-center rounded-2xl bg-surface border border-border space-y-4">
            <p className="text-text-muted font-mono text-sm uppercase tracking-wider">
              No public case studies currently under &quot;{activeCategory}&quot;.
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
                className={`group block relative space-y-6 ${isFlagship ? "md:col-span-2 bg-surface p-6 md:p-8 rounded-3xl border border-border shadow-sm" : ""}`}
              >
                {/* Flagship Banner */}
                {isFlagship && (
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-2">
                    <div className="flex items-center space-x-2 text-text text-xs font-mono tracking-widest uppercase font-bold">
                      <Trophy className="w-4 h-4 text-text" />
                      <span>FLAGSHIP CASE STUDY / HIGHEST IMPACT</span>
                    </div>
                    <span className="text-xs font-mono text-text-muted">912,000+ SKUs</span>
                  </div>
                )}

                <div className={`relative ${isFlagship ? "aspect-[21/9]" : "aspect-[16/10]"} rounded-2xl overflow-hidden bg-surface border border-border group-hover:border-black transition-all duration-300`}>
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className={`font-display ${isFlagship ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"} font-bold uppercase text-text group-hover:text-neutral-700 transition-colors`}>
                      {project.title}
                    </h2>
                    <ArrowUpRight className="w-6 h-6 text-text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <p className="text-text font-mono text-xs md:text-sm font-semibold tracking-wide">
                    {project.oneLineOutcome}
                  </p>

                  <p className="text-text-muted text-sm font-light">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-surface border border-border text-[10px] font-mono text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results highlight if available */}
                  {project.results && project.results.length > 0 && (
                    <div className="flex flex-wrap gap-6 pt-3 border-t border-border">
                      {project.results.map((res) => (
                        <div key={res.label} className="flex flex-col">
                          <span className="font-display text-2xl font-bold text-text">
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
