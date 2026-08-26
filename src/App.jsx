import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/ui/ResumeModal';
import { portfolioData } from './data/portfolioData';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-brand-500 selection:text-white">
        {/* Ambient Glowing Background Orbs */}
        <ParticleBackground />

        {/* Sticky Glassmorphism Header */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          data={portfolioData}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
