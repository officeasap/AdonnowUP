import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type NeuButtonVariant = "raised" | "engraved" | "pressed" | "hero";
type NeuButtonSize = "sm" | "md" | "lg" | "xl";

interface NeuButtonProps {
  variant?: NeuButtonVariant;
  size?: NeuButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<NeuButtonVariant, string> = {
  raised: "depth-raised",
  engraved: "depth-engraved",
  pressed: "depth-pressed",
   hero: "neu-hero", // Added hero variant
};

const sizeStyles: Record<NeuButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[52px]",
  lg: "px-8 py-4 text-lg min-h-[60px]",
  xl: "px-10 py-5 text-xl min-h-[72px]",
};

export const NeuButton = forwardRef<HTMLButtonElement, NeuButtonProps>(
  (
    {
      variant = "raised",
      size = "md",
      icon,
      iconPosition = "left",
      className,
      children,
      onClick,
      disabled,
      type = "button",
    },
    ref
  ) => (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-3 font-body font-medium",
        "rounded-[18px] cursor-pointer touch-target",
        "transition-all duration-100 ease-out",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "text-text-primary",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      whileTap={
        !disabled
          ? {
              y: 1,
              boxShadow:
                "inset 3px 3px 8px hsl(0 0% 2%), inset -1px -1px 4px hsl(0 0% 10%)",
            }
          : undefined
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  )
);

NeuButton.displayName = "NeuButton";

export default NeuButton;
