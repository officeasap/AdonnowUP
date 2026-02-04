import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface InstitutionalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "md" | "lg";
}

const InstitutionalButton = ({
  size = "md",
  className,
  ...props
}: InstitutionalButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "border border-border bg-canvas text-text-primary font-body rounded-lg transition",
        "hover:bg-canvas-dark active:translate-y-px",
        size === "lg" && "py-3 px-6 text-base",
        size === "md" && "py-2.5 px-5 text-sm",
        className
      )}
    />
  );
};

export default InstitutionalButton;
