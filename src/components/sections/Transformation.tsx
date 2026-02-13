"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const transformations = [
  {
    before: "5 tabs open to move one client\u2019s data",
    after: "One workflow moves it everywhere in 2 seconds",
  },
  {
    before: "Sticky note says \u2018follow up with Sarah Tuesday\u2019",
    after: "Follow-up sent automatically. You just see the reply",
  },
  {
    before: "Invoice error caught when the client calls upset",
    after: "Flagged and fixed before it ever sends",
  },
  {
    before: "Hiring a $45K admin to handle growing volume",
    after: "Automations handle 10x the volume for $500/month",
  },
];

function CounterStat({
  end,
  suffix,
  label,
  delay = 0,
}: {
  end: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    const duration = 2000;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [end]);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(animate, delay);
    return () => clearTimeout(timeout);
  }, [isInView, delay, animate]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-text-secondary text-sm">{label}</div>
    </motion.div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Transformation() {
  return (
    <section id="transformation" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Stop surviving.{" "}
            <span className="gradient-text">Start scaling.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={cn(
                "glass rounded-2xl p-7",
                "border border-border-subtle",
                "transition-all duration-500",
                "hover:border-accent-indigo/30"
              )}
            >
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="w-5 h-5 text-red-400/70 mt-0.5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-muted text-sm leading-relaxed">
                  {item.before}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent-teal mt-0.5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-primary font-medium text-sm leading-relaxed">
                  {item.after}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Counter Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CounterStat end={15} suffix="+ hrs/week" label="Saved on average" delay={0} />
          <CounterStat end={10} suffix="x" label="Faster than doing it manually" delay={200} />
          <CounterStat end={24} suffix="/7" label="Monitoring & self-healing" delay={400} />
        </div>
      </div>
    </section>
  );
}
