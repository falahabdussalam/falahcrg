import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-[#07090e] flex flex-col items-center justify-center text-white select-none"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background Subtle Blue Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="relative flex flex-col items-center z-10 px-4">
        {/* Animated Cyber Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-20 h-20 mb-8 flex items-center justify-center rounded-2xl bg-[#0d121e] border border-[#2563EB]/30 shadow-[0_0_30px_rgba(37,99,235,0.25)]"
        >
          <Code2 className="w-10 h-10 text-[#2563EB] animate-pulse" />
          <Sparkles className="w-4 h-4 text-white absolute top-2 right-2 animate-bounce" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-center"
        >
          FALAH <span className="text-[#2563EB]">ABDUSSALAM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-8"
        >
          Software • Design • Marketing
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-80 h-1.5 bg-zinc-800/80 rounded-full overflow-hidden relative border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2563EB] via-blue-500 to-[#1D4ED8] rounded-full shadow-[0_0_12px_#2563EB]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Counter */}
        <div className="mt-4 text-xs font-mono text-zinc-400 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
          <span>LOADING EXPERIENCE</span>
          <span className="text-[#2563EB] font-bold">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
