import React from 'react';
import { Mail, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { Github } from '../ui/icons/GithubIcon';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 border-t border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-900/40 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Subtle accent light */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-medium mb-4">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Colaboración & Desarrollo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Construimos el siguiente gran proyecto?
          </h2>

          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Siempre dispuesto a conversar sobre arquitectura frontend, desarrollo móvil nativo con React Native
            u oportunidades de colaboración en software escalable.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asAnchor
              href="https://github.com/Nano-DevCode"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<Github className="w-4 h-4" />}
            >
              Conectar en GitHub
            </Button>
            <Button
              asAnchor
              href="mailto:contact@nanodev.com"
              variant="secondary"
              size="lg"
              icon={<Mail className="w-4 h-4" />}
            >
              Enviar Mensaje
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a
              href="https://github.com/Nano-DevCode/movie-app-react-native"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors"
            >
              Ver Repo de Movie App <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-zinc-600">•</span>
            <span>React 19 + TypeScript + Tailwind CSS</span>
            <span className="text-zinc-600">•</span>
            <span>Desplegable en Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
};
