"use client";

import { motion } from "motion/react";

const trustLogos = ["QuickBooks", "HubSpot", "Google Workspace", "Excel", "Outlook", "Salesforce"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/20 via-bg-deep to-accent-teal/10 animate-aurora" />

      <div className="absolute inset-0 grid-pattern" />

      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-indigo/8 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-accent-teal/5 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Business Runs on Repetitive Tasks.{" "}
            <span className="gradient-text">It Doesn&apos;t Have To.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl"
          >
            We build custom automations that connect your existing tools,
            monitor themselves, and free up 15-20 hours of your week. You focus
            on growth — we handle the rest.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent-indigo px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-indigo/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              Book a Free Discovery Call
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="gradient-border inline-flex items-center gap-2 rounded-xl bg-bg-surface/50 px-8 py-4 text-base font-medium text-text-primary transition-all hover:bg-bg-elevated"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <p className="mb-6 text-sm uppercase tracking-widest text-text-muted">
              Integrates with tools you already use
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {trustLogos.map((name) => (
                <span
                  key={name}
                  className="text-sm font-medium text-text-muted/60 transition-colors hover:text-text-secondary"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
