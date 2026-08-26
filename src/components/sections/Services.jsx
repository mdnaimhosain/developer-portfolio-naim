import React from 'react';
import { 
  Code2, 
  Atom, 
  Smartphone, 
  LayoutDashboard, 
  CheckCircle2, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const Services = () => {
  const { services, experience } = portfolioData;

  const getServiceIcon = (iconName) => {
    if (iconName === 'Code2') {
      return <Code2 className="w-6 h-6 text-brand-400" />;
    } else if (iconName === 'Atom') {
      return <Atom className="w-6 h-6 text-cyan-400" />;
    } else if (iconName === 'Smartphone') {
      return <Smartphone className="w-6 h-6 text-emerald-400" />;
    } else if (iconName === 'LayoutDashboard') {
      return <LayoutDashboard className="w-6 h-6 text-purple-400" />;
    } else {
      return <Sparkles className="w-6 h-6 text-brand-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Services & Experience"
          title="What I Offer & Career Milestones"
          subtitle="Comprehensive frontend engineering services paired with a track record of delivering resilient web applications."
        />

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {getServiceIcon(srv.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  What's Included:
                </h4>
                {srv.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline Section */}
        <div className="glass-card rounded-3xl p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Work Experience & Career Journey
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                My professional timeline building web applications across teams and projects.
              </p>
            </div>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-500 group-hover:scale-125 group-hover:bg-brand-400 transition-all shadow-md shadow-brand-500/40" />

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-500 dark:text-brand-300 bg-brand-500/10 px-2.5 py-1 rounded-lg border border-brand-500/20 w-fit">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-normal flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {exp.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
