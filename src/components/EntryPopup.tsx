import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import NeuButton from "./NeuButton";
import PopupOverlay from "./PopupOverlay";
import { hasSeenPopup, markPopupAsSeen } from "@/lib/cookie-management";

interface EntryPopupProps {
  onComplete?: () => void;
}

const minerals = [
  {
    type: "coltan" as const,
    name: "Coltan",
    description: "Conflict-free tantalum ore",
    image: "/images/coltan1.png",
  },
  {
    type: "copper" as const,
    name: "Copper Cathode",
    description: "LME Grade A certified",
    image: "/images/copper1.png",
  },
  {
    type: "tanzanite" as const,
    name: "Tanzanite",
    description: "GIA certified gemstones",
    image: "/images/tanzanite3.png",
  },
];

export const EntryPopup = ({ onComplete }: EntryPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMineral, setCurrentMineral] = useState(0);

  useEffect(() => {
    if (!hasSeenPopup()) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentMineral((prev) => (prev + 1) % minerals.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleEnter = () => {
    markPopupAsSeen();
    setIsOpen(false);
    onComplete?.();
  };

  const handleClose = () => {
    markPopupAsSeen();
    setIsOpen(false);
    onComplete?.();
  };

  return (
    <PopupOverlay isOpen={isOpen} onClose={handleClose}>
      <motion.div
        className="relative w-[90vw] max-w-lg neu-hero p-8 md:p-10"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 150, damping: 18 }}
      >
        {/* Close button */}
        <motion.button
          className="absolute top-4 right-4 p-2 rounded-[18px] neu-raised text-text-secondary hover:text-text-primary transition-colors"
          onClick={handleClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Close popup"
        >
          <X size={20} />
        </motion.button>

        {/* Logo */}
        <div className="text-center mb-8">
          <Logo size="lg" />
          <p className="mt-4 text-text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Trading Limited
          </p>
        </div>

        {/* Mineral Preview */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMineral}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <img
                src={minerals[currentMineral].image}
                alt={minerals[currentMineral].name}
                className="h-40 mb-4 mx-auto object-contain rounded-md shadow-md"
              />
              <p className="text-center text-text-muted font-body text-sm">
                {minerals[currentMineral].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Mineral indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {minerals.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentMineral ? "bg-text-primary w-6" : "bg-depth-4"
                }`}
                onClick={() => setCurrentMineral(index)}
                whileHover={{ scale: 1.2 }}
                aria-label={`View ${minerals[index].name}`}
              />
            ))}
          </div>
        </div>

        {/* Tagline */}
        <h3 className="text-center font-heading text-lg mb-8">
          Your Gateway to Earth's Treasures
        </h3>

        {/* Enter Button */}
        <NeuButton
          variant="hero"
          size="lg"
          className="w-full justify-center"
          onClick={handleEnter}
          icon={<ChevronRight size={20} />}
          iconPosition="right"
        >
          Enter Adonnow Trading Limited
        </NeuButton>
      </motion.div>
    </PopupOverlay>
  );
};

export default EntryPopup;