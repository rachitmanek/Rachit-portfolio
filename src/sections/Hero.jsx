import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { Button, AnimatedText } from "../components/ui";
import { portfolioData } from "../data/portfolio";

// Lazy-load Three.js Scene — heaviest dependency, code-split for performance
const Scene = lazy(() => import("../components/three/Scene"));

const Hero = () => {
    const { personal } = portfolioData;

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* 3D Background — lazy loaded */}
            <Suspense fallback={<div className="absolute inset-0 z-0 bg-background" />}>
              <Scene className="absolute inset-0 z-0" />
            </Suspense>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-[1]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

            {/* Content */}
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm text-text-secondary">
                            {personal.availability}
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <span className="text-text-primary">Hi, I'm </span>
                        <AnimatedText className="text-text-primary" delay={0.6}>
                            {personal.name}
                        </AnimatedText>
                    </motion.h1>

                    {/* Title */}
                    <motion.p
                        className="text-xl md:text-2xl text-text-secondary mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {personal.title}
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        className="text-lg text-text-muted mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        {personal.tagline}
                    </motion.p>

                    {/* Location */}
                    <motion.div
                        className="flex items-center justify-center gap-2 text-text-muted mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <MapPin size={16} className="text-primary" />
                        <span>{personal.location}</span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                    >
                        <Button href="#projects" size="lg">
                            View My Work
                        </Button>
                        <Button
                            target="_blank"
                            href={personal.resume}
                            variant="secondary"
                            size="lg"
                            icon={<Download size={18} />}
                        >
                            Download CV
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-text-muted hover:text-primary transition-colors"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ArrowDown size={20} />
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
