import React from 'react';
import { Heart, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-10 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-zinc-400 font-medium">Nano-DevCode</span>
          <span>• Portafolio de Ingeniería de Software</span>
        </div>

        <div className="flex items-center gap-1">
          <span>Diseñado y construido con</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
          <span>usando React, Vite, TypeScript & Tailwind CSS.</span>
        </div>

        <div>
          <span>© {currentYear} Nano-DevCode. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
