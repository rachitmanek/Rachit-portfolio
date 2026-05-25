import React from "react";
import { cn } from "../../utils/cn";

const variants = {
    default: "bg-surface border border-border text-text-secondary",
    primary: "bg-primary/10 border border-primary/30 text-primary",
    secondary: "bg-secondary/10 border border-secondary/30 text-secondary",
    success: "bg-green-500/10 border border-green-500/30 text-green-400",
    warning: "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400",
    gradient:
        "bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary-light",
};

const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
};

const Badge = ({
    children,
    variant = "default",
    size = "md",
    className,
    icon,
    ...props
}) => {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full font-medium transition-all",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </span>
    );
};

export default Badge;
