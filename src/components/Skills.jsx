import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, Server, Terminal, TrendingUp, Cpu, 
  Sparkles, CheckCircle2, Star
} from 'lucide-react';
import { FigmaIcon } from './BrandIcons';

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Programming: Terminal,
  Design: FigmaIcon,
  Marketing: TrendingUp
};

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-400/50 text-xs font-mono font-bold text-yellow-800 mb-3 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Tools & <span className="text-yellow-600 underline decoration-yellow-400 decoration-4">Proficiencies</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            A comprehensive overview of technologies, frameworks, software, and marketing platforms I master.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const IconComp = categoryIcons[cat] || Code2;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'text-black bg-yellow-400 font-bold shadow-md'
                    : 'text-zinc-700 bg-zinc-100 border border-zinc-200 hover:text-black hover:bg-zinc-200'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat}</span>
                <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-black/10 text-zinc-800 font-mono">
                  {skillsData[cat].length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {skillsData[activeCategory].map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-zinc-200 bg-white flex flex-col justify-between relative group shadow-sm"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center font-bold text-lg shadow-xs"
                      style={{ color: skill.color || '#D97706' }}
                    >
                      {skill.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-950 group-hover:text-yellow-700 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="text-[11px] font-mono text-zinc-500">
                        Proficiency Level
                      </div>
                    </div>
                  </div>
                  <span className="text-base font-extrabold text-yellow-700 font-mono">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Meter Bar */}
                <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden relative border border-zinc-200/60">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-sm"
                  />
                </div>

                {/* Bottom Badges */}
                <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-500 pt-3 border-t border-zinc-100">
                  <span className="inline-flex items-center gap-1 font-medium text-zinc-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600" />
                    Verified Mastery
                  </span>
                  <span className="font-mono font-bold text-yellow-700">EXPERT</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
