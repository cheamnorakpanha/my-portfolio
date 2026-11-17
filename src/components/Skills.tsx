"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { portfolioData } from "@/data/portfolio";

function Bar({ level, delay = 0, tall = false }: { level: number; delay?: number; tall?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className={`relative w-full border-2 border-ink bg-white ${tall ? "h-6" : "h-4"}`} aria-hidden="true">
      <motion.div
        className="absolute inset-y-0 left-0 stripes border-r-2 border-ink origin-left"
        style={{ width: `${level}%` }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.3, 0, 0, 1] }}
      />
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="bg-paper text-ink py-20 sm:py-28 border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          label="Skills"
          title={skills.heading}
          highlight={skills.headingHighlight}
          aside={skills.description}
        />

        {/* Featured */}
        <div className="grid gap-6 sm:grid-cols-3">
          {skills.featured.map((skill, idx) => (
            <Reveal
              key={skill.name}
              delay={idx * 0.06}
              className={`brut brut-shadow p-6 ${idx === 0 ? "bg-ink text-paper" : "bg-white"}`}
            >
              <p className="label">{skill.name}</p>
              <p className="display text-[6.5rem] sm:text-[7rem] lg:text-[9rem] leading-none mt-3">
                {skill.level}
                <span className="text-signal text-5xl align-top">%</span>
              </p>
              <div className="mt-4">
                <Bar level={skill.level} tall delay={0.1 + idx * 0.08} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.categories.map((category, catIdx) => (
            <Reveal key={category.title} delay={catIdx * 0.05} className="brut brut-shadow bg-white">
              <h3 className="flex items-center justify-between gap-2 bg-signal text-white px-4 py-3 border-b-[3px] border-ink">
                <span className="label">{category.title}</span>
                <span className="label">[{String(catIdx + 1).padStart(2, "0")}]</span>
              </h3>
              <ul className="p-4 space-y-4">
                {category.skills.map((skill, idx) => (
                  <li key={skill.name}>
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="label tabular-nums">{skill.level}</span>
                    </div>
                    <Bar level={skill.level} delay={idx * 0.04} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
