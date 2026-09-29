import React, { useState, useMemo } from 'react';
import { Filter, Search, Code2, Sparkles } from 'lucide-react';
import type { Project, TechCategory } from '../../types/project';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
}

type FilterCategory = 'all' | TechCategory;

const categoryLabels: Record<FilterCategory, string> = {
  all: 'Todos',
  mobile: 'Mobile (React Native)',
  frontend: 'Frontend (Vue / React)',
  backend: 'Backend & APIs',
  database: 'Bases de Datos & Caché',
  devops: 'DevOps & Cloud',
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Available categories present in existing project tags
  const availableCategories = useMemo(() => {
    const categoriesSet = new Set<TechCategory>();
    projects.forEach((p) => {
      p.tags.forEach((t) => categoriesSet.add(t.category));
    });
    return Array.from(categoriesSet);
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        project.tags.some((tag) => tag.category === selectedCategory);

      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="proyectos" className="py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos de Estudio & Código Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Proyectos de Software Destacados
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Aplicaciones construidas con principios de arquitectura limpia, tipado estricto, 
            rendimiento optimizado y componentes desacoplados.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" />
              Filtrar:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              Todos ({projects.length})
            </button>
            {availableCategories.map((category) => {
              const count = projects.filter((p) =>
                p.tags.some((t) => t.category === category)
              ).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 capitalize ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-zinc-950 font-semibold shadow-sm'
                      : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  {categoryLabels[category].split(' ')[0]} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-zinc-400 dark:text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tecnología o nombre..."
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-zinc-100/60 dark:bg-zinc-900/30 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Code2 className="w-12 h-12 text-zinc-400 dark:text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-800 dark:text-zinc-300 font-medium">No se encontraron proyectos</p>
            <p className="text-zinc-500 text-xs mt-1">
              Prueba cambiando la categoría seleccionada o el término de búsqueda.
            </p>
          </div>
        )}
      </div>

      {/* Modal de Detalle Técnico */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
