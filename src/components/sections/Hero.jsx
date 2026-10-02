import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Send, Sparkles, FolderGit2, Star, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Button } from '../common/Button';
import { CodeWindow } from '../ui/CodeWindow';

export const Hero = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle, Intro & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 dark:bg-slate-900/90 border border-brand-500/30 text-xs font-semibold text-brand-300 backdrop-blur-xl shadow-lg shadow-brand-500/10 animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200">{personal.status}</span>
            </div>
            {/* Main Greeting & Name Heading */}

            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                '',
                500,
                'Learning Backend Development',
                2000,
                '',
                500,
                'Aspiring Full Stack Developer',
                2000,
                '',
                500,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
              className="text-xl md:text-2xl font-bold
  bg-gradient-to-r from-green-400 to-indigo-500 border red-500
  bg-clip-text text-transparent"
            />

            <div className="space-y-2">
              <span className="text-lg sm:text-xl font-mono text-brand-400 font-semibold flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Hello world, my name is
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="gradient-text-accent">{personal.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 pt-1 leading-snug">
                {personal.tagline}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Prominent CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                icon={Send}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Contact Me
              </Button>
            </div>

            {/* Floating Developer Quick Stats */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                  {personal.yearsExperience}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Job Ready
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display">
                  {personal.completedProjects}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Projects Built
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">
                  {personal.codeQualityScore}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Clean Code & QA
                </div>
              </div>
            </div>
          </div>


          {/* Right Column: Interactive Coding Workspace & Terminal Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">

            <CodeWindow />
          </div>
        </div>
      </div>

    </section>
  );
};
