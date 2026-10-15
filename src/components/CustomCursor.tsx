"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const isFinePointer = React.useSyncExternalStore(
    () => () => {},
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches,
    () => false
  );
  const [isHovered, setIsHovered] = useState(false);
  const [, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const isHoveredRef = useRef(false);
  const isClickingRef = useRef(false);

  useEffect(() => {
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-enabled");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Fast direct update for the dot
      if (dotRef.current) {
        const dotScale = isHoveredRef.current ? 0 : 1;
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${dotScale})`;
      }

      // Check if cursor is over clickable/interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest("a, button, input, textarea, select, [role='button'], [data-cursor='hover']")
        );
        if (interactive !== isHoveredRef.current) {
          isHoveredRef.current = interactive;
          setIsHovered(interactive);
        }
      }
    };

    const onMouseDown = () => {
      isClickingRef.current = true;
      setIsClicking(true);
    };

    const onMouseUp = () => {
      isClickingRef.current = false;
      setIsClicking(false);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Butter-smooth, tight follow loop
    const render = () => {
      // 0.35 ease gives responsive, tight follow without lagging far behind
      const ease = 0.35;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        let ringScale = 1;
        if (isClickingRef.current) {
          ringScale = 0.8;
        } else if (isHoveredRef.current) {
          ringScale = 1.5;
        }
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${ringScale})`;
      }

      if (dotRef.current) {
        const dotScale = isHoveredRef.current ? 0 : (isClickingRef.current ? 0.7 : 1);
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${dotScale})`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Precision Core Dot (disappears smoothly when hovering buttons to prevent covering text) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-primary will-change-transform transition-[opacity] duration-150"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          opacity: isHovered ? 0 : 1,
        }}
      />

      {/* Synchronized Halo Ring (scales smoothly centered directly on the cursor) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border will-change-transform transition-[border-color,background-color] duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? "border-accent bg-accent/15 backdrop-blur-[1px] shadow-sm shadow-accent/20"
            : "border-primary/40 bg-transparent"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
    </div>
  );
}
