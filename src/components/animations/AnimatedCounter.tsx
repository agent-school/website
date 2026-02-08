"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

export function AnimatedCounter({
  target,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
  decimals = 0,
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, target, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    });

    return controls.stop;
  }, [isInView, motionValue, target, duration]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        const formatted =
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.round(latest).toLocaleString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return unsubscribe;
  }, [motionValue, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

export function SmoothNumber({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [motionValue, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}
