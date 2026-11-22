import React from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { portfolioData } from "@/data/portfolio";

const toolkit = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Spring Boot", "Java", "REST APIs", "Microservices"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "Redis"] },
  { title: "DevOps & Tools", items: ["Docker", "Git", "GitHub", "Postman", "Figma"] },
];

export default function About() {
  const { about, education, projects, experience, certifications } = portfolioData;

  const facts = [
    { value: education.length, label: "Degrees", tone: "bg-signal text-signal-fg" },
    { value: projects.length, label: "Projects", tone: "bg-ink text-paper" },
    { value: experience.length, label: "Roles", tone: "bg-card text-ink" },
    { value: certifications.length, label: "Certs", tone: "bg-paper text-ink" },
  ];

  return (
    <section id="about" className="grid-paper text-ink py-20 sm:py-28 border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          label="About"
          title={about.heading}
          highlight={about.headingHighlight}
          aside={about.description}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Lead */}
          <Reveal className="lg:col-span-5 brut brut-shadow bg-ink text-paper p-6 sm:p-8 flex flex-col justify-between gap-10">
            <p className="label opacity-70">{"// Thesis"}</p>
            <p className="display text-[2.5rem] xs:text-5xl sm:text-6xl leading-[0.95] [overflow-wrap:anywhere]">
              Full-stack engineering, grounded in <span className="bg-paper text-signal px-2 box-decoration-clone">clear communication.</span>
            </p>
          </Reveal>

          {/* Narrative */}
          <Reveal delay={0.06} className="lg:col-span-7 brut brut-shadow bg-card p-6 sm:p-8 space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              I specialize in designing and engineering high-throughput microservices, robust relational
              databases, and modern interactive web experiences. Whether optimizing database latency in
              PostgreSQL or crafting fluid interfaces in Next.js, my focus remains on performance, clean
              structure, and end-user delight.
            </p>
            <p>
              Holding a dual-degree background in{" "}
              <mark className="bg-signal text-signal-fg px-1 font-semibold">Information Technology Engineering</mark>{" "}
              from the Royal University of Phnom Penh (RUPP) and{" "}
              <mark className="bg-ink text-paper px-1 font-semibold">Professional Communication</mark> from the
              Institute of Foreign Languages (IFL), I bring both technical rigor and the ability to articulate
              complex architecture clearly across engineering and business teams.
            </p>
          </Reveal>
        </div>

        {/* Fact blocks */}
        <dl className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, idx) => (
            <Reveal
              key={fact.label}
              delay={idx * 0.05}
              className={`brut brut-shadow p-5 flex flex-col-reverse ${fact.tone}`}
            >
              <dt className="label mt-2">{fact.label}</dt>
              <dd className="display text-7xl sm:text-8xl">{String(fact.value).padStart(2, "0")}</dd>
            </Reveal>
          ))}
        </dl>

        {/* Principles */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {about.highlights.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.06} className="relative brut brut-shadow bg-card p-6 pt-10">
              <span className="absolute -top-4 left-4 brut bg-signal text-signal-fg display text-2xl px-2 pt-1 rotate-[-4deg]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </Reveal>
          ))}
        </div>

        {/* Toolkit table */}
        <Reveal className="mt-16 brut brut-shadow bg-card">
          <div className="flex items-center justify-between bg-ink text-paper px-4 py-3">
            <h3 className="label">Toolkit.exe</h3>
            <span className="label text-glitch-r" aria-hidden="true">■ ■ ■</span>
          </div>
          <ul>
            {toolkit.map((group) => (
              <li
                key={group.title}
                className="grid sm:grid-cols-12 border-t-[3px] border-ink first:border-t-0"
              >
                <span className="sm:col-span-3 display text-2xl px-4 py-3 sm:border-r-[3px] border-ink bg-paper">
                  {group.title}
                </span>
                <span className="sm:col-span-9 flex flex-wrap gap-2 px-4 py-3">
                  {group.items.map((item) => (
                    <span key={item} className="label border-2 border-ink px-2 py-1 hover:bg-signal hover:text-signal-fg transition-colors">
                      {item}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
