"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background px-4">
      {/* Background glowing circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 blur-[120px] -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-md w-full text-center space-y-8 glass p-8 rounded-3xl border border-border shadow-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="p-4 bg-primary/10 rounded-full text-primary mb-6">
            <FileQuestion className="h-12 w-12 text-accent" />
          </div>
          <h1 className="text-8xl font-black tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-bold text-foreground mt-4">Page Not Found</h2>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            The page you are looking for does not exist or has been moved. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/15"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
