import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const mineralCategories = [
  {
    id: "smelting",
    title: "Industrial Smelting",
    subtitle: "Metallurgical excellence & refining capabilities",
    image: "/mineral-images/goldsmelting1.png",
    route: "smelting"
  },
  {
    id: "tanzanite",
    title: "Tanzanite",
    subtitle: "GIA Certified Gemstones - Mererani Exclusive",
    image: "/mineral-images/tanzanite2.png",
    route: "tanzanite"
  },
  {
    id: "gold-bars",
    title: "Gold Bars",
    subtitle: "LBMA Good Delivery • Reserve Grade",
    image: "/mineral-images/goldbars1.png",
    route: "gold-bars"
  },
  {
    id: "gold-nuggets",
    title: "Gold Nuggets",
    subtitle: "Natural Specimens • Investment Grade",
    image: "/mineral-images/goldnuggets1.png",
    route: "gold-nuggets"
  },
  {
    id: "copper-cathode",
    title: "Copper Cathode",
    subtitle: "LME Grade A • Electrification Infrastructure",
    image: "/mineral-images/copper1.png",
    route: "copper-cathold"
  },
  {
    id: "coltan",
    title: "Coltan",
    subtitle: "Conflict-Free • Technology Enabler",
    image: "/mineral-images/coltan1.png",
    route: "coltan" // FIXED: Changed from "coltant" to "coltan"
  },
  {
    id: "vault-services",
    title: "Vault Services",
    subtitle: "Sovereign-Grade Asset Protection",
    image: "/mineral-images/vault1.png",
    route: "vault"
  },
  {
    id: "community-development",
    title: "Community Development",
    subtitle: "Legacy & Sustainable Investment",
    image: "/mineral-images/communitydev1.png",
    route: "community-development"
  }
];

const Minerals = () => {
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
            Premium Mineral Categories
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg max-w-2xl mx-auto">
            Click any category to explore detailed specifications, gallery, and institutional documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {mineralCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <DepthContainer depth="engraved" className="
                h-full p-5 md:p-6
                border-2 border-border-dark/80
                bg-gradient-to-br from-canvas-dark via-canvas to-canvas-dark
                shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.05)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.08)]
                hover:translate-y-[-4px]
                transition-all duration-300
                group
              ">
                <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      w-full h-full object-cover
                      group-hover:scale-110
                      transition-transform duration-500
                    "
                  />
                </div>
                <h3 className="font-heading text-lg md:text-xl mb-2 text-text-highlight">
                  {category.title}
                </h3>
                <p className="text-text-secondary font-body text-sm mb-4">
                  {category.subtitle}
                </p>
                <button
                  onClick={() => navigate(`/minerals/${category.route}`)}
                  className="
                    w-full py-3
                    bg-gradient-to-br from-canvas-dark via-canvas-dark to-border-dark/80
                    text-text-primary
                    font-body font-medium text-sm
                    border-2 border-border-dark
                    rounded-xl
                    shadow-[0_6px_24px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.05)]
                    hover:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.08)]
                    hover:translate-y-[-1px]
                    active:translate-y-[0px]
                    transition-all duration-200
                    relative
                    overflow-hidden
                  "
                >
                  <span className="relative z-10">Explore Details →</span>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border/5 to-transparent opacity-50" />
                </button>
              </DepthContainer>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <DepthContainer depth="engraved" className="
            p-6 md:p-8
            border-2 border-border-dark/80
            bg-gradient-to-br from-canvas-dark via-canvas to-canvas-dark
            shadow-[0_12px_48px_rgba(0,0,0,0.2),inset_0_2px_8px_rgba(255,255,255,0.03)]
          ">
            <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-highlight">
              Institutional Trading Standards
            </h3>
            <p className="text-text-secondary font-body text-base leading-relaxed">
              Adonnow Trading Limited maintains compliance with LBMA, LME, OECD, and Kimberly Process certification standards. 
              All commodities undergo rigorous verification protocols ensuring traceability, purity, and legal provenance for 
              institutional and sovereign wealth clients globally.
            </p>
          </DepthContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Minerals;