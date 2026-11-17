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
import { useLanguage } from '../../context/language-context';

interface SkillItem {
  name: string;
  isPrimary?: boolean;
}

type SkillCategoryId = 'backend' | 'frontend' | 'database' | 'devops' | 'testing' | 'ai';

interface SkillCategory {
  id: SkillCategoryId;
  icon: React.ReactNode;
  accentBg: string;
  borderColor: string;
  iconColor: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    icon: <Server className="w-5 h-5" />,
    accentBg: 'from-emerald-500/10 via-transparent to-transparent',
    borderColor: 'border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-500/40',
    iconColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    skills: [
      { name: 'NestJS', isPrimary: true },
      { name: 'Java & Spring Boot', isPrimary: true },
      { name: 'TypeScript', isPrimary: true },
      { name: 'Node.js', isPrimary: true },
      { name: 'Laravel (PHP)', isPrimary: true },
      { name: 'Python', isPrimary: true },
      { name: 'APIs REST (JSON / XML)', isPrimary: true },
      { name: 'Arquitectura APX / ASO' },
      { name: 'TypeORM / Prisma / JDBC' },
      { name: 'WebSockets (Socket.io)' }
    ]
  },
  {
    id: 'frontend',
    icon: <Code2 className="w-5 h-5" />,
    accentBg: 'from-indigo-500/10 via-transparent to-transparent',
    borderColor: 'border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/40',
    iconColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
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
    icon: <Database className="w-5 h-5" />,
    accentBg: 'from-cyan-500/10 via-transparent to-transparent',
    borderColor: 'border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-500/40',
    iconColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
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
    icon: <Container className="w-5 h-5" />,
    accentBg: 'from-amber-500/10 via-transparent to-transparent',
    borderColor: 'border-amber-200 dark:border-amber-500/20 hover:border-amber-400 dark:hover:border-amber-500/40',
    iconColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    skills: [
      { name: 'Docker (Multi-stage)', isPrimary: true },
      { name: 'AWS (Solutions Architect / 2 Badges)', isPrimary: true },
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
    icon: <ShieldCheck className="w-5 h-5" />,
    accentBg: 'from-rose-500/10 via-transparent to-transparent',
    borderColor: 'border-rose-200 dark:border-rose-500/20 hover:border-rose-400 dark:hover:border-rose-500/40',
    iconColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    skills: [
      { name: 'Jest (1,625 pruebas en NestJS)', isPrimary: true },
      { name: 'JUnit 5 & JaCoCo (Java)', isPrimary: true },
      { name: 'Pest PHP (44 pruebas / 116 aserciones)', isPrimary: true },
      { name: 'Pruebas Unitarias & E2E', isPrimary: true },
      { name: 'SonarQube Quality Gate', isPrimary: true },
      { name: 'Mocks & Reflexión Arquitectónica' }
    ]
  },
  {
    id: 'ai',
    icon: <Sparkles className="w-5 h-5" />,
    accentBg: 'from-sky-500/10 via-transparent to-transparent',
    borderColor: 'border-sky-200 dark:border-sky-500/20 hover:border-sky-400 dark:hover:border-sky-500/40',
    iconColor: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
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
  const { t } = useLanguage();
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
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 shrink-0 mr-1 font-mono">
            <Filter className="w-3.5 h-3.5" />
            {t.skills.filterLabel}
          </span>
          <button
            onClick={() => setActiveTab('all')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            {t.skills.filterAll} ({skillCategories.length})
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
              {t.skills.categories[cat.id].tabLabel}
            </button>
          ))}
        </div>

        {/* Categories Grid (Balanced 3x2 on Desktop, 2x3 on Tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const catMeta = t.skills.categories[category.id];
            return (
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
                      {catMeta.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {catMeta.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                    {catMeta.description}
                  </p>
                </div>

                <div>
                  {/* Enfoque práctico / Nota de ingeniería */}
                  <div className="mb-4 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-medium leading-tight">
                      {catMeta.practicalFocus}
                    </p>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                    {category.skills.map((skill) => {
                      const displayName = t.skills.skillNameOverrides[skill.name] ?? skill.name;
                      return (
                        <span
                          key={skill.name}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                            skill.isPrimary
                              ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-2xs'
                              : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60'
                          }`}
                        >
                          {displayName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Garantía Técnica y Buenas Prácticas */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                {t.skills.bannerTitle}
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                {t.skills.bannerDesc}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
            {t.skills.bannerTags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
