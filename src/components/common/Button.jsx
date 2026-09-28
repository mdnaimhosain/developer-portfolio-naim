import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  target,
  rel,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  download,
  type = 'button',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-semibold rounded-2xl gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:brightness-110 active:scale-[0.98] border border-brand-400/30',
    secondary:
      'bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700/60 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-800 shadow-sm active:scale-[0.98]',
    outline:
      'bg-transparent border border-brand-500/40 hover:border-brand-400 text-brand-400 dark:text-brand-300 hover:bg-brand-500/10 active:scale-[0.98]',
    glass:
      'glass-card hover:bg-white/10 dark:hover:bg-white/5 text-slate-900 dark:text-slate-100 border border-white/20 dark:border-white/10 active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-slate-200/50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 active:scale-[0.98]',
  };

  const baseClasses = `inline-flex items-center justify-center font-sans transition-all duration-300 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed ${
    sizeClasses[size] || sizeClasses.md
  } ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        download={download}
        className={`group ${baseClasses}`}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`group ${baseClasses}`}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
