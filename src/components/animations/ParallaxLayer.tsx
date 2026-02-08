"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxLayer({
  children,
  className,
  speed = 0.3,
}: {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120 * speed]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}

export function FloatingBlobs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[8%] left-[10%] w-[400px] h-[400px] rounded-full bg-amber-100/30 blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[25%] right-[8%] w-[350px] h-[350px] rounded-full bg-navy-100/40 blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[15%] left-[35%] w-[450px] h-[450px] rounded-full bg-cream-200/50 blur-3xl"
      />
    </div>
  );
}
