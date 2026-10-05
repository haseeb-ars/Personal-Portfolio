"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Trophy } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import FooterSection from "@/components/sections/FooterSection";

interface CaseStudyClientProps {
  slug: string;
}

export default function CaseStudyClient({ slug }: CaseStudyClientProps) {
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const isFlagship = project.slug === "tormino";

  return (
    <div className="pt-36">
      {/* Back to Work Navigation */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <Link
          href="/work"
          className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-text-muted hover:text-text uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL CASE STUDIES</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          {isFlagship && (
            <span className="px-4 py-1.5 rounded-full bg-black text-white font-mono font-bold text-xs uppercase flex items-center space-x-1.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>FLAGSHIP CASE STUDY</span>
            </span>
          )}
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full bg-surface border border-border text-text font-mono text-xs uppercase font-semibold"
            >
              {cat}
            </span>
          ))}
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-[0.88] text-text">
          {project.title}
        </h1>

        <p className="text-text font-mono text-base md:text-xl font-semibold tracking-wide border-l-2 border-text pl-4 py-1">
          {project.oneLineOutcome}
        </p>

        <p className="text-text-muted text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Live Site Action */}
        <div>
          <a
            href={project.liveUrl || project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-surface border border-border text-xs font-mono text-text hover:bg-black hover:text-white transition-all uppercase"
          >
            <span>VISIT LIVE STORE</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Main Cover Image */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-surface border border-border">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Overview Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Problem & Solution */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <span className="eyebrow block">/ THE CHALLENGE</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-text">The Problem</h2>
            <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">{project.problem}</p>
          </div>

          <div className="space-y-4 border-t border-border pt-8">
            <span className="eyebrow block">/ THE ARCHITECTURE</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-text">The Solution</h2>
            <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Right Column: Metadata Sidebar */}
        <div className="lg:col-span-4 space-y-8 p-8 rounded-3xl bg-surface border border-border h-fit">
          <div>
            <span className="eyebrow block text-xs mb-1">CLIENT</span>
            <span className="font-display text-lg font-bold uppercase text-text">{project.client}</span>
          </div>

          <div>
            <span className="eyebrow block text-xs mb-1">INDUSTRY</span>
            <span className="text-sm font-light text-text-muted">{project.industry}</span>
          </div>

          <div>
            <span className="eyebrow block text-xs mb-2">TECH STACK USED</span>
            <div className="flex flex-wrap gap-2">
              {project.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-bg border border-border text-xs font-mono text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Stats */}
      {project.results.length > 0 && (
        <section className="py-20 bg-surface border-t border-b border-border text-text mb-24">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <span className="eyebrow block text-text-muted mb-8">/ MEASURABLE IMPACT</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.results.map((res, i) => (
                <div key={i} className="space-y-2 border-l-2 border-black pl-6">
                  <span className="font-display text-4xl md:text-6xl font-bold tracking-tight block text-text">
                    {res.value}
                  </span>
                  <span className="text-sm font-mono uppercase tracking-wider text-text-muted">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28 space-y-8">
          <span className="eyebrow block">/ VISUAL GALLERY</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface border border-border"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Nav */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="eyebrow block text-xs mb-2">NEXT CASE STUDY</span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="font-display text-3xl md:text-5xl font-bold uppercase hover:text-text-muted transition-colors text-text"
            >
              {nextProject.title}
            </Link>
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center space-x-3 px-8 py-4 rounded-full bg-black text-white font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-neutral-800 transition-all"
          >
            <span>READ NEXT CASE STUDY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
