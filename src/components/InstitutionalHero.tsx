// @/components/InstitutionalHero.tsx
import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const InstitutionalHero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 pt-16 md:pt-24 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center lg:text-left"
          >
            <p className="text-text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-body">
              Adonnow Trading Limited
            </p>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              <span className="block text-text-highlight">Mineral Trade</span>
              <span className="block text-text-primary">Operational Authority</span>
            </h1>

            <p className="text-text-secondary font-body text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Verified mineral sourcing, authentication, and sovereign-grade logistics for institutional clients and industrial partners across global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/minerals")}
                className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
              >
                View Mineral Portfolio
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="rounded-[18px] px-6 py-3 bg-canvas text-text-primary border-2 border-border-dark shadow-permanent font-body font-medium hover:brightness-102 transition-all duration-200"
              >
                Contact Trading Desk
              </button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <DepthContainer depth="engraved" className="p-5 md:p-8">
              <div className="aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-canvas-dark">
                <img
                  src="/mineral-images/goldbars1.png"
                  alt="LBMA Gold Bars - Institutional Grade"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-6">
                <h3 className="font-heading text-xl md:text-2xl mb-2 text-text-highlight">
                  Institutional Verification
                </h3>
                <p className="text-text-secondary font-body text-sm md:text-base">
                  LBMA, LME, and OECD compliant mineral authentication with full custody documentation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <DepthContainer depth="raised" className="p-4 text-center">
                  <div className="text-text-highlight font-heading text-lg md:text-xl mb-1">
                    99.95%
                  </div>
                  <div className="text-text-secondary font-body text-xs">
                    Purity Standard
                  </div>
                </DepthContainer>
                <DepthContainer depth="raised" className="p-4 text-center">
                  <div className="text-text-highlight font-heading text-lg md:text-xl mb-1">
                    ISO 9001
                  </div>
                  <div className="text-text-secondary font-body text-xs">
                    Quality Certified
                  </div>
                </DepthContainer>
              </div>
            </DepthContainer>
          </motion.div>
        </div>

        {/* OPERATIONAL INDICATORS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 md:mt-16"
        >
          <DepthContainer depth="flat" className="p-5 md:p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-text-highlight font-heading text-2xl md:text-3xl mb-2">
                  $500M+
                </div>
                <div className="text-text-secondary font-body text-sm">
                  Mineral Volume Traded
                </div>
              </div>
              <div className="text-center">
                <div className="text-text-highlight font-heading text-2xl md:text-3xl mb-2">
                  3 Countries
                </div>
                <div className="text-text-secondary font-body text-sm">
                  Operational Presence
                </div>
              </div>
              <div className="text-center">
                <div className="text-text-highlight font-heading text-2xl md:text-3xl mb-2">
                  24/7
                </div>
                <div className="text-text-secondary font-body text-sm">
                  Logistics Monitoring
                </div>
              </div>
            </div>
          </DepthContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalHero;