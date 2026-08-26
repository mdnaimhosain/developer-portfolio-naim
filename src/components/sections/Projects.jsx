import React, { useState } from 'react';
import { Eye, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../common/Button';
import { ProjectModal } from '../ui/ProjectModal';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const { projects } = portfolioData;

  const categories = ['All', 'React', 'E-Commerce', 'UI/UX & Dashboards'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Works"
          title="Curated Projects & Case Studies"
          subtitle="Explore a selection of responsive web applications, interactive dashboards, and e-commerce interfaces built with React & Tailwind."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Project Card Media & Overlay */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-600 text-white shadow-md">
                    {project.category}
                  </span>
                  {project.tag && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {project.tag}
                    </span>
                  )}
                </div>

                {/* Quick View Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-extrabold shadow-2xl scale-95 group-hover:scale-100 transition-all">
                    <Eye className="w-4 h-4 text-brand-600" />
                    Quick View Details
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Quick View Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 group-hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    Quick View Details
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-850 px-2.5 py-1 rounded-lg">
                    Case Study
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
