import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Card = ({
  children,
  className,
  variant = "default",
  hoverable = true,
  gradient = false,
  ...props
}) => {
  const baseClasses = cn(
    "rounded-2xl overflow-hidden",
    variant === "default" && "bg-surface border border-border",
    variant === "glass" && "glass",
    variant === "elevated" && "bg-surface-elevated border border-border",
    gradient && "gradient-border",
    hoverable &&
      "transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
    className
  );

  return (
    <motion.div
      className={baseClasses}
      whileHover={hoverable ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ children, className, ...props }) => (
  <div className={cn("p-6 pb-0", className)} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={cn("p-6", className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

const CardImage = ({ src, alt, className, ...props }) => (
  <div className={cn("relative overflow-hidden", className)} {...props}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
