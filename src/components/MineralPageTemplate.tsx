// src/components/MineralPageTemplate.tsx
import { motion } from 'framer-motion';
import DepthContainer from '@/components/DepthContainer';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MineralPageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bgGradient: string;
  sections: Array<{
    title: string;
    content: string;
    image?: string;
    video?: string;
    stats?: Array<{ label: string; value: string }>;
  }>;
}

const MineralPageTemplate = ({ 
  title, 
  subtitle, 
  description, 
  icon,
  bgGradient,
  sections 
}: MineralPageTemplateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Navigation */}
      <div className="mb-6">
        <Link 
          to="/minerals" 
          className="inline-flex items-center text-text-highlight/70 hover:text-text-highlight transition-colors"
        >
          <ChevronLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <DepthContainer className={`p-6 md:p-8 mb-8 ${bgGradient}`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{icon}</div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl text-text-highlight">
                  {title}
                </h1>
                <p className="text-text-secondary font-body text-lg">
                  {subtitle}
                </p>
              </div>
            </div>
            <p className="text-text-primary text-base md:text-lg max-w-3xl">
              {description}
            </p>
          </div>
          <div className="flex gap-4">
            <button className="shadow-permanent-button px-6 py-3 rounded-[18px] text-sm">
              Request Specifications
            </button>
            <button className="shadow-permanent-button px-6 py-3 rounded-[18px] text-sm">
              Download Data Sheet
            </button>
          </div>
        </div>
      </DepthContainer>

      {/* Content Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <DepthContainer className="p-6 md:p-8">
              <h2 className="font-heading text-2xl mb-6 text-text-highlight">
                {section.title}
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-text-primary text-base leading-relaxed mb-6">
                    {section.content}
                  </p>
                  
                  {section.stats && (
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {section.stats.map((stat, idx) => (
                        <DepthContainer 
                          key={idx} 
                          className="p-4 text-center"
                        >
                          <div className="text-2xl font-heading text-text-highlight mb-1">
                            {stat.value}
                          </div>
                          <div className="text-text-secondary text-sm">
                            {stat.label}
                          </div>
                        </DepthContainer>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Media Placeholder */}
                <div className="relative">
                  {section.image ? (
                    <div className="relative h-64 md:h-80 rounded-[18px] overflow-hidden">
                      <div className={`absolute inset-0 ${bgGradient} flex items-center justify-center`}>
                        <span className="text-text-primary">Image: {section.title}</span>
                      </div>
                    </div>
                  ) : section.video ? (
                    <div className="relative h-64 md:h-80 rounded-[18px] overflow-hidden">
                      <div className={`absolute inset-0 ${bgGradient} flex items-center justify-center`}>
                        <div className="text-center">
                          <div className="text-4xl mb-2">▶</div>
                          <span className="text-text-primary">Video: {section.title}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <DepthContainer className="h-64 md:h-80 flex items-center justify-center">
                      <span className="text-text-secondary">Media content</span>
                    </DepthContainer>
                  )}
                </div>
              </div>
            </DepthContainer>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <DepthContainer className="p-8 text-center">
          <h3 className="font-heading text-2xl mb-4 text-text-highlight">
            Institutional Trading Inquiry
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            For verified pricing, availability schedules, and technical specifications, 
            contact our Nairobi trading desk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="shadow-permanent-button px-8 py-3 rounded-[18px] text-sm md:text-base"
            >
              Contact Trading Desk
            </Link>
            <button className="shadow-permanent-button px-8 py-3 rounded-[18px] text-sm md:text-base">
              Request Verification
            </button>
          </div>
        </DepthContainer>
      </motion.div>
    </motion.div>
  );
};

export default MineralPageTemplate;