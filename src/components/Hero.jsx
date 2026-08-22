import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, Download, Sparkles, CheckCircle2, Terminal, Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, BehanceIcon, DribbbleIcon } from './BrandIcons';


export default function Hero({ onOpenResume }) {
  // Typing Effect State
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.roles;
    const targetRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === targetRole) {
      typingSpeed = 2000; // Pause at full word
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) => {
        if (!isDeleting) {
          if (prev === targetRole) {
            setIsDeleting(true);
            return prev;
          }
          return targetRole.substring(0, prev.length + 1);
        } else {
          return targetRole.substring(0, prev.length - 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0d12] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#facc15]/40 w-fit mb-6 text-xs font-semibold tracking-[0.18em] text-slate-200 uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#facc15]" />
              OPEN TO WORK
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-extrabold tracking-[-0.06em] text-white leading-[0.92] mb-4">
              Hi, I&apos;m <span className="block">Falah</span>
            </h1>

            <div className="h-12 flex items-center text-xl sm:text-2xl lg:text-[2rem] font-mono text-slate-300 mb-6">
              <span className="text-[#facc15] mr-2">&gt;</span>
              <span className="text-white font-semibold">{currentText}</span>
              <span className="w-0.5 h-7 bg-[#facc15] ml-1 animate-pulse" />
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              I turn caffeine and clean code into scalable systems, shipping fast, breaking nothing, and engineering experiences people actually love to use.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#facc15] text-black font-semibold text-sm shadow-[0_10px_30px_rgba(250,204,21,0.25)] hover:bg-[#fbbf24] transition-all duration-300"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171717] border border-slate-700 text-slate-200 font-semibold text-sm hover:border-[#facc15] transition-all duration-300"
              >
                <Download className="w-4 h-4 text-[#facc15]" />
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400 font-medium">Follow</span>
              <div className="flex items-center gap-3">
                  <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#facc15] transition-all duration-300" aria-label="GitHub">
                  <GithubIcon className="w-4 h-4" />
                </a>
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#facc15] transition-all duration-300" aria-label="LinkedIn">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                  <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#facc15] transition-all duration-300" aria-label="Instagram">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                  <a href={personalInfo.socials.behance} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#facc15] transition-all duration-300" aria-label="Behance">
                  <BehanceIcon className="w-4 h-4" />
                </a>
                  <a href={personalInfo.socials.dribbble} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#facc15] transition-all duration-300" aria-label="Dribbble">
                  <DribbbleIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-[2rem] border border-slate-800 bg-[#111111] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#facc15]/40 bg-[#171717]/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200 backdrop-blur-sm">
                <Terminal className="w-3.5 h-3.5 text-[#facc15]" />
                Engineer
              </div>

              <div className="grid grid-cols-2 gap-3">
                {personalInfo.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="glass-card rounded-2xl border border-slate-700/70 p-3.5">
                    <div className="text-xl font-extrabold text-white">
                      {metric.value}
                      <span className="text-[#facc15]">{metric.suffix}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-300 mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
