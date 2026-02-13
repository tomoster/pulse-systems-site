"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Founder() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className={cn(
                  "w-56 h-56 md:w-64 md:h-64 rounded-full gradient-border",
                  "flex items-center justify-center",
                  "bg-bg-surface",
                )}
              >
                <span className="text-5xl md:text-6xl font-bold gradient-text select-none">
                  TO
                </span>
              </div>

              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent-indigo/10 to-accent-teal/10 blur-2xl -z-10 animate-pulse-glow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-2">
              Meet Tom Oster
            </h2>
            <p className="text-accent-indigo font-medium text-lg mb-8">
              Founder, Pulse Systems
            </p>

            <blockquote className="text-text-secondary text-lg leading-relaxed mb-8 border-l-2 border-accent-indigo/30 pl-6">
              I started Pulse Systems because I kept seeing the same thing: smart
              business owners buried in work their computers should be doing.
              Manual data entry. Copy-paste between tools. Follow-ups tracked on
              sticky notes.
              <br />
              <br />
              I build the systems that make that work disappear — so you can
              focus on what you actually started your business to do.
            </blockquote>

            <a
              href="https://linkedin.com/in/tomoster"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 text-text-secondary",
                "hover:text-accent-indigo transition-colors duration-300",
                "group",
              )}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-medium">Connect on LinkedIn</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
