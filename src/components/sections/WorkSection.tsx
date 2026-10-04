"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { useAppStore } from "@/lib/store";

const CATEGORIES = ["ALL", "Custom Dev", "CRO", "Automations", "CRM", "Large Catalog", "SEO", "Headless"] as const;

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const { setCursor } = useAppStore();

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) =>
        p.categories.includes(activeCategory as any) || p.tags.includes(activeCategory.toUpperCase())
      );

  return (
    <section className="w-full py-28 px-6 md:px-12 bg-bg border-t border-white/10">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="eyebrow block mb-3">/ FEATURED CASE STUDIES</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase">
            SELECTED <br />
            STORES & WORK
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const count = cat === "ALL"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.categories.includes(cat as any) || p.tags.includes(cat.toUpperCase())).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 ${
                  activeCategory === cat
                    ? "bg-accent text-black font-bold shadow-lg shadow-accent/20"
                    : "bg-surface border border-white/10 text-text-muted hover:border-accent/50 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                {cat !== "ALL" && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeCategory === cat ? "bg-black/20 text-black" : "bg-white/10 text-text-muted"}`}>
                    {count > 0 ? count : "SOON"}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="max-w-7xl mx-auto p-12 text-center rounded-2xl bg-surface border border-white/10 space-y-4">
          <p className="text-text-muted font-mono text-sm uppercase tracking-wider">
            No public case studies currently under "{activeCategory}".
          </p>
          <p className="text-xs text-text-muted">
            SEO audits and custom headless architecture available upon request during intake.
          </p>
        </div>
      )}

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredProjects.map((project, idx) => {
          const isFlagship = project.slug === "tormino";

          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              onMouseEnter={() => setCursor("view", "View")}
              onMouseLeave={() => setCursor("default")}
              className={`group block relative space-y-6 ${isFlagship ? "md:col-span-2 bg-surface/50 p-6 md:p-8 rounded-3xl border border-accent/30 shadow-xl shadow-accent/5" : ""}`}
            >
              {/* Flagship Header Banner */}
              {isFlagship && (
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                  <div className="flex items-center space-x-2 text-accent text-xs font-mono tracking-widest uppercase font-bold">
                    <Trophy className="w-4 h-4" />
                    <span>FLAGSHIP CASE STUDY / HIGHEST IMPACT</span>
                  </div>
                  <span className="text-xs font-mono text-text-muted">912,000+ SKUs</span>
                </div>
              )}

              {/* Image Container */}
              <div className={`relative ${isFlagship ? "aspect-[21/9]" : "aspect-[16/10]"} rounded-2xl overflow-hidden bg-surface border border-white/10 group-hover:border-accent/50 transition-all duration-500`}>
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Tags on Image */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className={`font-display ${isFlagship ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"} font-bold uppercase group-hover:text-accent transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* One Line Outcome */}
                <p className="text-accent font-mono text-xs md:text-sm font-semibold tracking-wide">
                  {project.oneLineOutcome}
                </p>

                <p className="text-text-muted text-sm line-clamp-2 font-light">
                  {project.summary}
                </p>

                {/* Key Metric Pills if results present */}
                {project.results && project.results.length > 0 && (
                  <div className="flex flex-wrap gap-6 pt-2 border-t border-white/10">
                    {project.results.map((res) => (
                      <div key={res.label} className="flex flex-col">
                        <span className="font-display text-2xl md:text-3xl font-bold text-accent">
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

      {/* Footer Link to All Work */}
      <div className="max-w-7xl mx-auto mt-20 text-center">
        <Link
          href="/work"
          className="inline-flex items-center space-x-3 px-8 py-4 rounded-full border border-white/20 bg-surface text-sm font-bold tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300"
        >
          <span>VIEW ALL CASE STUDIES & ARCHIVE</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

