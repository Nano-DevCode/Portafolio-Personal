import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  title?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  title = 'Captura de pantalla'
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Restablecer zoom y posición cuando cambia la imagen seleccionada sin efectos en cascada
  if (currentIndex !== prevIndex) {
    setPrevIndex(currentIndex);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.5, 3.5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0') {
        resetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onNavigate, onClose, resetZoom, handleZoomIn, handleZoomOut]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handleToggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
    }
  };

  // Drag and Pan handlers when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visor con zoom: ${title}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl select-none"
      onClick={onClose}
    >
      {/* Top Floating Control Bar */}
      <div
        className="absolute top-0 inset-x-0 h-16 px-4 sm:px-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-white">
          <Maximize2 className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-semibold truncate max-w-[200px] sm:max-w-md">
            {title}
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            ({currentIndex + 1} / {images.length})
          </span>
        </div>

        {/* Zoom Controls & Close */}
        <div className="flex items-center gap-2">
          {/* Zoom Level Indicator */}
          <span className="text-xs font-mono px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={handleZoomIn}
            className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-white border border-zinc-700/80 transition-colors cursor-pointer"
            title="Acercar (+)"
            aria-label="Acercar zoom"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={handleZoomOut}
            disabled={scale <= 1}
            className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-white border border-zinc-700/80 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            title="Alejar (-)"
            aria-label="Alejar zoom"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={resetZoom}
            disabled={scale === 1}
            className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-white border border-zinc-700/80 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            title="Restablecer (100%)"
            aria-label="Restablecer zoom original"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <div className="h-6 w-px bg-zinc-700 mx-1" />

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800/80 hover:bg-rose-600 text-white border border-zinc-700/80 hover:border-rose-500 transition-colors cursor-pointer"
            title="Cerrar (Esc)"
            aria-label="Cerrar visor"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center p-4 sm:p-12 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          onClick={handleToggleZoom}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 200ms ease-out',
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
          }}
          className="relative max-w-full max-h-full flex items-center justify-center"
        >
          <img
            src={currentImage}
            alt={`${title} - captura ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-cyan-500 hover:text-zinc-950 text-white border border-zinc-700 transition-all cursor-pointer shadow-lg"
            title="Captura anterior (Flecha Izquierda)"
            aria-label="Captura anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-cyan-500 hover:text-zinc-950 text-white border border-zinc-700 transition-all cursor-pointer shadow-lg"
            title="Siguiente captura (Flecha Derecha)"
            aria-label="Siguiente captura"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 font-medium backdrop-blur-md">
          <span>💡 Clic para hacer zoom ({scale > 1 ? 'Alejar' : 'Acercar'})</span>
          <span>•</span>
          <span>Arrastra para desplazar</span>
          <span>•</span>
          <span>Flechas para navegar</span>
        </span>
      </div>
    </div>
  );
};
