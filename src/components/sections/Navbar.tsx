import React, { useState } from 'react';
import { Terminal, Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { Github } from '../ui/icons/GithubIcon';
import { useTheme } from '../../context/theme-context';
import { CvDownloadDropdown } from '../ui/CvDownloadDropdown';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#certificaciones', label: 'Certificaciones' },
    { href: '#contacto', label: 'Contacto' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-zinc-900 dark:text-white text-base tracking-tight block">
              Nano-DevCode
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono -mt-1 block">
              Backend &amp; Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA, Theme Toggle, CV & GitHub */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Badge Disponible */}
          <div className="hidden lg:inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Disponible
          </div>

          {/* Botón Descargar CV con Dropdown (1 Pág vs 2 Págs) */}
          <div className="hidden sm:block">
            <CvDownloadDropdown
              size="sm"
              variant="outline"
              label="CV"
            />
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="p-2 rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600 -rotate-12 transition-transform" />
            )}
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com/Nano-DevCode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors"
            aria-label="Perfil de GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="md:hidden p-2 rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Disponible para proyectos
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/cv-corto.pdf"
                target="_blank"
                download="CV_Manuel_Santiago_1Pag.pdf"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 transition-colors shadow-xs"
              >
                <FileText className="w-3 h-3 text-cyan-500" />
                <span>CV (1 Pág)</span>
              </a>
              <a
                href="/cv-extendido.pdf"
                target="_blank"
                download="CV_Manuel_Santiago_Completo.pdf"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded-xl bg-cyan-500 text-zinc-950 hover:bg-cyan-400 transition-colors shadow-xs"
              >
                <FileText className="w-3 h-3" />
                <span>CV (2 Págs)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
