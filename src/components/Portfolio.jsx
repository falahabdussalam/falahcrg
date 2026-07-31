import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, portfolioCategories } from '../data/portfolioData';
import { ExternalLink, Layers, Eye, FolderKanban } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function Portfolio({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d121e] border border-[#2563EB]/30 text-xs font-mono text-[#2563EB] mb-3 uppercase tracking-wider">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>FEATURED SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Selected <span className="text-gradient-blue">Portfolio</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            A showcase of digital products, software applications, mobile UI concepts, brand identities, and growth marketing campaigns.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'bg-[#0d121e] border border-white/10 text-zinc-400 hover:text-white hover:border-[#2563EB]/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              >
                {/* Project Image & Overlay */}
                <div className="relative aspect-video overflow-hidden bg-[#0d121e] cursor-pointer" onClick={() => onSelectProject(project)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0d121e]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#2563EB]">
                    {project.category}
                  </span>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Project Info Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-bold text-white mb-2 group-hover:text-[#2563EB] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-[#0d121e] border border-white/5 text-[10px] font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="text-xs text-zinc-600 font-mono">Private Repository</span>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:underline"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
