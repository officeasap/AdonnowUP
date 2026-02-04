import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageMaximizer from "./ImageMaximizer";

const ImageGallerySwiper = ({ 
  images, 
  altPrefix = "Image",
  className = "",
  aspectRatio = "aspect-square"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e) => {
    if (isOverlayOpen) {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        setIsOverlayOpen(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOverlayOpen]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Grid view for normal display */}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="cursor-pointer"
          >
            <ImageMaximizer
              src={image}
              alt={`${altPrefix} ${index + 1}`}
              aspectRatio={aspectRatio}
              className="rounded-xl overflow-hidden"
            />
          </div>
        ))}
      </div>

      {/* Overlay for swipeable gallery */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={handleCloseOverlay}
          >
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
              onClick={handleCloseOverlay}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Main image with swipe functionality */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[currentIndex]}
                alt={`${altPrefix} ${currentIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                draggable="false"
              />
              
              {/* Swipe indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Swipe hints */}
              <div className="absolute bottom-12 left-0 right-0 flex justify-between px-8 opacity-60">
                <div className="text-white text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Swipe left</span>
                </div>
                <div className="text-white text-sm flex items-center gap-1">
                  <span>Swipe right</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallerySwiper;