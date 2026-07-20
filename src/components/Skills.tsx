"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Star, Cpu } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage out of 100
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Dart", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frameworks & Backend",
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "AWS S3 / EC2", level: 70 },
      { name: "Docker", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Soft Skills & Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 88 },
      { name: "Figma", level: 75 },
      { name: "Problem Solving", level: 92 },
      { name: "Team Collaboration", level: 88 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  // Top highlight skills for circular indicators
  const featuredSkills = [
    { name: "React / Next.js", level: 90, color: "text-[#61DAFB]", strokeColor: "#61DAFB" },
    { name: "Spring Boot", level: 88, color: "text-[#6DB33F]", strokeColor: "#6DB33F" },
    { name: "TypeScript", level: 85, color: "text-[#3178C6]", strokeColor: "#3178C6" },
  ];

  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <BarChart3 className="h-4 w-4" /> Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills Visualization
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Featured Skills (Circular SVG Indicators) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          {featuredSkills.map((skill, idx) => {
            const radius = 50;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 rounded-2xl border border-border glass flex flex-col items-center text-center shadow-md relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                  {/* Outer circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r={radius}
                      className="stroke-muted fill-transparent"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="56"
                      cy="56"
                      r={radius}
                      className="fill-transparent"
                      stroke={skill.strokeColor}
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute font-mono font-extrabold text-xl">
                    {skill.level}%
                  </div>
                </div>
                <h3 className="font-bold text-base text-foreground flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent stroke-accent" />
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs & Bars Container */}
        <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-3xl border border-border glass shadow-xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 pb-6 border-b border-border/40">
            {skillsData.map((category, idx) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all cursor-pointer ${
                  activeCategory === idx
                    ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "glass border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Animated Progress Bars */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {skillsData[activeCategory].skills.map((skill, idx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-foreground flex items-center gap-1.5">
                        <Cpu className="h-4 w-4 text-accent opacity-80" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    {/* Bar Background */}
                    <div className="h-3 w-full rounded-full bg-secondary overflow-hidden relative border border-border/30">
                      {/* Bar Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
