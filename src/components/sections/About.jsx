import React from 'react';
import { Code, Zap, Layers, Sparkles, MapPin, GraduationCap, Briefcase, CheckCircle, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import profileImg from '../../assets/profile.jpg';

export const About = () => {
  const { about, personal } = portfolioData;

  const getIcon = (iconName) => {
    if (iconName === 'Code') {
      return <Code className="w-5 h-5 text-brand-400" />;
    } else if (iconName === 'Zap') {
      return <Zap className="w-5 h-5 text-amber-400" />;
    } else if (iconName === 'Layers') {
      return <Layers className="w-5 h-5 text-cyan-400" />;
    } else if (iconName === 'Sparkles') {
      return <Sparkles className="w-5 h-5 text-emerald-400" />;
    } else {
      return <Sparkles className="w-5 h-5 text-brand-400" />;
    }
  };

  const coreTech = [
    { name: 'React.js', desc: 'Component Architecture & Hooks', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
    { name: 'Next.js', desc: 'App Router, SSR & Server Components', color: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
    { name: 'TypeScript', desc: 'Type-Safe Modular Architecture', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
    { name: 'Tailwind CSS', desc: 'Modern Utility Styling & Themes', color: 'bg-sky-500/10 text-sky-400 border-sky-500/30' },
    { name: 'JavaScript (ES6+)', desc: 'Modern Async, APIs & Logic', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
    { name: 'HTML5 & CSS3', desc: 'Semantic, Accessible, Responsive', color: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
    { name: 'Git & GitHub', desc: 'Version Control & Workflows', color: 'bg-rose-500/10 text-rose-400 border-rose-500/30' },
    { name: 'Responsive UI', desc: 'Mobile-First Perfection', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Crafting Engaging Digital Experiences"
          subtitle="A deeper look into my frontend development background, technical philosophy, and passion for the web."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Clean Profile Card & Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile Glass Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Avatar + Main Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-brand-500/30 overflow-hidden shrink-0">
                    <img
                      src={personal.avatar || profileImg}
                      alt={personal.name}
                      className="w-full h-full object-cover object-top rounded-[14px]"
                      onError={(e) => {
                        e.currentTarget.src = profileImg;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {personal.name}
                  </h3>
                  <p className="text-sm text-brand-500 dark:text-brand-400 font-medium">
                    {personal.role}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {personal.location}
                  </p>
                </div>
              </div>

              {/* Quick Facts List */}
              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                {about.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>React.js & Tailwind Certified</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">2026 Ready</span>
              </div>
            </div>

            {/* Core Tech Quick Badges */}
            <div className="glass-card rounded-3xl p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Tech Stack Mentioned
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreTech.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border text-xs font-medium ${item.color} flex flex-col justify-center`}
                  >
                    <span className="font-bold">{item.name}</span>
                    <span className="text-[10px] opacity-80 mt-0.5">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Story & 4 Philosophy Pillars */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story Paragraphs */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                {about.headline}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {about.paragraph1}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {about.paragraph2}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.highlights.map((pillar, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-5 space-y-2 relative overflow-hidden group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
