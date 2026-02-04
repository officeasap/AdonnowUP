import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useCallback } from "react";

interface PopupOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PopupOverlay = ({ isOpen, onClose, children }: PopupOverlayProps) => {
  // Handle ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
          role="dialog"
          aria-modal="true"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupOverlay;
