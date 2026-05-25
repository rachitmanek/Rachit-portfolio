import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";

// Extract year from duration string like "Feb 2026 - Present"
const extractYear = (duration) => {
  const match = duration.match(/\d{4}/);
  return match ? match[0] : "";
};

// Chapter label mapping
const chapterLabels = ["Current Chapter", "Chapter III", "Chapter II", "Chapter I"];

const Experience = () => {
  const { experience } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const scrollRef = useRef(null);

  // Get unique years for the timeline
  const years = experience.map((job) => extractYear(job.duration));

  const scrollToCard = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[index]) {
        const cardLeft = cards[index].offsetLeft;
        const containerWidth = scrollRef.current.offsetWidth;
        const cardWidth = cards[index].offsetWidth;
        scrollRef.current.scrollTo({
          left: cardLeft - containerWidth / 2 + cardWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) scrollToCard(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < experience.length - 1) scrollToCard(activeIndex + 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey — each role a chapter in my growth story."
      centered
    >
      {/* Horizontal Timeline Bar with Year Markers */}
      <div className="relative max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
        {/* Timeline Track */}
        <div className="relative h-1 bg-border rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: "0%" }}
            whileInView={{
              width: `${((activeIndex + 1) / experience.length) * 100}%`,
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        {/* Year Markers / Dots */}
        <div className="flex justify-between mt-0 relative">
          {experience.map((job, index) => (
            <button
              key={job.id}
              onClick={() => scrollToCard(index)}
              className="relative flex flex-col items-center group cursor-pointer -mt-[10px]"
              aria-label={`Go to ${job.company}`}
            >
              {/* Dot */}
              <motion.div
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 z-10 ${
                  index === activeIndex
                    ? "bg-primary border-primary scale-125 shadow-lg shadow-primary/40"
                    : index < activeIndex
                    ? "bg-secondary border-secondary"
                    : "bg-surface border-border group-hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />

              {/* Year Label */}
              <span
                className={`mt-2 text-xs font-medium transition-colors ${
                  index === activeIndex
                    ? "text-primary"
                    : "text-text-muted group-hover:text-text-secondary"
                }`}
              >
                {years[index]}
              </span>

              {/* Company name tooltip on hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-surface-elevated border border-border text-xs text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {job.company}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <motion.button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="p-2 rounded-full glass border border-white/10 text-text-secondary hover:text-primary hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous experience"
        >
          <ChevronLeft size={20} />
        </motion.button>

        <span className="text-sm text-text-muted font-medium">
          {chapterLabels[activeIndex] || `Chapter ${experience.length - activeIndex}`}
          <span className="text-primary mx-2">·</span>
          <span className="text-text-secondary">{activeIndex + 1} / {experience.length}</span>
        </span>

        <motion.button
          onClick={handleNext}
          disabled={activeIndex === experience.length - 1}
          className="p-2 rounded-full glass border border-white/10 text-text-secondary hover:text-primary hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next experience"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div className="relative max-w-6xl mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory px-4 no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {experience.map((job, index) => {
            const isActive = index === activeIndex;
            const isExpanded = expandedId === job.id;

            return (
              <motion.article
                key={job.id}
                className={`flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] snap-center ${
                  isActive ? "" : "opacity-60"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: isActive ? 1 : 0.6, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToCard(index)}
              >
                <motion.div
                  className={`glass rounded-2xl p-5 sm:p-7 border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "border-primary/40 shadow-xl shadow-primary/10"
                      : "border-white/5 hover:border-white/15"
                  }`}
                  whileHover={{ y: -4 }}
                  layout
                >
                  {/* Chapter Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                      {chapterLabels[index] || `Chapter ${experience.length - index}`}
                    </span>
                    {index === 0 && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-1 leading-tight">
                    {job.role}
                  </h3>
                  <p className="text-primary font-semibold flex items-center gap-2 mb-4">
                    <Briefcase size={15} />
                    {job.company}
                  </p>

                  {/* Meta Row */}
                  <div className="flex flex-wrap gap-3 text-sm text-text-muted mb-5">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5">
                      <Calendar size={13} />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  {/* Expand/Collapse Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(isExpanded ? null : job.id);
                    }}
                    className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-light font-medium mb-3 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    {isExpanded ? "Show Less" : "Key Highlights"}
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </motion.button>

                  {/* Expandable Highlights */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 pt-2 pb-1">
                          {job.highlights.map((highlight, hIndex) => (
                            <motion.li
                              key={hIndex}
                              className="flex items-start gap-2.5 text-sm text-text-secondary"
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: hIndex * 0.08 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 shrink-0" />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </Section>
  );
};

export default Experience;
