import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Code, Layout, Palette, TrendingUp, CheckCircle, Download, Award, ShieldCheck, Zap } from 'lucide-react';
import FLogo from './FLogo';

const pillars = [
  {
    icon: Code,
    title: "Software Engineering",
    desc: "Architecting scalable web applications, REST APIs, microservices, and high-concurrency systems."
  },
  {
    icon: Layout,
    title: "Frontend Architecture",
    desc: "Developing high-speed, accessible interfaces, modern state management, and reusable design systems."
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    desc: "Designing iconic brand logos, marketing collateral, vector art, and high-impact digital graphics."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Strategy",
    desc: "Leveraging technical SEO, Meta & Google ad performance, and data analytics for hyper-growth."
  }
];

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-50/80 border-y border-zinc-200">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-400/50 text-xs font-mono font-bold text-yellow-800 mb-3 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>WHO I AM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Bridging Technology, <span className="text-yellow-600 underline decoration-yellow-400 decoration-4">Design & Growth</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            I don't just write code or design graphics — I construct cohesive digital ecosystems that solve real-world problems and drive measurable business results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-zinc-200 relative overflow-hidden bg-white shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <FLogo className="w-14 h-14 rounded-2xl shadow-md shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 leading-tight">Full-Spectrum Digital Craftsman</h3>
                  <p className="text-xs text-yellow-700 font-mono font-bold mt-0.5">Falah Abdussalam</p>
                </div>
              </div>

              <p className="text-zinc-700 leading-relaxed text-sm sm:text-base mb-4">
                My journey began with a curiosity for code and visual aesthetics. Over the past 3+ years, I've honed my expertise across software engineering, frontend architecture, and performance marketing.
              </p>

              <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                Whether it's building a complex SaaS web application in React & Node.js, designing high-converting brand collateral in Illustrator, or running a 6-figure Meta ad campaign, I bring rigorous craftsmanship to every project.
              </p>

              <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-500 font-mono uppercase">LOCATION</div>
                  <div className="text-sm font-bold text-zinc-900">{personalInfo.location}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono uppercase">EXPERIENCE</div>
                  <div className="text-sm font-bold text-yellow-700">3+ Years</div>
                </div>
                <button
                  onClick={onOpenResume}
                  className="px-5 py-2 text-xs font-bold rounded-full bg-yellow-400 text-black hover:bg-yellow-300 shadow-sm transition-all"
                >
                  View CV
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-zinc-200 bg-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 border border-yellow-400/50 flex items-center justify-center mb-4 text-yellow-700">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-950 mb-2">{pillar.title}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
