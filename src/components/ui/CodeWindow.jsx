import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const CodeWindow = () => {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);
  const [counter, setCounter] = useState(42);
  const [liked, setLiked] = useState(false);

  const codeString = `import React, { useState } from 'react';

// 🚀 Crafting next-generation web applications
export const FrontendDeveloper = () => {
  const [status, setStatus] = useState('Building awesome UIs');
  
  const developer = {
    name: '${portfolioData.personal.name}',
    focus: 'React.js & Modern Web Architecture',
    skills: ['React', 'Tailwind CSS', 'JavaScript ES6+'],
    passion: 'Pixel-perfect, accessible & blazing fast apps',
    readyForHire: true
  };

  return (
    <div className="portfolio-ready">
      <h1>Hello, World! ✨</h1>
      <p>Turning complex ideas into smooth user experiences.</p>
    </div>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Floating Accent Badges */}
      <div className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-brand-500/30 text-xs font-semibold text-brand-300 shadow-xl backdrop-blur-md animate-float">
        <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
        <span>React.js Specialist</span>
      </div>

      <div className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-xl backdrop-blur-md animate-float-slow">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>100% Clean Architecture</span>
      </div>

      {/* Main Glassmorphic Terminal Card */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 dark:border-white/10 bg-slate-900/90 backdrop-blur-2xl shadow-2xl shadow-brand-500/10">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-400" />
              Developer.jsx
            </span>
          </div>

          {/* Toggle Code / Live Demo Tab */}
          <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-1 border border-slate-800">
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-all ${
                activeTab === 'code'
                  ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Code
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-all ${
                activeTab === 'preview'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-2.5 h-2.5" />
              Live Preview
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-slate-200 p-1.5 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Terminal Content */}
        {activeTab === 'code' ? (
          <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto selection:bg-brand-500/30">
            <div className="flex">
              <div className="select-none text-slate-600 pr-4 text-right">
                {Array.from({ length: 16 }, (_, i) => (
                  <div key={i + 1}>{i + 1}</div>
                ))}
              </div>
              <div className="text-slate-200 space-y-1">
                <div>
                  <span className="text-purple-400">import</span> React, {'{'} useState {'}'}{' '}
                  <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;
                </div>
                <div className="text-slate-500">// 🚀 Crafting modern web experiences</div>
                <div>
                  <span className="text-purple-400">export const</span> <span className="text-yellow-300">FrontendDeveloper</span> = () =&gt; {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">const</span> [status, setStatus] = <span className="text-blue-400">useState</span>(
                  <span className="text-emerald-300">'Building awesome UIs'</span>);
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">const</span> developer = {'{'}
                </div>
                <div className="pl-8">
                  name: <span className="text-emerald-300">'{portfolioData.personal.name}'</span>,
                </div>
                <div className="pl-8">
                  focus: <span className="text-emerald-300">'React.js & Modern Web'</span>,
                </div>
                <div className="pl-8">
                  skills: [<span className="text-cyan-300">'React'</span>, <span className="text-cyan-300">'Tailwind'</span>, <span className="text-cyan-300">'JavaScript'</span>],
                </div>
                <div className="pl-8">
                  readyForHire: <span className="text-rose-400">true</span>
                </div>
                <div className="pl-4">{'}'};</div>
                <div className="pl-4">
                  <span className="text-purple-400">return</span> (
                </div>
                <div className="pl-8 text-cyan-200">
                  &lt;<span className="text-rose-400">div</span> <span className="text-brand-300">className</span>=<span className="text-emerald-300">"developer-badge"</span>&gt;
                </div>
                <div className="pl-12 text-slate-100">
                  &lt;<span className="text-rose-400">h1</span>&gt;Hello, World! ✨&lt;/<span className="text-rose-400">h1</span>&gt;
                </div>
                <div className="pl-8 text-cyan-200">&lt;/<span className="text-rose-400">div</span>&gt;</div>
                <div className="pl-4">);</div>
                <div>{'}'};</div>
              </div>
            </div>
          </div>
        ) : (
          /* Live Interactive Widget Preview */
          <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 min-h-[300px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-400 p-[1.5px] shadow-lg shadow-brand-500/20 overflow-hidden shrink-0">
                    <img
                      src={portfolioData.personal.avatar || "/profile.jpg"}
                      alt={portfolioData.personal.name}
                      className="w-full h-full object-cover object-top rounded-[9px]"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{portfolioData.personal.name}</h4>
                    <p className="text-xs text-brand-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      React & Tailwind Specialist
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live Component
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-xs text-slate-100 font-sans leading-relaxed">
                  "Writing maintainable frontend applications with clean React hooks and modern Tailwind design systems."
                </p>
              </div>

              {/* Interactive Micro Actions */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setCounter((prev) => prev + 1)}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Clicks: {counter}</span>
                </button>

                <button
                  onClick={() => setLiked((prev) => !prev)}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                    liked
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                      : 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-200'
                  }`}
                >
                  <span>{liked ? '❤️ Starred!' : '⭐ Star Portfolio'}</span>
                </button>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300 font-mono">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-400" />
                Vite + React 19 + Tailwind
              </span>
              <span className="text-emerald-400">● 60 FPS</span>
            </div>
          </div>
        )}

        {/* Terminal Bottom Status Bar */}
        <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-brand-400">main*</span>
            <span className="hidden sm:inline">UTF-8</span>
            <span>JavaScript React</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300">Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
