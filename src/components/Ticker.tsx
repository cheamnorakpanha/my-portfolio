import React from "react";

const words = [
  "Available for work",
  "Full-stack engineer",
  "Spring Boot",
  "Next.js",
  "PostgreSQL",
  "Cloud systems",
  "Phnom Penh",
];

/** Acid marquee band between the hero and the first section. */
export default function Ticker() {
  const run = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className="display text-3xl sm:text-4xl px-6 whitespace-nowrap">{w}</span>
          <span className="text-2xl" aria-hidden="true">✶</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 overflow-hidden bg-signal text-signal-fg border-y-[3px] border-ink py-3">
      <div className="ticker-track flex w-max">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
