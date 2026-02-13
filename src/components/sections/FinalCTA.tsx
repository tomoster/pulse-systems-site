"use client";

import { motion } from "motion/react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg-deep py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent-indigo/10 blur-[150px]" />
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent-teal/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to stop doing work{" "}
            <span className="gradient-text">your computer should be doing?</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            No commitment. No sales pressure. Just a conversation about
            what&apos;s possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border-subtle"
        >
          <CalendlyEmbed />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8"
        >
          <a
            href="mailto:tom@pulseequities.com"
            className="text-text-secondary transition-colors hover:text-text-primary"
          >
            tom@pulseequities.com
          </a>
          <span className="hidden h-4 w-px bg-text-muted/30 sm:block" />
          <a
            href="tel:+14692519832"
            className="text-text-secondary transition-colors hover:text-text-primary"
          >
            469-251-9832
          </a>
        </motion.div>
      </div>

      <footer className="relative z-10 mt-24 border-t border-border-subtle pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Pulse Systems. All rights reserved.
            </p>
            <a
              href="mailto:tom@pulseequities.com"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              tom@pulseequities.com
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
