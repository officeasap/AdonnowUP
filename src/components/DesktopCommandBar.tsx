import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/who-we-are", label: "About-us" },
  { path: "/our-vision", label: "Vision" },
  { path: "/expertise", label: "Expertise" },
  { path: "/minerals", label: "Minerals" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

export const DesktopCommandBar = () => {
  return (
    <motion.header
      className="hidden md:flex fixed top-0 left-0 right-0 z-40 command-bar items-center justify-between px-8 py-4 bg-canvas neu-raised"
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Logo - Official Adonnow Rectangle with breathing space */}
      <NavLink to="/" className="flex-shrink-0 flex items-center justify-center mr-6">
        <img
          src="/images/LogoAdonnowOfficial.png"
          alt="Adonnow Limited Logo"
          className="h-12 w-auto neu-raised p-1"
        />
      </NavLink>

      {/* Navigation - Sculpted Buttons */}
      <nav className="flex items-center gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-6 py-2 rounded-[18px] font-body text-sm tracking-wide transition-all duration-200 neu-button ${
                isActive
                  ? "neu-sunken text-text-highlight"
                  : "neu-raised text-text-secondary hover:text-text-primary"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </motion.header>
  );
};

export default DesktopCommandBar;
