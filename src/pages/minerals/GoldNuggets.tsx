import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";
import ImageMaximizer from "@/components/ImageMaximizer"; // ADD THIS IMPORT
import ImageGallerySwiper from "@/components/ImageGallerySwiper";

const goldNuggetsImages = [
  "/mineral-images/goldnuggets1.png",
  "/mineral-images/goldnuggets2.png",
  "/mineral-images/goldnuggets3.png",
  "/mineral-images/goldnuggets4.png",
  "/mineral-images/goldnuggets5.png",
  "/mineral-images/goldnuggets6.png",
  "/mineral-images/goldnuggets7.png",
  "/mineral-images/goldnuggets8.png"
];

const GoldNuggets = () => {
  const navigate = useNavigate();

const handleChatInquiry = () => {
  console.log('💬 Gold Nuggets chat button clicked');
  
  const chatEvent = new CustomEvent('open-adonnow-chat', {
    detail: {
      mineral: 'gold',
      type: 'collection',
      title: 'Natural Gold Nuggets',
      source: 'goldnuggets-page-button'
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
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 text-text-primary">
            Gold Nuggets
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed">
            Natural gold nuggets and specimens from Tanzanian alluvial deposits, preserved in their original form for collectors, investors, and jewelry manufacturers. Each nugget is authenticated for natural formation with purity verification and geographic provenance documentation. Our collection includes specimens ranging from 1 gram to 500+ grams with unique crystalline structures and natural character maintained through ethical extraction methods.
          </p>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Natural Specimen Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg mb-4">Specimen Characteristics</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Weight Range: 1g - 500g+
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Purity: 85% - 95% natural gold content
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Form: Alluvial / Placer deposits
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Origin: Tanzanian river systems
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Natural Formation Authentication
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Purity Verification Certificate
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Geographic Provenance Documentation
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Kimberley Process Compliance
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

    
<DepthContainer depth="raised" className="p-6 mb-8">
  <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
    Gold Nuggets Gallery
  </h2>
  <ImageGallerySwiper
    images={goldNuggetsImages}
    altPrefix="Gold nugget specimen"
    className="mt-4"
  />
</DepthContainer>

        <DepthContainer depth="engraved" className="p-6 md:p-8 text-center">
          <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-primary">
            Natural Gold Specimens Inquiry
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Browse our collection of authenticated natural gold nuggets with complete provenance documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleChatInquiry}
              className="rounded-[18px] px-6 py-3 bg-gradient-to-r from-[#d4c8ae]/10 to-[#d4c8ae]/5 border border-[#d4c8ae]/30 text-[#d4c8ae] hover:border-[#d4c8ae]/50 hover:from-[#d4c8ae]/15 hover:to-[#d4c8ae]/10 transition-all duration-300 font-body font-medium shadow-permanent-button flex items-center justify-center gap-2"
            >
              💬 Chat About Nuggets
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
            >
              View Natural Gold Collection →
            </button>
          </div>
        </DepthContainer>
      </div>
    </div>
  );
};

export default GoldNuggets;