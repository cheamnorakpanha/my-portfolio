"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building,
  GraduationCap,
  Award,
  FileDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData, ExperienceItem as Job } from "@/data/portfolio";

const experienceData = portfolioData.experience;
const educationData = portfolioData.education;
const certificationsData = portfolioData.certifications;

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 relative bg-[#08080a] overflow-hidden">
      {/* Background Ambient Lighting for Glass Refraction */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#e50914]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#e50914]/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Download CV button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-mono tracking-[0.2em] uppercase text-white/90">
              <Briefcase className="h-3.5 w-3.5 text-[#e50914]" />
              CAREER &amp; ACADEMIC MILESTONES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
              EXPERIENCE &amp; <span className="text-[#e50914]">JOURNEY</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-xl font-sans leading-relaxed">
              Demonstrated track record across cross-platform engineering, academic degrees, and industry credentials.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#e50914] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] cursor-pointer whitespace-nowrap self-start md:self-auto max-w-full"
          >
            <FileDown className="h-4 w-4" />
            <span>Download CV (PDF)</span>
          </a>
        </div>

        {/* 1. Career Timeline */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="h-4 w-4 text-[#e50914]" />
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-mono">
              Work Experience
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Center/Left Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

            <div className="space-y-8 sm:space-y-12">
              {experienceData.map((job, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full"
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full glass-pill flex items-center justify-center -translate-x-1/2 shadow-lg z-10">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e50914] shadow-[0_0_10px_#e50914]" />
                    </div>

                    {/* Timeline Card */}
                    <div
                      className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${
                        isEven ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="p-5 sm:p-7 rounded-3xl glass-panel-interactive space-y-3 relative overflow-hidden"
                      >
                        {/* Specular Highlight */}
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold glass-pill text-[#e50914] border-[#e50914]/30">
                          <Calendar className="h-3 w-3" />
                          {job.duration}
                        </span>

                        <h4 className="text-lg font-bold text-white">
                          {job.position}
                        </h4>

                        <div className="flex items-center gap-1.5 text-xs font-semibold text-white/60">
                          <Building className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{job.company}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md text-[10px] font-mono glass-pill text-white/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Dual Degree Education & Industry Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/10">
          {/* Academic Pathway (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[#e50914]" />
              <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-mono">
                Academic Pathway
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel-interactive space-y-2 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-white/40 uppercase">
                      {edu.duration}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-[#e50914] font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-sans pt-2 border-t border-white/10">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-[#e50914]" />
              <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-mono">
                Certifications &amp; Credentials
              </h3>
            </div>

            <div className="space-y-3">
              {certificationsData.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-panel-interactive flex items-center justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                  <div className="space-y-0.5 min-w-0 pr-3">
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#e50914] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] font-mono text-white/50">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
