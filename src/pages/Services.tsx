// @/pages/Services.tsx - Updated
import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";

const services = [
  {
    title: "Mineral Sourcing",
    description: "Direct procurement from verified mining operations across East Africa with established partnerships in Tanzania, Democratic Republic of Congo, and Rwanda. Our sourcing network ensures traceability and ethical extraction practices through comprehensive site audits and transparency protocols."
  },
  {
    title: "Quality Verification",
    description: "Comprehensive laboratory analysis, purity testing, and certification services utilizing advanced spectroscopic equipment including X-ray fluorescence and mass spectrometry. We provide third-party assay verification and issue internationally recognized certificates of authenticity."
  },
  {
    title: "Export Documentation",
    description: "Complete licensing, customs clearance, and regulatory compliance management for cross-border mineral trading. We handle all documentation requirements including Certificates of Origin, Kimberley Process certificates, and OECD due diligence reports."
  },
  {
    title: "Logistics Coordination",
    description: "Secure transport and delivery management to international destinations through armored transport, specialized containerization, and real-time GPS tracking systems. We coordinate with certified logistics partners for land, sea, and air freight."
  },
  {
    title: "Trade Financing",
    description: "Letters of credit, payment term negotiation, and transaction facilitation services through established relationships with international financial institutions. We provide structured financing solutions including prepayment facilities and escrow services."
  },
  {
    title: "Market Advisory",
    description: "Pricing intelligence, demand analysis, and strategic guidance based on real-time market data and proprietary forecasting models. We provide institutional clients with market positioning strategies and competitor analysis."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-canvas pt-16 md:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER - Canonical Pattern */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 text-text-primary">
            Adonnow Trading Limited Services
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive mineral trading solutions from sourcing to delivery
          </p>
        </motion.div>

        {/* SERVICES GRID - Canonical Depth Pattern */}
        <div className="space-y-6 md:space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <DepthContainer depth="engraved" className="p-6 md:p-8 hover:translate-y-[-1px] transition-transform duration-200">
                <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-highlight">
                  {service.title}
                </h3>
                <p className="text-text-secondary font-body text-base leading-relaxed">
                  {service.description}
                </p>
              </DepthContainer>
            </motion.div>
          ))}
        </div>

        {/* CAPABILITY STATEMENT - Canonical Pattern */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <DepthContainer depth="raised" className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-lg md:text-xl mb-4 text-text-highlight">
                  Integrated Service Delivery
                </h4>
                <p className="text-text-secondary font-body text-base leading-relaxed">
                  Our service model integrates all trading functions under single-point accountability, eliminating coordination gaps between sourcing, verification, logistics, and financing.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg md:text-xl mb-4 text-text-highlight">
                  Institutional Partnerships
                </h4>
                <p className="text-text-secondary font-body text-base leading-relaxed">
                  We maintain strategic partnerships with sovereign wealth funds, industrial manufacturers, and financial institutions requiring secure, compliant mineral supply chains.
                </p>
              </div>
            </div>
          </DepthContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;