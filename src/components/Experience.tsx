import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience, education, certifications, personal } = portfolioData;

  return (
    <section id="experience" className="bg-paper text-ink py-20 sm:py-28 border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          label="Experience"
          title="Experience &"
          highlight="Journey"
          aside={
            <>
              <p>Cross-platform engineering, academic degrees, and industry credentials.</p>
              <a href={personal.resumeUrl} download className="brut-btn bg-signal text-signal-fg mt-5">
                <ArrowDown className="h-4 w-4" strokeWidth={3} />
                Download CV (PDF)
              </a>
            </>
          }
        />

        {/* Work log */}
        <Reveal className="brut brut-shadow bg-card">
          <h3 className="label bg-ink text-paper px-4 py-3">Work.log</h3>
          <ol>
            {experience.map((job) => (
              <li
                key={job.company + job.position}
                className="grid lg:grid-cols-12 border-t-[3px] border-ink"
              >
                <div className="lg:col-span-3 bg-signal text-signal-fg p-5 lg:border-r-[3px] border-b-[3px] lg:border-b-0 border-ink">
                  <p className="label">{job.duration}</p>
                </div>
                <div className="lg:col-span-9 p-5 sm:p-6">
                  <h4 className="display text-3xl sm:text-4xl">{job.position}</h4>
                  <p className="mt-1 font-semibold">@ {job.company}</p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl">
                    {job.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills used">
                    {job.tags.map((tag) => (
                      <li key={tag} className="label border-2 border-ink px-2 py-1 bg-paper">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Education */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="label inline-block bg-ink text-paper px-3 py-2">Education</h3>
            {education.map((edu, idx) => (
              <Reveal key={edu.degree} delay={idx * 0.05} className="brut brut-shadow bg-card p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h4 className="display text-2xl sm:text-3xl">{edu.degree}</h4>
                  <span className="label border-2 border-ink px-2 py-1">{edu.duration}</span>
                </div>
                <p className="mt-2 font-semibold text-signal">{edu.institution}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{edu.details}</p>
              </Reveal>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="label inline-block bg-ink text-paper px-3 py-2">Certifications</h3>
            {certifications.map((cert, idx) => (
              <Reveal key={cert.title} delay={idx * 0.05}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 brut brut-shadow brut-lift bg-card p-5 hover:bg-ink hover:text-paper"
                >
                  <span>
                    <span className="block font-bold text-lg leading-snug">{cert.title}</span>
                    <span className="label mt-2 block opacity-70">
                      {cert.issuer} · {cert.date}
                    </span>
                  </span>
                  <span className="brut bg-signal text-signal-fg p-1 shrink-0 group-hover:border-paper">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
