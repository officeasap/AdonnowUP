import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * CANONICAL MINERAL DOMAIN
 * Gold is a first-class mineral and MUST exist here.
 */
type MineralType = "coltan" | "copper" | "gold" | "tanzanite";

interface MineralPlaceholderProps {
  mineral: MineralType;
  className?: string;
  label?: string;
}

/**
 * NOTE:
 * All gradients remain CHARCOAL-ONLY.
 * Gold mineral ≠ gold color (Site DNA compliant).
 */
const mineralGradients: Record<MineralType, string> = {
  coltan: "from-depth-3 via-depth-2 to-depth-4",
  copper: "from-depth-4 via-depth-3 to-depth-2",
  gold: "from-depth-4 via-depth-4 to-depth-3", // neutral charcoal
  tanzanite: "from-depth-2 via-depth-4 to-depth-3",
};

const mineralShimmer: Record<MineralType, string> = {
  coltan: "bg-gradient-to-r from-transparent via-depth-5/20 to-transparent",
  copper: "bg-gradient-to-r from-transparent via-depth-5/30 to-transparent",
  gold: "bg-gradient-to-r from-transparent via-depth-5/15 to-transparent",
  tanzanite: "bg-gradient-to-r from-transparent via-depth-5/25 to-transparent",
};

export const MineralPlaceholder = ({
  mineral,
  className,
  label,
}: MineralPlaceholderProps) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg neu-raised",
        "bg-gradient-to-br",
        mineralGradients[mineral],
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Shimmer layer */}
      <div
        className={cn(
          "absolute inset-0 animate-shimmer",
          mineralShimmer[mineral]
        )}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* Optional label */}
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-text-secondary font-body text-sm uppercase tracking-widest haptic-text-1">
            {label}
          </span>
        </div>
      )}

      {/* Structural corner accent */}
      <div className="absolute bottom-2 right-2">
        <div className="w-2 h-2 rounded-full bg-depth-5/30" />
      </div>
    </motion.div>
  );
};

export default MineralPlaceholder;
