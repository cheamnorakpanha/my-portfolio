"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const navItems = portfolioData.navigation;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      let currentSection = "home";

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const elementPos = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-300 ${
        isScrolled ? "top-3 sm:top-4" : "top-4 sm:top-5"
      }`}
    >
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-2 px-4 sm:px-6 shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
            : "glass py-2.5 px-4 sm:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        }`}
      >
        <div className="flex items-center justify-between h-10 sm:h-11">
          {/* Brand Monogram & Name on Left */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e50914] to-[#990008] flex items-center justify-center font-black text-white text-xs tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.45)] group-hover:scale-105 transition-transform">
              NP
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-white group-hover:text-[#e50914] transition-colors leading-none">
                NORAKPANHA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase leading-tight pt-0.5 hidden xs:block">
                SOFTWARE ARCHITECT
              </span>
            </div>
          </a>

          {/* Centered Navigation Capsule Links */}
          <nav className="hidden md:flex items-center gap-1 glass-pill p-1 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer rounded-full ${
                  activeSection === item.id
                    ? "text-white font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavCapsule"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Editorial CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-[#e50914] to-[#b80710] hover:from-[#ff1a25] hover:to-[#e50914] border border-white/20 shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_28px_rgba(229,9,20,0.6)] transition-all duration-300 group cursor-pointer"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full glass-pill flex items-center justify-center text-white cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Capsule */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 rounded-2xl glass-panel p-4 space-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? "text-[#e50914] bg-white/5 font-bold"
                      : "text-white/70 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest text-white bg-[#e50914] hover:bg-[#b80710] shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-colors"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
