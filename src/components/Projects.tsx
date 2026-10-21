"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { portfolioData, ProjectItem as Project } from "@/data/portfolio";

const projectsData = portfolioData.projects;

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Fullstack", "Frontend", "Backend", "Mobile"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 relative bg-[#08080a] overflow-hidden">
      {/* Background Ambient Lighting for Glass Refraction */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#e50914]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] bg-[#e50914]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-mono tracking-[0.2em] uppercase text-white/90 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#e50914]" />
            FEATURED ENGINEERING WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            FLAGSHIP <span className="text-[#e50914]">PROJECTS</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 max-w-xl mx-auto font-sans leading-relaxed">
            High-performance web platforms, cloud microservices, and mobile applications engineered with scalable architectures.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sm:mb-12 max-w-5xl mx-auto">
          {/* Search Input with Specular Glass */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search by title, tech stack, or architecture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 sm:py-2.5 rounded-full glass-input text-white text-base sm:text-sm placeholder:text-white/40 focus:outline-none transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 justify-center w-full md:w-auto glass-pill p-1 rounded-3xl sm:rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#e50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.5)] font-bold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 rounded-3xl glass-panel max-w-2xl mx-auto">
            <p className="text-white/60 text-base">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider glass-pill text-white transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl glass-panel-interactive overflow-hidden flex flex-col group relative"
                >
                  {/* Specular Edge Highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-20 pointer-events-none" />

                  {/* Project Image Preview */}
                  <div className="relative h-48 xs:h-56 sm:h-64 w-full overflow-hidden bg-black/40">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 650px"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-transparent to-black/60" />

                    {/* Top Telemetry Badges */}
                    <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 z-10">
                      <span className="font-mono text-[11px] sm:text-xs font-bold text-white/90 px-2.5 sm:px-3 py-1 rounded-full glass-pill">
                        {`${project.number} // ${project.category.toUpperCase()}`}
                      </span>
                      <span className="font-mono text-[11px] sm:text-xs font-semibold text-emerald-400 px-2.5 sm:px-3 py-1 rounded-full glass-pill border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-5 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono tracking-widest text-[#e50914] uppercase">
                        {project.subtitle}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-white transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans pt-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium glass-pill text-white/85"
                        >
                          <Code className="h-3 w-3 text-[#e50914]" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 pt-3 border-t border-white/10">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-pill hover:bg-white/[0.12] text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 cursor-pointer flex-1"
                      >
                        <GithubIcon className="h-4 w-4" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-[#e50914] hover:text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer flex-1 group/btn shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* GitHub Explore Repositories Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl glass-panel flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden group">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="space-y-1 relative z-10">
            <h4 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight">
              Looking for More Repositories &amp; Experimental Prototypes?
            </h4>
            <p className="text-xs sm:text-sm text-white/60">
              Browse 15+ backend services, microservices benchmarks, and algorithmic solutions on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/cheamnorakpanha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#e50914] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] cursor-pointer relative z-10 w-full sm:w-auto sm:shrink-0 sm:whitespace-nowrap"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Visit @cheamnorakpanha</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
