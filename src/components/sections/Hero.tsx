import React from 'react';
import { ArrowRight, Code2, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import { Github } from '../ui/icons/GithubIcon';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-20 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Frontend & Mobile Software Engineer
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Arquitectura limpia,{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              código desacoplado
            </span>{' '}
            y alto rendimiento.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Especializado en diseñar e implementar aplicaciones web y móviles con{' '}
            <span className="text-zinc-200 font-medium">React, React Native, TypeScript y Tailwind CSS</span>.
            Enfoque en escalabilidad, tipado estricto y experiencia de usuario fluida.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              asAnchor
              href="#proyectos"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explorar Proyectos
            </Button>
            <Button
              asAnchor
              href="https://github.com/Nano-DevCode"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<Github className="w-4 h-4" />}
            >
              GitHub Perfil
            </Button>
          </div>

          {/* Engineering Value Proposition Grid */}
          <div id="arquitectura" className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 text-left">
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
              <Code2 className="w-5 h-5 text-cyan-400 mb-2" />
              <h2 className="text-sm font-semibold text-zinc-200">Tipado Estricto</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Modelos de dominio claros sin uso de <code className="text-cyan-400">any</code>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
              <Smartphone className="w-5 h-5 text-indigo-400 mb-2" />
              <h2 className="text-sm font-semibold text-zinc-200">Mobile First</h2>
              <p className="text-xs text-zinc-400 mt-1">
                React Native y Expo con 60fps constantes en iOS y Android.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
              <Cpu className="w-5 h-5 text-emerald-400 mb-2" />
              <h2 className="text-sm font-semibold text-zinc-200">Modularidad</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Data y UI desacopladas para máxima reutilización y testabilidad.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-amber-400 mb-2" />
              <h2 className="text-sm font-semibold text-zinc-200">Diseño Defensivo</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Fallbacks, spinners y resiliencia ante errores de red o assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
