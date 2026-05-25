import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble, Heart } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    dribbble: Dribbble,
};

const Footer = () => {
    const { social, personal } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a href="#home" className="text-xl font-bold gradient-text">
                            {personal.name.split(" ")[0]}
                            <span className="text-primary">.</span>
                        </a>
                        <p className="text-text-muted text-sm flex items-center gap-1">
                            © {currentYear} Made with{" "}
                            <Heart size={14} className="text-primary fill-primary" /> by{" "}
                            {personal.name}
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {Object.entries(social).map(([platform, url]) => {
                            const Icon = socialIcons[platform];
                            if (!Icon) return null;

                            return (
                                <motion.a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-surface border border-border text-text-secondary hover:text-primary hover:border-primary transition-all"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={platform}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-sm text-text-muted">
                        <a
                            href="#about"
                            className="hover:text-primary transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-primary transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-primary transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
