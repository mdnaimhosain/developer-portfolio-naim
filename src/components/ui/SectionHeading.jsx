import React from 'react';
import { Sparkles } from 'lucide-react';

export const SectionHeading = ({ badge, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 dark:border-brand-400/20 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
