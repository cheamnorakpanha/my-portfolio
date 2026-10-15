"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Eye, BookOpen } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import React, { useEffect, useState } from "react";

export default function GitHubStats() {
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const username = "cheamnorakpanha";

  // Hardcoded to dark mode theme
  const themeParam = "tokyonight";
  
  // Custom API configurations for premium styling matching colors
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${themeParam}&title_color=3b82f6&icon_color=06b6d4&text_color=888888&bg_color=00000000&hide_border=true&count_private=true`;
  const languagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${themeParam}&title_color=3b82f6&icon_color=06b6d4&text_color=888888&bg_color=00000000&hide_border=true`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${themeParam}&currStreakNum=3b82f6&currStreakLabel=06b6d4&bg_color=00000000&hide_border=true`;
  const chartUrl = `https://ghchart.rshah.org/3b82f6/${username}`;

  return (
    <section id="github-stats" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <GithubIcon className="h-4 w-4" /> Activity
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            GitHub Statistics
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Contribution Graph Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-2xl border border-border glass text-center shadow-md flex flex-col items-center justify-center group"
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 self-start text-foreground/90">
              <BookOpen className="h-5 w-5 text-accent" />
              Contributions Graph
            </h3>
            
            <div className="w-full overflow-x-auto py-2 flex justify-center">
              {mounted && (
                <img
                  src={chartUrl}
                  alt={`${username}'s Github Chart`}
                  className="min-w-[650px] md:min-w-0 max-w-full h-auto filter hue-rotate-180 invert transition-all"
                  loading="lazy"
                />
              )}
            </div>
            
            <p className="text-xs text-muted-foreground mt-4 italic">
              Automatically tracking daily commit frequencies and pull requests.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl border border-border glass shadow-md flex items-center justify-center min-h-[220px]"
            >
              {mounted && (
                <img
                  src={statsUrl}
                  alt={`${username}'s GitHub Stats`}
                  className="w-full max-w-[450px] h-auto object-contain"
                  loading="lazy"
                />
              )}
            </motion.div>

            {/* Streak & Languages Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-6"
            >
              {/* Streak Widget */}
              <div className="p-6 rounded-2xl border border-border glass shadow-md flex items-center justify-center flex-1">
                {mounted && (
                  <img
                    src={streakUrl}
                    alt={`${username}'s GitHub Streak`}
                    className="w-full max-w-[400px] h-auto object-contain"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Languages Widget */}
              <div className="p-6 rounded-2xl border border-border glass shadow-md flex items-center justify-center flex-1">
                {mounted && (
                  <img
                    src={languagesUrl}
                    alt={`${username}'s Top Languages`}
                    className="w-full max-w-[400px] h-auto object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
