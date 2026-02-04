// @/components/ImageMaximizer.tsx
import { useState } from 'react';
import DepthContainer from './DepthContainer';

interface ImageMaximizerProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const ImageMaximizer: React.FC<ImageMaximizerProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-square'
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMaximized(false);
    }
  };

  // Close on Escape key
  useState(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMaximized(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  });

  return (
    <>
      {/* Clickable thumbnail */}
      <div 
        className={`cursor-pointer ${aspectRatio} overflow-hidden rounded-xl ${className} relative group`}
        onClick={() => setIsMaximized(true)}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Click hint overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
            Click to enlarge
          </div>
        </div>
      </div>

      {/* Maximized view modal */}
      {isMaximized && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setIsMaximized(false)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-canvas-dark text-white border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 text-xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            
            {/* Image container */}
            <DepthContainer className="p-2">
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              />
            </DepthContainer>
            
            {/* Instructions */}
            <div className="text-white text-center mt-4 text-sm opacity-70">
              Click anywhere or press ESC to close
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageMaximizer;