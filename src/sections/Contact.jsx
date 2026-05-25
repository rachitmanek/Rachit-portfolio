import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ ADD THIS
import { Section } from "../components/layout";
import { Button } from "../components/ui";
import { portfolioData } from "../data/portfolio";

const Contact = () => {
    const { personal, social } = portfolioData;

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );


            setStatus("success");
            setFormState({ name: "", email: "", message: "" });

            setTimeout(() => setStatus("idle"), 3000);

        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Section
            id="contact"
            title="Get In Touch"
            subtitle="Have a project in mind? Let's work together to bring your ideas to life."
            centered
        >
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="glass rounded-2xl p-5 sm:p-8 h-full">
                        <h3 className="text-2xl font-semibold text-text-primary mb-6">
                            Let's Connect
                        </h3>

                        <p className="text-text-secondary mb-8">
                            I'm always open to discussing new opportunities, creative ideas,
                            or just having a chat about technology and design.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4 mb-8">
                            <motion.a
                                href={`mailto:${personal.email}`}
                                className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:bg-surface-elevated transition-colors group"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Email</p>
                                    <p className="text-text-primary font-medium">
                                        {personal.email}
                                    </p>
                                </div>
                            </motion.a>

                            <motion.div
                                className="flex items-center gap-4 p-4 rounded-xl bg-surface"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Location</p>
                                    <p className="text-text-primary font-medium">
                                        {personal.location}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-sm text-text-muted mb-4">Find me on</p>
                            <div className="flex gap-3">
                                {Object.entries(social).map(([platform, url]) => (
                                    <motion.a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-surface border border-border text-text-secondary hover:text-primary hover:border-primary transition-all capitalize"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {platform}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-8">
                        <div className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-text-secondary mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-text-secondary mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-text-secondary mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full"
                                size="lg"
                                disabled={status === "loading" || status === "success"}
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle size={18} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
