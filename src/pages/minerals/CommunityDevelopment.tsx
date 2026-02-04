import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";
import ImageMaximizer from "@/components/ImageMaximizer";
import ImageGallerySwiper from "@/components/ImageGallerySwiper";

const communityImages = [
  "/mineral-images/communitydev1.png",
  "/mineral-images/communitydev2.png",
  "/mineral-images/communitydev3.png",
  "/mineral-images/communitydev4.png",
  "/mineral-images/communitydev5.png",
  "/mineral-images/communitydev6.png",
  "/mineral-images/communitydev7.png",
  "/mineral-images/communitydev8.png"
];

const CommunityDevelopment = () => {
  const navigate = useNavigate();

 const handleChatInquiry = () => {
  console.log('💬 Community Development chat button clicked');
  
  const chatEvent = new CustomEvent('open-adonnow-chat', {
    detail: {
      mineral: 'community-development',
      type: 'sustainability',
      title: 'Community Development',
      source: 'community-page-button'
    },
    bubbles: true,
    composed: true
  });
  
  window.dispatchEvent(chatEvent);
};

  return (
    <div className="min-h-screen bg-canvas pt-16 md:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-text-primary">
            Community Development
          </h1>
          
          <div className="mb-8">
            <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed mb-6">
              <span className="text-text-highlight font-bold">Adonnow's commitment to sustainable mineral extraction</span> is inseparable from its devotion to community empowerment. Our operations across Tanzania, the Democratic Republic of Congo, and Rwanda are anchored in a framework that prioritizes ethical resource stewardship, fair trade principles, and long-term investment in human potential. Every ounce extracted is matched by a pulse of life returned to the land and its people.
            </p>

            <motion.div 
              className="bg-canvas-dark/30 border-l-4 border-text-highlight p-6 rounded-r-lg mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-heading text-xl mb-4 text-text-highlight">Giving Back with Purpose</h3>
              <p className="text-text-secondary font-body mb-4">
                Adonnow's community development program is not charity—it is covenant. We ritualize our presence in mining regions by building infrastructure, transferring knowledge, and cultivating dignity. Our initiatives include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-text-highlight mr-2 mt-1">→</span>
                    <span className="text-text-primary font-medium">Free Training & Education for Women and Children</span>
                  </div>
                  <p className="text-text-secondary text-sm ml-4">
                    We offer open-access learning programs that equip women and children with literacy, vocational skills, and digital fluency—laying the foundation for generational transformation.
                  </p>
                  
                  <div className="flex items-start">
                    <span className="text-text-highlight mr-2 mt-1">→</span>
                    <span className="text-text-primary font-medium">Construction of Community Education Buildings</span>
                  </div>
                  <p className="text-text-secondary text-sm ml-4">
                    Purpose-built learning centers serve as hubs for knowledge exchange, mentorship, and cultural preservation.
                  </p>
                  
                  <div className="flex items-start">
                    <span className="text-text-highlight mr-2 mt-1">→</span>
                    <span className="text-text-primary font-medium">Empowerment in Fish Farming and Agriculture</span>
                  </div>
                  <p className="text-text-secondary text-sm ml-4">
                    We provide tools, training, and market access to village communities, enabling sustainable aquaculture and regenerative farming practices.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-text-highlight mr-2 mt-1">→</span>
                    <span className="text-text-primary font-medium">Development of Community Health Centers</span>
                  </div>
                  <p className="text-text-secondary text-sm ml-4">
                    Our clinics deliver essential healthcare services, maternal support, and preventative care—bridging the gap between extraction and wellbeing.
                  </p>
                  
                  <div className="flex items-start">
                    <span className="text-text-highlight mr-2 mt-1">→</span>
                    <span className="text-text-primary font-medium">Recreation and Sports Facilities</span>
                  </div>
                  <p className="text-text-secondary text-sm ml-4">
                    We construct multi-use recreational spaces that foster youth engagement, physical wellness, and community cohesion.
                  </p>
                  
                  <div className="flex items-start">
                    <span className="text-text-highlight mr-2 mt-1">→</span>
                    <span className="text-text-primary font-medium">Water Pipeline Connectivity Projects</span>
                  </div>
                  <p className="text-text-secondary text-sm ml-4">
                    Adonnow engineers and installs water pipelines to ensure clean, reliable access—turning scarcity into abundance.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="bg-gradient-to-r from-canvas-dark/40 to-transparent p-6 rounded-lg border border-border">
              <h3 className="font-heading text-xl mb-4 text-text-highlight">Ethical Extraction, Lasting Impact</h3>
              <p className="text-text-secondary font-body">
                Our community development framework ensures that every mineral extracted contributes to a living legacy—supporting local economies, respecting cultural rhythms, and aligning with international ESG standards and sustainability reporting. <span className="text-text-highlight font-bold">Adonnow does not just mine—we build futures.</span>
              </p>
            </div>
          </div>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Sustainable Development Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-lg mb-4 text-text-primary">Community Programs</h3>
              <ul className="space-y-3">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Local Employment & Training</span> - Direct employment with skill transfer programs
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Educational Scholarships</span> - Full-ride scholarships for mining community youth
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Healthcare Infrastructure</span> - Clinics, maternal care, and preventative health
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Clean Water Access Projects</span> - Pipeline systems and purification facilities
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Women & Youth Empowerment</span> - Vocational training and entrepreneurship programs
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4 text-text-primary">Environmental Stewardship</h3>
              <ul className="space-y-3">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Land Rehabilitation Programs</span> - Complete restoration of mined areas
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Biodiversity Protection</span> - Conservation corridors and wildlife protection
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Carbon-Neutral Logistics</span> - Electric transport and renewable energy use
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Water Conservation Systems</span> - Recycling and rainwater harvesting
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2 mt-1">•</span>
                  <span className="font-medium text-text-primary">Sustainable Farming Support</span> - Regenerative agriculture training
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

        <DepthContainer depth="raised" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Community Development Gallery
          </h2>
          <ImageGallerySwiper
            images={communityImages}
            altPrefix="Community development"
            className="mt-4"
          />
        </DepthContainer>

        <DepthContainer depth="engraved" className="p-6 md:p-8 text-center">
          <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-primary">
            Sustainable Partnership Inquiry
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Join us in building lasting legacies. Learn about our community development initiatives and sustainable mineral extraction practices that transform lives while respecting the earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleChatInquiry}
              className="rounded-[18px] px-6 py-3 bg-gradient-to-r from-[#d4c8ae]/10 to-[#d4c8ae]/5 border border-[#d4c8ae]/30 text-[#d4c8ae] hover:border-[#d4c8ae]/50 hover:from-[#d4c8ae]/15 hover:to-[#d4c8ae]/10 transition-all duration-300 font-body font-medium shadow-permanent-button flex items-center justify-center gap-2"
            >
              💬 Chat About Sustainability
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
            >
              Request Sustainability Report →
            </button>
          </div>
        </DepthContainer>
      </div>
    </div>
  );
};

export default CommunityDevelopment;