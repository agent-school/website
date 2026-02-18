"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Cpu, Clock, DollarSign } from "lucide-react";

export function SpeedRaceDemo() {
  const [state, setState] = useState<"idle" | "running" | "done">("idle");
  const [agentSchoolProgress, setAgentSchoolProgress] = useState(0);
  const [genericProgress, setGenericProgress] = useState(0);
  const [agentSchoolTime, setAgentSchoolTime] = useState(0);
  const [genericTime, setGenericTime] = useState(0);

  const runRace = useCallback(async () => {
    setState("running");
    setAgentSchoolProgress(0);
    setGenericProgress(0);
    setAgentSchoolTime(0);
    setGenericTime(0);

    const startTime = Date.now();

    // Agent School finishes fast
    const asInterval = setInterval(() => {
      setAgentSchoolProgress((prev) => {
        const next = prev + 8 + Math.random() * 12;
        return Math.min(next, 100);
      });
      setAgentSchoolTime(((Date.now() - startTime) / 1000));
    }, 50);

    // Generic agent finishes slow with "thinking" pauses
    let genericProg = 0;
    const runGeneric = async () => {
      while (genericProg < 100) {
        // Normal progress
        for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) {
          await new Promise((r) => setTimeout(r, 80));
          genericProg = Math.min(genericProg + 1.5 + Math.random() * 2, 100);
          setGenericProgress(genericProg);
          setGenericTime(((Date.now() - startTime) / 1000));
        }
        // "Thinking" pause
        if (genericProg < 90) {
          await new Promise((r) => setTimeout(r, 600 + Math.random() * 800));
          setGenericTime(((Date.now() - startTime) / 1000));
        }
      }
    };

    // Agent School finishes in ~2 seconds
    setTimeout(() => {
      clearInterval(asInterval);
      setAgentSchoolProgress(100);
      setAgentSchoolTime(2.1);
    }, 2100);

    await runGeneric();
    setGenericProgress(100);
    setGenericTime(((Date.now() - startTime) / 1000));
    setState("done");
  }, []);

  const reset = () => {
    setState("idle");
    setAgentSchoolProgress(0);
    setGenericProgress(0);
    setAgentSchoolTime(0);
    setGenericTime(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-cream-200 shadow-soft overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-cream-50 border-b border-cream-200">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <div className="w-3 h-3 rounded-full bg-amber-300" />
            <div className="w-3 h-3 rounded-full bg-green-300" />
          </div>
          <span className="font-mono text-caption text-charcoal-400 ml-2">
            Speed Comparison: &ldquo;How many arrivals and departures today?&rdquo;
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Race Tracks */}
        <div className="space-y-6 mb-8">
          {/* Agent School Lane */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-body-sm font-semibold text-navy-800">
                  Agent School
                </span>
                {agentSchoolProgress >= 100 && (
                  <span className="text-caption text-green-600 font-semibold">
                    Finished!
                  </span>
                )}
              </div>
              <span className="font-mono text-body-sm text-charcoal-500">
                {agentSchoolTime.toFixed(1)}s
              </span>
            </div>
            <div className="h-8 bg-cream-100 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full relative"
                animate={{ width: `${agentSchoolProgress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              >
                {agentSchoolProgress > 5 && agentSchoolProgress < 100 && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white font-bold">
                    {Math.round(agentSchoolProgress)}%
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Generic Agent Lane */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-charcoal-400" />
                <span className="text-body-sm font-semibold text-navy-800">
                  Generic AI Agent
                </span>
                {genericProgress >= 100 && (
                  <span className="text-caption text-charcoal-500">
                    Finished
                  </span>
                )}
                {state === "running" && genericProgress < 100 && genericProgress > 0 && (
                  <span className="text-caption text-amber-500 animate-pulse">
                    Thinking...
                  </span>
                )}
              </div>
              <span className="font-mono text-body-sm text-charcoal-500">
                {genericTime.toFixed(1)}s
              </span>
            </div>
            <div className="h-8 bg-cream-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-charcoal-400 to-charcoal-300 rounded-full relative"
                animate={{ width: `${genericProgress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              >
                {genericProgress > 5 && genericProgress < 100 && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white font-bold">
                    {Math.round(genericProgress)}%
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {state === "idle" && (
            <motion.button
              onClick={runRace}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-800 text-white font-semibold text-body-sm"
            >
              <Play size={14} />
              Run Query
            </motion.button>
          )}
          {state === "done" && (
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cream-100 text-navy-800 font-semibold text-body-sm"
            >
              <RotateCcw size={14} />
              Run Again
            </motion.button>
          )}
        </div>

        {/* Stats */}
        {state === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="text-center p-4 rounded-xl bg-cream-50 border border-cream-200">
              <Clock size={18} className="text-amber-500 mx-auto mb-2" />
              <p className="font-display text-heading-lg text-navy-800">
                ~{Math.round(genericTime / 2.1)}x
              </p>
              <p className="text-caption text-charcoal-500">Faster</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-cream-50 border border-cream-200">
              <Cpu size={18} className="text-amber-500 mx-auto mb-2" />
              <p className="font-display text-heading-lg text-navy-800">
                0 vs 12
              </p>
              <p className="text-caption text-charcoal-500">LLM Calls</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-cream-50 border border-cream-200">
              <DollarSign size={18} className="text-amber-500 mx-auto mb-2" />
              <p className="font-display text-heading-lg text-navy-800">
                $0.001
              </p>
              <p className="text-caption text-charcoal-500">vs $0.15</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
