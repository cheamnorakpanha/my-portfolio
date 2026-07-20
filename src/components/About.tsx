"use client";

import { motion } from "framer-motion";
import { User, Code2, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Experience",
      description: "Internships & freelance web coordination projects.",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-accent" />,
      title: "Education",
      description: "Dual Bachelors: IT Engineering & Professional Communication.",
    },
    {
      icon: <Code2 className="h-5 w-5 text-blue-500" />,
      title: "Philosophy",
      description: "Clean code structure, fast load speeds, scalability.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <User className="h-4 w-4" /> About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My Background &amp; Philosophy
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Code Window (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full rounded-2xl glass border border-border overflow-hidden shadow-xl">
              {/* Window controls */}
              <div className="flex items-center space-x-2 bg-muted/40 px-4 py-3 border-b border-border">
                <span className="h-3 w-3 rounded-full bg-red-500/80 block" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 block" />
                <span className="h-3 w-3 rounded-full bg-green-500/80 block" />
                <span className="text-[11px] text-muted-foreground font-mono ml-4">developer.ts</span>
              </div>
              {/* Code simulation */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground overflow-x-auto">
                <p className="text-blue-500"><span className="text-purple-500">const</span> developerObject <span className="text-foreground">=</span> &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-500">&apos;Cheam Norakpanha&apos;</span>,</p>
                <p className="pl-4">role: <span className="text-emerald-500">&apos;Full-Stack Software Engineer&apos;</span>,</p>
                <p className="pl-4">specialties: [</p>
                <p className="pl-8 text-cyan-600">&apos;React&apos;, &apos;Next.js&apos;, &apos;Spring Boot&apos;,</p>
                <p className="pl-8 text-cyan-600">&apos;Cloud Architectures&apos;, &apos;API Design&apos;</p>
                <p className="pl-4">],</p>
                <p className="pl-4">passion: <span className="text-emerald-500">&apos;Building scalable real-world solutions&apos;</span>,</p>
                <p className="pl-4 text-gray-500">// continuousLearning: true,</p>
                <p className="pl-4">coffeeLover: <span className="text-amber-500">true</span></p>
                <p className="text-blue-500">&#125;;</p>
              </div>
            </div>
            {/* Background glowing blob */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-primary/10 blur-[50px] -z-10" />
          </motion.div>

          {/* Description & Objective (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Who I Am &amp; What I Focus On
            </h3>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              I am passionate about building performant and user-friendly applications. I enjoy designing scalable backend systems, creating intuitive frontend experiences, and continuously learning modern technologies.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              With a dual-major background spanning Information Technology Engineering and Professional Communication, I bridge the gap between technical complexity and business communication. My ultimate goal is to architect software that delivers actual value and solves critical problems.
            </p>

            {/* Quick Metrics Dials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-4 rounded-xl border border-border glass hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-secondary/50 w-fit mb-3">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-normal">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
