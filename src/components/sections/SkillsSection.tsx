import React, { useState, useMemo } from 'react';
import {
  Server,
  Database,
  Code2,
  Container,
  Sparkles,
  ShieldCheck,
  Filter,
  CheckCircle2,
  Cpu,
  Zap
} from 'lucide-react';

interface SkillItem {
  name: string;
  isPrimary?: boolean;
}

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  icon: React.ReactNode;
  accentBg: string;
  borderColor: string;
  iconColor: string;
  description: string;
  practicalFocus: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    badge: 'Arquitectura & Servicios',
    icon: <Server className="w-5 h-5" />,
    accentBg: 'from-emerald-500/10 via-transparent to-transparent',
    borderColor: 'border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-500/40',
    iconColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    description:
      'Diseño e implementación de APIs REST modulares con inyección de dependencias, tipado estricto y separación limpia de capas.',
    practicalFocus: 'Arquitectura modular, DTOs validados y servicios desacoplados',
    skills: [
      { name: 'NestJS', isPrimary: true },
      { name: 'TypeScript', isPrimary: true },
      { name: 'Node.js', isPrimary: true },
      { name: 'Laravel (PHP)', isPrimary: true },
      { name: 'PHP', isPrimary: true },
      { name: 'Python', isPrimary: true },
      { name: 'APIs REST', isPrimary: true },
      { name: 'TypeORM' },
      { name: 'WebSockets (Socket.io)' },
      { name: 'Livewire Volt' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Web',
    badge: 'Interfaces & Reactividad',
    icon: <Code2 className="w-5 h-5" />,
    accentBg: 'from-indigo-500/10 via-transparent to-transparent',
    borderColor: 'border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/40',
    iconColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    description:
      'Construcción de interfaces web modernas y adaptables, gestión reactiva de estado global y sincronización con APIs.',
    practicalFocus: 'Diseño responsive, estados globales y consumo eficiente de APIs',
    skills: [
      { name: 'React', isPrimary: true },
      { name: 'Vue 3', isPrimary: true },
      { name: 'Tailwind CSS', isPrimary: true },
      { name: 'TanStack Query', isPrimary: true },
      { name: 'Pinia' },
      { name: 'Zustand' },
      { name: 'React Native' },
      { name: 'Vite' }
    ]
  },
  {
    id: 'database',
    title: 'Bases de Datos & Caché',
    badge: 'Persistencia & Transacciones',
    icon: <Database className="w-5 h-5" />,
    accentBg: 'from-cyan-500/10 via-transparent to-transparent',
    borderColor: 'border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-500/40',
    iconColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    description:
      'Modelado entidad-relación, transacciones explícitas para consistencia atómica y optimización con memoria caché.',
    practicalFocus: 'Transacciones con QueryRunner y prevención de condiciones de carrera',
    skills: [
      { name: 'PostgreSQL', isPrimary: true },
      { name: 'MySQL', isPrimary: true },
      { name: 'Redis (Caché & Rate Limiting)', isPrimary: true },
      { name: 'TypeORM QueryRunner', isPrimary: true },
      { name: 'Concurrencia Optimista' },
      { name: 'SQLite' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps, Cloud & Servidores',
    badge: 'Infraestructura & Contenedores',
    icon: <Container className="w-5 h-5" />,
    accentBg: 'from-amber-500/10 via-transparent to-transparent',
    borderColor: 'border-amber-200 dark:border-amber-500/20 hover:border-amber-400 dark:hover:border-amber-500/40',
    iconColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    description:
      'Empaquetado en contenedores ligeros y seguros, aprovisionamiento de infraestructura y administración de entornos Linux.',
    practicalFocus: 'Docker multi-stage Distroless non-root e IaC con Terraform',
    skills: [
      { name: 'Docker (Multi-stage)', isPrimary: true },
      { name: 'Google Cloud (14 Badges)', isPrimary: true },
      { name: 'Terraform (IaC)', isPrimary: true },
      { name: 'Nginx (Reverse Proxy)', isPrimary: true },
      { name: 'Linux / Bash', isPrimary: true },
      { name: 'Git & GitHub', isPrimary: true },
      { name: 'MinIO S3' }
    ]
  },
  {
    id: 'testing',
    title: 'Testing & Calidad de Código',
    badge: '1,000+ Pruebas Automatizadas',
    icon: <ShieldCheck className="w-5 h-5" />,
    accentBg: 'from-rose-500/10 via-transparent to-transparent',
    borderColor: 'border-rose-200 dark:border-rose-500/20 hover:border-rose-400 dark:hover:border-rose-500/40',
    iconColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    description:
      'Pruebas unitarias y de integración para garantizar que las reglas de negocio, endpoints y transacciones funcionen sin regresiones.',
    practicalFocus: '998 pruebas Jest en NestJS y 44 pruebas Pest PHP en Laravel',
    skills: [
      { name: 'Jest (998 pruebas / 143 suites)', isPrimary: true },
      { name: 'Pest PHP (44 pruebas / 116 aserciones)', isPrimary: true },
      { name: 'Pruebas Unitarias', isPrimary: true },
      { name: 'Pruebas de Integración', isPrimary: true },
      { name: 'Supertest', isPrimary: true },
      { name: 'Mocks & Spies' }
    ]
  },
  {
    id: 'ai',
    title: 'Visión Artificial & Modelos IA',
    badge: 'Inferencia Edge & CV',
    icon: <Sparkles className="w-5 h-5" />,
    accentBg: 'from-sky-500/10 via-transparent to-transparent',
    borderColor: 'border-sky-200 dark:border-sky-500/20 hover:border-sky-400 dark:hover:border-sky-500/40',
    iconColor: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    description:
      'Entrenamiento de modelos de detección sobre datasets reales, exportación para inferencia acelerada y aplicaciones con LLMs.',
    practicalFocus: 'Detección en tiempo real con YOLOv8 (~21 FPS con DirectML)',
    skills: [
      { name: 'YOLOv8 (97.1% mAP@50)', isPrimary: true },
      { name: 'ONNX Runtime (DirectML)', isPrimary: true },
      { name: 'OpenCV', isPrimary: true },
      { name: 'ByteTrack', isPrimary: true },
      { name: 'Google Gemini API' },
      { name: 'Streamlit' }
    ]
  }
];

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = useMemo(() => {
    if (activeTab === 'all') return skillCategories;
    return skillCategories.filter((c) => c.id === activeTab);
  }, [activeTab]);

  return (
    <section id="habilidades" className="py-24 relative border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/60 dark:bg-zinc-950/40 transition-colors scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Stack Tecnológico Verificable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Habilidades Técnicas
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Tecnologías y herramientas aplicadas directamente en desarrollo backend, bases de datos relacionales, interfaces reactivas y pruebas automatizadas.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 shrink-0 mr-1 font-mono">
            <Filter className="w-3.5 h-3.5" />
            Filtrar área:
          </span>
          <button
            onClick={() => setActiveTab('all')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            Todas ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
                activeTab === cat.id
                  ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                  : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Categories Grid (Balanced 3x2 on Desktop, 2x3 on Tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`rounded-2xl border bg-white dark:bg-zinc-900/70 bg-gradient-to-b ${category.accentBg} ${category.borderColor} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-xs`}
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${category.iconColor} shadow-2xs`}>
                    {category.icon}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700">
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {category.description}
                </p>
              </div>

              <div>
                {/* Enfoque práctico / Nota de ingeniería */}
                <div className="mb-4 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 flex items-start gap-2">
                  <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-medium leading-tight">
                    {category.practicalFocus}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                        skill.isPrimary
                          ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-2xs'
                          : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Garantía Técnica y Buenas Prácticas */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                Compromiso con el Código Defendible & Buenas Prácticas
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                Cada habilidad técnica mostrada está respaldada por proyectos públicos con código abierto, suites de pruebas automatizadas o acreditaciones oficiales.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
            <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">TypeScript Estricto</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">Docker Distroless</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">998+ Tests Jest</span>
          </div>
        </div>
      </div>
    </section>
  );
};
