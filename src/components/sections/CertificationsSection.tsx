import React, { useMemo, useState } from 'react';
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Cloud,
  Sparkles,
  GraduationCap,
  Server,
  ShieldCheck,
  Lock,
  Code2,
  Smartphone,
  Database,
  Filter
} from 'lucide-react';
import type { Certification } from '../../types/certification';
import { certifications } from '../../data/certifications';
import { Button } from '../ui/Button';

type FilterType = 'all' | 'cloud' | 'udemy' | 'academic';

const categoryBadges: Record<Certification['category'], { label: string; className: string; icon: React.ReactNode }> = {
  cloud: {
    label: 'Cloud & Architecture',
    className: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/30',
    icon: <Cloud className="w-3.5 h-3.5" />,
  },
  security: {
    label: 'Cloud Security / DevOps',
    className: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30',
    icon: <Lock className="w-3.5 h-3.5" />,
  },
  ai: {
    label: 'Data, ML & AI',
    className: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/30',
    icon: <Sparkles className="w-3.5 h-3.5" />,
  },
  backend: {
    label: 'Backend & APIs',
    className: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
    icon: <Server className="w-3.5 h-3.5" />,
  },
  frontend: {
    label: 'Frontend & Web Development',
    className: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/30',
    icon: <Code2 className="w-3.5 h-3.5" />,
  },
  mobile: {
    label: 'Mobile & Cross-Platform',
    className: 'bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/30',
    icon: <Smartphone className="w-3.5 h-3.5" />,
  },
  devops: {
    label: 'DevOps & Herramientas',
    className: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30',
    icon: <Database className="w-3.5 h-3.5" />,
  },
  academic: {
    label: 'Formación Oficial / TecNM',
    className: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
    icon: <GraduationCap className="w-3.5 h-3.5" />,
  },
  other: {
    label: 'Especialización',
    className: 'bg-zinc-500/10 text-zinc-700 dark:text-zinc-400 border-zinc-500/30',
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
  },
};

export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Ordenar automáticamente de menor a mayor 'importance' (1 = más relevante)
  const sortedCertifications = useMemo(() => {
    const list = [...certifications].sort((a, b) => a.importance - b.importance);
    if (activeFilter === 'cloud') {
      return list.filter((c) => c.issuer.toLowerCase().includes('google'));
    }
    if (activeFilter === 'udemy') {
      return list.filter((c) => c.issuer.toLowerCase().includes('udemy'));
    }
    if (activeFilter === 'academic') {
      return list.filter((c) => c.category === 'academic');
    }
    return list;
  }, [activeFilter]);

  return (
    <section id="certificaciones" className="py-20 relative border-t border-zinc-200 dark:border-zinc-900 bg-white/40 dark:bg-zinc-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 text-xs font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Validación & Formación Continua</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Certificaciones Oficiales & Especializaciones
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Acreditaciones internacionales de <strong className="text-zinc-900 dark:text-white font-semibold">Google Cloud (Credly)</strong>, 
            cursos especializados de <strong className="text-zinc-900 dark:text-white font-semibold">Udemy</strong> y formación académica del <strong className="text-zinc-900 dark:text-white font-semibold">TecNM / INFOTEC</strong>.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Filtrar:
          </span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
              activeFilter === 'all'
                ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            Todas ({certifications.length})
          </button>
          <button
            onClick={() => setActiveFilter('cloud')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
              activeFilter === 'cloud'
                ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            Google Cloud (Credly)
          </button>
          <button
            onClick={() => setActiveFilter('udemy')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
              activeFilter === 'udemy'
                ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            Especializaciones Udemy
          </button>
          <button
            onClick={() => setActiveFilter('academic')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
              activeFilter === 'academic'
                ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            Académicas / TecNM
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {sortedCertifications.map((cert) => {
            const cat = categoryBadges[cert.category] || categoryBadges.other;
            const isTopRanked = cert.importance === 1;

            return (
              <div
                key={cert.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isTopRanked
                    ? 'bg-gradient-to-br from-cyan-500/5 via-white dark:via-zinc-900/80 to-blue-500/5 border-cyan-400/40 dark:border-cyan-500/30 shadow-md shadow-cyan-500/5'
                    : 'bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs'
                }`}
              >
                {/* Ranking Tag for Top Certifications */}
                {isTopRanked && (
                  <div className="absolute -top-3 right-6">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full bg-cyan-500 text-zinc-950 shadow-sm">
                      <CheckCircle2 className="w-3 h-3" /> Principal Acreditación
                    </span>
                  </div>
                )}

                <div>
                  {/* Category Badge & Priority */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium border ${cat.className}`}
                    >
                      {cat.icon}
                      {cat.label}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                      Prioridad #{cert.importance}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400 mb-4">
                    {cert.issuer}
                  </p>
                </div>

                {/* Footer Metadata & External Link */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 mt-4">
                  <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.issueDate}
                    </span>
                    {cert.credentialId && (
                      <span className="font-mono text-[11px] truncate max-w-[150px] sm:max-w-none" title={cert.credentialId}>
                        ID: {cert.credentialId.substring(0, 18)}...
                      </span>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <Button
                      asAnchor
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={isTopRanked ? 'primary' : 'outline'}
                      size="sm"
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Verificar credencial
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
