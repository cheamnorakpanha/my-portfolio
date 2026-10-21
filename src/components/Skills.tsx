"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Star, Cpu } from "lucide-react";
import { portfolioData, SkillCategory, FeaturedSkill } from "@/data/portfolio";

const skillsData = portfolioData.skills.categories;
const featuredSkills = portfolioData.skills.featured;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 relative bg-[#08080a] overflow-hidden">
      {/* Background Ambient Glow for Glass Refraction */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#e50914]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-mono tracking-[0.2em] uppercase text-white/90 mb-4">
            <BarChart3 className="h-3.5 w-3.5 text-[#e50914]" />
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            SKILLS &amp; <span className="text-[#e50914]">PROFICIENCY</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 max-w-xl mx-auto font-sans leading-relaxed">
            Quantified proficiency across full-stack architectures, cloud backends, databases, and modern developer toolchains.
          </p>
        </div>

        {/* Top Featured Skills (Circular SVG Indicators) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10 sm:mb-16">
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
                className="p-6 rounded-2xl glass-panel-interactive flex flex-col items-center text-center relative overflow-hidden group"
              >
                {/* Specular Highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                  {/* Outer circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r={radius}
                      className="stroke-white/10 fill-transparent"
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
                  <div className="absolute font-mono font-extrabold text-xl text-white">
                    {skill.level}%
                  </div>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-[#e50914] stroke-[#e50914]" />
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs & Bars Container */}
        <div className="max-w-4xl mx-auto p-4 xs:p-5 sm:p-6 md:p-8 rounded-3xl glass-panel relative overflow-hidden">
          {/* Specular Highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-white/10">
            {skillsData.map((category, idx) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(idx)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === idx
                    ? "bg-[#e50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.5)] font-bold"
                    : "glass-pill text-white/60 hover:text-white"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Animated Progress Bars */}
          <div className="min-h-[200px] sm:min-h-[220px]">
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
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold text-white flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-[#e50914] opacity-90" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-white/60 text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    {/* Bar Background */}
                    <div className="h-3 w-full rounded-full bg-white/[0.06] overflow-hidden relative border border-white/10">
                      {/* Bar Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#e50914] via-[#ff3b47] to-[#e50914] shadow-[0_0_12px_rgba(229,9,20,0.4)]"
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
