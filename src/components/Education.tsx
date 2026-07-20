"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Landmark, BookOpen } from "lucide-react";

interface Study {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

const educationData: Study[] = [
  {
    degree: "Bachelor of IT Engineering",
    institution: "Royal University of Phnom Penh (RUPP)",
    duration: "2021 – 2025",
    details:
      "Specialized in Software Engineering, database systems design, enterprise Java development (Spring Boot), web development, and cloud computing environments.",
  },
  {
    degree: "Bachelor of Professional Communication",
    institution: "Institute of Foreign Languages (IFL)",
    duration: "2021 – 2025",
    details:
      "Focused on professional writing, media coordination, organizational communications, leadership styles, and cross-cultural business interactions.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <GraduationCap className="h-4 w-4" /> Academic Pathway
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-2xl border border-border glass flex flex-col justify-between hover:shadow-lg hover:border-primary/20 transition-all duration-300 relative group"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-accent/60 rounded-t-2xl group-hover:from-primary group-hover:to-accent transition-all duration-300" />

              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5 text-accent font-bold">
                    <Landmark className="h-4 w-4" />
                    RUPP / IFL
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {study.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.degree}
                </h3>

                <p className="text-sm font-semibold text-foreground/80 mb-4">
                  {study.institution}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.details}
                </p>
              </div>

              {/* Bottom tag indicator */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold mt-6 pt-4 border-t border-border/40">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Full-time Bachelor Degree</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
