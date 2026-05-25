import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ isLoading }) => {
    const letters = "RACHIT".split("");

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                            }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Name container with reveal animation */}
                    <div className="relative overflow-hidden pb-4">
                        <motion.div
                            className="flex items-center gap-[2px] sm:gap-1"
                            initial={{ y: 60 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1], delay: 0.2 }}
                        >
                            {letters.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[0.2em] text-text-primary"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.4 + index * 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>
                        
                        {/* Animated line reveal */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        />
                    </div>

                    {/* Tagline */}
                    <motion.p
                        className="mt-8 text-xs sm:text-sm tracking-[0.4em] uppercase text-text-muted font-light"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        Full Stack Developer
                    </motion.p>

                    {/* Minimal loading indicator */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <motion.div
                            className="w-8 h-[1px] bg-primary/50"
                            animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
