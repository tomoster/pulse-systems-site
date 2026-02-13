"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

function cssToPixels(value: string): number {
  if (value.endsWith("rem")) return parseFloat(value) * 16;
  if (value.endsWith("px")) return parseFloat(value);
  return parseFloat(value) || 12;
}

function MovingGlow({ duration, radius }: { duration: number; radius: number }) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val)?.x ?? 0
  );
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val)?.y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={radius}
          ry={radius}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        <div className="h-20 w-20 bg-[radial-gradient(var(--accent-indigo)_40%,var(--accent-teal)_60%,transparent_80%)] opacity-80" />
      </motion.div>
    </>
  );
}

export function MovingBorderLink({
  children,
  duration = 4000,
  className,
  containerClassName,
  borderRadius = "0.75rem",
  href,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  href: string;
  onClick?: () => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className">) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [svgRadius, setSvgRadius] = useState(() => cssToPixels(borderRadius));

  useEffect(() => {
    const px = cssToPixels(borderRadius);
    if (px > 100 && containerRef.current) {
      setSvgRadius(containerRef.current.offsetHeight / 2);
    } else {
      setSvgRadius(px);
    }
  }, [borderRadius]);

  return (
    <a
      ref={containerRef}
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex overflow-hidden p-[1px]",
        containerClassName
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div className="absolute inset-0">
        <MovingGlow duration={duration} radius={svgRadius} />
      </div>
      <span
        className={cn(
          "relative z-10 inline-flex items-center bg-bg-deep backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </span>
    </a>
  );
}
