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
    badge: 'Servicios & Lógica',
    icon: <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    accentColor: 'from-emerald-500/10 via-transparent to-transparent',
    borderColor: 'border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-500/40',
    description:
      'Diseño de APIs REST modulares con NestJS y Laravel, separación de responsabilidades y tipado estricto.',
    skills: [
      { name: 'NestJS', highlight: true },
      { name: 'Laravel (PHP)', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'PHP', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'APIs REST', highlight: true },
      { name: 'TypeORM' },
      { name: 'WebSockets (Socket.io)' }
    ]
  },
  {
    title: 'Frontend & UI',
    badge: 'Interfaces & Reactividad',
    icon: <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    accentColor: 'from-indigo-500/10 via-transparent to-transparent',
    borderColor: 'border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/40',
    description:
      'Desarrollo de interfaces web reactivas, gestión de estado cliente y consumo ágil de APIs.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Vue', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'TanStack Query', highlight: true },
      { name: 'Pinia' },
      { name: 'Vite' }
    ]
  },
  {
    title: 'Bases de Datos & Caché',
    badge: 'Persistencia & Consultas',
    icon: <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    accentColor: 'from-cyan-500/10 via-transparent to-transparent',
    borderColor: 'border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-500/40',
    description:
      'Modelado de datos relacionales, transacciones explícitas con QueryRunner y caché en memoria con Redis.',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'Redis (Caché & Rate Limiting)', highlight: true },
      { name: 'Transacciones con QueryRunner' },
      { name: 'Concurrencia Optimista' },
      { name: 'SQLite' }
    ]
  },
  {
    title: 'Testing & Herramientas',
    badge: 'Calidad & Despliegue',
    icon: <Container className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    accentColor: 'from-amber-500/10 via-transparent to-transparent',
    borderColor: 'border-amber-200 dark:border-amber-500/20 hover:border-amber-400 dark:hover:border-amber-500/40',
    description:
      'Pruebas automatizadas continuas, empaquetado en contenedores Docker, entornos Linux y control de versiones.',
    skills: [
      { name: 'Jest (998 pruebas / 143 suites)', highlight: true },
      { name: 'Pest PHP (44 pruebas / 116 aserciones)', highlight: true },
      { name: 'Docker (Distroless)', highlight: true },
      { name: 'Nginx', highlight: true },
      { name: 'Linux', highlight: true },
      { name: 'Git & GitHub', highlight: true }
    ]
  },
  {
    title: 'Computer Vision (IA)',
    badge: 'Detección & Inferencia',
    icon: <Sparkles className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    accentColor: 'from-sky-500/10 via-transparent to-transparent',
    borderColor: 'border-sky-200 dark:border-sky-500/20 hover:border-sky-400 dark:hover:border-sky-500/40',
    description:
      'Modelos de detección de objetos, exportación e inferencia acelerada en GPU y seguimiento visual.',
    skills: [
      { name: 'YOLOv8 (97.1% mAP@50)', highlight: true },
      { name: 'ONNX Runtime (DirectML)', highlight: true },
      { name: 'OpenCV', highlight: true },
      { name: 'ByteTrack', highlight: true },
      { name: 'Python', highlight: true }
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
            Tecnologías y herramientas aplicadas directamente en desarrollo backend, bases de datos relacionales, interfaces reactivas y pruebas automatizadas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
