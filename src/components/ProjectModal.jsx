import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl bg-[#07090e] border border-[#2563EB]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)] z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#2563EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0d121e]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
              <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                {project.category}
              </span>
            </div>
          </div>

          {/* Project Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#2563EB]" />
                <span>TECHNOLOGIES & TOOLS USED</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#0d121e] border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0d121e] border border-zinc-700 text-white text-xs font-semibold hover:border-[#2563EB] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs text-zinc-400 hover:text-white underline font-mono"
              >
                Close Modal
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
