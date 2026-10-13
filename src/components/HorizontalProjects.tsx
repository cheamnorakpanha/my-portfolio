"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { motion } from "framer-motion";

interface ProjectHighlight {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  metrics: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

const highlightProjects: ProjectHighlight[] = [
  {
    id: "cloud-ecommerce",
    number: "01",
    title: "E-Commerce Cloud Architecture",
    subtitle: "High-Throughput Microservices Platform",
    category: "Fullstack / Cloud",
    description:
      "Enterprise microservices infrastructure powered by Spring Cloud, PostgreSQL, and Next.js client with Redis caching and sub-100ms API response latency.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "Redis"],
    metrics: "99.8% Uptime SLA",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
  },
  {
    id: "ai-prompt-lab",
    number: "02",
    title: "AI Prompt Optimization Hub",
    subtitle: "Realtime LLM Evaluation Platform",
    category: "AI & Frontend Engineering",
    description:
      "Analytical software platform powered by OpenAI streaming APIs that simplifies prompts, evaluates version benchmarks, and visualizes token performance metrics in real-time.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    metrics: "45ms Stream Latency",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
  },
  {
    id: "event-booking",
    number: "03",
    title: "Event Booking Scheduler API",
    subtitle: "High-Throughput Scheduling Server",
    category: "Backend / Systems",
    description:
      "High-throughput secure scheduling server featuring token-based authentication, custom query caching pipelines, and automated email trigger workers.",
    technologies: ["Spring Boot", "MySQL", "Postman", "Docker"],
    metrics: "1.2M Request Benchmark",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=1200&auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
  },
  {
    id: "mobile-campus",
    number: "04",
    title: "Classroom Management Mobile App",
    subtitle: "Offline-First Academic Coordination",
    category: "Mobile Engineering",
    description:
      "A Flutter application designed for local institutions to coordinate events, stream lecture handouts, and verify attendance through localized coordinates.",
    technologies: ["Flutter", "Dart", "MySQL", "Figma"],
    metrics: "Offline-First Sync",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
  },
];

export default function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [progress, setProgress] = useState(0);

  const checkScrollState = () => {
    const el = containerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const currentProgress = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
    setProgress(currentProgress);
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < maxScroll - 20);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollState, { passive: true });
    checkScrollState();

    return () => el.removeEventListener("scroll", checkScrollState);
  }, []);

  const scrollByAmount = (offset: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section id="featured" className="py-24 relative overflow-hidden bg-muted/20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              <Layers className="h-4 w-4" />
              <span>Flagship Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Featured Architecture Highlights
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
              In-depth view of key software engineering architectures and full-stack solutions.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs text-muted-foreground font-mono">
                {Math.round(progress)}% viewed
              </span>
              <div className="w-28 h-1 bg-border rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
                  style={{ width: `${Math.max(progress, 15)}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollByAmount(-480)}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`p-2.5 rounded-xl border glass transition-all cursor-pointer ${
                  canScrollLeft
                    ? "border-border text-foreground hover:bg-muted/50 hover:border-primary/40"
                    : "border-border/30 text-muted-foreground/40 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollByAmount(480)}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`p-2.5 rounded-xl border glass transition-all cursor-pointer ${
                  canScrollRight
                    ? "border-border text-foreground hover:bg-muted/50 hover:border-primary/40"
                    : "border-border/30 text-muted-foreground/40 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track with CSS Scroll Snapping */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {highlightProjects.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex-shrink-0 w-[88vw] sm:w-[500px] lg:w-[580px] snap-center rounded-2xl border border-border glass overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group bg-card"
          >
            {/* Card Header */}
            <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-3">
                <span className="text-xl font-extrabold text-primary font-mono">{item.number}</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase">{item.category}</span>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {item.metrics}
              </span>
            </div>

            {/* Project Image */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 88vw, 580px"
              />
            </div>

            {/* Content & Actions */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-accent mt-1">
                  {item.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-secondary-foreground border border-border/40 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-border glass hover:bg-muted/60 text-foreground text-xs font-semibold transition-all cursor-pointer"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>Source Code</span>
                </a>
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-semibold shadow-md shadow-primary/20 transition-all cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
