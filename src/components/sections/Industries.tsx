"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const industries = [
  {
    icon: "briefcase",
    label: "Professional Services",
    subtitle: "Accounting, Legal, Insurance",
    pain: "Drowning in client intake and manual billing",
    solution: "Automated onboarding, document routing, billing reminders",
    benefit: "More billable hours, less admin time",
    color: "indigo" as const,
  },
  {
    icon: "heart",
    label: "Healthcare Practices",
    subtitle: "Dental, Chiropractic, Optometry",
    pain: "No-shows, manual reminders, paper intake forms",
    solution: "Automated reminders, digital intake, post-visit sequences",
    benefit: "Fill more appointments, reduce no-shows",
    color: "teal" as const,
  },
  {
    icon: "wrench",
    label: "Home Services",
    subtitle: "HVAC, Plumbing, Electrical",
    pain: "Dispatch chaos, late quotes, missed follow-ups",
    solution: "Automated dispatch, instant invoicing, review requests",
    benefit: "Handle more jobs without more dispatchers",
    color: "indigo" as const,
  },
  {
    icon: "cart",
    label: "E-commerce / Retail",
    subtitle: "Online & Physical Stores",
    pain: "Manual inventory sync, slow fulfillment",
    solution: "Multi-channel inventory sync, automated order tracking",
    benefit: "Sell more without hiring operations staff",
    color: "teal" as const,
  },
];

function IndustryIcon({ icon, className }: { icon: string; className?: string }) {
  const base = cn("w-8 h-8", className);
  switch (icon) {
    case "briefcase":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M2 13h20" />
        </svg>
      );
    case "heart":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.5 12.572l-7.5 7.428l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
          <path d="M12 6v4" />
          <path d="M10 10h4" />
        </svg>
      );
    case "wrench":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "cart":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Industries We Serve</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every industry has repetitive work hiding in plain sight. We find it and automate it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry, i) => {
            const isActive = activeIndex === i;
            const isFeatured = i === 0 || i === 3;

            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveIndex(isActive ? null : i)}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={cn(
                  "group relative rounded-2xl transition-all duration-500 cursor-pointer",
                  isFeatured ? "md:row-span-1" : "",
                )}
              >
                <div
                  className={cn(
                    "relative h-full rounded-2xl p-8 transition-all duration-500 overflow-hidden",
                    "glass gradient-border",
                    isActive && industry.color === "indigo" && "glow-indigo",
                    isActive && industry.color === "teal" && "glow-teal",
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl",
                      isActive && "opacity-100",
                      industry.color === "indigo"
                        ? "bg-gradient-to-br from-accent-indigo/5 to-transparent"
                        : "bg-gradient-to-br from-accent-teal/5 to-transparent",
                    )}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={cn(
                          "flex items-center justify-center w-14 h-14 rounded-xl transition-colors duration-300",
                          industry.color === "indigo"
                            ? "bg-accent-indigo/10 text-accent-indigo"
                            : "bg-accent-teal/10 text-accent-teal",
                        )}
                      >
                        <IndustryIcon icon={industry.icon} className="w-7 h-7" />
                      </div>
                      <span className="text-text-muted text-sm font-medium tracking-wide uppercase">
                        {industry.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-text-primary mb-3">
                      {industry.label}
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">
                          The Problem
                        </p>
                        <p className="text-text-secondary">{industry.pain}</p>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 space-y-4">
                          <div>
                            <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">
                              What We Build
                            </p>
                            <p className="text-text-secondary">{industry.solution}</p>
                          </div>
                          <div
                            className={cn(
                              "rounded-lg px-4 py-3",
                              industry.color === "indigo"
                                ? "bg-accent-indigo/10 border border-accent-indigo/20"
                                : "bg-accent-teal/10 border border-accent-teal/20",
                            )}
                          >
                            <p
                              className={cn(
                                "text-sm font-semibold",
                                industry.color === "indigo"
                                  ? "text-accent-indigo"
                                  : "text-accent-teal",
                              )}
                            >
                              {industry.benefit}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {!isActive && (
                        <p className="text-sm text-text-muted mt-2">
                          <span className="hidden md:inline">Hover</span>
                          <span className="md:hidden">Tap</span>
                          {" "}to see the solution →
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
