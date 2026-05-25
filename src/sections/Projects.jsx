import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Section } from "../components/layout";
import { Card, Badge, Button } from "../components/ui";
import { portfolioData } from "../data/portfolio";

const Projects = () => {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my recent work and personal projects."
      centered
    >
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
                glareBorderRadius="0.75rem"
                className="h-full"
              >
                <Card className="group h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-surface-elevated">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
                      <span className="text-4xl opacity-50">🚀</span>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full glass hover:bg-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full glass hover:bg-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="primary" size="sm">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <Card.Content className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="default" size="sm">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </Card.Content>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More/Less Button */}
      {projects.length > 3 && (
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="secondary"
            onClick={() => setShowAll(!showAll)}
            icon={
              <ChevronRight
                size={18}
                className={`transition-transform ${showAll ? "rotate-90" : ""
                  }`}
              />
            }
            iconPosition="right"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </motion.div>
      )}
    </Section>
  );
};

export default Projects;
