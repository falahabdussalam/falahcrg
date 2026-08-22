import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import FLogo from './FLogo';

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
      className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center text-zinc-950 select-none"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background Subtle Yellow Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-400/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="relative flex flex-col items-center z-10 px-4">
        {/* Animated Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 shadow-xl rounded-2xl"
        >
          <FLogo className="w-20 h-20 shadow-xl rounded-2xl" />
          <Sparkles className="w-4 h-4 text-black absolute top-2 right-2 animate-bounce" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-center text-zinc-950"
        >
          FALAH <span className="text-yellow-600">ABDUSSALAM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8 font-semibold"
        >
          Software • Design • Marketing
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-80 h-1.5 bg-zinc-100 rounded-full overflow-hidden relative border border-zinc-200">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-full shadow-sm"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Counter */}
        <div className="mt-4 text-xs font-mono text-zinc-600 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
          <span>LOADING EXPERIENCE</span>
          <span className="text-yellow-700 font-bold">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
