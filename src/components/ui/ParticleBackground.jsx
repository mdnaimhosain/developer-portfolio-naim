import React from 'react';

export const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Left Indigo Glow Orb */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Top Right Cyan Orb */}
      <div className="absolute top-20 -right-40 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px] animate-float" />
      
      {/* Center Subtle Violet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Bottom Emerald/Cyan Ambient Glow */}
      <div className="absolute -bottom-40 left-1/3 w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-[120px] animate-float-slow" />

      {/* Subtle Matrix Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
};
