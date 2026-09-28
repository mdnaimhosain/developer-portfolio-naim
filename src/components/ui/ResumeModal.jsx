import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Sparkles, Briefcase, Code2, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../common/Button';

export const ResumeModal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#22d3ee', '#10b981', '#f59e0b'],
        });
      } catch (err) {
        // Confetti fallback
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
=========================================================
${data.personal.name} - ${data.personal.role}
Email: ${data.personal.email} | Phone: ${data.personal.phone}
Location: ${data.personal.location}
=========================================================

SUMMARY
---------------------------------------------------------
${data.personal.shortBio}

CORE SKILLS
---------------------------------------------------------
${data.skills.map(s => `• ${s.name} (${s.experience}): ${s.description}`).join('\n')}

PROFESSIONAL EXPERIENCE
---------------------------------------------------------
${data.experience.map(exp => `
${exp.role} - ${exp.company} (${exp.period})
Location: ${exp.location}
${exp.description}
Technologies: ${exp.skills.join(', ')}
`).join('\n')}

FEATURED PROJECTS
---------------------------------------------------------
${data.projects.map(p => `
• ${p.title}
  ${p.shortDescription}
  Tech Stack: ${p.tags.join(', ')}
  Demo: ${p.liveDemo} | GitHub: ${p.github}
`).join('\n')}
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data.personal.name.replace(/\s+/g, '_')}_Frontend_Developer_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-3xl shadow-2xl overflow-hidden z-10 my-6">
        {/* Header Actions Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-sm font-bold text-white tracking-wide">
              Curriculum Vitae / Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrint}
              icon={Printer}
              iconPosition="left"
              className="hidden sm:inline-flex bg-slate-800 hover:bg-slate-700 text-white font-medium border-slate-700"
            >
              Print / Save PDF
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={handleDownloadText}
              icon={Download}
              iconPosition="left"
              className="font-medium shadow-md shadow-brand-500/20"
            >
              Download TXT
            </Button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Professional Document Sheet with Clean Black Text */}
        <div className="p-6 sm:p-10 max-h-[calc(85vh-120px)] overflow-y-auto space-y-8 bg-white text-slate-900 font-sans">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  {data.personal.name}
                </h1>
                <p className="text-lg font-bold text-brand-600 mt-1">
                  {data.personal.role} &middot; <span className="text-slate-700 font-semibold">{data.personal.secondaryRole}</span>
                </p>
              </div>

              <div className="space-y-1.5 text-sm text-slate-800 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                  <span className="text-slate-900 font-bold select-all">{data.personal.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-900 font-bold select-all">{data.personal.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="text-slate-800 font-medium">{data.personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 mb-2.5 flex items-center gap-1.5 border-b border-slate-200 pb-1">
              <Sparkles className="w-4 h-4 text-brand-600" />
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-slate-900 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200 font-medium">
              {data.personal.shortBio} {data.about.paragraph1}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 mb-3 flex items-center gap-1.5 border-b border-slate-200 pb-1">
              <Code2 className="w-4 h-4 text-brand-600" />
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="font-black text-brand-700 mb-1">Frontend & UI Technologies:</div>
                <div className="text-slate-900 leading-relaxed font-semibold">React.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3, Responsive Design</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="font-black text-brand-700 mb-1">State & API Architecture:</div>
                <div className="text-slate-900 leading-relaxed font-semibold">Context API, Zustand, Redux Toolkit, RESTful APIs, TanStack Query</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="font-black text-brand-700 mb-1">Tools, Build & Workflow:</div>
                <div className="text-slate-900 leading-relaxed font-semibold">Git, GitHub, Vite, Webpack, PostCSS, Figma to Code, npm / yarn</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="font-black text-brand-700 mb-1">Core Practices & Quality:</div>
                <div className="text-slate-900 leading-relaxed font-semibold">Clean Modular Architecture, Core Web Vitals, Web Accessibility (ARIA), Cross-Browser Testing</div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 mb-3.5 flex items-center gap-1.5 border-b border-slate-200 pb-1">
              <Briefcase className="w-4 h-4 text-brand-600" />
              Work Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="border-l-3 border-brand-600 pl-4 sm:pl-5 space-y-1.5 bg-slate-50 p-4 rounded-r-2xl border-t border-r border-b border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm sm:text-base gap-1">
                    <span className="font-black text-slate-950">{exp.role}</span>
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-brand-700 font-black">
                    {exp.company} <span className="text-slate-400">&bull;</span> <span className="text-slate-700 font-semibold">{exp.location}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-900 leading-relaxed pt-1 font-medium">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white text-slate-800 border border-slate-300 shadow-2xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 mb-3 flex items-center gap-1.5 border-b border-slate-200 pb-1">
              <GraduationCap className="w-4 h-4 text-brand-600" />
              Education & Academic Background
            </h2>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm sm:text-base gap-1">
                <span className="font-black text-slate-950">Diploma in Computer Science & Engineering (CSE)</span>
                <span className="text-xs font-mono font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200 w-fit">
                  Technical Degree
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                Focus on Software Architecture, Web Technologies, Data Structures & Responsive Systems &bull; <span className="text-slate-600">Huaian China</span>
              </p>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 mb-3 flex items-center gap-1.5 border-b border-slate-200 pb-1">
              <Layers className="w-4 h-4 text-brand-600" />
              Key Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.projects.slice(0, 4).map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs text-xs sm:text-sm">
                  <div className="font-black text-slate-950 text-sm sm:text-base">{p.title}</div>
                  <div className="text-slate-800 text-xs sm:text-sm mt-1.5 leading-relaxed font-medium">{p.shortDescription}</div>
                  <div className="text-brand-700 font-mono font-bold text-xs mt-3 flex flex-wrap gap-1">
                    {p.tags.slice(0, 4).map((t, tIdx) => (
                      <span key={tIdx} className="bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
