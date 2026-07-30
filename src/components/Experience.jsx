import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#09090b]">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF3B30]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#FF3B30]/30 text-xs font-mono text-[#FF3B30] mb-3 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Work <span className="text-gradient-red">Experience</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            A chronological timeline of key roles, tech leadership, and engineering achievements across my career.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#FF3B30]/30 ml-4 sm:ml-8 lg:ml-32 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Pulsing Timeline Dot Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#09090b] border-2 border-[#FF3B30] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
              </div>

              {/* Timeline Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative">
                
                {/* Top Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#FF3B30]">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121218] border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-[#FF3B30]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-[#121218] border border-white/5 text-xs font-mono text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
