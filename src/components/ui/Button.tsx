
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseClasses = "rounded-full font-medium inline-flex items-center justify-center transition-all duration-300 gap-2 focus:outline-none";

  const variantClasses = {
    primary: "bg-iluminai-yellow text-iluminai-blue-dark hover:shadow-elevation focus:ring-2 focus:ring-iluminai-yellow focus:ring-offset-2",
    secondary: "bg-white text-iluminai-blue-dark border border-iluminai-yellow hover:bg-iluminai-yellow/10 focus:ring-2 focus:ring-iluminai-yellow focus:ring-offset-2",
    outline: "bg-transparent text-iluminai-blue-dark border border-iluminai-blue-dark hover:bg-iluminai-blue-dark/5 focus:ring-2 focus:ring-iluminai-blue-dark focus:ring-offset-2",
    ghost: "bg-transparent text-iluminai-blue-dark hover:bg-iluminai-blue-dark/5 focus:ring-2 focus:ring-iluminai-blue-dark focus:ring-offset-2",
  };

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
