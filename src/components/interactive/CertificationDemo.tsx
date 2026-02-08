"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { ProgressRing } from "@/components/ui/ProgressRing";

const testCases = [
  { id: 1, name: "Happy path — standard order", pass: true, duration: 1200 },
  { id: 2, name: "Multiple items in search results", pass: true, duration: 800 },
  { id: 3, name: "Item out of stock — fallback", pass: true, duration: 1500 },
  { id: 4, name: "Payment method declined", pass: true, duration: 900 },
  { id: 5, name: "Shipping address change required", pass: true, duration: 1100 },
  { id: 6, name: "Session timeout mid-checkout", pass: false, duration: 2000 },
  { id: 7, name: "Price changed during checkout", pass: true, duration: 1300 },
  { id: 8, name: "Slow network — 3G simulation", pass: true, duration: 1800 },
];

type TestState = "idle" | "running" | "done";
type TestResult = "pending" | "running" | "pass" | "fail";

export function CertificationDemo() {
  const [state, setState] = useState<TestState>("idle");
  const [results, setResults] = useState<Record<number, TestResult>>({});
  const [currentTest, setCurrentTest] = useState<number>(0);
  const [threshold, setThreshold] = useState(95);
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const passCount = Object.values(results).filter((r) => r === "pass").length;
  const failCount = Object.values(results).filter((r) => r === "fail").length;
  const totalDone = passCount + failCount;
  const passRate = totalDone > 0 ? Math.round((passCount / totalDone) * 100) : 0;
  const certified = state === "done" && passRate >= threshold;

  const reset = () => {
    setState("idle");
    setResults({});
    setCurrentTest(0);
    setShowDetail(null);
  };

  const runTests = useCallback(async () => {
    setState("running");
    setResults({});
    setShowDetail(null);

    for (let i = 0; i < testCases.length; i++) {
      const test = testCases[i];
      setCurrentTest(i);
      setResults((prev) => ({ ...prev, [test.id]: "running" }));

      await new Promise((resolve) => setTimeout(resolve, 400 + Math.random() * 300));

      setResults((prev) => ({
        ...prev,
        [test.id]: test.pass ? "pass" : "fail",
      }));
    }

    setState("done");
  }, []);

  const progressPercent =
    state === "idle" ? 0 : (totalDone / testCases.length) * 100;

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
            Certification Suite — Amazon Purchase Workflow
          </span>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-caption text-charcoal-500">
            Threshold:
            <select
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="bg-cream-100 border border-cream-200 rounded-md px-2 py-1 text-caption font-mono"
              disabled={state === "running"}
            >
              <option value={90}>90%</option>
              <option value={95}>95%</option>
              <option value={97}>97%</option>
              <option value={99}>99%</option>
              <option value={100}>100%</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[400px]">
        {/* Test List */}
        <div className="md:col-span-2 p-4 border-r border-cream-200">
          <div className="flex items-center justify-between mb-4">
            <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider">
              Test Cases ({testCases.length})
            </p>
            {state === "idle" && (
              <motion.button
                onClick={runTests}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-800 text-white text-caption font-semibold"
              >
                <Play size={12} />
                Run Tests
              </motion.button>
            )}
            {state === "done" && (
              <motion.button
                onClick={reset}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cream-100 text-navy-800 text-caption font-semibold"
              >
                <RotateCcw size={12} />
                Reset
              </motion.button>
            )}
          </div>

          <div className="space-y-1.5">
            {testCases.map((test, i) => {
              const result = results[test.id] || "pending";
              return (
                <motion.button
                  key={test.id}
                  onClick={() =>
                    setShowDetail(showDetail === test.id ? null : test.id)
                  }
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all border ${
                    result === "running"
                      ? "bg-amber-50 border-amber-200"
                      : result === "pass"
                        ? "bg-green-50/50 border-green-100"
                        : result === "fail"
                          ? "bg-red-50/50 border-red-100"
                          : "border-transparent hover:bg-cream-50"
                  }`}
                  initial={false}
                  animate={{
                    x: result === "running" ? [0, 2, -2, 0] : 0,
                  }}
                  transition={
                    result === "running"
                      ? { repeat: Infinity, duration: 0.4 }
                      : {}
                  }
                >
                  {/* Status Icon */}
                  <div className="flex-shrink-0">
                    {result === "pending" && (
                      <div className="w-5 h-5 rounded-full border-2 border-cream-300" />
                    )}
                    {result === "running" && (
                      <motion.div
                        className="w-5 h-5 rounded-full border-2 border-amber-400 border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "linear",
                        }}
                      />
                    )}
                    {result === "pass" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <CheckCircle
                          size={20}
                          className="text-green-500"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </motion.div>
                    )}
                    {result === "fail" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <XCircle
                          size={20}
                          className="text-red-500"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </motion.div>
                    )}
                  </div>

                  <span
                    className={`text-body-sm flex-1 ${
                      result === "fail"
                        ? "text-red-700"
                        : result === "pass"
                          ? "text-green-800"
                          : "text-charcoal-600"
                    }`}
                  >
                    {test.name}
                  </span>

                  {result !== "pending" && result !== "running" && (
                    <span className="font-mono text-caption text-charcoal-400">
                      {test.duration}ms
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Results Panel */}
        <div className="p-4 flex flex-col items-center justify-center">
          <ProgressRing
            progress={state === "done" ? passRate : progressPercent}
            size={140}
            strokeWidth={10}
            color={
              state === "done"
                ? certified
                  ? "#22C55E"
                  : "#EF4444"
                : "#FE9F4D"
            }
            animate={true}
          >
            <div className="text-center">
              <span className="font-display text-display-sm text-navy-800 block">
                {state === "idle"
                  ? "—"
                  : state === "running"
                    ? `${totalDone}/${testCases.length}`
                    : `${passRate}%`}
              </span>
              <span className="text-caption text-charcoal-400">
                {state === "idle"
                  ? "Ready"
                  : state === "running"
                    ? "Running..."
                    : certified
                      ? "Certified"
                      : "Failed"}
              </span>
            </div>
          </ProgressRing>

          {state === "done" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              {certified ? (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-body-sm font-semibold text-green-700">
                    CERTIFIED
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200">
                  <XCircle size={16} className="text-red-500" />
                  <span className="text-body-sm font-semibold text-red-700">
                    Below {threshold}% threshold
                  </span>
                </div>
              )}

              <div className="mt-4 space-y-2 text-caption text-charcoal-500">
                <p>
                  Passed: <strong className="text-green-600">{passCount}</strong> / Failed:{" "}
                  <strong className="text-red-600">{failCount}</strong>
                </p>
                <p>Threshold: {threshold}%</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
