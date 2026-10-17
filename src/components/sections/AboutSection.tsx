import React from 'react';
import {
  User,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Code2,
  CheckCircle2,
  Database,
  Container,
  Briefcase,
  Layers,
  MapPin
} from 'lucide-react';
import { Button } from '../ui/Button';
import { CvDownloadDropdown } from '../ui/CvDownloadDropdown';

interface TimelineMilestone {
  period: string;
  title: string;
  institution: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
}

const milestones: TimelineMilestone[] = [
  {
    period: '2025 — 2026',
    title: 'Backend Developer — Residencia Profesional',
    institution: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
    icon: <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    description:
      'Diseño y desarrollo de la arquitectura backend para el sistema de soporte técnico e inventario tecnológico del ITO. Implementado con NestJS, PostgreSQL, Redis, MinIO S3 y Docker, respaldado por una suite de 998 pruebas automatizadas organizadas en 143 suites (Jest).',
    tags: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Jest (998 pruebas / 143 suites)']
  },
  {
    period: '2024 — Presente',
    title: 'Desarrollador Full-Stack — Proyectos de Software',
    institution: 'Nano-DevCode • Proyectos Independientes',
    icon: <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    description:
      'Desarrollo de soluciones de software de código abierto: punto de venta asistido por visión artificial (YOLOv8 + ONNX DirectML; 97.1% mAP@50 en dataset propio), gestor de contenidos en Laravel con 44 pruebas automatizadas (Pest), ecommerce con Vue 3 / Pinia y app móvil en React Native.',
    tags: ['Edge AI / YOLOv8', 'Laravel', 'Vue 3', 'React Native', 'Pest PHP']
  },
  {
    period: '2024 — Presente',
    title: 'Especialización en Nube, Seguridad & DevOps',
    institution: 'Google Cloud (Credly) • Udemy • INFOTEC',
    icon: <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    description:
      '14 acreditaciones oficiales de Google Cloud en fundamentos de computación, redes, infraestructura con Terraform, seguridad y modelos GenAI. Formación continua en APIs backend modulares, tipado estricto con TypeScript y contenedores Docker.',
    tags: ['Google Cloud', 'Terraform', 'Docker', 'Linux', 'Testing']
  },
  {
    period: '2021 — 2025',
    title: 'Ingeniería en Sistemas Computacionales',
    institution: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
    icon: <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    description:
      'Formación académica universitaria con bases en ingeniería de software, arquitectura de sistemas, diseño y normalización de bases de datos relacionales, estructuras de datos, programación orientada a objetos y redes de computadoras.',
    tags: ['Ingeniería de Software', 'Bases de Datos', 'Estructuras de Datos', 'Redes']
  }
];

const coreStrengths = [
  {
    icon: <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    title: 'Arquitectura Backend Modular',
    badge: 'NestJS · Laravel · Node',
    description:
      'Módulos desacoplados con inyección de dependencias, tipado estricto de extremo a extremo con TypeScript, validación de DTOs y estructuración ordenada de servicios.'
  },
  {
    icon: <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: 'Bases de Datos & Consistencia',
    badge: 'PostgreSQL · Redis · ACID',
    description:
      'Transacciones explícitas con TypeORM QueryRunner en operaciones críticas, mecanismos de concurrencia optimista para evitar conflictos y caché en memoria con Redis.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    title: 'Testing Automatizado & Calidad',
    badge: '1,000+ Pruebas Verificadas',
    description:
      '998 pruebas automatizadas organizadas en 143 suites con Jest y 44 pruebas con 116 aserciones en Pest PHP. Código comprobado para evitar regresiones en despliegues.'
  },
  {
    icon: <Container className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    title: 'Contenedores & Despliegue',
    badge: 'Docker · Nginx · Linux',
    description:
      'Empaquetado multi-stage con Docker (imágenes Distroless y ejecución non-root para seguridad), proxy inverso con Nginx y despliegues estables en servidores Linux.'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="py-24 relative border-t border-zinc-200 dark:border-zinc-900 bg-white/60 dark:bg-zinc-950/60 transition-colors overflow-hidden scroll-mt-12"
    >
      {/* Fondo ambiental */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Perfil Profesional & Trayectoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Sobre Mí
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Egresado de Ingeniería en Sistemas Computacionales enfocado en Backend y Full-Stack. Construyo software funcional con APIs REST, bases de datos relacionales, pruebas automatizadas y despliegue con Docker.
          </p>
        </div>

        {/* Grid Principal: Biografía + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Tarjeta de Perfil & Educación (5 columnas) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tarjeta de Presentación */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/70 p-7 sm:p-8 backdrop-blur-sm shadow-xs transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700">
              {/* Badge de Disponibilidad */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponible para contratación • 100% Remoto / Presencial en Oaxaca</span>
              </div>

              {/* Nombre y Cargo */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 shrink-0">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">
                    Manuel Eduardo Santiago Feria
                  </h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" /> @Nano-DevCode • Oaxaca, México
                  </span>
                </div>
              </div>

              {/* Bio redactada para reclutadores */}
              <div className="space-y-3.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 pt-5">
                <p>
                  Egresado de Ingeniería en Sistemas Computacionales por el{' '}
                  <strong className="text-zinc-900 dark:text-white font-semibold">
                    Instituto Tecnológico de Oaxaca (TecNM / ITO)
                  </strong>
                  , con residencia profesional concluida y titulación en trámite.
                </p>
                <p>
                  Cuento con experiencia comprobable desarrollando sistemas web institucionales y proyectos independientes, especializándome en backend con{' '}
                  <strong className="text-zinc-900 dark:text-white font-semibold">
                    NestJS, Node.js y Laravel
                  </strong>
                  , junto a interfaces reactivas en <strong className="text-zinc-900 dark:text-white font-semibold">React y Vue 3</strong>.
                </p>
                <p>
                  Mi forma de trabajo prioriza la estabilidad: diseño bases de datos relacionales con transacciones explícitas, aplico tipado estricto con TypeScript, escribo pruebas automatizadas y despliego servicios mediante contenedores Docker.
                </p>
              </div>

              {/* Mini métricas comprobables */}
              <div className="grid grid-cols-2 gap-2.5 pt-5 mt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="block text-base font-bold text-cyan-600 dark:text-cyan-400 font-mono">2025 — 2026</span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Residencia Profesional ITO</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="block text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">1,000+</span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Pruebas Automatizadas</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="block text-base font-bold text-indigo-600 dark:text-indigo-400 font-mono">14</span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Insignias Google Cloud</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="block text-base font-bold text-amber-600 dark:text-amber-400 font-mono">2021 — 2025</span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Ingeniería TecNM / ITO</span>
                </div>
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

            {/* Tarjeta de Educación Universitaria */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/50 p-5 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      Ingeniería en Sistemas Computacionales
                    </h4>
                    <span className="text-[11px] font-mono font-semibold text-zinc-500 dark:text-zinc-400">
                      2021 — 2025
                    </span>
                  </div>
                  <p className="text-xs text-cyan-700 dark:text-cyan-400 font-medium mt-0.5">
                    Instituto Tecnológico de Oaxaca (TecNM / ITO)
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Formación universitaria en arquitectura de software, bases de datos relacionales, estructuras de datos, POO y redes.
                  </p>
                  <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Egresado • Titulación en trámite
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Inglés: <strong>B1/B2</strong> (Documentación técnica)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Trayectoria & Experiencia Clave (7 columnas) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                <span>Trayectoria & Hitos Clave</span>
              </h3>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Experiencia Verificable
              </span>
            </div>

            <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 sm:pl-8 space-y-7">
              {milestones.map((item, idx) => (
                <div key={item.period} className="relative group">
                  {/* Punto del timeline con ícono */}
                  <div
                    className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs ${
                      idx === 0
                        ? 'bg-cyan-500 text-zinc-950 border-white dark:border-zinc-900 ring-4 ring-cyan-500/20'
                        : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700'
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Tarjeta del hito */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
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
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección Inferior: 4 Pilares de Calidad de Software */}
        <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Criterio Profesional
            </span>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">
              Pilares de Calidad & Prácticas de Ingeniería
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Principios que aplico en cada repositorio para garantizar código mantenible, confiable y listo para integrarse en equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreStrengths.map((strength) => (
              <div
                key={strength.title}
                className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700">
                      {strength.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                      {strength.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
