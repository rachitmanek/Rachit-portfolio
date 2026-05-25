import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const variants = {
    primary:
        "bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/30",
    secondary:
        "bg-transparent border border-border text-text-primary hover:border-primary hover:text-primary",
    ghost:
        "bg-transparent text-text-secondary hover:text-primary hover:bg-primary/10",
    outline:
        "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    href,
    disabled = false,
    loading = false,
    icon,
    iconPosition = "left",
    ...props
}) => {
    const baseClasses = cn(
        "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
    );

    const content = (
        <>
            {loading ? (
                <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
                <>
                    {icon && iconPosition === "left" && icon}
                    {children}
                    {icon && iconPosition === "right" && icon}
                </>
            )}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={baseClasses}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={baseClasses}
            disabled={disabled || loading}
            whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
