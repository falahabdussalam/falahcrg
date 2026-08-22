import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/portfolioData';
import { Code2, Palette, TrendingUp, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { FigmaIcon } from './BrandIcons';

const iconMap = {
  Code2: Code2,
  Figma: FigmaIcon,
  Palette: Palette,
  TrendingUp: TrendingUp
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-50/80 border-y border-zinc-200">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-400/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-400/50 text-xs font-mono font-bold text-yellow-800 mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS & OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Services I <span className="text-yellow-600 underline decoration-yellow-400 decoration-4">Provide</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            High-value end-to-end digital services tailored for startups, enterprise brands, and growing businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => {
            const IconComp = iconMap[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-zinc-200 bg-white flex flex-col justify-between relative group shadow-sm"
              >
                <div>
                  {/* Top Bar Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-100 border border-yellow-400/50 flex items-center justify-center text-yellow-700 group-hover:scale-110 group-hover:bg-yellow-200 transition-all duration-300 shadow-sm">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-extrabold font-mono text-zinc-300 group-hover:text-yellow-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-zinc-950 mb-3 group-hover:text-yellow-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquire CTA Link */}
                <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 uppercase">READY TO START?</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-700 hover:text-black group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inquire Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
