"use client";

import Image from "next/image";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/cheamnorakpanha",
      icon: <GithubIcon className="h-5 w-5" />,
      color: "hover:text-primary hover:border-primary",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/cheamnorakpanha",
      icon: <LinkedinIcon className="h-5 w-5" />,
      color: "hover:text-accent hover:border-accent",
    },
    {
      name: "Email",
      url: "mailto:cheam.panha168@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      color: "hover:text-blue-500 hover:border-blue-500",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern bg-dot-pattern"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-[80px] md:blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/10 blur-[80px] md:blur-[120px] animate-pulse -z-10" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border border-border text-xs font-semibold text-accent uppercase tracking-wider"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Available for opportunities</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block mt-1 lg:inline">
                Cheam Norakpanha
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-foreground/80 max-w-2xl text-balance"
            >
              Full-Stack Software Engineer specializing in React, Next.js, Spring Boot, and Cloud Applications.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed"
            >
              I build scalable web applications that solve real business problems. Focused on visual elegance, performance, and clean code architecture.
            </motion.p>

            {/* Social handles */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-border glass text-muted-foreground transition-all duration-300 hover:scale-110 ${link.color}`}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl border border-border glass text-foreground font-semibold hover:bg-muted/50 transition-all duration-300 cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Profile Photo Wrapper */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              variants={itemVariants}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-[spin_60s_linear_infinite]" />
              {/* Floating blobs */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent/20 blur-md animate-bounce" style={{ animationDuration: "6s" }} />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/20 blur-md animate-bounce" style={{ animationDuration: "8s" }} />

              {/* Photo Frame */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-border shadow-2xl glass">
                <Image
                  src="/profile.png"
                  alt="Cheam Norakpanha"
                  fill
                  sizes="(max-w-768px) 256px, 384px"
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
