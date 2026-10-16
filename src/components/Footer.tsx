"use client";

import { Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  const socialLinks = [
    { name: "GitHub", url: personal.socials.github, icon: <GithubIcon className="h-4 w-4" /> },
    { name: "LinkedIn", url: personal.socials.linkedin, icon: <LinkedinIcon className="h-4 w-4" /> },
    { name: "Email", url: personal.socials.email, icon: <Mail className="h-4 w-4" /> },
    { name: "Twitter", url: "https://twitter.com/", icon: <TwitterIcon className="h-4 w-4" /> },
    { name: "Website", url: "#home", icon: <Globe className="h-4 w-4" /> },
  ];

  return (
    <footer className="border-t border-border glass bg-background/50 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Info */}
          <div className="text-center md:text-left space-y-1.5">
            <h4 className="text-base font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-wide">
              {personal.name}
            </h4>
            <p className="text-xs text-muted-foreground">
              {personal.fullRole} specializing in scalable application development.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-full border border-border glass text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-semibold">
          <p>© 2026 Cheam Norakpanha. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
