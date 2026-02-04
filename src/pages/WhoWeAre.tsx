import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas pt-20 md:pt-28 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
            Who We Are
          </h1>
          <p className="text-text-secondary font-body text-sm md:text-base max-w-2xl mx-auto">
            A premier mineral trading company connecting East African resources to global markets
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Company Information - Left Side */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* Company Profile */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <div className="flex items-center mb-4">
                <Logo size="sm" />
                <div className="ml-4">
                  <h2 className="font-heading text-xl md:text-2xl">Adonnow Trading Limited</h2>
                  <p className="text-text-secondary font-body text-xs md:text-sm">Established 2022</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-text-primary font-body text-sm md:text-base leading-relaxed">
                  A Nairobi-based mineral trading company specializing in the export of strategic 
                  commodities from East Africa to international markets.
                </p>
                
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  Our operations encompass the sourcing, verification, and facilitation of trade in 
                  copper cathodes, tantalum ore (coltan), refined gold, and Tanzanian gemstones.
                </p>
              </div>
            </DepthContainer>

            {/* Contact Card */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <h3 className="font-heading text-lg md:text-xl mb-3 md:mb-4 text-text-highlight">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-text-secondary font-body text-xs uppercase tracking-wider mb-1">Headquarters</p>
                  <p className="text-text-primary font-body text-sm md:text-base">
                    Kilimani, Nairobi, KENYA
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary font-body text-xs uppercase tracking-wider mb-1">Trading Desk</p>
                  <a 
                    href="tel:+254707513272"
                    className="text-text-highlight font-body text-sm md:text-base block"
                  >
                    +254 707 513 272
                  </a>
                </div>
                
                <div>
                  <p className="text-text-secondary font-body text-xs uppercase tracking-wider mb-1">Correspondence</p>
                  <a 
                    href="mailto:adonnowtrading@gmail.com"
                    className="text-text-highlight font-body text-sm md:text-base block break-all"
                  >
                    info@adonnowtrading.com
                  </a>
                </div>
              </div>
            </DepthContainer>

            {/* Operational Scope */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <h3 className="font-heading text-lg md:text-xl mb-3 md:mb-4 text-text-highlight">Operational Scope</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-text-highlight mt-2 mr-3"></div>
                  <p className="text-text-secondary font-body text-sm md:text-base">Direct relationships with verified mining operations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-text-highlight mt-2 mr-3"></div>
                  <p className="text-text-secondary font-body text-sm md:text-base">Certified processing facilities across East Africa</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-text-highlight mt-2 mr-3"></div>
                  <p className="text-text-secondary font-body text-sm md:text-base">International compliance and export regulation adherence</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-text-highlight mt-2 mr-3"></div>
                  <p className="text-text-secondary font-body text-sm md:text-base">Serving institutional buyers and industrial consumers</p>
                </div>
              </div>
            </DepthContainer>
          </motion.div>

          {/* Company Image & Additional Info - Right Side */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {/* Company Profile Image */}
            <DepthContainer depth="engraved" className="overflow-hidden shadow-permanent">
              <div className="relative h-64 md:h-80">
                <img
                  src="/images/AdonnowProfile.png"
                  alt="Adonnow Trading Company Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-body text-xs uppercase tracking-wider">Company Profile</p>
                  <p className="text-white font-body text-sm">Adonnow Trading Limited</p>
                </div>
              </div>
            </DepthContainer>

            {/* Core Values */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <h3 className="font-heading text-lg md:text-xl mb-3 md:mb-4 text-text-highlight">Core Values</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="shadow-permanent p-3 md:p-4 rounded-[18px] text-center">
                  <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-text-highlight text-sm">✓</span>
                  </div>
                  <p className="text-text-secondary font-body text-xs md:text-sm">Integrity</p>
                </div>
                
                <div className="shadow-permanent p-3 md:p-4 rounded-[18px] text-center">
                  <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-text-highlight text-sm">✓</span>
                  </div>
                  <p className="text-text-secondary font-body text-xs md:text-sm">Transparency</p>
                </div>
                
                <div className="shadow-permanent p-3 md:p-4 rounded-[18px] text-center">
                  <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-text-highlight text-sm">✓</span>
                  </div>
                  <p className="text-text-secondary font-body text-xs md:text-sm">Reliability</p>
                </div>
                
                <div className="shadow-permanent p-3 md:p-4 rounded-[18px] text-center">
                  <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-text-highlight text-sm">✓</span>
                  </div>
                  <p className="text-text-secondary font-body text-xs md:text-sm">Excellence</p>
                </div>
              </div>
            </DepthContainer>

            {/* Market Positioning */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <h3 className="font-heading text-lg md:text-xl mb-3 md:mb-4 text-text-highlight">Market Positioning</h3>
              <p className="text-text-primary font-body text-sm md:text-base leading-relaxed mb-4">
                We maintain direct relationships with verified mining operations and certified 
                processing facilities across the region.
              </p>
              <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                The company serves institutional buyers, industrial consumers, and commodity traders 
                requiring reliable access to African mineral resources. All transactions adhere to 
                international compliance standards and regional export regulations.
              </p>
            </DepthContainer>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl mb-3 md:mb-4">
              Explore Our Strategic Direction
            </h2>
            <p className="text-text-secondary font-body text-sm md:text-base mb-4 md:mb-6 max-w-xl mx-auto">
              Discover how our foundation translates into strategic vision and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/our-vision")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
              >
                Our Vision
              </button>
              <button
                onClick={() => navigate("/expertise")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
              >
                Our Expertise
              </button>
              <button
                onClick={() => navigate("/minerals")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
              >
                Mineral Portfolio
              </button>
            </div>
          </DepthContainer>
        </motion.div>

        {/* Mobile Optimization Note */}
        <div className="mt-8 text-center lg:hidden">
          <p className="text-text-secondary font-body text-xs">
            All company information cards feature permanent raised effect with detailed insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;