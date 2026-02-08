"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function WordReveal({
  text,
  className,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const words = text.split(" ");

  const MotionTag = motion[Tag] as typeof motion.h1;

  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

export function WordRevealOnScroll({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const words = text.split(" ");

  const MotionTag = motion[Tag] as typeof motion.h2;

  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
