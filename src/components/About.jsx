import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Code, Layout, Palette, TrendingUp, CheckCircle, Download, Award, ShieldCheck, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Code,
    title: "Software Engineering",
    desc: "Architecting scalable web applications, REST APIs, microservices, and high-concurrency systems."
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Creating human-centric user experiences, Figma design systems, wireframes, and smooth micro-interactions."
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
    <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#facc15]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#facc15]/30 text-xs font-mono text-[#facc15] mb-3 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>WHO I AM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bridging Technology, <span className="text-gradient-blue">Design & Growth</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            I don't just write code or design interfaces — I construct cohesive digital ecosystems that solve real-world problems and drive measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white leading-tight">Full-Spectrum Digital Craftsman</h3>
                <p className="text-xs text-[#facc15] font-mono font-medium mt-0.5">Falah Abdussalam</p>
              </div>

              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-4">
                My journey began with a curiosity for code and visual aesthetics. Over the past 3+ years, I've honed my expertise across software engineering, user experience design, and performance marketing.
              </p>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                Whether it's building a complex SaaS web application in React & Node.js, designing a high-converting iOS UI in Figma, or running a 6-figure Meta ad campaign, I bring rigorous craftsmanship to every project.
              </p>

              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-500 font-mono uppercase">LOCATION</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono uppercase">EXPERIENCE</div>
                  <div className="text-sm font-semibold text-[#facc15]">3+ Years</div>
                </div>
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 text-xs font-semibold rounded-full bg-[#facc15]/10 border border-[#facc15] text-white hover:bg-[#facc15] hover:text-black transition-colors"
                >
                  View CV
                </button>
              </div>
            </div>
          </motion.div>

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
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#171717] border border-[#facc15]/30 flex items-center justify-center mb-4 text-[#facc15]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
