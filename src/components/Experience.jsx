import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-50/80 border-y border-zinc-200">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-400/50 text-xs font-mono font-bold text-yellow-800 mb-3 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Work <span className="text-yellow-600 underline decoration-yellow-400 decoration-4">Experience</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            A chronological timeline of key roles, tech leadership, and engineering achievements across my career.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-yellow-400/50 ml-4 sm:ml-8 lg:ml-32 space-y-12">
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
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-yellow-500 flex items-center justify-center shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              </div>

              {/* Timeline Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-zinc-200 bg-white relative shadow-sm">
                
                {/* Top Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-bold text-yellow-700">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-300 text-zinc-900 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-yellow-600" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-700 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700"
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
