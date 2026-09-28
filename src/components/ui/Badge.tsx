import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  primary: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  secondary: 'bg-zinc-800 text-zinc-300 border-zinc-700',
  outline: 'bg-transparent text-zinc-400 border-zinc-800',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  className = '',
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
