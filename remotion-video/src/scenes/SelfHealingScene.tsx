import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { motion } from "framer-motion";
import { AlertTriangle, Search, Target, CheckCircle, ArrowRight } from "lucide-react";
import { AnimatedBeam } from "@/components/magic-ui/animated-beam";

// Duration: 33-37 seconds (4 seconds total, 120 frames at 30fps)
// Visual: Side-by-side UI comparison with 4-phase healing visualization

interface SelfHealingSceneProps {
  startFrame?: number;
}

export function SelfHealingScene({ startFrame = 990 }: SelfHealingSceneProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  const titleOpacity = interpolate(localFrame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // 4-phase healing process
  const phases = [
    {
      id: 1,
      icon: AlertTriangle,
      label: "Error Detected",
      detail: "Button not found",
      color: "#EF4444",
      startFrame: 20,
    },
    {
      id: 2,
      icon: Search,
      label: "Scanning UI",
      detail: "Analyzing structure...",
      color: "#F59E0B",
      startFrame: 40,
    },
    {
      id: 3,
      icon: Target,
      label: "Match Found",
      detail: "94% confidence",
      color: "#3B82F6",
      startFrame: 60,
    },
    {
      id: 4,
      icon: CheckCircle,
      label: "Self-Healed",
      detail: "Updated to v1.1",
      color: "#10B981",
      startFrame: 80,
    },
  ];

  // Version badge transition
  const oldVersionOpacity = interpolate(localFrame, [80, 90], [1, 0], { extrapolateRight: "clamp" });
  const newVersionScale = spring({
    frame: localFrame - 85,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-navy-900 via-slate-900 to-purple-900">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_60%)]" />

      {/* Title */}
      <div
        className="absolute top-20 left-0 right-0 text-center"
        style={{ opacity: titleOpacity }}
      >
        <p className="text-amber-500 text-sm font-mono uppercase tracking-widest mb-2">
          Self-Healing Technology
        </p>
        <h2 className="text-5xl font-bold text-white font-display">
          Adapts to UI Changes Automatically
        </h2>
      </div>

      {/* Split-screen comparison */}
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[1600px] h-[600px]">
        <div className="grid grid-cols-2 gap-8 h-full">
          {/* Left Panel: Before (v1.0) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700 p-8 relative"
          >
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-2">Before Update</p>
              <div
                className="inline-block px-4 py-2 bg-slate-700/50 rounded-lg border border-slate-600"
                style={{ opacity: oldVersionOpacity }}
              >
                <span className="text-lg font-mono font-bold text-white">v1.0</span>
              </div>
            </div>

            {/* Mockup UI - Old version */}
            <div className="bg-slate-900/60 rounded-xl border border-slate-700 p-6">
              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-2">Checkout</div>
                <div className="text-sm text-gray-400">Complete your purchase</div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800 rounded p-4">
                  <div className="text-sm text-gray-400 mb-2">Shipping Address</div>
                  <div className="text-white">123 Main St, City, State 12345</div>
                </div>

                <div className="bg-slate-800 rounded p-4">
                  <div className="text-sm text-gray-400 mb-2">Payment Method</div>
                  <div className="text-white">Visa •••• 4242</div>
                </div>

                {/* Old button position (top-left area) */}
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium shadow-lg shadow-orange-500/30">
                    Complete Order
                  </button>
                  <div className="px-6 py-3 border border-slate-600 text-gray-400 rounded-lg">
                    Cancel
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: After (v1.1) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700 p-8 relative"
          >
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-2">After Update</p>
              <motion.div
                className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-lg"
                style={{ scale: newVersionScale, opacity: newVersionScale }}
              >
                <span className="text-lg font-mono font-bold text-green-400">v1.1</span>
              </motion.div>
            </div>

            {/* Mockup UI - New version */}
            <div className="bg-slate-900/60 rounded-xl border border-slate-700 p-6">
              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-2">Checkout</div>
                <div className="text-sm text-gray-400">Complete your purchase</div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800 rounded p-4">
                  <div className="text-sm text-gray-400 mb-2">Shipping Address</div>
                  <div className="text-white">123 Main St, City, State 12345</div>
                </div>

                <div className="bg-slate-800 rounded p-4">
                  <div className="text-sm text-gray-400 mb-2">Payment Method</div>
                  <div className="text-white">Visa •••• 4242</div>
                </div>

                <div className="bg-slate-800 rounded p-4">
                  <div className="text-sm text-gray-400 mb-2">Order Summary</div>
                  <div className="text-white">3 items • $127.50</div>
                </div>

                {/* NEW button position (bottom-right area) */}
                <div className="flex gap-3 justify-end">
                  <div className="px-6 py-3 border border-slate-600 text-gray-400 rounded-lg">
                    Cancel
                  </div>
                  <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium shadow-lg shadow-green-500/30">
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Center: 4-Phase Healing Process */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col gap-4">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isActive = localFrame >= phase.startFrame && localFrame < (phases[index + 1]?.startFrame || 120);
            const isComplete = localFrame >= (phases[index + 1]?.startFrame || 120);

            const phaseScale = spring({
              frame: localFrame - phase.startFrame,
              fps,
              config: { damping: 15, stiffness: 200 },
            });

            const opacity = interpolate(
              localFrame,
              [phase.startFrame - 5, phase.startFrame],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );

            return (
              <motion.div
                key={phase.id}
                className={`
                  flex items-center gap-4 px-6 py-4 rounded-xl border-2
                  backdrop-blur-md transition-all relative
                  ${isActive ? "bg-white/10 scale-110" : "bg-slate-900/60"}
                  ${isComplete ? "opacity-50" : ""}
                `}
                style={{
                  borderColor: isActive || isComplete ? phase.color : "#475569",
                  opacity: opacity,
                  transform: isActive ? `scale(${1.1 * phaseScale})` : undefined,
                  boxShadow: isActive ? `0 0 30px ${phase.color}60` : "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${phase.color}20`,
                    border: `2px solid ${phase.color}`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: phase.color }} />
                </div>

                <div className="min-w-[200px]">
                  <div className="text-lg font-bold text-white mb-1">{phase.label}</div>
                  <div className="text-sm text-gray-400">{phase.detail}</div>
                </div>

                {isComplete && (
                  <CheckCircle className="w-5 h-5 text-green-400 absolute -right-2 -top-2" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Connecting arrows */}
        {phases.slice(0, -1).map((phase, index) => {
          const arrowOpacity = interpolate(
            localFrame,
            [phases[index + 1].startFrame - 5, phases[index + 1].startFrame],
            [0, 1],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );

          return (
            <div
              key={`arrow-${index}`}
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: `${(index + 0.5) * 88 + 20}px`,
                opacity: arrowOpacity,
              }}
            >
              <ArrowRight className="w-6 h-6 text-amber-500 rotate-90" />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}
