import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;
  const [firstName, ...rest] = personal.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="home"
      className="relative grid-paper text-ink min-h-svh pt-[59px] sm:pt-[67px] overflow-hidden"
    >
      {/* Mobile order: name, portrait, details. Desktop: copy left, portrait right. */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-10 lg:min-h-[calc(100svh-67px)] grid gap-y-12 lg:gap-x-12 lg:gap-y-6 lg:grid-cols-12 lg:grid-rows-[1fr_auto_auto_1fr]">
        {/* Status + name */}
        <div className="order-1 lg:order-none lg:col-span-7 lg:row-start-2 flex flex-col">
          {/* Status tag */}
          <p className="flex w-fit items-stretch brut bg-ink text-paper">
            <span className="flex items-center px-3 border-r-[3px] border-ink bg-paper" aria-hidden="true">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-emerald-500 opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 bg-emerald-600 border border-ink" />
              </span>
            </span>
            <span className="label px-3 py-2">{personal.statusPill}</span>
          </p>

          {/* Name */}
          <h1 className="mt-6 sm:mt-8">
            <span className="sr-only">
              {personal.name}, {personal.fullRole}
            </span>
            <span
              aria-hidden="true"
              className="display block text-[clamp(4.5rem,min(19vw,17svh),10.5rem)] leading-[0.85]"
            >
              {firstName}
            </span>
            <span
              aria-hidden="true"
              className="display mt-3 inline-block bg-signal text-white brut brut-shadow px-3 pt-3 pb-1 -rotate-1 text-[clamp(3.4rem,min(14.5vw,13svh),8.25rem)] leading-[0.85]"
            >
              {lastName}
            </span>
          </h1>
        </div>

        {/* Role, bio, actions */}
        <div className="order-3 lg:order-none lg:col-span-7 lg:row-start-3 flex flex-col">
          {/* Role strip */}
          <div className="flex flex-wrap items-stretch gap-3">
            <span className="display text-2xl sm:text-3xl bg-ink text-paper px-3 pt-1.5 pb-1">
              {personal.rolePrimary} {personal.roleSecondary}{" "}
              <span className="text-signal">{personal.roleHighlight}</span>
            </span>
            <span className="label flex items-center brut bg-white px-3 py-2">✶ {personal.subRole}</span>
          </div>

          {/* Bio */}
          <p className="mt-6 max-w-xl brut brut-shadow bg-white p-4 sm:p-5 text-base sm:text-lg leading-relaxed">
            {personal.bio}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#projects" className="brut-btn bg-signal text-white !px-6 !py-4">
              View projects <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
            </a>
            <a href="#contact" className="brut-btn bg-white text-ink !px-6 !py-4">
              <Mail className="h-4 w-4" strokeWidth={2.5} /> Contact me
            </a>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="brut-btn bg-ink text-paper !p-0 h-[52px] w-[52px]"
              aria-label="GitHub profile (opens in new tab)"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="brut-btn bg-ink text-paper !p-0 h-[52px] w-[52px]"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Portrait window */}
        <div className="order-2 lg:order-none lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-4 lg:self-center relative mx-auto lg:mr-0 w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[min(100%,56svh)]">
          <figure className="relative brut bg-signal brut-shadow rotate-1">
            <figcaption className="flex items-center justify-between bg-ink text-paper px-3 py-2 border-b-[3px] border-ink">
              <span className="label">{firstName.toLowerCase()}_{lastName.toLowerCase()}.png</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 border-2 border-paper" />
                <span className="h-3 w-3 border-2 border-paper" />
                <span className="h-3 w-3 bg-signal border-2 border-paper" />
              </span>
            </figcaption>

            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Halftone-ish dot texture behind the cutout */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: "radial-gradient(#0a0a0a 1.4px, transparent 1.4px)",
                  backgroundSize: "14px 14px",
                }}
                aria-hidden="true"
              />
              {/* Giant initials behind the portrait */}
              <span
                aria-hidden="true"
                className="display absolute -left-2 top-2 text-[11rem] sm:text-[13rem] leading-none text-ink/90 select-none"
              >
                NP
              </span>
              <Image
                src={personal.avatarImage}
                alt={`Portrait of ${personal.name}`}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 460px, 520px"
                className="object-contain object-bottom grayscale contrast-125"
              />
            </div>

            <div className="flex items-center justify-between bg-white px-3 py-2 border-t-[3px] border-ink">
              <span className="label">↳ {personal.location}</span>
              <span className="label text-signal">[ 1 / 1 ]</span>
            </div>
          </figure>

          {/* Stickers */}
          <span className="absolute top-16 -left-3 sm:-left-5 brut bg-white display text-xl sm:text-2xl px-3 pt-1.5 pb-0.5 -rotate-6 brut-shadow">
            Hello!
          </span>
          <span className="absolute bottom-16 -right-2 sm:-right-4 brut bg-ink text-paper label px-3 py-2 rotate-3">
            {portfolioData.about.terminal.coreStack.slice(0, 3).join(" · ")}
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 label hover:text-signal"
      >
        <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" strokeWidth={3} />
        Scroll
      </a>
    </section>
  );
}
