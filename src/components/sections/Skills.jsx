import React, { useState } from 'react';
import {
  Atom,
  Palette,
  FileCode,
  Globe,
  Layout,
  GitBranch,
  Smartphone,
  Network,
  Server,
  Cpu,
  Gauge,
  Sparkles,
  Code2
} from 'lucide-react';
import { FigmaIcon, TypescriptIcon, NextjsIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { skills } = portfolioData;

  const categories = ['All', 'Core Web', 'React Ecosystem', 'Styling', 'Tools & APIs'];

  const getSkillIcon = (iconName) => {
    if (iconName === 'Atom') {
      return <Atom className="w-6 h-6 text-cyan-400" />;
    } else if (iconName === 'Palette') {
      return <Palette className="w-6 h-6 text-sky-400" />;
    } else if (iconName === 'FileCode') {
      return <FileCode className="w-6 h-6 text-amber-400" />;
    } else if (iconName === 'Globe') {
      return <Globe className="w-6 h-6 text-orange-400" />;
    } else if (iconName === 'Layout') {
      return <Layout className="w-6 h-6 text-blue-400" />;
    } else if (iconName === 'GitBranch') {
      return <GitBranch className="w-6 h-6 text-rose-400" />;
    } else if (iconName === 'Smartphone') {
      return <Smartphone className="w-6 h-6 text-emerald-400" />;
    } else if (iconName === 'Network') {
      return <Network className="w-6 h-6 text-purple-400" />;
    } else if (iconName === 'Server') {
      return <Server className="w-6 h-6 text-indigo-400" />;
    } else if (iconName === 'Cpu') {
      return <Cpu className="w-6 h-6 text-pink-400" />;
    } else if (iconName === 'Figma') {
      return <FigmaIcon className="w-6 h-6 text-violet-400" />;
    } else if (iconName === 'Gauge') {
      return <Gauge className="w-6 h-6 text-teal-400" />;
    } else if (iconName === 'TypeScript') {
      return <TypescriptIcon className="w-6 h-6 text-blue-500" />;
    } else if (iconName === 'Nextjs') {
      return <NextjsIcon className="w-6 h-6 text-slate-800 dark:text-slate-100" />;
    } else {
      return <Code2 className="w-6 h-6 text-brand-400" />;
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading className="bg-red-500"
          badge="Technical Skills"
          title="Skills, Tools & Technologies"
          subtitle="A comprehensive toolkit engineered to build fast, scalable, and delightful web interfaces."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${selectedCategory === cat
                ? 'bg-gradient-to-r from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle Corner Glow */}
              <div
                className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-10 blur-xl group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: skill.color }}
              />

              <div>
                {/* Header: Icon + Experience Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-300/40 dark:border-slate-700/40">
                    {skill.experience}
                  </span>
                </div>

                {/* Skill Name & Description */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar & Proficiency */}
              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">Proficiency</span>
                  <span className="font-mono text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
