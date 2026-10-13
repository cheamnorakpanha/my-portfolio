"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPScrollTrigger() {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin on client
    gsap.registerPlugin(ScrollTrigger);

    // Animate section headings and titles as they enter viewport
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const heading = section.querySelector("h2");
      const title = section.querySelector("p.font-extrabold, h1");

      if (heading && title) {
        gsap.fromTo(
          [heading, title],
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Animate project images with smooth subtle zoom reveal
    const projectCards = document.querySelectorAll("#projects .group, #featured .group");
    projectCards.forEach((card) => {
      const img = card.querySelector("img");
      if (img) {
        gsap.fromTo(
          img,
          {
            scale: 1.15,
            opacity: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      // Clean up triggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
