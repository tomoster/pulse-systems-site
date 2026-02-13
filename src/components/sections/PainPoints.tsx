"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" />
        <path d="M4 4l2 2M20 4l-2 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Hours Lost to Copy-Paste",
    description:
      "Your team manually moves data between tools that should talk to each other. Every day.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Leads Falling Through Cracks",
    description:
      "Follow-ups get missed. Reminders get forgotten. Opportunities disappear into spreadsheet chaos.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 9v4M10 11h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "The Scaling Ceiling",
    description:
      "You can't grow without hiring more admin staff. But you can't afford more admin staff until you grow.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.75-2.97L13.75 4a2 2 0 00-3.5 0L3.32 16.03A2 2 0 005.07 19z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Errors Nobody Catches",
    description:
      "Manual processes mean human mistakes. Wrong invoices, missed appointments, duplicate entries — until a customer notices.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function PainPoints() {
  return (
    <section id="pain-points" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sound Familiar?</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            These problems cost small businesses thousands of hours every year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {/* Large card — top left, spans 7 columns */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7 group"
          >
            <div
              className={cn(
                "glass rounded-2xl p-8 h-full",
                "border border-border-subtle",
                "transition-all duration-500",
                "hover:border-accent-indigo/40 hover:glow-indigo"
              )}
            >
              <div className="text-accent-indigo mb-5">{painPoints[0].icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {painPoints[0].title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-base">
                {painPoints[0].description}
              </p>
            </div>
          </motion.div>

          {/* Smaller card — top right, spans 5 columns */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-5 group"
          >
            <div
              className={cn(
                "glass rounded-2xl p-8 h-full",
                "border border-border-subtle",
                "transition-all duration-500",
                "hover:border-accent-indigo/40 hover:glow-indigo"
              )}
            >
              <div className="text-accent-teal mb-5">{painPoints[1].icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {painPoints[1].title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-base">
                {painPoints[1].description}
              </p>
            </div>
          </motion.div>

          {/* Smaller card — bottom left, spans 5 columns */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-5 group"
          >
            <div
              className={cn(
                "glass rounded-2xl p-8 h-full",
                "border border-border-subtle",
                "transition-all duration-500",
                "hover:border-accent-teal/40 hover:glow-teal"
              )}
            >
              <div className="text-accent-indigo mb-5">{painPoints[2].icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {painPoints[2].title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-base">
                {painPoints[2].description}
              </p>
            </div>
          </motion.div>

          {/* Large card — bottom right, spans 7 columns */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7 group"
          >
            <div
              className={cn(
                "glass rounded-2xl p-8 h-full",
                "border border-border-subtle",
                "transition-all duration-500",
                "hover:border-accent-teal/40 hover:glow-teal"
              )}
            >
              <div className="text-accent-teal mb-5">{painPoints[3].icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {painPoints[3].title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-base">
                {painPoints[3].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
