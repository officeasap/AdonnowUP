// @/pages/OurVision.tsx
import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";

const strategicPriorities = [
  {
    title: "Supply Chain Intelligence",
    description: "Development of proprietary sourcing networks across verified mining operations in Tanzania, DRC, and Rwanda with real-time monitoring of extraction volumes, processing quality, and logistics efficiency. We implement predictive analytics for supply chain optimization, strategic reserve management, and risk mitigation while maintaining transparent custody transfer protocols ensuring traceability from mine to market for institutional clients requiring certified mineral provenance and consistent quality standards."
  },
  {
    title: "Compliance Infrastructure",
    description: "Adherence to international trade regulations and export certification requirements through integrated compliance management systems covering Kimberley Process, OECD Due Diligence, Conflict Minerals Regulation, and Basel Convention provisions. We maintain certification renewals, regulatory updates, and audit preparation frameworks while implementing risk-based due diligence procedures for enhanced transparency and legal protection in complex cross-border mineral trading environments."
  },
  {
    title: "Market Access",
    description: "Expansion of buyer relationships across industrial manufacturers, sovereign wealth funds, and financial institutions in Asia, Europe, and the Americas through strategic partnerships and volume trading agreements. We develop market entry strategies for new mineral categories, negotiate preferential terms with premium buyers, and establish consignment arrangements with certified refineries and vault facilities enhancing liquidity and price realization for sourced commodities."
  }
];

const visionPillars = [
  {
    number: "01",
    title: "Sustainability",
    description: "Commitment to ethical sourcing, environmental stewardship, and community development initiatives creating lasting positive impact in mining regions through water conservation, land rehabilitation, and biodiversity protection programs. We implement carbon-neutral logistics, fair labor practices, and transparent benefit-sharing mechanisms ensuring responsible mineral extraction that supports local economies while meeting international ESG standards and sustainability reporting requirements."
  },
  {
    number: "02",
    title: "Innovation",
    description: "Implementation of advanced verification technologies, blockchain-enabled supply chain transparency, and AI-driven market analytics for optimized trading strategies and risk management. We invest in spectroscopic analysis equipment, digital documentation systems, and logistics tracking platforms enhancing operational efficiency, compliance assurance, and value delivery across the complete mineral trading lifecycle from sourcing to final settlement."
  },
  {
    number: "03",
    title: "Growth",
    description: "Strategic expansion into new mineral markets and geographic regions through partnerships, acquisitions, and organic development establishing Adonnow as East Africa's premier institutional mineral trading partner. We target expansion into platinum group metals, rare earth elements, and battery minerals while developing value-added services including refining partnerships, vaulting solutions, and structured financing products for diversified revenue streams and enhanced client service capabilities."
  }
];

const additionalSections = [
  {
    title: "Geographic Expansion",
    description: "Establishing operational hubs in key mineral regions across Africa including Zambia's copper belt, South Africa's platinum districts, and West African gold fields with strategic partnerships extending to Asian refining centers, European vault networks, and American industrial consumers. We develop localized expertise in regional regulations, logistics infrastructure, and market dynamics while maintaining centralized compliance oversight and quality control ensuring consistent service delivery across expanding operational territories."
  },
  {
    title: "Technological Integration",
    description: "Implementing blockchain for immutable supply chain transparency recording extraction coordinates, processing history, and custody transfers while utilizing AI-driven market analytics for price forecasting, demand prediction, and trading strategy optimization. We deploy IoT sensors for real-time logistics monitoring, automated documentation systems for regulatory compliance, and digital platforms for client reporting enhancing operational efficiency and institutional-grade service delivery."
  }
];

const OurVision = () => {
  return (
    <div className="min-h-screen bg-canvas pt-20 md:pt-28 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 text-text-primary">
            Strategic Vision
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg max-w-2xl mx-auto">
            Institutional framework for East Africa's premier mineral trading enterprise
          </p>
        </motion.div>

        {/* Strategic Priorities */}
        <motion.section
          className="mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text-highlight">
            Strategic Priorities
          </h2>
          <div className="space-y-6">
            {strategicPriorities.map((priority, index) => (
              <DepthContainer key={priority.title} depth="engraved" className="p-6">
                <h3 className="font-heading text-xl mb-4">{priority.title}</h3>
                <p className="text-text-secondary font-body text-base leading-relaxed">
                  {priority.description}
                </p>
              </DepthContainer>
            ))}
          </div>
        </motion.section>

        {/* Vision Pillars */}
        <motion.section
          className="mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text-highlight">
            Vision Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {visionPillars.map((pillar, index) => (
              <DepthContainer key={pillar.number} className="p-6">
                <div className="text-text-highlight font-heading text-2xl mb-4">
                  {pillar.number}
                </div>
                <h3 className="font-heading text-xl mb-4">{pillar.title}</h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </DepthContainer>
            ))}
          </div>
        </motion.section>

        {/* Additional Sections */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-text-highlight">
            Expansion Framework
          </h2>
          <div className="space-y-6">
            {additionalSections.map((section, index) => (
              <DepthContainer key={section.title} depth="engraved" className="p-6">
                <h3 className="font-heading text-xl mb-4">{section.title}</h3>
                <p className="text-text-secondary font-body text-base leading-relaxed">
                  {section.description}
                </p>
              </DepthContainer>
            ))}
          </div>
        </motion.section>

        {/* Vision Statement */}
        <DepthContainer className="p-6 md:p-8 text-center">
          <h3 className="font-heading text-xl md:text-2xl mb-4">
            Vision Realization Timeline
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-text-highlight font-heading text-2xl mb-2">2024-2025</div>
              <p className="text-text-secondary text-sm">Technology Integration & Market Expansion</p>
            </div>
            <div className="text-center">
              <div className="text-text-highlight font-heading text-2xl mb-2">2026-2027</div>
              <p className="text-text-secondary text-sm">Regional Leadership & Product Diversification</p>
            </div>
            <div className="text-center">
              <div className="text-text-highlight font-heading text-2xl mb-2">2028+</div>
              <p className="text-text-secondary text-sm">Global Institutional Partnership Establishment</p>
            </div>
          </div>
        </DepthContainer>
      </div>
    </div>
  );
};

export default OurVision;