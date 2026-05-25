import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const AnimatedText = ({
    children,
    className,
    variant = "words",
    delay = 0,
    duration = 0.5,
    staggerChildren = 0.08,
    gradient = false,
}) => {
    if (typeof children !== "string") {
        return <span className={className}>{children}</span>;
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren,
                delayChildren: delay,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration,
                ease: [0.215, 0.61, 0.355, 1],
            },
        },
    };

    const items = variant === "words" ? children.split(" ") : children.split("");

    return (
        <motion.span
            className={cn("inline-flex flex-wrap", gradient && "gradient-text", className)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: 1000 }}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    className="inline-block origin-top"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {item}
                    {variant === "words" && index < items.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
