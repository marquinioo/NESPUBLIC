"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type StatBadgeProps = {
  value: string;
  label: string;
  className?: string;
};

function parseStatValue(value: string): {
  prefix: string;
  numeric: number;
  suffix: string;
} {
  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { prefix: "", numeric: 0, suffix: value };
  }
  return {
    prefix: match[1],
    numeric: parseFloat(match[2]),
    suffix: match[3],
  };
}

export function StatBadge({ value, label, className }: StatBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const reduceMotion = useReducedMotion();
  const { prefix, numeric, suffix } = parseStatValue(value);

  useEffect(() => {
    if (reduceMotion || numeric === 0) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(numeric * eased);
          setDisplay(`${prefix}${current}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric, prefix, suffix, reduceMotion]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p className="text-4xl font-extrabold tracking-tight text-accent-green md:text-5xl lg:text-6xl">
        {display}
      </p>
      <p className="mt-2 text-sm text-text-muted md:text-base">{label}</p>
    </div>
  );
}
