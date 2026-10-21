"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  GraduationCap,
  Briefcase,
  Terminal,
  Atom,
  Wind,
  Leaf,
  Database,
  Server,
  GitBranch,
  Send,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon, FigmaIcon } from "./BrandIcons";
import { portfolioData } from "@/data/portfolio";

const techCategories = [
  {
    title: "Frontend Engineering",
    description: "Responsive, type-safe, and interactive digital interfaces.",
    items: [
      { name: "React", icon: <Atom className="h-5 w-5 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <Terminal className="h-5 w-5 text-white" /> },
      { name: "TypeScript", icon: <Code2 className="h-5 w-5 text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <Wind className="h-5 w-5 text-[#06B6D4]" /> },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Resilient microservices, REST APIs, and business architectures.",
    items: [
      { name: "Spring Boot", icon: <Leaf className="h-5 w-5 text-[#6DB33F]" /> },
      { name: "Java", icon: <Server className="h-5 w-5 text-[#EA2D2E]" /> },
      { name: "REST APIs", icon: <Send className="h-5 w-5 text-[#009688]" /> },
      { name: "Microservices", icon: <Layers className="h-5 w-5 text-[#3b82f6]" /> },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Schema modeling, transactional consistency, and fast retrieval.",
    items: [
      { name: "PostgreSQL", icon: <Database className="h-5 w-5 text-[#4169E1]" /> },
      { name: "MySQL", icon: <Server className="h-5 w-5 text-[#00758F]" /> },
      { name: "Redis", icon: <Database className="h-5 w-5 text-[#DC382D]" /> },
    ],
  },
  {
    title: "DevOps & Tooling",
    description: "Version control, container orchestration, and rapid delivery.",
    items: [
      { name: "Docker", icon: <Server className="h-5 w-5 text-[#2496ED]" /> },
      { name: "Git", icon: <GitBranch className="h-5 w-5 text-[#F05032]" /> },
      { name: "GitHub", icon: <GithubIcon className="h-5 w-5 text-white" /> },
      { name: "Postman", icon: <Send className="h-5 w-5 text-[#FF6C37]" /> },
      { name: "Figma", icon: <FigmaIcon className="h-5 w-5 text-[#F24E1E]" /> },
    ],
  },
];

export default function About() {
  const { about, personal } = portfolioData;

  const highlightCards = [
    {
      icon: <GraduationCap className="h-5 w-5 text-[#e50914]" />,
      title: about.highlights[0].title,
      description: about.highlights[0].description,
    },
    {
      icon: <Briefcase className="h-5 w-5 text-white" />,
      title: about.highlights[1].title,
      description: about.highlights[1].description,
    },
    {
      icon: <Code2 className="h-5 w-5 text-cyan-400" />,
      title: about.highlights[2].title,
      description: about.highlights[2].description,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative bg-[#07070a] overflow-hidden">
      {/* Background Ambient Glow for Glass Refraction */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#e50914]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#e50914]/8 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-mono tracking-[0.2em] uppercase text-white/90 mb-4">
            <User className="h-3.5 w-3.5 text-[#e50914]" />
            {about.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            {about.heading} <span className="text-[#e50914]">{about.headingHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 max-w-xl mx-auto font-sans leading-relaxed">
            {about.description}
          </p>
        </div>

        {/* Narrative & Developer Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14 sm:mb-20">
          {/* Visual Code Window (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full rounded-3xl glass-panel overflow-hidden shadow-2xl relative">
              {/* Specular Highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Window Bar */}
              <div className="flex items-center space-x-2 bg-white/[0.04] px-4 py-3 border-b border-white/10 backdrop-blur-md">
                <span className="h-3 w-3 rounded-full bg-[#e50914] block" />
                <span className="h-3 w-3 rounded-full bg-amber-400 block" />
                <span className="h-3 w-3 rounded-full bg-emerald-400 block" />
                <span className="text-[11px] text-white/40 font-mono ml-4">
                  {about.terminal.filename}
                </span>
              </div>
              {/* Code Simulation */}
              <div className="p-4 sm:p-6 font-mono text-[11px] sm:text-sm leading-relaxed text-white/70 overflow-x-auto space-y-1">
                <p className="text-purple-400">
                  <span className="text-white/40">const</span> engineerProfile = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-400">&apos;{personal.name}&apos;</span>,
                </p>
                <p className="pl-4">
                  location: <span className="text-emerald-400">&apos;{personal.location}&apos;</span>,
                </p>
                <p className="pl-4">
                  roles: [
                </p>
                <p className="pl-8 text-cyan-400">
                  &apos;{personal.fullRole}&apos;,
                </p>
                <p className="pl-8 text-cyan-400">
                  &apos;{personal.subRole}&apos;
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  coreStack: [
                </p>
                <p className="pl-8 text-amber-300">
                  {about.terminal.coreStack.map((item) => `'${item}'`).join(", ")}
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  philosophy: <span className="text-emerald-400">&apos;{about.terminal.philosophy}&apos;</span>,
                </p>
                <p className="pl-4">
                  openToWork: <span className="text-[#e50914] font-bold">{String(about.terminal.openToWork)}</span>
                </p>
                <p className="text-purple-400">&#125;;</p>
              </div>
            </div>
          </motion.div>

          {/* Description & Objective (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Full-Stack Engineering Grounded in Communication
            </h3>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              I specialize in designing and engineering high-throughput microservices, robust relational databases, and modern interactive web experiences. Whether optimizing database latency in PostgreSQL or crafting fluid interfaces in Next.js, my focus remains on performance, clean structure, and end-user delight.
            </p>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Holding a dual-degree background in <strong className="text-white font-semibold">Information Technology Engineering</strong> from the Royal University of Phnom Penh (RUPP) and <strong className="text-white font-semibold">Professional Communication</strong> from the Institute of Foreign Languages (IFL), I bring both technical rigor and the ability to articulate complex architecture clearly across engineering and business teams.
            </p>

            {/* Quick Strength Dials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlightCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl glass-panel-interactive space-y-2"
                >
                  <div className="p-2 rounded-xl glass-pill w-fit">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-sm text-white">{card.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="h-4 w-4 text-[#e50914]" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              Core Technical Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {techCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl glass-panel-interactive flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Specular Highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#e50914] transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-xs text-white/50 mb-5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Items */}
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 rounded-xl glass-pill hover:bg-white/[0.1] flex items-center gap-2 min-w-0 transition-all duration-200"
                    >
                      {tech.icon}
                      <span className="text-xs font-semibold text-white/90 truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
