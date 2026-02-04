import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";
import ImageMaximizer from "@/components/ImageMaximizer"; // ADD THIS IMPORT
import ImageGallerySwiper from "@/components/ImageGallerySwiper";

const coltanImages = [
  "/mineral-images/coltan1.png",
  "/mineral-images/coltan2.png",
  "/mineral-images/coltan3.png",
  "/mineral-images/coltan4.png",
  "/mineral-images/coltan3.png",
  "/mineral-images/coltan6.png",
  "/mineral-images/coltan7.png",
  "/mineral-images/coltan8.png"
];

const Coltan = () => {
  const navigate = useNavigate();

  const handleChatInquiry = () => {
    window.dispatchEvent(new CustomEvent('open-adonnow-chat', {
      detail: {
        mineral: 'coltan',
        type: 'sourcing',
        title: 'Conflict-Free Coltan'
      }
    }));
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
            Coltan (Columbite-Tantalite)
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed">
            Conflict-free tantalum ore (Coltan) from verified DRC and Rwandan sources for electronics, aerospace, and medical technology applications. Our Coltan meets OECD due diligence requirements with full supply chain transparency and traceability documentation. We provide tantalum pentoxide (Ta₂O₅) content analysis, mineralogical certification, and export compliance for technology manufacturers requiring responsibly sourced critical minerals.
          </p>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Tantalum Ore Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg mb-4">Technical Specifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Ta₂O₅ Content: 20% - 40%
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Grain Size: 0.5mm - 5mm
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Moisture Content: &lt; 2%
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Packaging: 1-tonne bulk bags
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Compliance Certifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  OECD Due Diligence Compliant
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Conflict-Free Sourcing Certified
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  CFSI (Conflict-Free Sourcing Initiative)
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  DRC Mining Code Compliant
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

     
<DepthContainer depth="raised" className="p-6 mb-8">
  <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
    Coltan Ore Gallery
  </h2>
  <ImageGallerySwiper
    images={coltanImages}
    altPrefix="Coltan ore"
    className="mt-4"
  />
</DepthContainer>

        <DepthContainer depth="engraved" className="p-6 md:p-8 text-center">
          <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-primary">
            Conflict-Free Coltan Inquiry
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Request our conflict-free Coltan portfolio with complete OECD due diligence documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleChatInquiry}
              className="rounded-[18px] px-6 py-3 bg-gradient-to-r from-[#d4c8ae]/10 to-[#d4c8ae]/5 border border-[#d4c8ae]/30 text-[#d4c8ae] hover:border-[#d4c8ae]/50 hover:from-[#d4c8ae]/15 hover:to-[#d4c8ae]/10 transition-all duration-300 font-body font-medium shadow-permanent-button flex items-center justify-center gap-2"
            >
              💬 Instant Chat Inquiry
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
            >
              View Coltan Specifications →
            </button>
          </div>
        </DepthContainer>
      </div>
    </div>
  );
};

export default Coltan;