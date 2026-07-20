"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Terminal,
  FileCode,
  Palette,
  Wind,
  Leaf,
  Database,
  Server,
  GitBranch,
  Send,
  Layers,
} from "lucide-react";
import { GithubIcon, FigmaIcon } from "./BrandIcons";
import React from "react";

const techCategories = [
  {
    title: "Frontend",
    description: "Creating responsive, fast, and interactive user interfaces.",
    items: [
      { name: "React", icon: <Atom className="h-6 w-6 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <Terminal className="h-6 w-6 text-foreground" /> },
      { name: "HTML", icon: <FileCode className="h-6 w-6 text-[#E34F26]" /> },
      { name: "CSS", icon: <Palette className="h-6 w-6 text-[#1572B6]" /> },
      { name: "Tailwind CSS", icon: <Wind className="h-6 w-6 text-[#06B6D4]" /> },
    ],
  },
  {
    title: "Backend",
    description: "Developing robust, reliable, and scalable business logic APIs.",
    items: [
      { name: "Spring Boot", icon: <Leaf className="h-6 w-6 text-[#6DB33F]" /> },
    ],
  },
  {
    title: "Database",
    description: "Architecting structure, modeling data, and query optimization.",
    items: [
      { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-[#4169E1]" /> },
      { name: "MySQL", icon: <Server className="h-6 w-6 text-[#00758F]" /> },
    ],
  },
  {
    title: "Tools",
    description: "Streamlining collaboration, versioning, design, and testing.",
    items: [
      { name: "Git", icon: <GitBranch className="h-6 w-6 text-[#F05032]" /> },
      { name: "GitHub", icon: <GithubIcon className="h-6 w-6 text-foreground" /> },
      { name: "Postman", icon: <Send className="h-6 w-6 text-[#FF6C37]" /> },
      { name: "Figma", icon: <FigmaIcon className="h-6 w-6 text-[#F24E1E]" /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Layers className="h-4 w-4" /> Tech Stack
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My Technologies &amp; Capabilities
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl border border-border glass flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-3.5 rounded-xl border border-border bg-background/50 hover:bg-background flex flex-col items-center justify-center text-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-secondary/50 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
