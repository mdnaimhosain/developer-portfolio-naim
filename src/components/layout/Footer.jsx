import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950/90 border-t border-slate-800 text-slate-400 font-sans z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-400 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Frontend Developer crafting high-performance, accessible, and interactive web applications with React.js and Tailwind CSS.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 hover:text-white hover:border-brand-500/40 hover:bg-slate-800 transition-all shadow-xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-[#0A66C2] dark:text-[#38bdf8] hover:border-cyan-500/40 hover:bg-slate-800 transition-all shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-slate-800 transition-all shadow-xs"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-brand-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-400 transition-colors">
                  Services & Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-400 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies Used Badge & Back to Top */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Built With
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engineered with React 19, Tailwind CSS, Lucide React, Framer Motion, and modern UI/UX design.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 text-xs font-medium text-slate-300 hover:text-white transition-all shadow-sm group cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for the modern web
          </p>
        </div>
      </div>
    </footer>
  );
};
