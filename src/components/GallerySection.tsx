// components/GallerySection.tsx
import { motion } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySectionProps {
  title?: string;
  description?: string;
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

const GallerySection = ({ 
  title, 
  description, 
  images, 
  columns = 3 
}: GallerySectionProps) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  };

  return (
    <section className="max-w-7xl mx-auto px-8">
      {(title || description) && (
        <div className="text-center mb-16">
          {title && (
            <h2 className="text-3xl font-serif font-light mb-4 text-gray-900">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-700 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      
      <div className={`grid ${gridCols[columns]} gap-8`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl shadow-xl group"
          >
            <div className="aspect-square bg-gray-100 relative">
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">
                  {image.alt}
                </span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;