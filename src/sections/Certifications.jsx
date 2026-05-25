import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Award, Calendar, ExternalLink, BadgeCheck } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";

const Certifications = () => {
    const { certifications } = portfolioData;

    return (
        <Section
            id="certifications"
            title="Certifications"
            subtitle="Professional certifications and credentials I've earned."
            centered
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className="group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                    >
                        <Tilt
                            tiltMaxAngleX={12}
                            tiltMaxAngleY={12}
                            perspective={1000}
                            scale={1.03}
                            transitionSpeed={400}
                            glareEnable={true}
                            glareMaxOpacity={0.12}
                            glareColor="#8b5cf6"
                            glarePosition="all"
                            glareBorderRadius="1rem"
                            className="h-full"
                        >
                            <div
                                className="h-full glass rounded-2xl p-6 border border-white/10 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10 flex flex-col"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Header with Icon */}
                                <div
                                    className="flex items-start gap-4 mb-4"
                                    style={{ transform: "translateZ(40px)" }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base font-bold text-text-primary leading-tight group-hover:text-primary transition-colors duration-200">
                                            {cert.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Issuer */}
                                <div
                                    className="flex items-center gap-2 mb-3"
                                    style={{ transform: "translateZ(25px)" }}
                                >
                                    <BadgeCheck size={14} className="text-secondary shrink-0" />
                                    <span className="text-sm text-secondary/80 font-medium">
                                        {cert.issuer}
                                    </span>
                                </div>

                                {/* Date */}
                                <div
                                    className="flex items-center gap-2 mb-4"
                                    style={{ transform: "translateZ(20px)" }}
                                >
                                    <Calendar size={12} className="text-text-muted" />
                                    <span className="text-xs text-text-muted">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Skill Tags */}
                                {cert.skills && cert.skills.length > 0 && (
                                    <div
                                        className="flex flex-wrap gap-2 mb-5 mt-auto"
                                        style={{ transform: "translateZ(15px)" }}
                                    >
                                        {cert.skills.map((skill, sIndex) => (
                                            <span
                                                key={sIndex}
                                                className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-text-secondary border border-white/5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* View Credential Link */}
                                {cert.credentialUrl && cert.credentialUrl !== "#" && cert.credentialUrl !== "" && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200 mt-auto"
                                        style={{ transform: "translateZ(30px)" }}
                                    >
                                        <ExternalLink size={14} />
                                        View Credential
                                    </a>
                                )}
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
