import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Active section scroll detector
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'skills',
      'services',
      'portfolio',
      'experience',
      'education',
      'testimonials',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-100 selection:bg-[#FF3B30] selection:text-white font-['Poppins',sans-serif]">
      {/* Custom Red Glow Cursor */}
      <CustomCursor />

      {/* Loading Splash Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Portfolio Structure */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About onOpenResume={() => setResumeOpen(true)} />
        <Skills />
        <Services />
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
