"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Search,
  CheckCircle,
  RefreshCw,
  ArrowRight,
  History,
} from "lucide-react";

type HealingPhase =
  | "idle"
  | "detecting"
  | "searching"
  | "matched"
  | "verified"
  | "complete";

const phases = [
  {
    key: "detecting",
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    label: 'Button "Submit Order" not found at expected location',
  },
  {
    key: "searching",
    icon: Search,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    label: "Searching for semantically similar elements...",
  },
  {
    key: "matched",
    icon: CheckCircle,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
            label: 'Found "Place Order" button: semantic match 94%',
  },
  {
    key: "verified",
    icon: CheckCircle,
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
    label: "Assertion passed: button triggers order submission",
  },
  {
    key: "complete",
    icon: RefreshCw,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    label: "Self-heal complete. Skill updated to v1.1",
  },
];

export function SelfHealingDemo() {
  const [phase, setPhase] = useState<HealingPhase>("idle");
  const [uiChanged, setUiChanged] = useState(false);
  const [visiblePhases, setVisiblePhases] = useState<string[]>([]);
  const [showVersions, setShowVersions] = useState(false);

  const triggerHeal = useCallback(async () => {
    setUiChanged(true);
    setPhase("detecting");
    setVisiblePhases([]);
    setShowVersions(false);

    for (let i = 0; i < phases.length; i++) {
      await new Promise((resolve) =>
        setTimeout(resolve, 800 + Math.random() * 400)
      );
      setPhase(phases[i].key as HealingPhase);
      setVisiblePhases((prev) => [...prev, phases[i].key]);
    }
  }, []);

  const reset = () => {
    setPhase("idle");
    setUiChanged(false);
    setVisiblePhases([]);
    setShowVersions(false);
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
            Self-Healing Demo: UI Change Adaptation
          </span>
        </div>
        {phase !== "idle" && (
          <button
            onClick={reset}
            className="text-caption text-charcoal-400 hover:text-navy-800 transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* Left: UI Simulation */}
        <div className="p-6 border-r border-cream-200 flex flex-col">
          <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider mb-4">
            Software Interface
          </p>

          {/* Mock UI */}
          <div className="flex-1 bg-cream-50 rounded-xl border border-cream-200 p-5 relative overflow-hidden">
            <div className="space-y-3 mb-6">
              <div className="h-3 bg-cream-200 rounded w-3/4" />
              <div className="h-3 bg-cream-200 rounded w-1/2" />
              <div className="h-3 bg-cream-200 rounded w-2/3" />
            </div>

            <div className="space-y-3 mb-6">
              <div className="h-8 bg-cream-200 rounded-lg w-full" />
              <div className="h-8 bg-cream-200 rounded-lg w-full" />
            </div>

            <AnimatePresence mode="wait">
              {!uiChanged ? (
                <motion.div
                  key="original"
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-3"
                >
                  <div className="flex justify-end">
                    <div className="px-6 py-3 bg-navy-800 text-white rounded-lg text-body-sm font-semibold">
                      Submit Order
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-caption text-charcoal-400">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    Agent targets this button
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="updated"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <div className="px-4 py-2 bg-cream-200 rounded-lg text-caption text-charcoal-400">
                      Save Draft
                    </div>
                    <div className="px-6 py-3 bg-green-600 text-white rounded-xl text-body-sm font-semibold">
                      Place Order
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-caption">
                    {phase === "complete" ? (
                      <>
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-green-600">
                          Agent adapted to new button
                        </span>
                      </>
                    ) : visiblePhases.length > 0 ? (
                      <>
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-amber-600">
                          Adapting...
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="text-red-500">
                          UI changed: button moved and renamed
                        </span>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {phase === "idle" && (
            <motion.button
              onClick={triggerHeal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-800 text-white font-semibold text-body-sm"
            >
              Trigger UI Change
              <ArrowRight size={14} />
            </motion.button>
          )}
        </div>

        {/* Right: Healing Process */}
        <div className="p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider">
              Adaptation Log
            </p>
            {phase === "complete" && (
              <button
                onClick={() => setShowVersions(!showVersions)}
                className="flex items-center gap-1 text-caption text-navy-600 hover:text-navy-800"
              >
                <History size={12} />
                Versions
              </button>
            )}
          </div>

          <div className="space-y-3 flex-1">
            {phase === "idle" ? (
              <div className="flex items-center justify-center h-full text-charcoal-400 text-body-sm">
                Trigger a UI change to see self-healing in action
              </div>
            ) : (
              phases.map((p) => {
                const isVisible = visiblePhases.includes(p.key);
                return (
                  <AnimatePresence key={p.key}>
                    {isVisible && (
                      <motion.div
                        initial={{ opacity: 0, x: 20, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-start gap-3 p-3 rounded-lg ${p.bg} border ${p.border}`}
                      >
                        <p.icon size={16} className={`${p.color} mt-0.5 flex-shrink-0`} />
                        <p className="text-body-sm text-navy-800">{p.label}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                );
              })
            )}
          </div>

          {/* Version Control */}
          <AnimatePresence>
            {showVersions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-cream-200"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-cream-50 border border-cream-200">
                    <span className="text-caption text-charcoal-600">
                      v1.1: Self-healed
                    </span>
                    <span className="text-caption text-green-600 font-semibold">
                      Current
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-cream-50 cursor-pointer">
                    <span className="text-caption text-charcoal-500">
                      v1.0: Original
                    </span>
                    <span className="text-caption text-charcoal-400">
                      Rollback
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
