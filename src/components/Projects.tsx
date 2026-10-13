"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FolderGit2, ExternalLink, Code, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

interface Project {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Frontend" | "Backend" | "Fullstack" | "Mobile";
  technologies: string[];
  metrics: string;
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    number: "01",
    title: "E-Commerce Cloud Architecture",
    subtitle: "High-Throughput Microservices Platform",
    description:
      "Enterprise microservices infrastructure powered by Spring Cloud, PostgreSQL, and Next.js client with Redis caching and sub-100ms API response latency.",
    category: "Fullstack",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "Redis"],
    metrics: "99.8% Uptime SLA",
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
    imageUrl:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    number: "02",
    title: "AI Prompt Optimization Hub",
    subtitle: "Realtime LLM Evaluation Platform",
    description:
      "Analytical software platform powered by OpenAI streaming APIs that simplifies prompts, evaluates version benchmarks, and visualizes token performance metrics in real-time.",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Framer Motion"],
    metrics: "45ms Stream Latency",
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    number: "03",
    title: "Event Booking Scheduler API",
    subtitle: "High-Throughput Scheduling Server",
    description:
      "High-throughput secure scheduling server featuring token-based authentication, custom query caching pipelines, and automated email trigger workers.",
    category: "Backend",
    technologies: ["Spring Boot", "MySQL", "Postman", "Docker", "Git"],
    metrics: "1.2M Request Benchmark",
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
    imageUrl:
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    number: "04",
    title: "Classroom Management Mobile App",
    subtitle: "Offline-First Academic Coordination",
    description:
      "A Flutter application designed for local institutions to coordinate events, stream lecture handouts, and verify attendance through localized coordinates.",
    category: "Mobile",
    technologies: ["Flutter", "Dart", "MySQL", "Figma", "REST APIs"],
    metrics: "Offline-First Sync",
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",
  },
];

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
    <section id="projects" className="py-28 relative bg-[#08080a] overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#e50914]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono tracking-[0.2em] uppercase text-white/80 mb-4">
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
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 max-w-5xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search by title, tech stack, or architecture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-white/10 bg-[#0d0e14] text-white text-xs sm:text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e50914] focus:border-transparent transition-all shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center w-full md:w-auto bg-white/[0.03] p-1 rounded-full border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#e50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]"
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
          <div className="text-center py-20 rounded-3xl border border-white/10 bg-[#0d0e14]/50 max-w-2xl mx-auto">
            <p className="text-white/60 text-base">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl border border-white/10 overflow-hidden bg-[#0a0a0f] hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col group relative"
                >
                  {/* Project Image Preview */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/40">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 650px"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-black/50" />

                    {/* Top Telemetry Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="font-mono text-xs font-bold text-white/90 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                        {project.number} // {project.category.toUpperCase()}
                      </span>
                      <span className="font-mono text-xs font-semibold text-emerald-400 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
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
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white/[0.04] text-white/80 border border-white/10"
                        >
                          <Code className="h-3 w-3 text-[#e50914]" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 cursor-pointer flex-1"
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
        <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.02] via-white/[0.05] to-white/[0.02] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#e50914] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] cursor-pointer whitespace-nowrap"
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
