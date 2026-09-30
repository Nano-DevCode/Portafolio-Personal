import React, { useState } from 'react';
import { ExternalLink, Cpu, AlertTriangle, Lightbulb, CheckCircle2, ChevronRight, X, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { Github } from './icons/GithubIcon';
import type { Project } from '../../types/project';
import { TechBadge } from './TechBadge';
import { ImagePreview } from './ImagePreview';
import { ImageLightbox } from './ImageLightbox';
import { Button } from './Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!isOpen || !project) return null;

  const currentImage = project.images.gallery[selectedImageIndex] || project.images.thumbnail;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <h2 id="modal-title" className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h2>
            {project.featured && (
              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                Destacado
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal de proyecto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* Tagline & Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed max-w-xl">
              {project.tagline}
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <Button
                asAnchor
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={<Github className="w-4 h-4" />}
              >
                Ver Repositorio
              </Button>
              {project.liveUrl && (
                <Button
                  asAnchor
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Demo en vivo
                </Button>
              )}
            </div>
          </div>

          {/* Media / Gallery Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 font-medium">
                <ImageIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Capturas directas del repositorio
              </span>
              <span>
                {selectedImageIndex + 1} de {project.images.gallery.length}
              </span>
            </div>

            {/* Main Preview with Defensive Loader - Vista Completa con Zoom Interactivo */}
            <div className="relative group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950/90 h-[420px] sm:h-[480px] w-full flex items-center justify-center p-3 sm:p-4">
              <div
                className="w-full h-full flex items-center justify-center cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
                title="Haz clic para ampliar la imagen y hacer zoom interactivo"
              >
                <ImagePreview
                  src={currentImage}
                  alt={`${project.title} captura grande ${selectedImageIndex + 1}`}
                  fit="contain"
                  className="w-full h-full"
                  fallbackText="Error al cargar captura desde GitHub Raw"
                />
              </div>

              {/* Botón flotante para abrir el visor con zoom */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/85 hover:bg-cyan-500 hover:text-zinc-950 text-white text-xs font-semibold border border-zinc-700/80 shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-105"
                title="Ampliar captura y hacer zoom"
                aria-label="Ampliar captura y hacer zoom"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Hacer Zoom</span>
              </button>
            </div>

            {/* Gallery Thumbnails Strip */}
            {project.images.gallery.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                {project.images.gallery.map((imgUrl, idx) => (
                  <button
                    key={imgUrl}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 bg-zinc-100 dark:bg-zinc-950 p-1 transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-cyan-500 ring-2 ring-cyan-500/20 shadow-md'
                        : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                    aria-label={`Seleccionar captura ${idx + 1}`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div className="bg-zinc-100/70 dark:bg-zinc-950/60 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800/80">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-2">
              Resumen del Proyecto
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Aspectos Destacados de Implementación
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100/60 dark:bg-zinc-950/40 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800/60"
                >
                  <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deep Engineering Details */}
          {project.technicalDetails && (
            <div className="grid md:grid-cols-2 gap-4">
              {/* Architecture & State */}
              <div className="p-4 rounded-xl bg-zinc-100/60 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Arquitectura y Patrones</span>
                </div>
                <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <p>
                    <strong className="text-zinc-900 dark:text-zinc-200">Patrón:</strong>{' '}
                    {project.technicalDetails.architecturePattern}
                  </p>
                  <p>
                    <strong className="text-zinc-900 dark:text-zinc-200">Estado y Datos:</strong>{' '}
                    {project.technicalDetails.stateAndDataManagement}
                  </p>
                </div>
              </div>

              {/* Technical Challenges */}
              <div className="p-4 rounded-xl bg-zinc-100/60 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Retos Técnicos Superados</span>
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                  {project.technicalDetails.keyChallenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </div>

              {/* Engineering Decisions */}
              {project.technicalDetails.engineeringDecisions.length > 0 && (
                <div className="md:col-span-2 p-4 rounded-xl bg-zinc-100/60 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                    <Lightbulb className="w-4 h-4" />
                    <span>Decisiones Clave de Ingeniería</span>
                  </div>
                  <ul className="grid sm:grid-cols-3 gap-2 text-xs text-zinc-700 dark:text-zinc-300 pt-1">
                    {project.technicalDetails.engineeringDecisions.map((decision, i) => (
                      <li key={i} className="bg-white dark:bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Stack Tecnológico Completo
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechBadge key={tag.name} tag={tag} size="md" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 flex justify-end gap-3">
          <Button variant="secondary" size="md" onClick={onClose}>
            Cerrar
          </Button>
          <Button
            asAnchor
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            icon={<Github className="w-4 h-4" />}
          >
            Explorar Código
          </Button>
        </div>
      </div>

      {/* Visor con Zoom Interactivo y Pantalla Completa */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={project.images.gallery}
        currentIndex={selectedImageIndex}
        onNavigate={(idx) => setSelectedImageIndex(idx)}
        title={project.title}
      />
    </div>
  );
};
