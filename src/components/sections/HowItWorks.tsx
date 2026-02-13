"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "30 minutes. We map your repetitive processes and identify what to automate first.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Build",
    description:
      "Custom automations connected to your existing tools. Live in 2-4 weeks. You approve everything before launch.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "It Runs Itself",
    description:
      "You'll get a monthly report showing what ran, what was caught, and how we optimized. That's the only time you'll think about it.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Three Steps to Automation</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            From discovery to hands-free operation. Here&apos;s how we get you there.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent-indigo), var(--accent-teal), transparent)",
              }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={cn(
                  "relative flex items-start gap-6 md:gap-0",
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                )}
              >
                {/* Content card */}
                <div
                  className={cn(
                    "flex-1",
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  )}
                >
                  <div
                    className={cn(
                      "glass rounded-2xl p-7",
                      "border border-border-subtle",
                      "transition-all duration-500",
                      "hover:border-accent-indigo/30 hover:glow-indigo"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-3 mb-3",
                        i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      )}
                    >
                      <span className="text-accent-indigo">{step.icon}</span>
                      <span className="text-sm font-mono text-accent-teal tracking-wider">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-[55px] h-[55px] rounded-full bg-bg-deep border-2 border-accent-indigo flex items-center justify-center z-10 relative">
                      <span className="text-sm font-bold gradient-text">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-accent-indigo/20 animate-pulse-glow" />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
