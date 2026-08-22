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
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-white">
      {/* Background Subtle Grid & Yellow Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-300/10 rounded-full blur-[100px] pointer-events-none" />

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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-400/60 w-fit mb-6 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-ping" />
              <span className="text-xs font-bold tracking-wide text-zinc-900">
                AVAILABLE FOR FREELANCE & FULL-TIME ROLES
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] mb-4">
              Crafting Digital <br />
              <span className="text-yellow-600 underline decoration-yellow-400 decoration-4 underline-offset-4">Excellence</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-12 flex items-center text-xl sm:text-2xl lg:text-3xl font-mono text-zinc-800 mb-6">
              <span className="text-yellow-600 font-bold mr-2">&gt;</span>
              <span className="text-zinc-950 font-semibold">{currentText}</span>
              <span className="w-0.5 h-7 bg-yellow-500 ml-1 animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl font-normal leading-relaxed mb-8">
              Hello, I'm <strong className="text-zinc-950 font-bold">Falah Abdussalam</strong>. I blend high-performance software engineering, modern graphic design, and strategic digital marketing to build exceptional digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-yellow-400 text-black font-bold text-sm shadow-md hover:shadow-lg hover:bg-yellow-300 border border-yellow-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-zinc-300 text-zinc-800 font-semibold text-sm hover:border-yellow-500 hover:text-black hover:bg-yellow-50/50 shadow-xs transition-all duration-300"
              >
                <Download className="w-4 h-4 text-yellow-600" />
                Download Resume
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-200">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Connect With Me:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-100/60 shadow-xs transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-100/60 shadow-xs transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-100/60 shadow-xs transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-100/60 shadow-xs transition-all duration-300"
                  aria-label="Behance"
                >
                  <BehanceIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-100/60 shadow-xs transition-all duration-300"
                  aria-label="Dribbble"
                >
                  <DribbbleIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Column: Interactive Code & Architecture Terminal Card (Image Removed) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col gap-4"
          >
            {/* Terminal Window Card */}
            <div className="w-full rounded-3xl bg-zinc-900 border border-zinc-800 p-5 shadow-2xl text-left font-mono relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-zinc-400 font-sans font-medium">developer.config.ts</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/20">
                  <Terminal className="w-3 h-3" />
                  <span>TypeScript</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="text-xs sm:text-[13px] leading-relaxed space-y-1 text-zinc-300 overflow-x-auto">
                <p><span className="text-yellow-400">const</span> <span className="text-white font-bold">engineer</span> = &#123;</p>
                <p className="pl-4"><span className="text-zinc-400">name:</span> <span className="text-emerald-400">"{personalInfo.name}"</span>,</p>
                <p className="pl-4"><span className="text-zinc-400">experience:</span> <span className="text-amber-400">"3+ Years"</span>,</p>
                <p className="pl-4"><span className="text-zinc-400">status:</span> <span className="text-emerald-400">"Available for Projects"</span>,</p>
                <p className="pl-4"><span className="text-zinc-400">skills:</span> [</p>
                <p className="pl-8 text-yellow-300">"Full Stack", "React", "Node.js", "Design"</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-zinc-400">deliver:</span> () =&gt; &#123;</p>
                <p className="pl-8 text-zinc-400">// High-performance digital solutions</p>
                <p className="pl-8"><span className="text-yellow-400">return</span> <span className="text-emerald-400">"Exceptional Results"</span>;</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;;</p>
              </div>

              {/* Bottom Terminal Status Bar */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ready to Compile</span>
                </span>
                <span className="text-yellow-400 font-bold">v1.0.0</span>
              </div>
            </div>

            {/* Floating Stats Grid Cards */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, translateY: -2 }}
                  className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-md flex flex-col justify-center"
                >
                  <div className="text-2xl font-extrabold text-zinc-950 font-mono flex items-baseline">
                    <span className="text-yellow-600">{metric.value}</span>
                    <span className="text-yellow-500">{metric.suffix}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-600 uppercase tracking-wider mt-0.5">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
