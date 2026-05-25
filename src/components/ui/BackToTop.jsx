import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling past the hero section (~100vh)
            setIsVisible(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 p-3 rounded-full glass border border-white/10 hover:border-primary/50 text-text-secondary hover:text-primary transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Scroll to top"
                >
                    {/* Glow ring on hover */}
                    <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                    <ArrowUp size={20} className="relative z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
