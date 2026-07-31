import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, BehanceIcon, DribbbleIcon } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060a] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-800">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-[#0d121e] border border-[#2563EB]/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-[#2563EB]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                FALAH<span className="text-[#2563EB]">.</span>
              </span>
            </a>
            <p className="text-xs text-zinc-400 max-w-sm">
              Software Developer • Full Stack Engineer • UI/UX Designer • Digital Marketing Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0d121e] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#2563EB] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0d121e] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#2563EB] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0d121e] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#2563EB] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0d121e] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#2563EB] transition-colors"
                aria-label="Behance"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0d121e] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#2563EB] transition-colors"
                aria-label="Dribbble"
              >
                <DribbbleIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Availability */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Falah Abdussalam. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-400">Available for New Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
