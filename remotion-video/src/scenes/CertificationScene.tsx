import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { motion } from "framer-motion";
import { CheckCircle, PlayCircle, Award } from "lucide-react";
import { BorderBeam } from "@/components/magic-ui/border-beam";

// Duration: 28-33 seconds (5 seconds total, 150 frames at 30fps)
// Visual: 3x4 Grid of certification tests running in parallel

interface CertificationSceneProps {
  startFrame?: number;
}

export function CertificationScene({ startFrame = 840 }: CertificationSceneProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  const titleOpacity = interpolate(localFrame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(localFrame, [0, 15], [30, 0], { extrapolateRight: "clamp" });

  // 12 test cards (3 cols × 4 rows)
  const tests = [
    { name: "Login Flow", software: "E-commerce", duration: 0.8, status: "complete" },
    { name: "Add to Cart", software: "E-commerce", duration: 1.2, status: "complete" },
    { name: "Checkout", software: "E-commerce", duration: 1.5, status: "complete" },
    { name: "Contact Search", software: "CRM", duration: 0.6, status: "complete" },
    { name: "Update Record", software: "CRM", duration: 1.1, status: "complete" },
    { name: "Send Email", software: "CRM", duration: 0.9, status: "complete" },
    { name: "Room Assignment", software: "Hotel PMS", duration: 1.3, status: "complete" },
    { name: "Check-in Guest", software: "Hotel PMS", duration: 1.0, status: "complete" },
    { name: "Invoice Processing", software: "Banking", duration: 1.4, status: "complete" },
    { name: "Payment Auth", software: "Banking", duration: 0.7, status: "complete" },
    { name: "Chart Update", software: "Healthcare", duration: 1.2, status: "complete" },
    { name: "Prescription", software: "Healthcare", duration: 0.9, status: "complete" },
  ];

  // Wave animation - tests complete in sequence
  const getTestDelay = (index: number) => 20 + index * 6;

  // Badge animation at the end
  const badgeScale = spring({
    frame: localFrame - 100,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-slate-900 via-purple-900 to-navy-900">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(102,49,215,0.15),transparent_70%)]" />

      {/* Title */}
      <div
        className="absolute top-20 left-0 right-0 text-center"
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <p className="text-amber-500 text-sm font-mono uppercase tracking-widest mb-2">
          Certification Process
        </p>
        <h2 className="text-5xl font-bold text-white font-display">
          Parallel Testing at Scale
        </h2>
        <p className="text-xl text-gray-300 mt-3">
          12 automated tests running simultaneously
        </p>
      </div>

      {/* Test Grid */}
      <div className="absolute top-56 left-1/2 -translate-x-1/2 w-[1400px]">
        <div className="grid grid-cols-3 gap-4">
          {tests.map((test, index) => {
            const cardOpacity = interpolate(
              localFrame,
              [10, 20],
              [0, 1],
              { extrapolateRight: "clamp" }
            );

            const isRunning = localFrame >= getTestDelay(index) && localFrame < getTestDelay(index) + 20;
            const isComplete = localFrame >= getTestDelay(index) + 20;

            const progress = interpolate(
              localFrame,
              [getTestDelay(index), getTestDelay(index) + 20],
              [0, 100],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );

            const checkmarkScale = spring({
              frame: localFrame - (getTestDelay(index) + 20),
              fps,
              config: { damping: 10, stiffness: 300 },
            });

            return (
              <motion.div
                key={index}
                className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 p-5 relative overflow-hidden"
                style={{
                  opacity: cardOpacity,
                  boxShadow: isComplete
                    ? "0 0 20px rgba(16, 185, 129, 0.3)"
                    : isRunning
                    ? "0 0 20px rgba(251, 146, 60, 0.3)"
                    : "none",
                }}
              >
                {/* Test header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{test.name}</h4>
                    <p className="text-xs text-gray-400">{test.software}</p>
                  </div>
                  {isRunning && (
                    <PlayCircle className="w-5 h-5 text-orange-400 animate-pulse" />
                  )}
                  {isComplete && (
                    <motion.div
                      style={{ scale: checkmarkScale }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </motion.div>
                  )}
                </div>

                {/* Progress bar */}
                <div className="bg-slate-900/80 rounded-full h-2 mb-2 overflow-hidden">
                  <motion.div
                    className={`h-full ${
                      isComplete ? "bg-green-500" : "bg-orange-500"
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Duration</span>
                  <span className={`font-mono font-medium ${isComplete ? "text-green-400" : "text-gray-400"}`}>
                    {test.duration}s
                  </span>
                </div>

                {/* Status indicator */}
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full">
                  {isRunning && <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />}
                  {isComplete && <div className="w-2 h-2 bg-green-400 rounded-full" />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certification Badge */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        style={{
          transform: `translateX(-50%) scale(${badgeScale})`,
          opacity: badgeScale,
        }}
      >
        <div className="relative">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl px-12 py-6 shadow-2xl border-4 border-green-400/30">
            <BorderBeam size={150} duration={8} colorFrom="#10B981" colorTo="#059669" />
            
            <div className="flex items-center gap-4">
              <Award className="w-16 h-16 text-white" />
              <div>
                <div className="text-4xl font-bold text-white font-display mb-1">
                  99% Pass Rate
                </div>
                <div className="text-sm text-green-100">
                  All skills certified and production-ready
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-2xl opacity-50 -z-10" />
        </div>
      </motion.div>
    </AbsoluteFill>
  );
}
