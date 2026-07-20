"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building, Tag } from "lucide-react";

interface Job {
  company: string;
  position: string;
  duration: string;
  description: string;
  tags: string[];
}

const experienceData: Job[] = [
  {
    company: "IT Center, Royal University of Phnom Penh",
    position: "Flutter Developer (Intern)",
    duration: "Jul 2025 – Oct 2025",
    description:
      "Collaborated on designing and developing cross-platform mobile application modules using Flutter. Conducted API integrations, widget optimizations, and interface tweaks matching strict UI/UX mockups, enhancing app responsiveness.",
    tags: ["Flutter", "Dart", "Git", "REST APIs", "Mobile UI Design"],
  },
  {
    company: "Institute of Foreign Language (IFL)",
    position: "Media & Website Coordinator (Freelance)",
    duration: "Apr 2025 – Jun 2025",
    description:
      "Administered website updates, structured educational and event pages, and organized public media distribution pipelines. Collaborated closely with faculty heads to publish critical schedules under high-traffic events.",
    tags: ["HTML", "CSS", "Web Coordination", "Content Systems", "Figma"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Briefcase className="h-4 w-4" /> Career Journey
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work Experience
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experienceData.map((job, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center -translate-x-1/2 shadow-md z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>

                  {/* Card Container (Left for Even, Right for Odd on larger screens) */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] ml-12 sm:ml-0 ${
                      isEven ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="p-6 rounded-2xl border border-border glass hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                    >
                      {/* Meta Details */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                        <Calendar className="h-3 w-3" />
                        {job.duration}
                      </span>

                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {job.position}
                      </h3>

                      <div className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground mb-4">
                        <Building className="h-4 w-4 flex-shrink-0" />
                        <span>{job.company}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {job.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary text-muted-foreground border border-border/20"
                          >
                            <Tag className="h-2.5 w-2.5 opacity-60" />
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
    </section>
  );
}
