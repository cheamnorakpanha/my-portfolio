"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeader from "./SectionHeader";
import { portfolioData } from "@/data/portfolio";

const projects = portfolioData.projects;
const categories = ["All", "Fullstack", "Frontend", "Backend", "Mobile"] as const;

export default function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const reduce = useReducedMotion();

  const counts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((c) => [c, c === "All" ? projects.length : projects.filter((p) => p.category === c).length]),
      ) as Record<(typeof categories)[number], number>,
    [],
  );

  const visible = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <section id="projects" className="grid-paper text-ink py-20 sm:py-28 border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          label="Selected work"
          title="Flagship"
          highlight="Projects"
          aside="High-performance web platforms, cloud microservices, and mobile applications engineered with scalable architectures."
        />

        {/* Filter */}
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-3 mb-10">
          {categories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                disabled={counts[c] === 0}
                onClick={() => setCategory(c)}
                className={`brut-btn !px-3 !py-2 disabled:opacity-40 ${active ? "bg-ink text-paper" : "bg-card text-ink"}`}
              >
                {c}
                <span className={`px-1.5 ${active ? "bg-signal text-signal-fg" : "bg-ink text-paper"}`}>{counts[c]}</span>
              </button>
            );
          })}
        </div>

        <ul className="grid gap-8 md:grid-cols-2">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((project, idx) => (
              <motion.li
                key={project.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <article className="group h-full flex flex-col brut brut-shadow brut-lift bg-card">
                  {/* Window bar */}
                  <div className="flex items-center justify-between bg-ink text-paper px-4 py-2.5">
                    <span className="label">
                      <span className="text-glitch-r">#{project.number}</span> / {project.category}
                    </span>
                    <span className="flex gap-1.5" aria-hidden="true">
                      <span className="h-3 w-3 border-2 border-paper" />
                      <span className="h-3 w-3 border-2 border-paper" />
                      <span className="h-3 w-3 bg-signal border-2 border-paper" />
                    </span>
                  </div>

                  <div className="relative aspect-[16/9] border-b-[3px] border-ink overflow-hidden bg-ink">
                    <Image
                      src={project.imageUrl}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 620px"
                      className="object-cover grayscale contrast-125 transition duration-300 group-hover:grayscale-0 group-hover:contrast-100"
                    />
                    <span
                      className={`absolute bottom-3 right-3 brut bg-signal text-signal-fg label px-2.5 py-1.5 ${
                        idx % 2 ? "rotate-2" : "-rotate-2"
                      }`}
                    >
                      {project.metrics}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="label text-signal">{project.subtitle}</p>
                    <h3 className="display mt-2 text-4xl sm:text-5xl">{project.title}</h3>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="label border-2 border-ink px-2 py-1 bg-paper">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 grid grid-cols-2 gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brut-btn bg-signal text-signal-fg"
                      >
                        Live demo <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
                        <span className="sr-only">for {project.title} (opens in new tab)</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brut-btn bg-card text-ink"
                      >
                        <GithubIcon className="h-4 w-4" /> Source
                        <span className="sr-only">for {project.title} (opens in new tab)</span>
                      </a>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {/* More on GitHub */}
        <div className="mt-12 brut brut-shadow bg-ink text-paper p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="display text-3xl sm:text-4xl">
            More code lives on <span className="bg-paper text-signal px-2">GitHub</span>
          </p>
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="brut-btn bg-paper text-ink self-start sm:self-auto !border-paper"
          >
            <GithubIcon className="h-4 w-4" />
            @cheamnorakpanha
            <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
}
