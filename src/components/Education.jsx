import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#09090b]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF3B30]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#FF3B30]/30 text-xs font-mono text-[#FF3B30] mb-3 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education & <span className="text-gradient-red">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Formal computer science academic degree and specialized industry master certifications.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#121218] border border-[#FF3B30]/30 flex items-center justify-center text-[#FF3B30]">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FF3B30]/15 border border-[#FF3B30]/40 text-xs font-mono text-[#FF3B30]">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <div className="text-sm font-semibold text-zinc-300 mb-4">{edu.institution}</div>

                <div className="space-y-2 mb-6">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 uppercase">STATUS</span>
                <span className="text-[#FF3B30] font-bold">{edu.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
