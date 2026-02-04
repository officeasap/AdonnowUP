import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";
import ImageMaximizer from "@/components/ImageMaximizer"; // ADD THIS IMPORT
import ImageGallerySwiper from "@/components/ImageGallerySwiper";

const smeltingImages = [
  "/mineral-images/goldsmelting1.png",
  "/mineral-images/goldsmelting2.png",
  "/mineral-images/goldsmelting3.png",
  "/mineral-images/goldsmelting4.png"
];

const Smelting = () => {
  const navigate = useNavigate();

const handleChatInquiry = () => {
  console.log('💬 Smelting chat button clicked');
  
  const chatEvent = new CustomEvent('open-adonnow-chat', {
    detail: {
      mineral: 'smelting',
      type: 'services',
      title: 'Industrial Smelting Services',
      source: 'smelting-page-button'
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
            Industrial Smelting
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed">
            Adonnow Trading Limited operates LBMA-compliant smelting facilities for precious and base metals including gold, silver, copper, and platinum group metals. Our induction furnace technology ensures 99.95%+ purity with full traceability from doré bars to certified ingots. We maintain environmental controls, Tanzanian Mining Commission licensing, and ISO 9001 quality certification for institutional clients requiring verifiable refining capacity.
          </p>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg mb-4">Furnace Capabilities</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Capacity: 50kg - 500kg per batch
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Temperature Range: 1,000°C - 1,600°C
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Processing Time: 4-8 hours
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Metal Recovery: 99.2%+
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  LBMA Good Delivery Compliance
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  ISO 9001:2015 Quality Management
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Tanzanian Mining Commission Licensed
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Environmental Compliance Certified
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

      
<DepthContainer depth="raised" className="p-6 mb-8">
  <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
    Smelting Operations Gallery
  </h2>
  <ImageGallerySwiper
    images={smeltingImages}
    altPrefix="Smelting operation"
    className="mt-4"
  />
</DepthContainer>

        <DepthContainer depth="engraved" className="p-6 md:p-8 text-center">
          <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-primary">
            Smelting Services Inquiry
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Contact our metallurgical specialists for smelting capacity, pricing, and certification requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleChatInquiry}
              className="rounded-[18px] px-6 py-3 bg-gradient-to-r from-[#d4c8ae]/10 to-[#d4c8ae]/5 border border-[#d4c8ae]/30 text-[#d4c8ae] hover:border-[#d4c8ae]/50 hover:from-[#d4c8ae]/15 hover:to-[#d4c8ae]/10 transition-all duration-300 font-body font-medium shadow-permanent-button flex items-center justify-center gap-2"
            >
              💬 Chat About Smelting
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
            >
              Request Smelting Quotation →
            </button>
          </div>
        </DepthContainer>
      </div>
    </div>
  );
};

export default Smelting;