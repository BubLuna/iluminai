
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Define button variants using cva for consistency
export const buttonVariants = cva(
  "rounded-full font-medium inline-flex items-center justify-center transition-all duration-300 gap-2 focus:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-iluminai-yellow text-iluminai-blue-dark hover:shadow-elevation focus:ring-2 focus:ring-iluminai-yellow focus:ring-offset-2",
        secondary: "bg-white text-iluminai-blue-dark border border-iluminai-yellow hover:bg-iluminai-yellow/10 focus:ring-2 focus:ring-iluminai-yellow focus:ring-offset-2",
        outline: "bg-transparent text-iluminai-blue-dark border border-iluminai-blue-dark hover:bg-iluminai-blue-dark/5 focus:ring-2 focus:ring-iluminai-blue-dark focus:ring-offset-2",
        ghost: "bg-transparent text-iluminai-blue-dark hover:bg-iluminai-blue-dark/5 focus:ring-2 focus:ring-iluminai-blue-dark focus:ring-offset-2",
        default: "bg-iluminai-yellow text-iluminai-blue-dark hover:shadow-elevation focus:ring-2 focus:ring-iluminai-yellow focus:ring-offset-2",
        destructive: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
        link: "text-iluminai-blue-dark underline-offset-4 hover:underline",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-3",
        lg: "text-lg px-8 py-4",
        default: "text-base px-6 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// Define props for compatibility with both our custom Button and shadcn Button
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = "primary", 
    size = "md", 
    icon, 
    iconPosition = "left", 
    fullWidth = false, 
    children, 
    className, 
    ...props 
  }, ref) => {
    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
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
  }
);

Button.displayName = "Button";

export { Button };
