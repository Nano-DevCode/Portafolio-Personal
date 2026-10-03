import React from 'react';
import { ArrowRight, Layers, Zap, Container, ShieldCheck, FileText } from 'lucide-react';
import { Github } from '../ui/icons/GithubIcon';
import { Button } from '../ui/Button';

const coreTechBadges = [
  'React',
  'React Native',
  'Vite',
  'Angular',
  'Vue',
  'NestJS',
  'Laravel',
  'Python (IA / YOLO)',
  'Cloudflare (WAF/CDN)',
  'Docker',
  'Nginx',
  'Google Cloud (GCP)',
  'VLANs',
  'Firewalls'
];

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-20 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
            Full-Stack Software & Cloud Infrastructure Engineer
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.1]">
            Software moderno,{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500 bg-clip-text text-transparent">
              cloud escalable
            </span>{' '}
            y redes seguras.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Desarrollo aplicaciones web y móviles (<span className="text-zinc-900 dark:text-zinc-200 font-semibold">React, Vue, React Native</span>), 
            diseño servicios backend (<span className="text-zinc-900 dark:text-zinc-200 font-semibold">NestJS, Laravel, Python</span>) 
            y configuro infraestructura con <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Docker, Cloudflare y Google Cloud</span>. 
            Enfocado en código limpio, arquitectura sólida y soluciones mantenibles.
          </p>

          {/* Core Tech Quick Pills Bar in Hero */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {coreTechBadges.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
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
              href="/cv.pdf"
              target="_blank"
              download="CV_Manuel_Santiago.pdf"
              variant="secondary"
              size="lg"
              icon={<FileText className="w-4 h-4 text-cyan-500" />}
            >
              Descargar CV
            </Button>
            <Button
              asAnchor
              href="#sobre-mi"
              variant="outline"
              size="lg"
            >
              Sobre Mí
            </Button>
            <Button
              asAnchor
              href="https://github.com/Nano-DevCode"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
              icon={<Github className="w-4 h-4" />}
            >
              GitHub
            </Button>
          </div>

          {/* Engineering Standards & Methodology Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-16 text-left">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-sm hover:border-cyan-500/30 transition-all shadow-xs">
              <Layers className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mb-2" />
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Arquitectura Modular</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Separación clara entre lógica de negocio, servicios de red e interfaz de usuario.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-sm hover:border-emerald-500/30 transition-all shadow-xs">
              <Zap className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mb-2" />
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Rendimiento & UX</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Optimización de renderizado, consumo eficiente de APIs y tiempos de carga rápidos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-sm hover:border-indigo-500/30 transition-all shadow-xs">
              <Container className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mb-2" />
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Cloud & Contenedores</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Contenedores Docker multi-stage, proxies inversos con Nginx y despliegues en la nube.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-sm hover:border-amber-500/30 transition-all shadow-xs">
              <ShieldCheck className="w-5 h-5 text-amber-500 dark:text-amber-400 mb-2" />
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Seguridad & Redes</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Tipado estricto con TypeScript, segmentación de redes con VLANs y reglas de firewall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
