import React from 'react';
import {
  Server,
  Database,
  Code2,
  Container,
  Sparkles
} from 'lucide-react';

interface SkillItem {
  name: string;
  level?: string;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  badge: string;
  icon: React.ReactNode;
  accentColor: string;
  borderColor: string;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend & APIs',
    badge: 'Servicios & Arquitectura',
    icon: <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    accentColor: 'from-emerald-500/10 via-transparent to-transparent',
    borderColor: 'border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-500/40',
    description:
      'Diseño de APIs RESTful modulares, servicios en tiempo real y lógica de negocio desacoplada con tipado estricto.',
    skills: [
      { name: 'NestJS', highlight: true },
      { name: 'Node.js & Express', highlight: true },
      { name: 'Laravel (PHP)', highlight: true },
      { name: 'APIs RESTful', highlight: true },
      { name: 'WebSockets (Socket.io)', highlight: true },
      { name: 'TypeORM & Eloquent' },
      { name: 'Autenticación (JWT & RBAC)' },
      { name: 'Python (IA & Computer Vision)' },
      { name: 'Arquitectura backend modular' }
    ]
  },
  {
    title: 'Bases de Datos & Caché',
    badge: 'Persistencia & Caching',
    icon: <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    accentColor: 'from-cyan-500/10 via-transparent to-transparent',
    borderColor: 'border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-500/40',
    description:
      'Modelado relacional, transacciones atómicas seguras, optimización de consultas e indexación en memoria.',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'Full-Text Search (tsvector & GIN)', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'Redis (Caché & Rate Limiting)', highlight: true },
      { name: 'Transacciones ACID (QueryRunner)' },
      { name: 'Concurrencia Optimista (@VersionColumn)' },
      { name: 'SQLite (Pruebas en Memoria)' }
    ]
  },
  {
    title: 'Frontend & Mobile',
    badge: 'UI & Reactividad',
    icon: <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    accentColor: 'from-indigo-500/10 via-transparent to-transparent',
    borderColor: 'border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/40',
    description:
      'Interfaces de usuario reactivas, manejo eficiente del estado cliente y aplicaciones móviles multiplataforma.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Vue 3 (Composition API & Pinia)', highlight: true },
      { name: 'React Native & Expo', highlight: true },
      { name: 'TanStack Query', highlight: true },
      { name: 'Zustand & VueUse' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' }
    ]
  },
  {
    title: 'Testing, DevOps & Cloud',
    badge: 'Calidad & Despliegue',
    icon: <Container className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    accentColor: 'from-amber-500/10 via-transparent to-transparent',
    borderColor: 'border-amber-200 dark:border-amber-500/20 hover:border-amber-400 dark:hover:border-amber-500/40',
    description:
      'Pruebas automatizadas continuas, empaquetado seguro en contenedores, proxies inversos y almacenamiento en la nube.',
    skills: [
      { name: 'Jest (998 pruebas / 143 suites)', highlight: true },
      { name: 'Pest (44 pruebas / 116 aserciones)', highlight: true },
      { name: 'Docker (Multi-stage / Distroless)', highlight: true },
      { name: 'Nginx (Proxy Inverso & SSL)', highlight: true },
      { name: 'Linux', highlight: true },
      { name: 'Git & GitHub', highlight: true },
      { name: 'Google Cloud (GCP)', highlight: true },
      { name: 'Almacenamiento S3 (MinIO / R2)' }
    ]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 relative border-t border-zinc-200 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stack Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Habilidades Técnicas
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Tecnologías y herramientas aplicadas directamente en desarrollo backend, bases de datos relacionales, interfaces reactivas y despliegue contenerizado.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl border bg-white dark:bg-zinc-900/60 bg-gradient-to-b ${category.accentColor} ${category.borderColor} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-xs`}
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                    {category.icon}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-[11px] font-mono px-2 py-1 rounded-md transition-colors ${
                      skill.highlight
                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
