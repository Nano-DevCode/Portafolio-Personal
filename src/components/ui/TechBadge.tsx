import type { TechTag } from '../../types/project';

const categoryStyles: Record<TechTag['category'], string> = {
  mobile: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20',
  frontend: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20',
  backend: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20',
  database: 'bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20',
  devops: 'bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500/20',
  ai: 'bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20',
};

interface TechBadgeProps {
  tag: TechTag;
  className?: string;
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tag, className = '', size = 'sm' }) => {
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-sm px-3 py-1';

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium border transition-colors ${sizeClasses} ${
        categoryStyles[tag.category] || 'bg-zinc-800 text-zinc-300 border-zinc-700'
      } ${className}`}
    >
      {tag.name}
    </span>
  );
};
