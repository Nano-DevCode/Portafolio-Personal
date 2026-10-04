import React from 'react';
import {
  User,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Cpu,
  Terminal,
  ExternalLink,
  Code2,
  CheckCircle2,
  Cloud
} from 'lucide-react';
import { Button } from '../ui/Button';
import { CvDownloadDropdown } from '../ui/CvDownloadDropdown';

interface TimelineMilestone {
  period: string;
  title: string;
  institution: string;
  description: string;
  tags: string[];
}

const milestones: TimelineMilestone[] = [
  {
    period: '2025 — Presente',
    title: 'Lead Backend Developer & Arquitectura de Software',
    institution: 'Instituto Tecnológico de Oaxaca (ITO / TecNM)',
    description:
      'Diseño y desarrollo de la arquitectura del backend para el sistema institucional de Service Desk y Control de Activos TI del ITO. Implementado con NestJS 11, PostgreSQL 17, Redis 8, almacenamiento en MinIO S3, contenedores Docker y más de 900 pruebas unitarias con Jest.',
    tags: ['NestJS 11', 'PostgreSQL 17', 'Redis 8', 'Docker', 'Jest']
  },
  {
    period: '2025',
    title: 'Desarrollo Full-Stack, Edge AI & Soluciones Digitales',
    institution: 'Nano-DevCode • Proyectos Independientes',
    description:
      'Desarrollo de proyectos completos de software: terminal de punto de venta con detección de productos mediante visión artificial (YOLOv8 + ONNX), sistema CMS reactivo en Laravel 12 con pruebas automatizadas (Pest PHP), tienda web en Vue 3 y aplicación móvil con React Native.',
    tags: ['Edge AI', 'Vue 3', 'Laravel 12', 'React Native', 'Clean Code']
  },
  {
    period: '2024 — 2025',
    title: 'Especialización en Nube, Cloudflare & Ciberseguridad de Redes',
    institution: 'Google Cloud (Credly) • Udemy • INFOTEC',
    description:
      'Certificaciones en fundamentos de nube, seguridad e IA en Google Cloud Platform. Práctica continua en configuración de Cloudflare (WAF, DNS y CDN), servidores con Nginx, contenedores Docker y segmentación de redes locales con VLANs y políticas de firewall.',
    tags: ['Google Cloud', 'Cloudflare WAF', 'Docker', 'VLANs', 'NetSec']
  },
  {
    period: '2021 — 2026',
    title: 'Ingeniería en Sistemas Computacionales',
    institution: 'Tecnológico Nacional de México (TecNM)',
    description:
      'Formación universitaria con bases sólidas en estructuras de datos, diseño de algoritmos, redes de computadoras, bases de datos relacionales y principios de ingeniería de software.',
    tags: ['Ingeniería de Software', 'Bases de Datos', 'Redes', 'Sistemas Distribuidos']
  }
];

const coreStrengths = [
  {
    icon: <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    title: 'Arquitectura & Tipado Estricto',
    description:
      'Código estructurado y mantenible. Tipado riguroso con TypeScript sin recurrir a "any", interfaces bien definidas y separación clara de responsabilidades.'
  },
  {
    icon: <Cloud className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    title: 'Nube, Edge & Servidores',
    description:
      'Despliegues en contenedores Docker multi-stage, configuración de DNS, CDN y reglas de WAF en Cloudflare, y servidores web seguros con Nginx.'
  },
  {
    icon: <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    title: 'Visión Artificial Aplicada',
    description:
      'Integración de modelos de visión por computadora (YOLOv8 + ONNX) acelerados por GPU para tareas prácticas como identificación de productos y conteo en tiempo real.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: 'Calidad & Pruebas Automatizadas',
    description:
      'Pruebas automatizadas (Jest, Pest PHP), validación exhaustiva de datos de entrada en frontend y backend, y control de errores resiliente.'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="py-24 relative border-t border-zinc-200 dark:border-zinc-900 bg-white/60 dark:bg-zinc-950/60 transition-colors overflow-hidden"
    >
      {/* Fondo ambiental */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Perfil Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Sobre Mí
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Ingeniero de software enfocado en construir sistemas confiables, desde la interfaz de usuario hasta la infraestructura y bases de datos que los respaldan.
          </p>
        </div>

        {/* Grid Principal: Biografía & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Columna Izquierda: Historia, Filosofía & CV (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/60 p-7 sm:p-8 backdrop-blur-sm shadow-xs">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Manuel Eduardo Santiago Feria
                  </h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    @Nano-DevCode • México
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  Estudié Ingeniería en Sistemas Computacionales en el{' '}
                  <strong className="text-zinc-900 dark:text-white font-semibold">
                    Tecnológico Nacional de México (TecNM)
                  </strong>
                  . Me enfoco en diseñar software bien estructurado, mantenible y seguro, cuidando tanto la experiencia del usuario como la estabilidad del servidor.
                </p>
                <p>
                  He desarrollado proyectos que abarcan aplicaciones web y móviles interactivas, backends para gestión institucional, modelos de visión artificial para puntos de venta y configuraciones de infraestructura con{' '}
                  <strong className="text-zinc-900 dark:text-white font-semibold">
                    Docker, Nginx, Cloudflare y Google Cloud
                  </strong>
                  .
                </p>
                <p>
                  Priorizo las buenas prácticas de ingeniería: tipado estricto con TypeScript, pruebas automatizadas para prevenir regresiones, arquitectura modular y atención al rendimiento en cada capa del sistema.
                </p>
              </div>

              {/* Botón de CV y Enlaces Rápidos */}
              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-3">
                <CvDownloadDropdown
                  variant="primary"
                  size="md"
                  label="Descargar CV (PDF)"
                />
                <Button
                  asAnchor
                  href="https://www.linkedin.com/in/manuel-eduardo-santiago-feria-a04b5a332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Tarjeta de Formación Académica */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent p-5">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    Educación Universitaria
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                    Ingeniería en Sistemas Computacionales • TecNM
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Residencia Concluida • Titulación en Trámite
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Línea de Tiempo / Trayectoria (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                <span>Trayectoria & Hitos Clave</span>
              </h3>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Evolución Profesional
              </span>
            </div>

            <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 sm:pl-8 space-y-8">
              {milestones.map((item, idx) => (
                <div key={item.period} className="relative group">
                  {/* Punto del timeline */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                      idx === 0
                        ? 'bg-cyan-500 border-white dark:border-zinc-950 ring-4 ring-cyan-500/20'
                        : 'bg-zinc-300 dark:bg-zinc-700 border-white dark:border-zinc-950'
                    }`}
                  />

                  {/* Tarjeta de hito */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 hover:border-cyan-500/40 transition-all duration-300 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        {item.period}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        {item.institution}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-zinc-900 dark:text-white mt-1">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grid de 4 Pilares de Calidad */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {coreStrengths.map((strength) => (
                <div
                  key={strength.title}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs"
                >
                  <div className="p-2 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 mb-2.5">
                    {strength.icon}
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
