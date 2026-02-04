import { motion } from "framer-motion";
import { CheckCircle, Shield, Globe, FileText, TrendingUp, Award } from "lucide-react";
import DepthContainer from "@/components/DepthContainer";

const Certification = () => {
  const certificationStandards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "LME Certified",
      description: "London Metal Exchange Grade A certification for copper cathodes and other base metals",
      compliance: "ISO 9001:2015 • ASTM B115",
      color: "from-amber-500/20 to-amber-600/10"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Conflict-Free Verification",
      description: "OECD Due Diligence compliance for tantalum, tin, tungsten, and gold (3TG minerals)",
      compliance: "OECD Guidelines • RMI Compliance",
      color: "from-emerald-500/20 to-emerald-600/10"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "GIA Certification",
      description: "Gemological Institute of America grading for tanzanite and precious gemstones",
      compliance: "GIA Standards • CIBJO Guidelines",
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Export Documentation",
      description: "Complete export dossier including certificates of origin, assay reports, and phytosanitary certificates",
      compliance: "ICC Guidelines • National Standards",
      color: "from-purple-500/20 to-purple-600/10"
    }
  ];

  const certificationProcess = [
    { step: 1, title: "Source Verification", description: "Mine-site inspection and ethical sourcing validation" },
    { step: 2, title: "Laboratory Assay", description: "Independent third-party chemical and physical analysis" },
    { step: 3, title: "Documentation", description: "Complete export compliance and certification paperwork" },
    { step: 4, title: "Final Verification", description: "Quality control and compliance cross-check" }
  ];

  const globalRecognition = [
    "London Metal Exchange (LME)",
    "Gemological Institute of America (GIA)",
    "Responsible Minerals Initiative (RMI)",
    "International Chamber of Commerce (ICC)",
    "OECD Due Diligence Guidelines",
    "East African Community Standards"
  ];

  return (
    <div className="min-h-screen bg-canvas pt-20 md:pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-text-primary">
            Institutional Certification
          </h1>
          <p className="text-text-secondary font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Internationally recognized mineral certification ensuring compliance, traceability, and market acceptance
            across global commodity exchanges and industrial supply chains.
          </p>
        </motion.div>

        {/* Certification Standards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificationStandards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <DepthContainer depth="engraved" className="p-6 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${standard.color} flex items-center justify-center mb-4`}>
                  <div className="text-text-highlight drop-shadow-[0_0_8px_rgba(223,212,162,0.3)]">
                    {standard.icon}
                  </div>
                </div>
                <h3 className="font-heading text-xl mb-3 text-text-primary">
                  {standard.title}
                </h3>
                <p className="text-text-secondary font-body text-sm mb-4">
                  {standard.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-text-highlight text-xs uppercase tracking-wider font-medium drop-shadow-[0_0_4px_rgba(223,212,162,0.2)]">
                    Compliance
                  </p>
                  <p className="text-text-secondary text-sm mt-1">
                    {standard.compliance}
                  </p>
                </div>
              </DepthContainer>
            </motion.div>
          ))}
        </div>

        {/* Certification Process Flow */}
        <div className="mb-16">
          <DepthContainer depth="engraved" className="p-8">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl mb-4 text-text-primary">
                Certification Process Flow
              </h2>
              <p className="text-text-secondary font-body max-w-2xl mx-auto">
                Our four-stage verification process ensures every shipment meets international standards
                with complete traceability from mine to market.
              </p>
            </div>

            {/* Process Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-4 md:left-8 right-4 md:right-8 top-12 h-0.5 bg-border hidden md:block" />
              
              <div className="grid md:grid-cols-4 gap-8">
                {certificationProcess.map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-canvas-dark border-2 border-border mx-auto mb-6 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-text-highlight/30 to-transparent flex items-center justify-center">
                          <span className="font-heading text-3xl text-text-highlight drop-shadow-[0_0_10px_rgba(223,212,162,0.4)]">
                            {process.step}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-heading text-xl mb-3 text-text-primary">
                      {process.title}
                    </h3>
                    <p className="text-text-secondary font-body text-sm">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </DepthContainer>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Global Recognition */}
          <DepthContainer depth="engraved" className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center mr-4">
                <Globe className="w-5 h-5 text-text-highlight drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]" />
              </div>
              <h2 className="font-heading text-2xl text-text-primary">
                Global Recognition
              </h2>
            </div>
            <p className="text-text-secondary font-body mb-6">
              Our certifications are recognized and accepted by major international commodity exchanges,
              industrial buyers, and regulatory bodies worldwide.
            </p>
            <div className="space-y-4">
              {globalRecognition.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-text-highlight mr-3 flex-shrink-0 drop-shadow-[0_0_6px_rgba(223,212,162,0.4)]" />
                  <span className="text-text-primary font-body">{item}</span>
                </motion.div>
              ))}
            </div>
          </DepthContainer>

          {/* Benefits */}
          <DepthContainer depth="engraved" className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center mr-4">
                <TrendingUp className="w-5 h-5 text-text-highlight drop-shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
              </div>
              <h2 className="font-heading text-2xl text-text-primary">
                Market Advantages
              </h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-text-highlight text-sm font-bold drop-shadow-[0_0_6px_rgba(223,212,162,0.4)]">
                    1
                  </span>
                </div>
                <div>
                  <h4 className="font-heading text-lg text-text-primary mb-1">
                    Premium Pricing
                  </h4>
                  <p className="text-text-secondary font-body text-sm">
                    Certified minerals command premium prices on international markets with reduced buyer due diligence.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-text-highlight text-sm font-bold drop-shadow-[0_0_6px_rgba(223,212,162,0.4)]">
                    2
                  </span>
                </div>
                <div>
                  <h4 className="font-heading text-lg text-text-primary mb-1">
                    Faster Clearance
                  </h4>
                  <p className="text-text-secondary font-body text-sm">
                    Pre-verified shipments experience expedited customs clearance and reduced regulatory scrutiny.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-text-highlight text-sm font-bold drop-shadow-[0_0_6px_rgba(223,212,162,0.4)]">
                    3
                  </span>
                </div>
                <div>
                  <h4 className="font-heading text-lg text-text-primary mb-1">
                    Risk Mitigation
                  </h4>
                  <p className="text-text-secondary font-body text-sm">
                    Comprehensive documentation protects against compliance risks and supply chain disputes.
                  </p>
                </div>
              </li>
            </ul>
          </DepthContainer>
        </div>

        {/* CTA Section */}
        <DepthContainer depth="engraved" className="p-8 text-center">
          <h2 className="font-heading text-3xl mb-4 text-text-primary">
            Request Certification Documents
          </h2>
          <p className="text-text-secondary font-body text-lg mb-8 max-w-2xl mx-auto">
            Access sample certificates, compliance templates, or request specific mineral certification
            for your procurement requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = "/contact"}
              className="mobile-menu-btn active min-w-[200px] shadow-[0_0_20px_rgba(223,212,162,0.3)]"
            >
              <span className="text-text-highlight drop-shadow-[0_0_8px_rgba(223,212,162,0.5)]">
                Request Samples
              </span>
            </button>
            <button
              onClick={() => window.location.href = "/minerals"}
              className="mobile-menu-btn min-w-[200px]"
            >
              <span className="text-text-primary drop-shadow-[0_0_4px_rgba(249,249,245,0.3)]">
                View Certified Minerals
              </span>
            </button>
          </div>
          <p className="text-text-secondary font-body text-sm mt-6">
            Average certification processing time: 3-5 business days
          </p>
        </DepthContainer>
      </div>
    </div>
  );
};

export default Certification;
