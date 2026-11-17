"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = portfolioData.navigation.filter((item) => item.id !== "home");

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const item of portfolioData.navigation) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = item.id;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink text-paper border-b-[3px] border-signal">
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-stretch justify-between pl-4 sm:pl-6 lg:pl-8">
        <a
          href="#home"
          onClick={(e) => go(e, "home")}
          className="flex items-center gap-2 display text-xl sm:text-2xl tracking-wide hover:text-signal transition-colors"
        >
          <span className="bg-signal text-white px-1.5 leading-tight">NP</span>
          Norakpanha
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-stretch">
          {navItems.map((item, idx) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                aria-current={active ? "true" : undefined}
                className={`label flex items-center gap-1.5 px-4 border-l-[3px] border-paper/15 transition-colors ${
                  active ? "bg-paper text-ink" : "hover:bg-signal hover:text-white"
                }`}
              >
                <span className={active ? "text-signal" : "opacity-50"}>{String(idx + 1).padStart(2, "0")}</span>
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-stretch">
          <a
            href="#contact"
            onClick={(e) => go(e, "contact")}
            className="hidden sm:flex items-center gap-1.5 bg-signal px-5 label text-white border-l-[3px] border-ink hover:bg-paper hover:text-ink transition-colors"
          >
            Hire me
            <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex w-14 items-center justify-center border-l-[3px] border-paper/15 hover:bg-signal"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="h-6 w-6" strokeWidth={3} /> : <Menu className="h-6 w-6" strokeWidth={3} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden fixed inset-x-0 top-[59px] sm:top-[67px] bottom-0 grid-paper text-ink overflow-y-auto p-4"
        >
          <ul className="space-y-3">
            {navItems.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => go(e, item.id)}
                  className={`flex items-center justify-between brut brut-shadow px-4 py-3 ${
                    activeSection === item.id ? "bg-signal text-white" : "bg-white"
                  }`}
                >
                  <span className="display text-4xl">{item.name}</span>
                  <span className="label">[{String(idx + 1).padStart(2, "0")}]</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={portfolioData.personal.socials.email} className="brut-btn bg-ink text-paper w-full mt-8">
            {portfolioData.personal.email}
          </a>
        </nav>
      )}
    </header>
  );
}
