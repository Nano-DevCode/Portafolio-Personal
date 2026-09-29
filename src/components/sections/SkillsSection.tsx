import React from 'react';
import {
  Code2,
  Server,
  Cloud,
  Network,
  ShieldCheck,
  CheckCircle,
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
    title: 'Frontend & Mobile',
    badge: 'UI / UX & Multiplataforma',
    icon: <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    accentColor: 'from-cyan-500/10 via-transparent to-transparent',
    borderColor: 'border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-500/40',
    description:
      'Construcción de interfaces reactivas, accesibles y aplicaciones móviles nativas de alto rendimiento.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'React Native', highlight: true },
      { name: 'Vite', highlight: true },
      { name: 'Angular' },
      { name: 'Vue.js' },
      { name: 'TypeScript', highlight: true },
      { name: 'Tailwind CSS' },
      { name: 'NativeWind' }
    ]
  },
  {
    title: 'Backend & APIs',
    badge: 'Arquitectura & Servicios',
    icon: <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    accentColor: 'from-emerald-500/10 via-transparent to-transparent',
    borderColor: 'border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-500/40',
    description:
      'Desarrollo de servicios escalables, patrones modulares y APIs RESTful seguras y tipadas.',
    skills: [
      { name: 'NestJS', highlight: true },
      { name: 'Laravel (PHP)', highlight: true },
      { name: 'Node.js / Express' },
      { name: 'APIs RESTful', highlight: true },
      { name: 'Autenticación (JWT / OAuth)' },
      { name: 'Arquitectura Limpia / Hexagonal' },
      { name: 'ORM (Prisma / Eloquent)' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    badge: 'Contenedores & Nube',
    icon: <Cloud className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    accentColor: 'from-indigo-500/10 via-transparent to-transparent',
    borderColor: 'border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/40',
    description:
      'Contenerización, servidores proxy reversos y despliegues optimizados en infraestructura moderna.',
    skills: [
      { name: 'Docker', highlight: true },
      { name: 'Nginx (Reverse Proxy & SSL)', highlight: true },
      { name: 'Google Cloud Platform (GCP)', highlight: true },
      { name: 'Cursos & Formación Google Cloud', highlight: true },
      { name: 'CI / CD Pipelines' },
      { name: 'Gestión de Servidores Linux' }
    ]
  },
  {
    title: 'Redes & Seguridad',
    badge: 'Infraestructura & Telecomunicaciones',
    icon: <Network className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    accentColor: 'from-amber-500/10 via-transparent to-transparent',
    borderColor: 'border-amber-200 dark:border-amber-500/20 hover:border-amber-400 dark:hover:border-amber-500/40',
    description:
      'Segmentación de tráfico, protección perimetral y administración sólida de topologías de red.',
    skills: [
      { name: 'VLANs (Segmentación 802.1Q)', highlight: true },
      { name: 'Firewalls (Políticas & Reglas)', highlight: true },
      { name: 'Subnetting & Enrutamiento IP', highlight: true },
      { name: 'Seguridad Perimetral' },
      { name: 'DNS, DHCP & NAT' },
      { name: 'VPNs & Túneles Seguros' }
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
            <span>Versatilidad Full-Stack & Sistemas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Ecosistema Técnico & Habilidades
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Una combinación integral que conecta el desarrollo de producto digital (Web y Móvil) 
            con una sólida base en backends empresariales, infraestructura en la nube y redes corporativas.
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
              <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                        skill.highlight
                          ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700 shadow-xs'
                          : 'bg-zinc-50 dark:bg-zinc-950/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800/80 hover:text-zinc-900 dark:hover:text-zinc-300'
                      }`}
                    >
                      {skill.highlight && (
                        <CheckCircle className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Cloud & Networking Special Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-50/80 via-white to-cyan-50/80 dark:from-zinc-900/90 dark:via-zinc-900/60 dark:to-zinc-900/90 border border-cyan-200/80 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                Diferencial Competitivo: Criterio Integral de Infraestructura
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed max-w-3xl">
                A diferencia de perfiles exclusivamente frontend, entiendo el ciclo de vida completo: 
                desde la experiencia de usuario y arquitectura en el cliente, hasta el enrutamiento con Nginx, 
                la contenerización en Docker, las mejores prácticas aprendidas en Google Cloud y la seguridad en capas con VLANs y Firewalls.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
              GCP Trained • Docker & Nginx • NetSec
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
