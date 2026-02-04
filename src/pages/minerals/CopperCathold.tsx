import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";
import ImageMaximizer from "@/components/ImageMaximizer"; // ADD THIS IMPORT
import ImageGallerySwiper from "@/components/ImageGallerySwiper";

const copperImages = [
  "/mineral-images/copper1.png",
  "/mineral-images/copper2.png",
  "/mineral-images/copper3.png",
  "/mineral-images/copper4.png",
  "/mineral-images/copper3.png",
  "/mineral-images/copper6.png",
  "/mineral-images/copper7.png",
  "/mineral-images/copper8.png"
];

const CopperCathold = () => {
  const navigate = useNavigate();

 const handleChatInquiry = () => {
  console.log('💬 Copper chat button clicked');
  
  const chatEvent = new CustomEvent('open-adonnow-chat', {
    detail: {
      mineral: 'copper',
      type: 'logistics',
      title: 'LME Grade A Copper',
      source: 'copper-page-button'
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
            Copper Cathode
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed">
            LME Grade A copper cathodes for global electrification infrastructure, renewable energy systems, and industrial manufacturing. Our cathodes meet London Metal Exchange specifications with 99.99% minimum purity and full traceability from DRC and Zambian copper belt mines to international delivery. We maintain strategic inventories with just-in-time logistics for industrial clients across automotive, construction, and technology sectors.
          </p>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            LME Grade A Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg mb-4">Technical Specifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Purity: Minimum 99.99% Cu
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Form: Standard 125kg cathode plates
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Dimensions: 1000mm × 1000mm × 15mm
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Packaging: Palletized, shrink-wrapped
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Quality Certifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  LME Grade A Listed
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  ISO 9001:2015 Quality Management
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  ASTM B115 Standard Compliance
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Conflict-Free Sourcing Certification
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

      
<DepthContainer depth="raised" className="p-6 mb-8">
  <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
    Copper Cathode Gallery
  </h2>
  <ImageGallerySwiper
    images={copperImages}
    altPrefix="Copper cathode"
    className="mt-4"
  />
</DepthContainer>

        <DepthContainer depth="engraved" className="p-6 md:p-8 text-center">
          <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-primary">
            Copper Cathode Procurement
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Inquire about LME Grade A copper cathodes for industrial manufacturing and infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleChatInquiry}
              className="rounded-[18px] px-6 py-3 bg-gradient-to-r from-[#d4c8ae]/10 to-[#d4c8ae]/5 border border-[#d4c8ae]/30 text-[#d4c8ae] hover:border-[#d4c8ae]/50 hover:from-[#d4c8ae]/15 hover:to-[#d4c8ae]/10 transition-all duration-300 font-body font-medium shadow-permanent-button flex items-center justify-center gap-2"
            >
              💬 Instant Copper Inquiry
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
            >
              Request Copper Quotation →
            </button>
          </div>
        </DepthContainer>
      </div>
    </div>
  );
};

export default CopperCathold;