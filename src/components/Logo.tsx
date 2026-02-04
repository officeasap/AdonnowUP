import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-6xl",
};

export const Logo = ({ size = "md", className = "" }: LogoProps) => {
  return (
    <motion.div
      className={`inline-flex items-baseline font-heading font-bold tracking-wider ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ADO */}
      <span
        className={`${sizeClasses[size]} bg-gradient-to-br from-depth-5 via-depth-1 to-depth-5 bg-clip-text text-transparent`}
        style={{
          filter: "drop-shadow(3px 3px 4px hsl(0 0% 0%)) drop-shadow(-2px -2px 4px hsl(0 0% 24%))",
        }}
      >
        ADO
      </span>
      
      {/* Flipped NN - The sculptural art element */}
      <span
        className={`${sizeClasses[size]} inline-block bg-gradient-to-br from-depth-5 via-depth-1 to-depth-5 bg-clip-text text-transparent`}
        style={{
          transform: "scaleX(-1)",
          mixBlendMode: "hard-light",
          opacity: 0.85,
          filter: "drop-shadow(3px 3px 4px hsl(0 0% 0%)) drop-shadow(-2px -2px 4px hsl(0 0% 24%))",
          position: "relative",
          left: "2px",
        }}
      >
        NN
      </span>
      
      {/* OW */}
      <span
        className={`${sizeClasses[size]} bg-gradient-to-br from-depth-5 via-depth-1 to-depth-5 bg-clip-text text-transparent`}
        style={{
          filter: "drop-shadow(3px 3px 4px hsl(0 0% 0%)) drop-shadow(-2px -2px 4px hsl(0 0% 24%))",
          marginLeft: "4px",
        }}
      >
        OW
      </span>
    </motion.div>
  );
};

export default Logo;
