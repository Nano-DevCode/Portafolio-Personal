import React, { useState, useRef, useEffect } from 'react';
import { FileText, ChevronDown, Download, Check, Sparkles } from 'lucide-react';

interface CvDownloadDropdownProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  label?: string;
}

export const CvDownloadDropdown: React.FC<CvDownloadDropdownProps> = ({
  size = 'md',
  variant = 'secondary',
  className = '',
  label = 'Descargar CV'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded-xl gap-1.5',
    md: 'text-sm px-4 py-2 rounded-xl gap-2',
    lg: 'text-base px-5 py-2.5 rounded-xl gap-2.5'
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/20',
    secondary:
      'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-100 dark:border-zinc-700',
    outline:
      'bg-transparent hover:bg-zinc-100 text-zinc-800 border border-zinc-300 dark:hover:bg-zinc-800/80 dark:text-zinc-200 dark:border-zinc-700 hover:border-zinc-400'
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 cursor-pointer active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FileText className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-cyan-500 shrink-0`} />
        <span>{label}</span>
        <ChevronDown
          className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-cyan-500/5 dark:shadow-2xl dark:shadow-black/70 py-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-3.5 pb-2 mb-1.5 border-b border-zinc-100 dark:border-zinc-800/80">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Selecciona una versión
            </span>
          </div>

          {/* Opción 1: Versión Corta (1 Página) */}
          <a
            href="/cv-corto.pdf"
            target="_blank"
            download="CV_Manuel_Santiago_1Pag.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-start gap-3 px-3.5 py-2.5 mx-1.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors group text-left"
            role="menuitem"
          >
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform mt-0.5 shrink-0">
              <Download className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1.5">
                <span className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  CV Resumido
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
                  1 Página
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                Ideal para lectura rápida de reclutadores y procesos con filtros ATS.
              </p>
            </div>
          </a>

          {/* Opción 2: Versión Completa (2 Páginas) */}
          <a
            href="/cv-extendido.pdf"
            target="_blank"
            download="CV_Manuel_Santiago_Completo.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-start gap-3 px-3.5 py-2.5 mx-1.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors group text-left mt-1"
            role="menuitem"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform mt-0.5 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1.5">
                <span className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  CV Extendido
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-500/20">
                  2 Páginas
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                Incluye arquitectura profunda, Cloudflare R2, MinIO S3 y todos los proyectos.
              </p>
            </div>
          </a>

          <div className="mt-2 pt-2 px-3.5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
            <span>Formato PDF optimizado</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <Check className="w-3 h-3" /> Verificado 2026
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
