import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;

  const marqueeRun = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {personal.heroMarqueeNames.map((name, i) => (
        <span key={i} className="flex items-center">
          <span className="px-[0.14em]">{name}</span>
          <span className="text-[0.45em] text-signal [text-shadow:none]">✶</span>
        </span>
      ))}
    </div>
  );

  const portrait = (slice: boolean) => (
    <Image
      src={personal.avatarImage}
      alt={slice ? "" : `Portrait of ${personal.name}`}
      aria-hidden={slice || undefined}
      fill
      loading="eager"
      fetchPriority="high"
      sizes="(max-width: 1024px) 420px, 800px"
      className={`object-contain object-bottom grayscale contrast-125 ${slice ? "hero-slice" : ""}`}
    />
  );

  return (
    <section id="home" className="relative grid-paper text-ink pt-[59px] sm:pt-[67px] overflow-hidden">
      <div className="relative lg:h-[calc(100svh-67px)] lg:min-h-[640px]">
        {/* Stage: looping name behind, portrait centered in front. */}
        <div className="relative overflow-hidden border-b-[3px] border-ink lg:absolute lg:inset-0 lg:border-b-0">
          {/* Dirty spotlight so the dark suit separates from the dark page */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 h-[78%] w-[min(120vw,60rem)] distress pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 70%, rgba(232,227,213,0.3), rgba(232,227,213,0.08) 45%, transparent 68%)",
            }}
            aria-hidden="true"
          />

          {/* Giant looping name */}
          <div
            className="absolute inset-x-0 top-[36%] lg:top-[37%] -translate-y-1/2 z-0 pointer-events-none select-none"
            aria-hidden="true"
          >
            <div className="hero-name">
              <div
                className="ticker-track flex w-max display distress rgb-split text-ink whitespace-nowrap leading-none text-[34vw] sm:text-[26vw] lg:text-[min(22vw,40svh)]"
                style={{ animationDuration: "45s" }}
              >
                {marqueeRun(false)}
                {marqueeRun(true)}
              </div>
            </div>
          </div>

          {/* Corner labels */}
          <div className="absolute inset-x-0 top-0 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5 lg:pt-7 flex items-start justify-between gap-4">
            <p className="hero-in flex items-center gap-3 label">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping bg-signal opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 bg-signal" />
              </span>
              {personal.statusPill}
            </p>
            <p className="hero-in hidden md:flex items-center gap-3 label">
              <span className="flex items-center gap-1.5 text-glitch-r" aria-hidden="true">
                <span className="blink h-2.5 w-2.5 rounded-full bg-glitch-r" />
                REC
              </span>
              {"// "}{personal.location}
            </p>
          </div>

          {/* Portrait */}
          <div className="hero-portrait relative z-10 mx-auto mt-[calc(min(88vw,28rem)*-0.16)] w-[min(88vw,28rem)] aspect-[1070/1470] lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-auto lg:h-[118%]">
            {portrait(false)}
            {portrait(true)}
          </div>

          {/* Marker annotation */}
          <p
            className="scribble absolute z-20 left-1/2 top-[13%] ml-[min(15vw,13rem)] hidden lg:block -rotate-6 text-signal text-3xl"
            aria-hidden="true"
          >
            ↙ that&apos;s me
          </p>

          {/* Scanlines over the whole stage */}
          <div className="scanlines absolute inset-0 z-[15] pointer-events-none opacity-60" aria-hidden="true" />
        </div>

        {/* Copy: role bottom-left, bio and actions bottom-right. */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-0 lg:absolute lg:inset-0 lg:pointer-events-none flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:pb-10">
          <div className="hero-in lg:pointer-events-auto" style={{ animationDelay: "0.15s" }}>
            <h1>
              <span className="sr-only">
                {personal.name}, {personal.fullRole}
              </span>
              <span aria-hidden="true" className="display flex flex-col items-start text-5xl sm:text-6xl lg:text-5xl xl:text-6xl">
                <span className="bg-ink text-paper px-3 pt-2 pb-1 -rotate-1">{personal.rolePrimary}</span>
                <span className="bg-ink text-paper px-3 pt-2 pb-1 translate-x-2">{personal.roleSecondary}</span>
                <span
                  className="glitch bg-signal text-signal-fg px-3 pt-2 pb-1 rotate-1"
                  data-text={personal.roleHighlight}
                >
                  {personal.roleHighlight}
                </span>
              </span>
            </h1>
            <p className="label mt-5">✶ {personal.subRole}</p>
          </div>

          <div className="hero-in lg:pointer-events-auto lg:w-[21rem] xl:w-[23rem]" style={{ animationDelay: "0.25s" }}>
            <div className="relative">
              <span className="tape -top-3 left-6 -rotate-3" aria-hidden="true" />
              <p className="brut brut-shadow bg-card p-4 pt-5 text-base leading-relaxed">{personal.bio}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#projects" className="brut-btn bg-signal text-signal-fg !py-4 w-full">
                View projects <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
              </a>
              <a href="#contact" className="brut-btn bg-card text-ink !py-4 flex-1">
                <Mail className="h-4 w-4" strokeWidth={2.5} /> Contact me
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="brut-btn bg-ink text-paper !p-0 h-[54px] w-[54px]"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="brut-btn bg-ink text-paper !p-0 h-[54px] w-[54px]"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
