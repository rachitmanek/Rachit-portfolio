import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Coffee } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";

const stats = [
  { icon: Code2, value: "1+", label: "Years Experience" },
  { icon: Rocket, value: "5+", label: "Projects Completed" },
  // { icon: Users, value: "30+", label: "Happy Clients" },
  // { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
];

const About = () => {
  const { personal } = portfolioData;

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better - my journey, passion, and what drives me."
      centered
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image/Avatar Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {/* Decorative elements - hidden on mobile to prevent overflow */}
            <div className="hidden md:block absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="hidden md:block absolute -bottom-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

            {/* Main Image Container */}
            <div className="relative glass rounded-2xl p-2 gradient-border">
              <div className="aspect-square rounded-xl overflow-hidden bg-surface">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-8xl font-bold gradient-text">
                    {personal.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Badge - adjusted position for mobile */}
            <motion.div
              className="absolute -right-2 md:-right-4 top-1/4 glass rounded-xl px-3 py-2 md:px-4 md:py-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-2xl">✨</span>
              <p className="text-sm font-medium text-text-primary mt-1">
                {personal.title}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-text-primary mb-4">
            Crafting Digital Experiences
          </h3>

          <p className="text-text-secondary mb-6 leading-relaxed">
            {personal.bio}
          </p>

          <p className="text-text-secondary mb-8 leading-relaxed">
            From building AI-powered healthcare apps to developing full-stack
            e-commerce platforms, I thrive on turning complex problems into
            elegant solutions. Currently working with the Unified Communications
            team at Motorola Solutions, I'm driven by a curiosity for emerging
            technologies and a commitment to writing clean, maintainable code.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
