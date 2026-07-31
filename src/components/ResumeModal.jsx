import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo, experienceData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownloadCV = () => {
    // Generate text/markdown formatted resume content and initiate browser download
    const resumeText = `
====================================================
FALAH ABDUSSALAM - CURRICULUM VITAE
====================================================
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
Website: https://github.com/falahabdussalam

SUMMARY
----------------------------------------------------
${personalInfo.bio}

PROFESSIONAL ROLES
----------------------------------------------------
${personalInfo.roles.map(r => `• ${r}`).join('\n')}

WORK EXPERIENCE
----------------------------------------------------
${experienceData.map(exp => `
[${exp.period}] ${exp.role} - ${exp.company} (${exp.location})
Key Accomplishments: ${exp.description}
Technologies: ${exp.skills.join(', ')}
`).join('\n')}

EDUCATION & CERTIFICATIONS
----------------------------------------------------
${educationData.map(edu => `
• ${edu.degree} - ${edu.institution} (${edu.period})
  Status: ${edu.status}
  Highlights: ${edu.highlights.join(', ')}
`).join('\n')}

====================================================
    `;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Falah_Abdussalam_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Resume Modal Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-[#07090e] border border-[#2563EB]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)] z-10 my-8 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0d121e] border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Curriculum Vitae Preview
                </h3>
                <p className="text-xs text-zinc-400 font-mono">Falah Abdussalam • Professional Profile</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#0d121e] border border-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Content Body */}
          <div className="py-6 space-y-8 text-left">
            {/* Bio & Contact */}
            <div className="p-6 rounded-2xl bg-[#0d121e]/60 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h4>
              <p className="text-xs text-[#2563EB] font-mono mb-4">{personalInfo.title}</p>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">{personalInfo.bio}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-400">
                <div>Email: <span className="text-white">{personalInfo.email}</span></div>
                <div>Phone: <span className="text-white">{personalInfo.phone}</span></div>
                <div>Location: <span className="text-white">{personalInfo.location}</span></div>
              </div>
            </div>

            {/* Work History Summary */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4 text-[#2563EB]" />
                <span>Experience Summary</span>
              </div>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-[#0d121e] border border-white/5">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="text-sm font-bold text-white">{exp.role}</h5>
                      <span className="text-xs font-mono text-[#2563EB]">{exp.period}</span>
                    </div>
                    <div className="text-xs text-zinc-400 mb-2">{exp.company} • {exp.location}</div>
                    <p className="text-xs text-zinc-300 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Summary */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                <span>Education & Certifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationData.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-[#0d121e] border border-white/5">
                    <h5 className="text-xs font-bold text-white mb-1">{edu.degree}</h5>
                    <div className="text-[11px] text-[#2563EB] font-mono mb-2">{edu.institution} ({edu.period})</div>
                    <div className="text-xs text-zinc-400">{edu.status}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Download Bar */}
          <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
            <span className="text-xs text-zinc-500 font-mono">Format: Plain Text / PDF Ready</span>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-bold hover:bg-[#1D4ED8] shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Download className="w-4 h-4" />
              Download Resume File
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
