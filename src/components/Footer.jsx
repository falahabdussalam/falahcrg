import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, BehanceIcon, DribbbleIcon } from './BrandIcons';
import FLogo from './FLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-100 border-t border-zinc-200 pt-16 pb-12 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-200">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2.5 mb-3 group">
              <FLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
              <span className="text-xl font-bold tracking-tight text-zinc-950">
                FALAH<span className="text-yellow-500">.</span>
              </span>
            </a>
            <p className="text-xs text-zinc-600 max-w-sm font-medium">
              Software Developer • Full Stack Engineer • Graphic Designer • Digital Marketing Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600 font-semibold">
            <a href="#about" className="hover:text-yellow-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-yellow-600 transition-colors">Skills</a>
            <a href="#services" className="hover:text-yellow-600 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-yellow-600 transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-yellow-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-yellow-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-yellow-600 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-50 shadow-xs transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-50 shadow-xs transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-50 shadow-xs transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-50 shadow-xs transition-colors"
                aria-label="Behance"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black hover:border-yellow-500 hover:bg-yellow-50 shadow-xs transition-colors"
                aria-label="Dribbble"
              >
                <DribbbleIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 shadow-md transition-all"
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
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-zinc-600 font-medium">Available for New Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
