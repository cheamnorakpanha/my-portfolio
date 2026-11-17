import React from "react";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: React.ReactNode;
  highlight?: React.ReactNode;
  aside?: React.ReactNode;
}

/**
 * Brutalist section opener: a black index tab, an oversized headline whose
 * last line sits in a solid red block, and an optional bordered aside.
 */
export default function SectionHeader({ index, label, title, highlight, aside }: SectionHeaderProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex items-stretch brut bg-ink text-paper w-fit">
        <span className="label px-3 py-2 bg-signal text-white border-r-[3px] border-ink">[{index}]</span>
        <span className="label px-3 py-2">{label}</span>
      </div>

      <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <h2 className="display text-[clamp(3.25rem,10vw,8rem)] text-ink">
            <span className="block">{title}</span>
            {highlight && (
              <span className="mt-2 inline-block bg-signal text-white px-3 pt-2 pb-1 brut brut-shadow -rotate-1">
                {highlight}
              </span>
            )}
          </h2>
        </Reveal>
        {aside && (
          <Reveal delay={0.08} className="lg:col-span-4">
            <div className="brut bg-white p-5 text-base leading-relaxed text-ink brut-shadow">{aside}</div>
          </Reveal>
        )}
      </div>
    </header>
  );
}
