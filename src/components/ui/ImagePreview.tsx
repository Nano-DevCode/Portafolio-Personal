import React, { useState } from 'react';
import { ImageOff, Loader2, Maximize2 } from 'lucide-react';

interface ImagePreviewProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  fit?: 'contain' | 'cover';
  allowZoom?: boolean;
  priority?: boolean;
  fallbackText?: string;
  onClick?: () => void;
}

const aspectRatioStyles = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[9/16]',
  auto: 'h-full w-full',
};

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  aspectRatio = 'auto',
  fit = 'contain',
  allowZoom = false,
  priority = false,
  fallbackText = 'Captura no disponible',
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-zinc-950 flex items-center justify-center select-none ${aspectRatioStyles[aspectRatio]} ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {/* Spinner de carga defensivo */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/80 z-10 text-zinc-500 gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-xs text-zinc-400 font-mono">Cargando captura...</span>
        </div>
      )}

      {/* Fallback en caso de error de red o URL rota */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/80 text-zinc-500 gap-2 p-4 text-center">
          <ImageOff className="w-8 h-8 text-zinc-600" />
          <span className="text-xs text-zinc-400">{fallbackText}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`max-w-full max-h-full ${fitClass} transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${imageClassName}`}
        />
      )}

      {/* Botón visual para zoom si está habilitado */}
      {allowZoom && !hasError && !isLoading && (
        <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};
