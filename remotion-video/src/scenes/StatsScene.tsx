import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { motion } from "framer-motion";
import { TrendingDown, Zap, Shield, Mail } from "lucide-react";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { NumberTicker } from "@/components/magic-ui/number-ticker";

// Duration: 43-45 seconds (2 seconds total, 60 frames at 30fps)
// Visual: 3 stat cards + logo + CTA

interface StatsSceneProps {
  startFrame?: number;
}

export function StatsScene({ startFrame = 1290 }: StatsSceneProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  const stats = [
    {
      icon: TrendingDown,
      value: "10x",
      label: "Cost Reduction",
      color: "#FB923C",
      delay: 10,
    },
    {
      icon: Zap,
      value: "2s",
      label: "Response Time",
      color: "#06B6D4",
      delay: 20,
    },
    {
      icon: Shield,
      value: "99%",
      label: "Reliability",
      color: "#A855F7",
      delay: 30,
    },
  ];

  // Logo animation
  const logoScale = spring({
    frame: localFrame - 40,
    fps,
    config: { damping: 12, stiffness: 150 },
  });
  const logoOpacity = interpolate(localFrame, [40, 50], [0, 1], { extrapolateRight: "clamp" });

  // CTA button animation
  const ctaOpacity = interpolate(localFrame, [50, 55], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-navy-900 via-purple-900 to-slate-900 flex items-center justify-center">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.15),transparent_60%)]" />

      {/* Main content container */}
      <div className="relative z-10">
        {/* Stat Cards */}
        <div className="flex gap-8 mb-16 justify-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const cardScale = spring({
              frame: localFrame - stat.delay,
              fps,
              config: { damping: 15, stiffness: 200 },
            });
            const cardOpacity = interpolate(
              localFrame,
              [stat.delay, stat.delay + 10],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );

            return (
              <motion.div
                key={index}
                className="relative"
                style={{
                  transform: `scale(${cardScale})`,
                  opacity: cardOpacity,
                }}
              >
                <div
                  className="bg-slate-800/40 backdrop-blur-md rounded-2xl border-2 p-12 min-w-[280px] relative overflow-hidden"
                  style={{
                    borderColor: stat.color + "80",
                    boxShadow: `0 0 40px ${stat.color}30`,
                  }}
                >
                  <BorderBeam size={200} duration={10} colorFrom={stat.color} colorTo={stat.color + "80"} />

                  <div className="text-center">
                    <div
                      className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                      style={{
                        backgroundColor: stat.color + "20",
                        border: `3px solid ${stat.color}`,
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: stat.color }} />
                    </div>

                    <div className="text-6xl font-bold text-white font-display mb-4">
                      {stat.value}
                    </div>

                    <div className="text-xl text-gray-300">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Logo */}
        <motion.div
          className="text-center mb-8"
          style={{
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          <h1 className="text-7xl font-bold text-white font-display mb-2">
            Agent School
          </h1>
          <p className="text-2xl text-gray-300">
            Turn Human Knowledge Into AI That Never Forgets
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          style={{ opacity: ctaOpacity }}
        >
          <a
            href="mailto:hello@agentschool.io"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all relative overflow-hidden"
          >
            <BorderBeam size={150} duration={8} colorFrom="#FE9F4D" colorTo="#F97316" />
            <Mail className="w-6 h-6" />
            <span>hello@agentschool.io</span>
          </a>

          <p className="text-sm text-gray-400 mt-6">
            Book a demo • Start automating in days, not months
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
      <div className="absolute top-40 right-32 w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-40 w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: "1.5s" }} />
    </AbsoluteFill>
  );
}
