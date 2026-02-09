"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, DollarSign, TrendingUp, Zap, ShieldCheck } from "lucide-react";
import { SmoothNumber } from "@/components/animations/AnimatedCounter";
import {
  calculateROI,
  type CalcInputs,
  type Complexity,
  type CurrentMethod,
} from "@/lib/calculator";
import { BOOKING_URL } from "@/lib/constants";

const complexityOptions: { value: Complexity; label: string; desc: string }[] = [
  { value: "simple", label: "Simple", desc: "Data retrieval, single-system lookups" },
  { value: "multi_step", label: "Multi-Step", desc: "Cross-system workflows, form filling" },
  { value: "complex", label: "Complex", desc: "Decision-making, exception handling" },
];

const methodOptions: { value: CurrentMethod; label: string }[] = [
  { value: "manual", label: "Manual (employees do it)" },
  { value: "rpa", label: "Traditional RPA" },
  { value: "ai_agent", label: "Generic AI Agent" },
];

export function ROICalculator() {
  const [inputs, setInputs] = useState<CalcInputs>({
    complexity: "multi_step",
    frequencyPerWeek: 50,
    currentMethod: "manual",
    employees: 10,
    hourlyRate: 50,
  });

  const results = useMemo(() => calculateROI(inputs), [inputs]);

  const update = (field: keyof CalcInputs, value: string | number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-medium overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-teal-600 to-orange-500 flex items-center gap-3">
        <Calculator size={20} className="text-white" />
        <h3 className="font-display text-heading-md text-white">
          ROI Calculator
        </h3>
        <span className="text-body-sm text-white/80 ml-auto">
          See your projected savings
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Inputs */}
        <div className="lg:col-span-2 p-6 border-r border-slate-200 dark:border-slate-800">
          <p className="text-caption font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6">
            Your Workflow
          </p>

          {/* Complexity */}
          <div className="mb-6">
            <label className="text-body-sm font-semibold text-slate-900 dark:text-slate-100 block mb-2">
              Task Complexity
            </label>
            <div className="grid grid-cols-3 gap-2">
              {complexityOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("complexity", opt.value)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    inputs.complexity === opt.value
                      ? "border-teal-500 bg-teal-50 dark:bg-teal-950/50 shadow-sm shadow-teal-500/20"
                      : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                >
                  <p className={`text-body-sm font-semibold ${
                    inputs.complexity === opt.value ? "text-teal-700 dark:text-teal-400" : "text-slate-900 dark:text-slate-100"
                  }`}>
                    {opt.label}
                  </p>
                  <p className="text-caption text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Current Method */}
          <div className="mb-6">
            <label className="text-body-sm font-semibold text-slate-900 dark:text-slate-100 block mb-2">
              Current Method
            </label>
            <div className="space-y-2">
              {methodOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("currentMethod", opt.value)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl border transition-all text-body-sm ${
                    inputs.currentMethod === opt.value
                      ? "border-teal-500 bg-teal-50 dark:bg-teal-950/50 font-semibold text-teal-700 dark:text-teal-400"
                      : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Frequency Slider */}
          <div className="mb-6">
            <label className="text-body-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between mb-2">
              <span>Frequency</span>
              <span className="font-mono text-teal-600 dark:text-teal-400">
                {inputs.frequencyPerWeek}/week
              </span>
            </label>
            <input
              type="range"
              min={1}
              max={500}
              value={inputs.frequencyPerWeek}
              onChange={(e) => update("frequencyPerWeek", Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-caption text-slate-500 dark:text-slate-400 mt-1">
              <span>1/wk</span>
              <span>500/wk</span>
            </div>
          </div>

          {/* Employees Slider */}
          <div className="mb-6">
            <label className="text-body-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between mb-2">
              <span>Employees</span>
              <span className="font-mono text-teal-600 dark:text-teal-400">
                {inputs.employees}
              </span>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              value={inputs.employees}
              onChange={(e) => update("employees", Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-caption text-slate-500 dark:text-slate-400 mt-1">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          {/* Hourly Rate Slider */}
          <div>
            <label className="text-body-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between mb-2">
              <span>Avg Hourly Rate</span>
              <span className="font-mono text-teal-600 dark:text-teal-400">
                ${inputs.hourlyRate}/hr
              </span>
            </label>
            <input
              type="range"
              min={15}
              max={200}
              step={5}
              value={inputs.hourlyRate}
              onChange={(e) => update("hourlyRate", Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-caption text-slate-500 dark:text-slate-400 mt-1">
              <span>$15</span>
              <span>$200</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 p-6 bg-slate-50/50 dark:bg-slate-950/50">
          <p className="text-caption font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6">
            Projected Results
          </p>

          {/* Big Numbers */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div layout className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-soft">
              <DollarSign size={18} className="text-teal-500 dark:text-teal-400 mb-2" />
              <div className="font-display text-display-sm text-slate-900 dark:text-slate-100">
                <SmoothNumber
                  value={Math.round(results.yearlyCostSavings)}
                  prefix="$"
                />
              </div>
              <p className="text-caption text-slate-600 dark:text-slate-400 mt-1">
                Yearly Savings
              </p>
            </motion.div>

            <motion.div layout className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-soft">
              <Clock size={18} className="text-orange-500 dark:text-orange-400 mb-2" />
              <div className="font-display text-display-sm text-slate-900 dark:text-slate-100">
                <SmoothNumber
                  value={Math.round(results.monthlyTimeSavedHours)}
                  suffix="h"
                />
              </div>
              <p className="text-caption text-slate-600 dark:text-slate-400 mt-1">
                Monthly Hours Saved
              </p>
            </motion.div>

            <motion.div layout className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-soft">
              <Zap size={18} className="text-orange-500 dark:text-orange-400 mb-2" />
              <div className="font-display text-display-sm text-slate-900 dark:text-slate-100">
                <SmoothNumber
                  value={results.speedMultiplier}
                  suffix="x"
                />
              </div>
              <p className="text-caption text-slate-600 dark:text-slate-400 mt-1">
                Faster Execution
              </p>
            </motion.div>

            <motion.div layout className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-soft">
              <TrendingUp size={18} className="text-teal-500 dark:text-teal-400 mb-2" />
              <div className="font-display text-display-sm text-slate-900 dark:text-slate-100">
                <SmoothNumber
                  value={results.breakEvenWeeks}
                  suffix=" wk"
                />
              </div>
              <p className="text-caption text-slate-600 dark:text-slate-400 mt-1">
                Break-Even
              </p>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6 bg-white dark:bg-slate-800">
            <div className="grid grid-cols-3 text-caption font-semibold bg-slate-100 dark:bg-slate-900">
              <div className="p-3 text-slate-600 dark:text-slate-400">Metric</div>
              <div className="p-3 text-slate-700 dark:text-slate-300">Today</div>
              <div className="p-3 text-teal-600 dark:text-teal-400">Agent School</div>
            </div>
            <div className="grid grid-cols-3 text-body-sm border-t border-slate-200 dark:border-slate-700">
              <div className="p-3 text-slate-600 dark:text-slate-400">Time / task</div>
              <div className="p-3 text-slate-900 dark:text-slate-100 font-mono">
                {results.currentTimeMinutes} min
              </div>
              <div className="p-3 text-teal-600 dark:text-teal-400 font-mono font-semibold">
                {results.agentSchoolTimeSeconds}s
              </div>
            </div>
            <div className="grid grid-cols-3 text-body-sm border-t border-slate-200 dark:border-slate-700">
              <div className="p-3 text-slate-600 dark:text-slate-400">Cost / task</div>
              <div className="p-3 text-slate-900 dark:text-slate-100 font-mono">
                ${results.currentCostPerExecution.toFixed(2)}
              </div>
              <div className="p-3 text-teal-600 dark:text-teal-400 font-mono font-semibold">
                ${results.agentSchoolCostPerExecution.toFixed(2)}
              </div>
            </div>
            <div className="grid grid-cols-3 text-body-sm border-t border-slate-200 dark:border-slate-700">
              <div className="p-3 text-slate-600 dark:text-slate-400">Reliability</div>
              <div className="p-3 text-slate-900 dark:text-slate-100 font-mono">
                {results.currentReliability}%
              </div>
              <div className="p-3 text-teal-600 dark:text-teal-400 font-mono font-semibold">
                {results.agentSchoolReliability}%
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold text-body-sm hover:from-teal-500 hover:to-orange-400 transition-all shadow-soft"
          >
            See these numbers for your workflows — Book a Demo
          </motion.a>
        </div>
      </div>
    </div>
  );
}
