import { motion } from "framer-motion";
import { 
  Truck, Ship, Plane, Train, Shield, Clock, Globe, 
  MapPin, Package, CheckCircle, BarChart, Users,
  Anchor, Warehouse, Lock, FileText, RadioTower, Cpu,
  ShieldCheck, DownloadCloud
} from "lucide-react";
import DepthContainer from "@/components/DepthContainer";

const Logistics = () => {
  const logisticsCapabilities = [
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Road Transport",
      description: "Secure overland transport with GPS-tracked armored vehicles",
      features: ["Temperature-controlled containers", "24/7 Satellite tracking", "Armed security escorts"],
      color: "from-amber-500/20 to-amber-600/10"
    },
    {
      icon: <Train className="w-7 h-7" />,
      title: "Rail Logistics",
      description: "Intermodal rail solutions across East African rail networks",
      features: ["Dedicated mineral wagons", "Port-rail direct transfer", "Customs pre-clearance"],
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: <Ship className="w-7 h-7" />,
      title: "Maritime Shipping",
      description: "Bulk carrier and container shipping from Dar es Salaam & Mombasa ports",
      features: ["FOB/CIF terms available", "Bonded warehousing", "Port-side sampling"],
      color: "from-emerald-500/20 to-emerald-600/10"
    },
    {
      icon: <Plane className="w-7 h-7" />,
      title: "Air Freight",
      description: "Express air cargo for high-value precious minerals and gemstones",
      features: ["IATA compliant packaging", "Brinks-level security", "Same-day dispatch"],
      color: "from-purple-500/20 to-purple-600/10"
    }
  ];

  const keyPorts = [
    { name: "Dar es Salaam Port", country: "Tanzania", capacity: "25M tons/year", icon: <Anchor className="w-5 h-5" /> },
    { name: "Mombasa Port", country: "Kenya", capacity: "30M tons/year", icon: <Anchor className="w-5 h-5" /> },
    { name: "Djibouti Port", country: "Djibouti", capacity: "20M tons/year", icon: <Anchor className="w-5 h-5" /> },
    { name: "Jomo Kenyatta Airport", country: "Kenya", type: "Air Cargo", icon: <Plane className="w-5 h-5" /> },
    { name: "Kilindini Harbour", country: "Kenya", capacity: "Deepwater Port", icon: <Ship className="w-5 h-5" /> },
    { name: "Tangier Med Port", country: "Morocco", capacity: "9M TEUs/year", icon: <Anchor className="w-5 h-5" /> }
  ];

  const securityFeatures = [
    { icon: <ShieldCheck className="w-5 h-5" />, text: "GPS/GSM real-time tracking" },
    { icon: <Lock className="w-5 h-5" />, text: "Tamper-evident seal systems" },
    { icon: <RadioTower className="w-5 h-5" />, text: "Geofenced route monitoring" },
    { icon: <Cpu className="w-5 h-5" />, text: "IoT temperature & humidity sensors" },
    { icon: <Users className="w-5 h-5" />, text: "Vetted personnel only access" },
    { icon: <FileText className="w-5 h-5" />, text: "Digital chain of custody" }
  ];

  const timelineSteps = [
    { 
      day: "Day 1", 
      title: "Documentation & Clearance", 
      activities: ["Export permits", "Certificate of origin", "Customs declaration"],
      icon: <FileText className="w-5 h-5" />
    },
    { 
      day: "Day 2-3", 
      title: "Port Operations", 
      activities: ["Container loading", "Weight verification", "Seal application"],
      icon: <Warehouse className="w-5 h-5" />
    },
    { 
      day: "Day 4-10", 
      title: "Maritime Transit", 
      activities: ["Ocean freight", "Bill of lading", "Insurance activation"],
      icon: <Ship className="w-5 h-5" />
    },
    { 
      day: "Day 11-14", 
      title: "Destination Handling", 
      activities: ["Port discharge", "Import clearance", "Final delivery"],
      icon: <Truck className="w-5 h-5" />
    }
  ];

  const logisticsMetrics = [
    { value: "99.7%", label: "On-Time Delivery", icon: <Clock className="w-5 h-5" />, color: "text-emerald-500" },
    { value: "24/7", label: "Tracking Coverage", icon: <Globe className="w-5 h-5" />, color: "text-blue-500" },
    { value: "0.03%", label: "Loss/Damage Rate", icon: <Shield className="w-5 h-5" />, color: "text-amber-500" },
    { value: "48h", label: "Document Processing", icon: <FileText className="w-5 h-5" />, color: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-canvas pt-20 md:pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6 p-4 rounded-2xl bg-gradient-to-br from-text-highlight/10 to-transparent border border-border">
            <Package className="w-10 h-10 text-text-highlight mr-3" />
            <h1 className="font-heading text-3xl md:text-4xl text-text-highlight">
              Global Logistics
            </h1>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-text-primary">
            Mineral Supply Chain Excellence
          </h2>
          <p className="text-text-secondary font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            End-to-end secure logistics infrastructure connecting East African mineral sources to global markets
            with military-grade security, real-time tracking, and institutional-grade compliance.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {logisticsCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <DepthContainer depth="engraved" className="p-6 h-full hover:border-text-highlight/30 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-5`}>
                  <div className="text-text-highlight">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="font-heading text-xl mb-3 text-text-primary">
                  {capability.title}
                </h3>
                <p className="text-text-secondary font-body text-sm mb-4">
                  {capability.description}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-text-secondary text-sm">
                        <CheckCircle className="w-4 h-4 text-text-highlight mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </DepthContainer>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <DepthContainer depth="engraved" className="p-8 mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center mb-4">
              <BarChart className="w-8 h-8 text-text-highlight mr-3" />
              <h2 className="font-heading text-3xl text-text-primary">
                Operational Excellence
              </h2>
            </div>
            <p className="text-text-secondary font-body max-w-2xl mx-auto">
              Industry-leading performance metrics ensuring reliability and security across all logistics operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {logisticsMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl border border-border bg-canvas-dark/50"
              >
                <div className={`w-12 h-12 rounded-full ${metric.color}/20 flex items-center justify-center mx-auto mb-4`}>
                  {metric.icon}
                </div>
                <div className="font-heading text-4xl mb-2 font-bold text-text-primary">
                  {metric.value}
                </div>
                <div className="text-text-secondary font-body text-sm">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </DepthContainer>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Security Features */}
          <DepthContainer depth="engraved" className="p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-text-highlight" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-text-primary">
                  Security Protocol
                </h2>
                <p className="text-text-secondary font-body text-sm">
                  Multi-layered security infrastructure
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center p-3 rounded-lg border border-border hover:border-text-highlight/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-text-highlight/10 to-transparent flex items-center justify-center mr-3">
                    <div className="text-text-highlight">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-text-primary font-body text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </DepthContainer>

          {/* Key Ports */}
          <DepthContainer depth="engraved" className="p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-text-highlight" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-text-primary">
                  Strategic Port Network
                </h2>
                <p className="text-text-secondary font-body text-sm">
                  Key maritime and air logistics hubs
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {keyPorts.map((port, index) => (
                <motion.div
                  key={port.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-text-highlight/30 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-canvas-dark flex items-center justify-center mr-4">
                      {port.icon}
                    </div>
                    <div>
                      <h4 className="font-heading text-text-primary">{port.name}</h4>
                      <p className="text-text-secondary text-sm">{port.country}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-text-primary font-medium">{port.capacity || port.type}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </DepthContainer>
        </div>

        {/* Timeline Visualization */}
        <DepthContainer depth="engraved" className="p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl mb-4 text-text-primary">
              Standard Shipping Timeline
            </h2>
            <p className="text-text-secondary font-body max-w-2xl mx-auto">
              14-day optimized shipping protocol from East Africa to major global markets
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-border via-text-highlight/30 to-border hidden lg:block" />
            
            <div className="grid lg:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    <div className="w-8 h-8 rounded-full bg-canvas-dark border-2 border-text-highlight flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-text-highlight"></div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-text-highlight/10 to-transparent border border-text-highlight/20 flex items-center justify-center mx-auto mb-4">
                      <div className="text-text-highlight">
                        {step.icon}
                      </div>
                    </div>
                    <div className="font-heading text-2xl mb-2 text-text-highlight">
                      {step.day}
                    </div>
                    <h3 className="font-heading text-xl mb-4 text-text-primary">
                      {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.activities.map((activity, i) => (
                        <li key={i} className="text-text-secondary font-body text-sm">
                          • {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </DepthContainer>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <DepthContainer depth="engraved" className="p-10 text-center bg-gradient-to-br from-canvas-dark to-canvas">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h2 className="font-heading text-3xl mb-3 text-text-primary">
                  Request Logistics Consultation
                </h2>
                <p className="text-text-secondary font-body">
                  Get a custom logistics plan for your mineral shipment requirements
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.location.href = "/contact"}
                  className="mobile-menu-btn active px-8 py-4 text-base"
                >
                  <DownloadCloud className="w-5 h-5 mr-2" />
                  Get Quote
                </button>
                <button
                  onClick={() => window.location.href = "/contact?type=logistics"}
                  className="mobile-menu-btn px-8 py-4 text-base"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Documentation
                </button>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-text-highlight font-heading text-lg">150+</div>
                  <div className="text-text-secondary text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-text-highlight font-heading text-lg">25K+</div>
                  <div className="text-text-secondary text-sm">Annual Shipments</div>
                </div>
                <div className="text-center">
                  <div className="text-text-highlight font-heading text-lg">$2.5B+</div>
                  <div className="text-text-secondary text-sm">Value Transported</div>
                </div>
                <div className="text-center">
                  <div className="text-text-highlight font-heading text-lg">50+</div>
                  <div className="text-text-secondary text-sm">Logistics Partners</div>
                </div>
              </div>
            </div>
          </DepthContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Logistics;
