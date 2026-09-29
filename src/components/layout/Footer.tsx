import React from 'react';
import { Heart, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-10 text-xs text-zinc-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span className="text-zinc-700 dark:text-zinc-400 font-medium">Nano-DevCode</span>
          <span>• Portafolio de Ingeniería de Software</span>
        </div>

        <div className="flex items-center gap-1">
          <span>Construido con</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
          <span>usando React, Vite, TypeScript & Tailwind CSS.</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Nano-DevCode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/manuel-eduardo-santiago-feria-a04b5a332/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <span>© {currentYear} Manuel Santiago (Nano-DevCode)</span>
        </div>
      </div>
    </footer>
  );
};
