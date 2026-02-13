"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    title: "Open Source Foundation",
    description:
      "You own your workflows. Built on n8n — no vendor lock-in, no per-execution fees. Take them in-house whenever you're ready.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    glow: "indigo" as const,
  },
  {
    title: "Self-Healing Automations",
    description:
      "Workflows monitor themselves. Errors get caught and fixed before they reach your customers. You only hear about what needs human judgment.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9 12l2 2 4-4" />
        <path d="M12 6v1" />
        <path d="M12 17v1" />
      </svg>
    ),
    glow: "teal" as const,
  },
  {
    title: "No Long-Term Contracts",
    description:
      "Month-to-month after setup. We earn your business every month. You can pause anytime — your automations keep running.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <circle cx="12" cy="5" r="3" />
      </svg>
    ),
    glow: "indigo" as const,
  },
];

export default function Differentiators() {
  return (
    <section id="why-pulse" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Why Pulse Systems</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We&apos;re not another SaaS tool. We build and manage your automations so you never have to think about them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group"
            >
              <div
                className={cn(
                  "relative h-full rounded-2xl p-8 glass gradient-border",
                  "transition-shadow duration-500",
                  "group-hover:shadow-lg",
                  item.glow === "indigo"
                    ? "hover:glow-indigo"
                    : "hover:glow-teal",
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors duration-300",
                    item.glow === "indigo"
                      ? "bg-accent-indigo/10 text-accent-indigo"
                      : "bg-accent-teal/10 text-accent-teal",
                  )}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {item.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-full",
              "bg-bg-surface border border-accent-indigo/30 text-text-primary",
              "font-medium text-lg",
              "hover:border-accent-indigo/60 hover:glow-indigo",
              "transition-all duration-300",
            )}
          >
            Book a Free Discovery Call
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
