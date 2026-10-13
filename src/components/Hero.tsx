"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070709] pt-16 select-none"
    >
      {/* 1. Giant Background Red Typographic Marquee (Behind Person) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap will-change-transform select-none"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Primary track */}
          <div className="flex shrink-0 items-center">
            <span className="font-[family-name:var(--font-anton)] text-[15vw] sm:text-[17vw] lg:text-[19vw] font-normal tracking-[-0.01em] uppercase text-[#e50914] leading-none whitespace-nowrap opacity-95 scale-y-[1.08] sm:scale-y-[1.12] origin-center drop-shadow-[0_10px_40px_rgba(229,9,20,0.35)]">
              CHEAM NORAKPANHA&nbsp;&nbsp;CHEAM NORAKPANHA&nbsp;&nbsp;CHEAM
              NORAKPANHA&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          {/* Secondary duplicate track for seamless infinite cycle */}
          <div className="flex shrink-0 items-center" aria-hidden="true">
            <span className="font-[family-name:var(--font-anton)] text-[15vw] sm:text-[17vw] lg:text-[19vw] font-normal tracking-[-0.01em] uppercase text-[#e50914] leading-none whitespace-nowrap opacity-95 scale-y-[1.08] sm:scale-y-[1.12] origin-center drop-shadow-[0_10px_40px_rgba(229,9,20,0.35)]">
              CHEAM NORAKPANHA&nbsp;&nbsp;&nbsp;&nbsp;CHEAM
              NORAKPANHA&nbsp;&nbsp;&nbsp;&nbsp;CHEAM
              NORAKPANHA&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </motion.div>
      </div>

      {/* 2. Foreground Portrait Layer (Layered Over Typography) */}
      <div className="absolute inset-x-0 bottom-0 z-10 w-full flex items-end justify-center pointer-events-none">
        <div className="relative w-[88vw] max-w-[850px] lg:max-w-[960px] xl:max-w-[1080px] h-[85vh] sm:h-[89vh] md:h-[93vh] lg:h-[110vh] flex items-end justify-center">
          <Image
            src="/norakpanha_no_bg.png"
            alt="Cheam Norakpanha - Full-Stack Software Engineer"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
            sizes="(max-width: 1024px) 90vw, 1080px"
          />
          {/* Subtle bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent" />
        </div>
      </div>

      {/* 3. Redesigned Left-Aligned Hero HUD Card & Action Component */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute bottom-6 sm:bottom-10 lg:bottom-12 left-4 sm:left-8 lg:left-14 z-20 w-[calc(100%-2rem)] sm:w-auto max-w-lg lg:max-w-xl pointer-events-auto"
      >
        <div className="relative rounded-3xl p-5 sm:p-7 bg-[#07070a]/75 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-3.5 sm:space-y-4 overflow-hidden group">
          {/* Subtle Top Border Highlight & Ambient Red Glow */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#e50914]/25 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100 opacity-60" />

          {/* Telemetry Status Pill */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE FOR ROLES &amp; ARCHITECTURE
            </div>
          </div>

          {/* High-Impact Editorial Role Title */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-[1.05]">
              <span className="block text-white/90">FULL-STACK</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                SOFTWARE{" "}
                <span className="text-[#e50914] drop-shadow-[0_0_30px_rgba(229,9,20,0.55)]">
                  ENGINEER
                </span>
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono text-white/80">
              <span className="text-[#e50914]">✦</span>
              <span>SYSTEMS &amp; CLOUD ARCHITECT</span>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans pt-0.5 max-w-sm sm:max-w-md">
              Turning ideas into high-concurrency scalable solutions, cloud architectures, and crafted digital experiences.
            </p>
          </div>

          {/* Redesigned Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Primary Action Button */}
            <button
              onClick={() => scrollToSection("projects")}
              className="group/btn relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#e50914] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(229,9,20,0.6)] cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>

            {/* Secondary Action Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="group/btn relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 cursor-pointer"
            >
              <Mail className="h-4 w-4 text-[#e50914] group-hover/btn:scale-110 transition-transform duration-300" />
              <span>Contact Me</span>
            </button>

            {/* Quick Links */}
            <div className="flex items-center gap-2 pl-0 sm:pl-1">
              <a
                href="https://github.com/cheamnorakpanha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/cheamnorakpanha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
