import React, { useState } from 'react';
import { ExternalLink, ImageOff, Layers, Loader2, ZoomIn } from 'lucide-react';
import { Github } from './icons/GithubIcon';
import type { Project } from '../../types/project';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article className="group flex flex-col bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 shadow-xs">
      {/* Contenedor de Imagen con Fallback y Spinner - Vista Completa sin Zoom */}
      <div
        onClick={() => onSelect(project)}
        className="relative h-64 sm:h-72 w-full bg-zinc-100 dark:bg-zinc-950/90 p-4 flex items-center justify-center overflow-hidden cursor-pointer select-none border-b border-zinc-200 dark:border-zinc-800/60"
        role="button"
        tabIndex={0}
        aria-label={`Ver detalles técnicos de ${project.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(project);
          }
        }}
      >
        {/* Loading Spinner */}
        {isLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-100/70 dark:bg-zinc-950/70 z-10">
            <Loader2 className="w-6 h-6 animate-spin text-cyan-600 dark:text-cyan-400" />
          </div>
        )}

        {!imageError ? (
          <img
            src={project.images.thumbnail}
            alt={`Captura del proyecto ${project.title}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setImageError(true);
            }}
            className={`max-w-full max-h-full object-contain rounded-lg shadow-md transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-600 gap-2 p-4">
            <ImageOff className="w-8 h-8" />
            <span className="text-xs">Preview no disponible</span>
          </div>
        )}

        {/* Featured Tag si aplica */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
              <Layers className="w-3 h-3" /> Destacado
            </span>
          </div>
        )}

        {/* Zoom & View Hint on hover */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-md bg-zinc-900/85 text-white border border-zinc-700/80 shadow-md backdrop-blur-sm">
            <ZoomIn className="w-3 h-3 text-cyan-400" />
            <span>Ver con Zoom</span>
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            onClick={() => onSelect(project)}
            className="text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition-colors"
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
              aria-label={`Ver código principal de ${project.title} en GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
            {project.secondaryGithubUrl && (
              <a
                href={project.secondaryGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
                aria-label={`Ver repositorio frontend de ${project.title} en GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
                aria-label={`Ver demo en vivo de ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {project.tagline}
        </p>

        {/* Botón de detalle técnico */}
        <div className="mb-4">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 group/btn cursor-pointer"
          >
            Explorar arquitectura y retos
            <span className="transition-transform group-hover/btn:translate-x-1">→</span>
          </button>
        </div>

        {/* Tags */}
        <div className="mt-auto pt-4 flex flex-wrap gap-1.5 border-t border-zinc-200 dark:border-zinc-800/80">
          {project.tags.map((tag) => (
            <TechBadge key={tag.name} tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );
};
