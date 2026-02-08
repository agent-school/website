"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
  BookOpen,
  Cpu,
  ShieldCheck,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { JOURNEY_STAGES } from "@/lib/constants";

const icons: LucideIcon[] = [BookOpen, Cpu, ShieldCheck, Activity];

function StageNode({
  stage,
  index,
  Icon,
  scrollYProgress,
}: {
  stage: (typeof JOURNEY_STAGES)[number];
  index: number;
  Icon: LucideIcon;
  scrollYProgress: MotionValue<number>;
}) {
  const nodeProgress = useTransform(
    scrollYProgress,
    [0.2 + index * 0.15, 0.35 + index * 0.15],
    [0, 1]
  );
  const borderColor = useTransform(
    nodeProgress,
    [0, 1],
    ["rgb(37, 58, 106)", "rgb(254, 159, 77)"]
  );
  const bgColor = useTransform(
    nodeProgress,
    [0, 1],
    ["rgb(27, 41, 81)", "rgba(254, 159, 77, 0.15)"]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <motion.div
        className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-6 relative"
        style={{ borderColor, backgroundColor: bgColor }}
      >
        <Icon size={20} className="text-amber-400" strokeWidth={1.8} />
      </motion.div>

      <div className="text-center">
        <span className="font-mono text-caption text-amber-400 block mb-1">
          {stage.number}
        </span>
        <h3 className="font-display text-heading-md text-white mb-3">
          {stage.title}
        </h3>
        <p className="text-body-sm text-navy-200 leading-relaxed">
          {stage.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-24 md:py-32 px-6 bg-navy-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] rounded-full bg-navy-700/30 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-caption uppercase tracking-widest text-amber-400 mb-4">
            How It Works
          </p>
          <h2 className="font-display text-display-md md:text-display-lg text-white mb-4 text-balance">
            Four Steps to Certified Automation
          </h2>
          <p className="text-body-lg text-navy-200 max-w-2xl mx-auto text-balance">
            From teaching your first workflow to monitoring self-healing agents in
            production. The entire journey is designed for reliability.
          </p>
        </motion.div>

        {/* Progress Line (desktop) */}
        <div className="hidden md:block relative mb-12">
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-[2px] bg-navy-700 rounded-full" />
          <motion.div
            className="absolute top-6 left-[12.5%] h-[2px] bg-amber-500 rounded-full origin-left"
            style={{ width: progressWidth, maxWidth: "75%" }}
          />

          {/* Stage Nodes */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {JOURNEY_STAGES.map((stage, i) => (
              <StageNode
                key={stage.number}
                stage={stage}
                index={i}
                Icon={icons[i]}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Layout */}
        <div className="md:hidden space-y-8">
          {JOURNEY_STAGES.map((stage, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                    <Icon size={18} className="text-amber-400" strokeWidth={1.8} />
                  </div>
                  {i < JOURNEY_STAGES.length - 1 && (
                    <div className="w-[2px] flex-1 bg-navy-700 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="font-mono text-caption text-amber-400 block mb-1">
                    {stage.number}
                  </span>
                  <h3 className="font-display text-heading-md text-white mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-body-sm text-navy-200 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
