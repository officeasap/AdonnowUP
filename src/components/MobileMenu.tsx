import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Toggle menu function
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event from bubbling up
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Check if click is outside both button and menu
      const isButtonClick = buttonRef.current?.contains(target);
      const isMenuClick = menuRef.current?.contains(target);
      
      if (!isButtonClick && !isMenuClick && isOpen) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/who-we-are" },
    { label: "Vision", href: "/our-vision" },
    { label: "Expertise", href: "/expertise" },
    { label: "Minerals", href: "/minerals" },
    { label: "Services Overview", href: "/services" },
    { label: "Logistics", href: "/logistics" },
    { label: "Certification", href: "/certification" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Container */}
      <div className="lg:hidden fixed top-4 right-4 z-50 mobile-menu-container">
        {/* Menu Button - FIXED CLICK HANDLER */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="bg-[#141414] border border-[rgba(249,249,245,0.1)] w-12 h-12 rounded-[18px] flex items-center justify-center hover:border-[rgba(223,212,162,0.3)] transition-colors active:scale-95"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          style={{
            boxShadow: 'none',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {isOpen ? 
            <X size={24} className="text-[#f9f9f5]" style={{ filter: 'none' }} /> : 
            <Menu size={24} className="text-[#f9f9f5]" style={{ filter: 'none' }} />
          }
        </button>
        
        {/* Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-3 w-72 border border-[rgba(249,249,245,0.1)] rounded-[18px] overflow-hidden bg-[#141414]"
              style={{
                boxShadow: 'none'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside menu from closing
            >
              {/* Scrollable Container */}
              <div className="max-h-[70vh] overflow-y-auto" style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(223,212,162,0.2) transparent'
              }}>
                <div className="p-6">
                  {/* Mobile Logo Header */}
                  <div className="mb-8 pb-6 border-b border-[rgba(249,249,245,0.1)]">
                    {/* Logo Container */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 flex items-center justify-center rounded-[18px] bg-[#141414] border border-[rgba(249,249,245,0.1)] p-3"
                           style={{ boxShadow: 'none' }}>
                        <img
                          src="/images/LogoAdonnowOfficial.png"
                          alt="Adonnow Trading"
                          className="w-full h-full object-contain"
                          style={{ filter: 'none' }}
                        />
                      </div>
                    </div>
                    
                    {/* Title below logo */}
                    <div className="text-center space-y-2">
                      <h3 className="text-[#dfd4a2] font-heading text-xl tracking-wide">
                        Adonnow Trading Limited
                      </h3>
                      <p className="text-[rgba(249,249,245,0.6)] text-sm mt-2">
                        East African Mineral Exports
                      </p>
                    </div>
                  </div>
                  
                  {/* Menu Items */}
                  <nav className="flex flex-col gap-2">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.2 }}
                        className="bg-[#141414] border border-[rgba(249,249,245,0.1)] hover:border-[rgba(223,212,162,0.3)] py-3.5 px-4 rounded-[12px] text-base flex items-center justify-between group transition-all duration-200 active:scale-98"
                        onClick={() => setIsOpen(false)}
                        style={{
                          boxShadow: 'none',
                          textShadow: 'none',
                          WebkitTapHighlightColor: 'transparent'
                        }}
                      >
                        <span className="text-[#f9f9f5] group-hover:text-[#dfd4a2] transition-colors">
                          {item.label}
                        </span>
                        {/* Simple arrow icon */}
                        <div className="text-[rgba(249,249,245,0.4)] group-hover:text-[#dfd4a2] transition-colors"
                             style={{ filter: 'none' }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </motion.a>
                    ))}
                  </nav>
                  
                  {/* Contact Info Footer */}
                  <div className="mt-8 pt-6 border-t border-[rgba(249,249,245,0.1)]">
                    <p className="text-[rgba(249,249,245,0.6)] text-xs uppercase tracking-wider mb-3">
                      Trading Desk
                    </p>
                    <a 
                      href="tel:+254707513272" 
                      className="text-[#dfd4a2] text-lg font-medium block mb-2 hover:opacity-90 transition-opacity"
                      style={{ textShadow: 'none' }}
                    >
                      +254 707 513 272
                    </a>
                    <p className="text-[rgba(249,249,245,0.6)] text-sm">
                      Karen, Nairobi • KENYA 
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileMenu;