import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { motion } from "framer-motion";
import { Loader2, Zap, DollarSign } from "lucide-react";
import { NumberTicker } from "@/components/magic-ui/number-ticker";

// Duration: 37-43 seconds (6 seconds total, 180 frames at 30fps)
// Visual: Split-screen race comparing Generic AI vs Agent School

interface SpeedRaceSceneProps {
  startFrame?: number;
}

export function SpeedRaceScene({ startFrame = 1110 }: SpeedRaceSceneProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  const titleOpacity = interpolate(localFrame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Generic AI: 45 seconds (slow)
  const genericProgress = interpolate(
    localFrame,
    [20, 160],
    [0, 100],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const genericCost = interpolate(
    localFrame,
    [20, 160],
    [0, 0.50],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Agent School: 2 seconds (fast) - completes much earlier
  const agentProgress = interpolate(
    localFrame,
    [20, 40],
    [0, 100],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const agentCost = interpolate(
    localFrame,
    [20, 40],
    [0, 0.05],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Stat cards appear after race
  const statsOpacity = interpolate(localFrame, [160, 170], [0, 1], { extrapolateRight: "clamp" });
  const statsScale = spring({
    frame: localFrame - 160,
    fps,
    config: { damping: 15, stiffness: 200 },
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_60%)]" />

      {/* Title */}
      <div
        className="absolute top-20 left-0 right-0 text-center"
        style={{ opacity: titleOpacity }}
      >
        <p className="text-amber-500 text-sm font-mono uppercase tracking-widest mb-2">
          Performance Comparison
        </p>
        <h2 className="text-5xl font-bold text-white font-display">
          Speed Race: 2s vs 45s
        </h2>
      </div>

      {/* Split Screen Race */}
      <div className="absolute top-56 left-1/2 -translate-x-1/2 w-[1600px]">
        <div className="grid grid-cols-2 gap-8">
          {/* Left: Generic AI (Slow) */}
          <div className="bg-red-500/10 backdrop-blur-md rounded-2xl border-2 border-red-500/30 p-8 relative">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-white mb-2">Generic AI Agent</div>
              <div className="text-sm text-red-300 font-mono">45 seconds per task</div>
            </div>

            {/* Loading animation */}
            <div className="bg-slate-900/60 rounded-xl p-8 mb-6 min-h-[300px] flex flex-col items-center justify-center">
              {genericProgress < 100 && (
                <>
                  <Loader2 className="w-16 h-16 text-red-400 animate-spin mb-4" />
                  <div className="text-lg text-gray-300 mb-6">Thinking...</div>
                  
                  {/* Thinking steps */}
                  <div className="space-y-2 w-full max-w-md text-sm text-gray-400">
                    {localFrame > 30 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span>Analyzing screenshot...</span>
                      </motion.div>
                    )}
                    {localFrame > 60 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span>Generating plan...</span>
                      </motion.div>
                    )}
                    {localFrame > 90 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span>Executing actions...</span>
                      </motion.div>
                    )}
                    {localFrame > 120 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span>Verifying results...</span>
                      </motion.div>
                    )}
                  </div>
                </>
              )}

              {genericProgress >= 100 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-6xl"
                >
                  ✓
                </motion.div>
              )}
            </div>

            {/* Progress bar */}
            <div className="bg-slate-900/80 rounded-full h-4 mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                style={{ width: `${genericProgress}%` }}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">Token Count</div>
                <div className="text-2xl font-bold font-mono text-red-400">
                  {Math.floor(genericProgress * 85)}
                </div>
              </div>
              <div className="bg-slate-900/60 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">Cost</div>
                <div className="text-2xl font-bold font-mono text-red-400">
                  ${genericCost.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Agent School (Fast) */}
          <div className="bg-green-500/10 backdrop-blur-md rounded-2xl border-2 border-green-500/30 p-8 relative">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-white mb-2">Agent School</div>
              <div className="text-sm text-green-300 font-mono">2 seconds per task</div>
            </div>

            {/* Execution animation */}
            <div className="bg-slate-900/60 rounded-xl p-8 mb-6 min-h-[300px] flex flex-col items-center justify-center">
              {agentProgress < 100 && (
                <>
                  <Zap className="w-16 h-16 text-green-400 mb-4 animate-pulse" />
                  <div className="text-lg text-gray-300">Executing...</div>
                </>
              )}

              {agentProgress >= 100 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="text-8xl mb-4">🚀</div>
                  <div className="text-2xl font-bold text-green-400">Complete!</div>
                  <div className="text-sm text-gray-400 mt-2">22.5x faster</div>
                </motion.div>
              )}
            </div>

            {/* Progress bar */}
            <div className="bg-slate-900/80 rounded-full h-4 mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                style={{ width: `${agentProgress}%` }}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">Token Count</div>
                <div className="text-2xl font-bold font-mono text-green-400">
                  {Math.min(Math.floor(agentProgress * 0.5), 50)}
                </div>
              </div>
              <div className="bg-slate-900/60 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">Cost</div>
                <div className="text-2xl font-bold font-mono text-green-400">
                  ${agentCost.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VS Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl border-4 border-white/20">
            <span className="text-3xl font-bold text-white">VS</span>
          </div>
        </div>
      </div>

      {/* Bottom Stat Cards */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-8"
        style={{
          opacity: statsOpacity,
          transform: `translateX(-50%) scale(${statsScale})`,
        }}
      >
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl px-8 py-6 shadow-2xl">
          <div className="text-5xl font-bold text-white font-display mb-2">22.5x</div>
          <div className="text-lg text-cyan-100">Faster Execution</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl px-8 py-6 shadow-2xl">
          <div className="text-5xl font-bold text-white font-display mb-2">10x</div>
          <div className="text-lg text-green-100">Cost Reduction</div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
