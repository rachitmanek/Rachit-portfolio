import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiExpress,
  SiFastapi,
  SiDocker,
  SiGit,
  SiPostman,
  SiAmazons3,
  SiGithub,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { MdOutlineRouter } from "react-icons/md";

// Technology icons mapping using actual technology icons
const techIcons = {
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "SQL": TbSql,
  "React.js": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "FastAPI": SiFastapi,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Docker": SiDocker,
  "MQTT": MdOutlineRouter,
  "AWS S3": SiAmazons3,
  "Git & GitHub": SiGit,
  "Postman": SiPostman,
};

// Icon colors for each technology
const iconColors = {
  "Python": "#3776AB",
  "JavaScript": "#F7DF1E",
  "SQL": "#4479A1",
  "React.js": "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  "Express.js": "#ffffff",
  "FastAPI": "#009688",
  "MongoDB": "#47A248",
  "PostgreSQL": "#336791",
  "Docker": "#2496ED",
  "MQTT": "#660066",
  "AWS S3": "#FF9900",
  "Git & GitHub": "#F05032",
  "Postman": "#FF6C37",
};

// Category colors for visual distinction
const categoryColors = {
  "Frontend": "from-cyan-500 to-blue-500",
  "Backend": "from-green-500 to-emerald-500",
  "Languages": "from-yellow-500 to-orange-500",
  "Database": "from-purple-500 to-pink-500",
  "Cloud": "from-sky-500 to-indigo-500",
  "Design": "from-rose-500 to-red-500",
  "DevOps": "from-blue-500 to-cyan-500",
  "Tools": "from-orange-500 to-amber-500",
};

const Skills = () => {
  const { skills } = portfolioData;
  const categories = [...new Set(skills.map((s) => s.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I use to bring ideas to life."
      centered
    >
      {/* Category Filter - Pill Style */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all overflow-hidden ${activeCategory === "All"
            ? "text-white shadow-lg shadow-primary/30"
            : "glass text-text-secondary hover:text-primary"
            }`}
          onClick={() => setActiveCategory("All")}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeCategory === "All" && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">All</span>
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all overflow-hidden ${activeCategory === category
              ? "text-white shadow-lg shadow-primary/30"
              : "glass text-text-secondary hover:text-primary"
              }`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid - Unique Floating Card Design */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                type: "spring",
                stiffness: 200
              }}
              className="group perspective"
            >
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={800}
                scale={1.05}
                transitionSpeed={400}
                glareEnable={true}
                glareMaxOpacity={0.18}
                glareColor="#8b5cf6"
                glarePosition="all"
                glareBorderRadius="1rem"
                className="h-full"
              >
                <div
                  className="relative glass rounded-2xl p-5 sm:p-6 h-full border border-white/10 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {/* Tech Icon - 3D Pop Out */}
                  <div
                    className="mb-4 relative"
                    style={{
                      transform: "translateZ(50px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {(() => {
                      const IconComponent = techIcons[skill.name];
                      const iconColor = iconColors[skill.name] || "#8b5cf6";
                      return IconComponent ? (
                        <IconComponent
                          className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 drop-shadow-lg"
                          style={{
                            color: iconColor,
                            filter: `drop-shadow(0 4px 12px ${iconColor}55)`,
                          }}
                        />
                      ) : (
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg"
                        >
                          {skill.name.charAt(0)}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Skill Name */}
                  <h4
                    className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-200"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    {skill.name}
                  </h4>

                  {/* Category Badge */}
                  <div className="mt-3" style={{ transform: "translateZ(15px)" }}>
                    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-text-secondary">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </Section>
  );
};

export default Skills;
