"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className="fixed top-0 inset-x-0 h-1 bg-signal origin-left z-[60]" style={{ scaleX: scrollYProgress }} />

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="brut-btn fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 !p-0 h-12 w-12 bg-signal text-white"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={3} />
        </button>
      )}
    </>
  );
}
