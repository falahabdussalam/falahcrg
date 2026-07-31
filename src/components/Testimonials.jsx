import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/portfolioData';
import { Quote, Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d121e] border border-[#2563EB]/30 text-xs font-mono text-[#2563EB] mb-3 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Client <span className="text-gradient-blue">Testimonials</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Feedback and reviews from company CEOs, product leaders, and marketing directors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-8">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-zinc-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#2563EB]/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#2563EB] transition-colors">
                    {item.name}
                  </h4>
                  <div className="text-xs text-zinc-400 font-mono">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
