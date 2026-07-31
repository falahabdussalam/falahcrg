import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator Bar at top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[1001]">
        <div
          className="h-full bg-gradient-to-r from-[#2563EB] via-blue-500 to-cyan-400 shadow-[0_0_10px_#2563EB] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0d121e] border border-[#2563EB]/30 flex items-center justify-center group-hover:border-[#2563EB] transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
              <Code2 className="w-5 h-5 text-[#2563EB] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-['Poppins']">
              FALAH<span className="text-[#2563EB]">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0d121e]/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#2563EB] rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 text-xs font-semibold rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#2563EB] transition-all duration-300 backdrop-blur-sm"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#0d121e] border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#2563EB]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-[999] bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#2563EB] text-white font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3 rounded-xl border border-zinc-700 text-sm font-semibold text-zinc-200 text-center hover:border-[#2563EB]"
                >
                  Download Resume
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold text-center shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
