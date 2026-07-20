"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FolderGit2, ExternalLink, Code } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "Frontend" | "Backend" | "Fullstack" | "Mobile";
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Cloud Architecture",
    description:
      "A scalable microservices-based online retail platform utilizing Spring Cloud, PostgreSQL, and a next-gen React dashboard client with automated container orchestration.",
    category: "Fullstack",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "Docker"],
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "AI Prompt Optimization Hub",
    description:
      "An analytical software platform powered by OpenAI APIs that simplifies prompts, runs prompt tests, and visualizes efficiency metrics in real-time.",
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Event Booking Scheduler API",
    description:
      "A high-throughput secure scheduling server featuring token-based authentication, custom query caching pipelines, and automated email trigger workers.",
    category: "Backend",
    technologies: ["Spring Boot", "MySQL", "Postman", "Git"],
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "Classroom Management Mobile App",
    description:
      "A Flutter application designed for local institutions to coordinate events, stream lecture handouts, and verify attendance through localized coordinates.",
    category: "Mobile",
    technologies: ["Flutter", "Dart", "MySQL", "Figma"],
    githubUrl: "https://github.com/cheamnorakpanha",
    demoUrl: "https://github.com/cheamnorakpanha",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "Fullstack", "Mobile"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <FolderGit2 className="h-4 w-4" /> Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Projects
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Filters Controller */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title, description, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 justify-center w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "glass border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No projects found matching your search.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-border overflow-hidden glass hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-muted">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold glass border border-white/20 dark:border-black/20 text-foreground shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary/50 text-foreground border border-border/40"
                          >
                            <Code className="h-3 w-3 opacity-60" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-6 mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border glass text-xs font-bold text-foreground hover:bg-muted/50 transition-all duration-200 cursor-pointer flex-1"
                      >
                        <GithubIcon className="h-4 w-4" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/95 transition-all duration-200 cursor-pointer flex-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
