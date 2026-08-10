"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`relative w-full py-6 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Radiant Gradient Fading Line */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      
      {/* Inner Glow Beam */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent blur-[1px]" />

      {/* Center Radiant Emblem */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-center"
      >
        {/* Glow Aura */}
        <div className="absolute w-10 h-10 bg-emerald-500/30 blur-lg rounded-full animate-pulse" />

        {/* Center Glass Pill */}
        <div className="relative px-3 py-1 rounded-full bg-slate-950/90 border border-emerald-500/40 shadow-[0_0_15px_rgba(52,211,153,0.3)] flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <Sparkles className="w-3.5 h-3.5" />
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
        </div>
      </motion.div>
    </div>
  );
}
