import React from 'react';
import { Terminal } from 'lucide-react';
import { Github } from '../ui/icons/GithubIcon';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-white text-base tracking-tight block">
              Nano-DevCode
            </span>
            <span className="text-[11px] text-zinc-400 font-mono -mt-1 block">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#inicio" className="hover:text-cyan-400 transition-colors">
            Inicio
          </a>
          <a href="#proyectos" className="hover:text-cyan-400 transition-colors">
            Proyectos
          </a>
          <a href="#arquitectura" className="hover:text-cyan-400 transition-colors">
            Arquitectura
          </a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">
            Contacto
          </a>
        </nav>

        {/* Right CTA / GitHub */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible
          </div>
          <a
            href="https://github.com/Nano-DevCode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors"
            aria-label="Perfil de GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};
