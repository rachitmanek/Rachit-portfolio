import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { portfolioData } from "../../data/portfolio";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const { navigation, personal } = portfolioData;

    // Scroll spy: detect which section is currently in view
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);

        // Determine active section based on scroll position
        const sections = navigation.map((item) => item.href.replace("#", ""));
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
                setActiveSection(sections[i]);
                break;
            }
        }
    }, [navigation]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // set initial state
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="text-xl font-bold gradient-text"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {personal.name.split(" ")[0]}
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navigation.map((item, index) => {
                        const sectionId = item.href.replace("#", "");
                        const isActive = activeSection === sectionId;

                        return (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "transition-colors relative group",
                                    isActive
                                        ? "text-primary"
                                        : "text-text-secondary hover:text-primary"
                                )}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.name}
                                {/* Active indicator with layout animation */}
                                {isActive ? (
                                    <motion.span
                                        layoutId="navIndicator"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                ) : (
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                )}
                            </motion.a>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <motion.a
                    href="#contact"
                    className="hidden md:inline-flex btn btn-primary text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Let's Talk
                </motion.a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navigation.map((item) => {
                                const sectionId = item.href.replace("#", "");
                                const isActive = activeSection === sectionId;

                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "transition-colors py-2 relative",
                                            isActive
                                                ? "text-primary font-medium"
                                                : "text-text-secondary hover:text-primary"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {isActive && (
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 w-1 h-4 rounded-full bg-gradient-to-b from-primary to-secondary" />
                                        )}
                                        <span className={isActive ? "ml-1" : ""}>
                                            {item.name}
                                        </span>
                                    </a>
                                );
                            })}
                            <a
                                href="#contact"
                                className="btn btn-primary text-sm mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
