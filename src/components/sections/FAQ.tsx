"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Setup typically ranges from $2,000-$10,000 depending on complexity. Less than a part-time admin. Ongoing management runs $500-$2,000/month. Most clients see ROI within the first month.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most automations are live within 2-4 weeks. You'll start saving time immediately once workflows launch. We handle monitoring and optimization from day one.",
  },
  {
    question: "What tools do you work with?",
    answer:
      "If your tool exists, we can probably connect it. We regularly work with HubSpot, QuickBooks, Gmail, Calendly, Slack, Shopify, and dozens more. We'll map your specific stack on our discovery call.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "Not at all. We handle all the technical work. You tell us what processes eat your time, and we build the automations. You approve everything before it goes live.",
  },
  {
    question: "What if I want to stop?",
    answer:
      "No long-term contracts. Month-to-month after initial setup. You own everything we build. We document it all so you're never dependent on us.",
  },
  {
    question: "How is this different from Zapier?",
    answer:
      "With Zapier, you're building and maintaining everything yourself. We handle the entire process: design, build, monitor, fix, and optimize. Think of it as having an automation team on retainer for a fraction of the cost.",
  },
  {
    question: "What happens if something breaks?",
    answer:
      "Our systems monitor themselves 24/7. Most issues are caught and fixed automatically before you'd ever notice. If something needs a human call, we handle it. You don't lift a finger.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Common Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div
                  className={cn(
                    "rounded-xl glass transition-all duration-300",
                    isOpen && "glow-indigo",
                  )}
                >
                  <button
                    onClick={() => toggle(i)}
                    className={cn(
                      "w-full flex items-center justify-between p-6 text-left",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo/50 rounded-xl",
                    )}
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium text-text-primary pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-accent-indigo"
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
