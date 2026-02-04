// components/VideoSection.tsx
import { motion } from 'framer-motion';

interface Video {
  src: string;
  title: string;
}

interface VideoSectionProps {
  title: string;
  description?: string;
  videos: Video[];
  columns?: 1 | 2;
}

const VideoSection = ({ 
  title, 
  description, 
  videos, 
  columns = 1 
}: VideoSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-light mb-4 text-gray-900">
          {title}
        </h2>
        {description && (
          <p className="text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
      
      <div className={`grid ${columns === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-12`}>
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="space-y-4"
          >
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-3xl text-white">▶</span>
                  </div>
                  <p className="text-white font-medium">{video.title}</p>
                </div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-4xl text-white">▶</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-medium text-gray-900">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;