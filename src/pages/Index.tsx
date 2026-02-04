import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const minerals = [
  { 
    type: "copper", 
    name: "Copper Cathode", 
    tagline: "LME Grade A Certified", 
    image: "/mineral-images/copper1.png",
    heroImage: "/mineral-images/copper1.png",
    shortName: "Copper"
  },
  { 
    type: "coltan", 
    name: "Coltan", 
    tagline: "Conflict-Free Tantalum Ore", 
    image: "/mineral-images/coltan1.png",
    heroImage: "/mineral-images/coltan1.png",
    shortName: "Coltan"
  },
  { 
    type: "gold", 
    name: "Gold", 
    tagline: "Refined Bullion", 
    image: "/mineral-images/goldbars1.png",
    heroImage: "/mineral-images/goldbars1.png",
    shortName: "Gold"
  },
  { 
    type: "tanzanite", 
    name: "Tanzanite", 
    tagline: "GIA Certified Gemstones", 
    image: "/mineral-images/tanzanite1.png",
    heroImage: "/mineral-images/tanzanite1.png",
    shortName: "Tanzanite"
  },
];

const heroImages = [
  { src: "/mineral-images/tanzanite5.png", alt: "Adonnow Trading — Tanzanite", type: "tanzanite" },
  { src: "/mineral-images/goldbars1.png", alt: "Adonnow Trading — Gold Bullion", type: "gold" },
  { src: "/mineral-images/copper5.png", alt: "Adonnow Trading — Copper Cathodes", type: "copper" },
  { src: "/mineral-images/coltan1.png", alt: "Adonnow Trading — Coltan Ore", type: "coltan" },
];

// Live mineral prices widget data
const liveMineralPrices = [
  { 
    name: "Gold (24K)", 
    price: "$2,038.50", 
    change: "+1.2%", 
    trend: "up",
    unit: "per ounce"
  },
  { 
    name: "Copper (LME)", 
    price: "$8,542", 
    change: "+0.8%", 
    trend: "up",
    unit: "per tonne"
  },
  { 
    name: "Coltan (65% Ta₂O₅)", 
    price: "$48.50", 
    change: "+2.1%", 
    trend: "up",
    unit: "per lb"
  },
  { 
    name: "Tanzanite (AAA)", 
    price: "$650", 
    change: "+3.5%", 
    trend: "up",
    unit: "per carat"
  },
  { 
    name: "Aluminum (LME)", 
    price: "$2,210", 
    change: "-0.4%", 
    trend: "down",
    unit: "per tonne"
  },
  { 
    name: "Silver", 
    price: "$23.15", 
    change: "+0.6%", 
    trend: "up",
    unit: "per ounce"
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [currentMineralIndex, setCurrentMineralIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [blinkingIndex, setBlinkingIndex] = useState(0);

  // Get current mineral based on index
  const currentMineral = minerals[currentMineralIndex];
  
  // Find the slide index that matches the current mineral type
  const getSlideIndexForMineral = (mineralType: string) => {
    return heroImages.findIndex(img => img.type === mineralType);
  };

  // Handle mineral button click
  const handleMineralClick = (index: number) => {
    const mineralType = minerals[index].type;
    const slideIndex = getSlideIndexForMineral(mineralType);
    
    if (slideIndex !== -1) {
      setCurrentMineralIndex(index);
      setCurrentSlide(slideIndex);
      setIsAutoSliding(false);
      
      setTimeout(() => {
        setIsAutoSliding(true);
      }, 8000);
    }
  };

  // Handle slide navigation
  const handleSlideChange = (direction: 'next' | 'prev') => {
    setIsAutoSliding(false);
    
    if (direction === 'next') {
      const newSlide = (currentSlide + 1) % heroImages.length;
      setCurrentSlide(newSlide);
      
      const currentSlideType = heroImages[newSlide].type;
      const mineralIndex = minerals.findIndex(m => m.type === currentSlideType);
      if (mineralIndex !== -1) {
        setCurrentMineralIndex(mineralIndex);
      }
    } else {
      const newSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
      setCurrentSlide(newSlide);
      
      const currentSlideType = heroImages[newSlide].type;
      const mineralIndex = minerals.findIndex(m => m.type === currentSlideType);
      if (mineralIndex !== -1) {
        setCurrentMineralIndex(mineralIndex);
      }
    }
    
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 8000);
  };

  // Handle direct slide indicator click
  const handleSlideIndicatorClick = (index: number) => {
    setIsAutoSliding(false);
    setCurrentSlide(index);
    
    const currentSlideType = heroImages[index].type;
    const mineralIndex = minerals.findIndex(m => m.type === currentSlideType);
    if (mineralIndex !== -1) {
      setCurrentMineralIndex(mineralIndex);
    }
    
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 8000);
  };

  // Update time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timeInterval);
  }, []);

  // Blinking effect for live prices
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkingIndex((prev) => (prev + 1) % liveMineralPrices.length);
    }, 2000);
    
    return () => clearInterval(blinkInterval);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoSliding) return;
    
    const slideInterval = setInterval(() => {
      const newSlide = (currentSlide + 1) % heroImages.length;
      setCurrentSlide(newSlide);
      
      const currentSlideType = heroImages[newSlide].type;
      const mineralIndex = minerals.findIndex(m => m.type === currentSlideType);
      if (mineralIndex !== -1) {
        setCurrentMineralIndex(mineralIndex);
      }
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [currentSlide, isAutoSliding]);

  return (
    <div className="min-h-screen bg-canvas">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 pt-16 md:pt-24 pb-12">
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
                <span className="block text-text-highlight">East Africa's Mineral</span>
                <span className="block text-text-primary">Power House</span>
              </h1>

              <p className="text-text-secondary font-body text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Premier exporter of premium minerals from Africa's richest deposits. Specializing in Coltan, Copper Cathodes, Gold, Tanzanite, and Aluminum for global industrial markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/minerals")}
                  className="mobile-menu-btn active"
                >
                  <span className="text-text-highlight drop-shadow-[0_0_6px_rgba(223,212,162,0.4)]">
                    Explore Minerals
                  </span>
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="mobile-menu-btn"
                >
                  <span className="text-text-primary drop-shadow-[0_0_4px_rgba(249,249,245,0.3)]">
                    Contact Mining Desk
                  </span>
                </button>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <DepthContainer depth="engraved" className="p-5 md:p-8">
                {/* IMAGE SLIDER */}
                <div className="relative mb-6">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="aspect-[16/10] overflow-hidden rounded-xl"
                  >
                    <img
                      src={heroImages[currentSlide].src}
                      alt={heroImages[currentSlide].alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover premium-image"
                    />
                  </motion.div>

                  <div className="absolute inset-y-0 left-2 right-2 flex justify-between items-center">
                    <button
                      onClick={() => handleSlideChange('prev')}
                      className="bg-canvas-dark/90 backdrop-blur-sm w-10 h-10 rounded-[18px] flex items-center justify-center shadow-permanent hover:brightness-102 transition-all"
                    >
                      <ChevronLeft size={18} className="text-text-highlight drop-shadow-[0_0_6px_rgba(223,212,162,0.3)]" />
                    </button>
                    <button
                      onClick={() => handleSlideChange('next')}
                      className="bg-canvas-dark/90 backdrop-blur-sm w-10 h-10 rounded-[18px] flex items-center justify-center shadow-permanent hover:brightness-102 transition-all"
                    >
                      <ChevronRight size={18} className="text-text-highlight drop-shadow-[0_0_6px_rgba(223,212,162,0.3)]" />
                    </button>
                  </div>

                  {/* SLIDE INDICATORS */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSlideIndicatorClick(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentSlide
                            ? "bg-text-highlight w-4 drop-shadow-[0_0_6px_rgba(223,212,162,0.4)]"
                            : "bg-text-muted/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* MINERAL INFO */}
                <div className="mb-6">
                  <h3 className="font-heading text-xl md:text-2xl mb-2 text-text-highlight drop-shadow-[0_0_6px_rgba(223,212,162,0.2)]">
                    {currentMineral.name}
                  </h3>
                  <p className="text-text-secondary font-body text-sm md:text-base">
                    {currentMineral.tagline}
                  </p>
                </div>

                {/* FIXED MINERAL SELECTOR - MOBILE RESPONSIVE */}
                <div className="grid grid-cols-4 gap-2 md:gap-3">
                  {minerals.map((m, i) => (
                    <button
                      key={m.type}
                      onClick={() => handleMineralClick(i)}
                      className={`
                        min-h-[56px] md:min-h-[64px] 
                        rounded-[14px] md:rounded-[18px] 
                        text-center transition-all duration-200 
                        mobile-menu-btn
                        flex items-center justify-center
                        px-1 py-2 md:p-3 md:px-4
                        ${i === currentMineralIndex
                          ? 'active shadow-[0_0_15px_rgba(223,212,162,0.2)]'
                          : ''
                        }
                      `}
                    >
                      <span className={`
                        font-medium 
                        text-[11px] xs:text-xs sm:text-sm md:text-sm
                        uppercase tracking-[0.05em] md:tracking-wider
                        leading-tight
                        ${i === currentMineralIndex 
                          ? 'text-text-highlight drop-shadow-[0_0_8px_rgba(223,212,162,0.5)]' 
                          : 'text-text-secondary'
                        }
                      `}>
                        {/* Mobile: Show short name, Desktop: Show type */}
                        <span className="block sm:hidden">{m.shortName}</span>
                        <span className="hidden sm:block">{m.type}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </DepthContainer>
            </motion.div>
          </div>

          {/* LIVE MINERAL PRICES WIDGET */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-12"
          >
            <DepthContainer depth="raised" className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-text-highlight drop-shadow-[0_0_4px_rgba(223,212,162,0.2)] flex items-center gap-2">
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute h-2 w-2 rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    LIVE MINERAL PRICES
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">
                    Real-time global market data • Updated: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-xs text-text-secondary bg-canvas-dark px-3 py-1 rounded-full border border-border">
                    Source: LME / COMEX / Market Data
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
                {liveMineralPrices.map((mineral, index) => (
                  <div 
                    key={mineral.name}
                    className={`
                      p-3 md:p-4 rounded-[12px] md:rounded-[16px] 
                      border transition-all duration-300
                      ${index === blinkingIndex 
                        ? 'border-text-highlight/30 bg-canvas-dark/70' 
                        : 'border-border bg-canvas-dark/50'
                      }
                    `}
                  >
                    <div className="flex justify-between items-start mb-1 md:mb-2">
                      <div className="min-w-0">
                        <div className="text-text-primary font-medium text-xs md:text-sm truncate">
                          {mineral.name}
                        </div>
                        <div className="text-text-secondary text-[10px] md:text-xs truncate">
                          {mineral.unit}
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 ${mineral.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {mineral.trend === 'up' ? (
                          <TrendingUp size={12} className="md:size-[14px]" />
                        ) : (
                          <TrendingDown size={12} className="md:size-[14px]" />
                        )}
                        <span className="text-[10px] md:text-xs font-medium">{mineral.change}</span>
                      </div>
                    </div>
                    <div className="text-text-highlight font-bold text-base md:text-lg lg:text-xl truncate">
                      {mineral.price}
                    </div>
                  </div>
                ))}
              </div>
            </DepthContainer>
          </motion.div>
        </div>
      </section>

      {/* MINERAL SPECIALTIES SECTION */}
      <section className="py-8 md:py-12 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-8 lg:mb-12"
          >
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 md:mb-4 text-text-primary">
              Our Mineral Specialties
            </h2>
            <p className="text-text-secondary font-body text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Focused on Africa's most valuable and strategically important minerals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { 
                title: "Coltan (Tantalum)", 
                desc: "Conflict-free tantalum ore from DR Congo & Rwanda deposits. Essential for electronics and aerospace industries.",
                highlight: "Strategic Mineral"
              },
              { 
                title: "Copper Cathodes", 
                desc: "LME Grade A certified copper from Zambia's Copperbelt. 99.99% purity for global industrial applications.",
                highlight: "LME Certified"
              },
              { 
                title: "Gold Bullion", 
                desc: "Refined gold bars and nuggets from Tanzania and Kenya. LBMA good delivery standards.",
                highlight: "LBMA Standard"
              },
              { 
                title: "Tanzanite", 
                desc: "GIA certified gemstones from Merelani mines. Exclusive sourcing from the world's only source.",
                highlight: "GIA Certified"
              },
              { 
                title: "Aluminum Ingots", 
                desc: "Primary aluminum from Mozambique smelters. Low-carbon production for sustainable manufacturing.",
                highlight: "Low Carbon"
              },
              { 
                title: "Strategic Minerals", 
                desc: "Cobalt, Lithium, and Rare Earth Elements from verified African deposits for green energy transition.",
                highlight: "Future Minerals"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DepthContainer depth="raised" className="p-4 md:p-5 lg:p-6 h-full">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 md:mb-4">
                    <h3 className="font-heading text-base md:text-lg lg:text-xl text-text-highlight drop-shadow-[0_0_4px_rgba(223,212,162,0.2)] mb-2 md:mb-0">
                      {item.title}
                    </h3>
                    <span className="text-xs text-text-highlight bg-canvas-dark px-2 py-1 rounded-full border border-border self-start md:self-auto">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-text-secondary font-body text-xs md:text-sm lg:text-base">
                    {item.desc}
                  </p>
                </DepthContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-8 md:py-12 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <DepthContainer depth="engraved" className="p-4 md:p-6 lg:p-8 text-center">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-text-primary">
              Connect With Africa's Mineral Powerhouse
            </h2>
            <p className="text-text-secondary font-body text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-xl mx-auto">
              Partner with Adonnow for direct access to Africa's richest mineral deposits, transparent pricing, and end-to-end export solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={() => navigate("/minerals")}
                className="mobile-menu-btn active min-w-full sm:min-w-[180px] md:min-w-[200px] shadow-[0_0_20px_rgba(223,212,162,0.3)]"
              >
                <span className="text-text-highlight drop-shadow-[0_0_8px_rgba(223,212,162,0.5)] text-sm md:text-base">
                  Explore Our Minerals
                </span>
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="mobile-menu-btn min-w-full sm:min-w-[180px] md:min-w-[200px]"
              >
                <span className="text-text-primary drop-shadow-[0_0_4px_rgba(249,249,245,0.3)] text-sm md:text-base">
                  Request Mine Data
                </span>
              </button>
            </div>
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border">
              <p className="text-text-secondary text-xs md:text-sm">
                Install the Adonnow Mineral Portal for 24/7 access to live prices and mining desk support.
              </p>
            </div>
          </DepthContainer>
        </div>
      </section>
    </div>
  );
};

export default Index;