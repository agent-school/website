import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { motion } from "framer-motion";
import { ShoppingCart, Users, Building2, DollarSign, Heart, CheckCircle, Zap } from "lucide-react";
import { AnimatedBeam } from "@/components/magic-ui/animated-beam";
import { BorderBeam } from "@/components/magic-ui/border-beam";

// Duration: 11-28 seconds (17 seconds total, 510 frames at 30fps)
// Visual: Bento Grid with 5 software mockups + center badge

interface SolutionSceneProps {
  startFrame?: number;
}

export function SolutionScene({ startFrame = 330 }: SolutionSceneProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  // Animation timing
  const titleOpacity = interpolate(localFrame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(localFrame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const gridScale = spring({
    frame: localFrame - 10,
    fps,
    config: { damping: 20, stiffness: 100 },
  });

  // Card appearance stagger
  const getCardDelay = (index: number) => 30 + index * 8;
  
  const softwareTypes = [
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      color: "#FF9800",
      position: "col-span-1 row-span-1", // Top-left (1x1)
      workflows: ["Browse products", "Add to cart", "Process checkout"],
    },
    {
      id: "crm",
      name: "CRM",
      icon: Users,
      color: "#00A1E0",
      position: "col-span-1 row-span-1", // Top-center (1x1)
      workflows: ["Search contacts", "Update records", "Send emails"],
    },
    {
      id: "hotel",
      name: "Hotel PMS",
      icon: Building2,
      color: "#6631D7",
      position: "col-span-1 row-span-2", // Top-right TALL (1x2)
      workflows: ["Check-in guest", "Assign room", "Process payment", "Update status"],
    },
    {
      id: "banking",
      name: "Banking",
      icon: DollarSign,
      color: "#10B981",
      position: "col-span-2 row-span-1", // Bottom-left WIDE (2x1)
      workflows: ["Review invoice", "Approve payment", "Process transaction"],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      color: "#D946EF",
      position: "col-span-1 row-span-1", // Bottom-right (1x1)
      workflows: ["Review chart", "Update vitals", "Prescribe medication"],
    },
  ];

  // Center badge animation
  const badgeScale = spring({
    frame: localFrame - 420,
    fps,
    config: { damping: 15, stiffness: 200 },
  });
  const badgeRotate = interpolate(localFrame, [420, 480], [0, 360], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-slate-900 via-navy-900 to-purple-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(102,49,215,0.1),transparent_50%)]" />

      {/* Title */}
      <div
        className="absolute top-16 left-0 right-0 text-center"
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <p className="text-amber-500 text-sm font-mono uppercase tracking-widest mb-2">
          The Solution
        </p>
        <h2 className="text-5xl font-bold text-white font-display">
          One Platform. All Software.
        </h2>
        <p className="text-xl text-gray-300 mt-3">
          Certified agents that understand every UI
        </p>
      </div>

      {/* Bento Grid Container */}
      <div
        className="absolute top-48 left-1/2 -translate-x-1/2 w-[1600px]"
        style={{
          transform: `translateX(-50%) scale(${gridScale})`,
          opacity: gridScale,
        }}
      >
        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[700px] relative">
          {softwareTypes.map((software, index) => {
            const Icon = software.icon;
            const cardOpacity = interpolate(
              localFrame,
              [getCardDelay(index), getCardDelay(index) + 15],
              [0, 1],
              { extrapolateRight: "clamp" }
            );
            const cardScale = interpolate(
              localFrame,
              [getCardDelay(index), getCardDelay(index) + 15],
              [0.8, 1],
              { extrapolateRight: "clamp" }
            );

            return (
              <motion.div
                key={software.id}
                className={`${software.position} relative`}
                style={{
                  opacity: cardOpacity,
                  transform: `scale(${cardScale})`,
                }}
              >
                <div
                  className="h-full bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700 p-6 flex flex-col relative overflow-hidden"
                  style={{
                    boxShadow: `0 0 30px ${software.color}20`,
                  }}
                >
                  <BorderBeam size={200} duration={10} colorFrom={software.color} colorTo={software.color + "80"} />

                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: software.color + "20",
                        border: `2px solid ${software.color}40`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: software.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{software.name}</h3>
                      <p className="text-sm text-gray-400">Automation</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 border border-green-500/40 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-xs font-medium text-green-300">Certified</span>
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="flex-1 space-y-3">
                    {software.workflows.map((step, stepIndex) => {
                      const stepOpacity = interpolate(
                        localFrame,
                        [
                          getCardDelay(index) + 20 + stepIndex * 5,
                          getCardDelay(index) + 30 + stepIndex * 5
                        ],
                        [0, 1],
                        { extrapolateRight: "clamp" }
                      );

                      return (
                        <motion.div
                          key={stepIndex}
                          className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/50"
                          style={{ opacity: stepOpacity }}
                        >
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{
                              backgroundColor: software.color + "30",
                              color: software.color,
                            }}
                          >
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm text-gray-300 flex-1">{step}</span>
                          <Zap className="w-4 h-4 text-amber-500" />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Beam connector indicator (small circle for beam attachment) */}
                  <div
                    className="absolute bottom-3 right-3 w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: software.color,
                      boxShadow: `0 0 10px ${software.color}`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* Center Badge - "Agent School" Hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            style={{
              transform: `translate(-50%, -50%) scale(${badgeScale}) rotate(${badgeRotate}deg)`,
              opacity: badgeScale,
            }}
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl border-4 border-white/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white font-display mb-1">
                    Agent
                  </div>
                  <div className="text-4xl font-bold text-white font-display">
                    School
                  </div>
                  <div className="text-xs text-white/80 mt-2 font-mono uppercase tracking-wider">
                    Universal
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 blur-2xl opacity-50 -z-10" />
              
              {/* Small connection points around badge */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-amber-400"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-96px)`,
                    boxShadow: "0 0 10px #FE9F4D",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div
        className="absolute bottom-16 left-0 right-0 text-center"
        style={{
          opacity: interpolate(localFrame, [460, 490], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <p className="text-2xl text-white font-medium">
          Teach once. <span className="text-amber-500 font-bold">Automate forever.</span>
        </p>
      </div>
    </AbsoluteFill>
  );
}
