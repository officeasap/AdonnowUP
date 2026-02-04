// @/pages/Expertise.tsx
import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const expertiseAreas = [
  {
    title: "Mineral Authentication",
    description: "Comprehensive laboratory verification, purity analysis, and origin certification utilizing advanced spectroscopic equipment and blockchain-enabled traceability systems. We implement international certification standards including OECD due diligence requirements and LBMA compliance protocols."
  },
  {
    title: "Market Intelligence",
    description: "Real-time pricing data collection, demand forecasting, and strategic market positioning through proprietary analytics platforms monitoring global commodity exchanges and industrial consumption patterns across precious metals and strategic minerals."
  },
  {
    title: "Logistics Coordination",
    description: "End-to-end supply chain management from extraction sites to international delivery through integrated logistics platforms coordinating armored transport, specialized containerization, and multi-modal transit with real-time tracking and insurance-backed protection."
  },
  {
    title: "Regulatory Compliance",
    description: "Export licensing management, OECD due diligence implementation, and cross-border trade documentation ensuring adherence to international regulations including Kimberley Process Certification, Conflict Minerals Regulation, and destination country import requirements."
  }
];

const Expertise = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas pt-16 md:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 text-text-primary">
            Institutional Expertise
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg max-w-2xl mx-auto">
            Specialized capabilities defining our sovereign-grade approach to mineral trading
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
            >
              <DepthContainer depth="engraved" className="p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-highlight">
                  {area.title}
                </h3>
                <p className="text-text-secondary font-body text-base leading-relaxed">
                  {area.description}
                </p>
              </DepthContainer>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DepthContainer depth="raised" className="p-6 md:p-8 text-center">
            <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-primary">
              Engage Our Expertise
            </h3>
            <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
              Connect with our specialists to navigate complex mineral trading with confidence and compliance assurance.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
            >
              Consult Our Experts →
            </button>
          </DepthContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Expertise;