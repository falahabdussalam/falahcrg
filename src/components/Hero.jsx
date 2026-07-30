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
      {/* Background Cyber Grid & Glow Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF3B30]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121218] border border-[#FF3B30]/30 w-fit mb-6 shadow-[0_0_15px_rgba(255,59,48,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-zinc-300">
                AVAILABLE FOR FREELANCE & FULL-TIME ROLES
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Crafting Digital <br />
              <span className="text-gradient-red">Excellence</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-12 flex items-center text-xl sm:text-2xl lg:text-3xl font-mono text-zinc-300 mb-6">
              <span className="text-[#FF3B30] mr-2">&gt;</span>
              <span className="text-white font-semibold">{currentText}</span>
              <span className="w-0.5 h-7 bg-[#FF3B30] ml-1 animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed mb-8">
              Hello, I'm <strong className="text-white">Falah Abdussalam</strong>. I blend high-performance software engineering, modern UI/UX design, and strategic digital marketing to build exceptional digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF3B30] text-white font-semibold text-sm shadow-[0_0_25px_rgba(255,59,48,0.4)] hover:bg-[#FF253A] hover:shadow-[0_0_35px_rgba(255,59,48,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#121218] border border-zinc-700 text-zinc-200 font-semibold text-sm hover:border-[#FF3B30] hover:text-white transition-all duration-300 backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-[#FF3B30]" />
                Download Resume
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Connect With Me:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#121218] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF3B30] hover:shadow-[0_0_15px_rgba(255,59,48,0.3)] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#121218] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF3B30] hover:shadow-[0_0_15px_rgba(255,59,48,0.3)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#121218] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF3B30] hover:shadow-[0_0_15px_rgba(255,59,48,0.3)] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#121218] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF3B30] hover:shadow-[0_0_15px_rgba(255,59,48,0.3)] transition-all duration-300"
                  aria-label="Behance"
                >
                  <BehanceIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#121218] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF3B30] hover:shadow-[0_0_15px_rgba(255,59,48,0.3)] transition-all duration-300"
                  aria-label="Dribbble"
                >
                  <DribbbleIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Column: 3D Visual Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-b from-[#FF3B30]/40 via-white/5 to-transparent shadow-[0_0_50px_rgba(255,59,48,0.25)]">
              <div className="w-full h-full rounded-[23px] bg-[#09090b] overflow-hidden relative flex flex-col justify-between p-6">
                
                {/* Hero Image Background with Glass Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/hero_portrait.png"
                    alt="Falah Abdussalam Futuristic Portrait"
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
                </div>

                {/* Floating Top Badge */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="glass-card px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10 text-xs font-mono text-zinc-300">
                    <Terminal className="w-3.5 h-3.5 text-[#FF3B30]" />
                    <span>ENGINEER & CREATIVE</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#FF3B30]/20 border border-[#FF3B30] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#FF3B30] animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                </div>

                {/* Floating Stats Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-3 mt-auto pt-6">
                  {personalInfo.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03, translateY: -2 }}
                      className="glass-card p-3.5 rounded-2xl border border-white/10 bg-[#121218]/80 backdrop-blur-md"
                    >
                      <div className="text-2xl font-extrabold text-white font-mono flex items-baseline">
                        <span className="text-[#FF3B30]">{metric.value}</span>
                        <span className="text-[#FF3B30]">{metric.suffix}</span>
                      </div>
                      <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
