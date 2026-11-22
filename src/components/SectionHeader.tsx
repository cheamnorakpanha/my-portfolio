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
 * Grunge section opener: a typewritten index tag, a worn oversized headline
 * whose last line sits in a glitching acid block, and an optional taped-on aside.
 */
export default function SectionHeader({ index, label, title, highlight, aside }: SectionHeaderProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex items-stretch brut bg-ink text-paper w-fit -rotate-1">
        <span className="label px-3 py-2 bg-signal text-signal-fg border-r-[3px] border-ink">[{index}]</span>
        <span className="label px-3 py-2">{label}</span>
      </div>

      <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <h2 className="display text-[clamp(3.25rem,10vw,8rem)] text-ink">
            <span className="block distress rgb-split">{title}</span>
            {highlight && (
              <span
                className="glitch mt-2 inline-block bg-signal text-signal-fg px-3 pt-2 pb-1 brut-shadow -rotate-1"
                data-text={typeof highlight === "string" ? highlight : undefined}
              >
                {highlight}
              </span>
            )}
          </h2>
        </Reveal>
        {aside && (
          <Reveal delay={0.08} className="lg:col-span-4">
            <div className="relative">
              <span className="tape -top-3 right-6 rotate-2" aria-hidden="true" />
              <div className="brut bg-card p-5 pt-6 text-base leading-relaxed text-ink brut-shadow">{aside}</div>
            </div>
          </Reveal>
        )}
      </div>
    </header>
  );
}
