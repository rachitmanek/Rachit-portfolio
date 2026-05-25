import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Section = ({
  children,
  id,
  className,
  title,
  subtitle,
  centered = false,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id={id} className={cn("section overflow-x-hidden", className)}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {(title || subtitle) && (
            <div
              className={cn(
                "mb-12",
                centered && "text-center mx-auto"
              )}
            >
              {title && (
                <h2 className="section-title">
                  <span className="gradient-text">{title}</span>
                </h2>
              )}
              {subtitle && (
                <p
                  className={cn(
                    "section-subtitle",
                    centered && "mx-auto"
                  )}
                >
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
