"use client";

import { motion } from "framer-motion";
import { FileDown, FileText, Check, Briefcase, GraduationCap, Mail } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <FileText className="h-4 w-4" /> Curriculum Vitae
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Resume Preview
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Download Action Wrapper */}
          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer shadow-md"
            >
              <FileDown className="h-5 w-5" />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          {/* Interactive Document Mockup (Looks like a real document) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border glass shadow-xl overflow-hidden text-left"
          >
            {/* Header info */}
            <div className="p-8 md:p-12 bg-muted/40 border-b border-border space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-3xl font-extrabold text-foreground">Cheam Norakpanha</h3>
                  <p className="text-base text-accent font-bold mt-1">Full-Stack Software Engineer</p>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground space-y-1 font-mono">
                  <p className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> cheam.panha168@gmail.com</p>
                  <p>Phnom Penh, Cambodia</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Detail-oriented Software Engineer specializing in scalable React/Next.js client applications, Spring Boot backends, and robust cloud services. Passionate about structuring clean architectures and delivering performance-oriented business products.
              </p>
            </div>

            {/* Resume Content Body */}
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Experience and Education (Left Side) */}
              <div className="md:col-span-8 space-y-8">
                {/* Exp */}
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-2 mb-4 flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4 text-primary" /> Work History
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-sm font-bold">
                        <span className="text-foreground">Flutter Developer (Intern)</span>
                        <span className="text-muted-foreground font-mono font-medium text-xs">Jul 2025 – Oct 2025</span>
                      </div>
                      <p className="text-xs text-accent font-semibold">IT Center, Royal University of Phnom Penh</p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        Worked on core modular layouts, responsive UI screens, client API integrations, and code reviews.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 text-sm font-bold">
                        <span className="text-foreground">Media & Website Coordinator (Freelance)</span>
                        <span className="text-muted-foreground font-mono font-medium text-xs">Apr 2025 – Jun 2025</span>
                      </div>
                      <p className="text-xs text-accent font-semibold">Institute of Foreign Language (IFL)</p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        Coordinated institutional content layouts, updated calendar data sheets, and resolved web traffic layouts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Edu */}
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-2 mb-4 flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4 text-accent" /> Education
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-sm font-bold">
                        <span className="text-foreground">Bachelor Degree in IT Engineering</span>
                        <span className="text-muted-foreground font-mono font-medium text-xs">2021 – 2025</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Royal University of Phnom Penh</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 text-sm font-bold">
                        <span className="text-foreground">Bachelor Degree in Professional Communication</span>
                        <span className="text-muted-foreground font-mono font-medium text-xs">2021 – 2025</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Institute of Foreign Language</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills/Details (Right Side) */}
              <div className="md:col-span-4 space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-2 mb-4">
                    Key Specialties
                  </h4>
                  <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> React &amp; Next.js</li>
                    <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> Spring Boot API</li>
                    <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> PostgreSQL / MySQL</li>
                    <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> Docker Orchestration</li>
                    <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> Git Version Control</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest border-b border-border/60 pb-2 mb-4">
                    Languages
                  </h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li><span className="font-bold text-foreground">Khmer:</span> Native</li>
                    <li><span className="font-bold text-foreground">English:</span> Professional</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
