import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />,
  };

  const bgStyles = {
    success: 'border-emerald-500/30 bg-slate-900/95 text-slate-100 shadow-emerald-500/10',
    error: 'border-rose-500/30 bg-slate-900/95 text-slate-100 shadow-rose-500/10',
    info: 'border-cyan-500/30 bg-slate-900/95 text-slate-100 shadow-cyan-500/10',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div
        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          bgStyles[type] || bgStyles.info
        }`}
      >
        {icons[type] || icons.info}
        <p className="text-sm font-medium pr-2">{message}</p>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-white/10"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
