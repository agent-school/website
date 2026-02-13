"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Code, ChevronRight, GitBranch, AlertTriangle } from "lucide-react";

const sopSteps = [
  {
    id: 1,
    label: "Navigate to Amazon.com",
    code: `await browser.navigate("https://amazon.com");\nawait page.waitForSelector("#nav-logo");`,
    type: "action" as const,
  },
  {
    id: 2,
    label: 'Search for "Organic Apples"',
    code: `await page.fill("#twotabsearchtextbox", "Organic Apples");\nawait page.click("#nav-search-submit-button");`,
    type: "action" as const,
  },
  {
    id: 3,
    label: "Filter results: 4+ stars, Prime eligible",
    code: `await page.click('[aria-label="4 Stars & Up"]');\nawait page.click('[data-filter="prime-eligible"]');`,
    type: "action" as const,
  },
  {
    id: 4,
    label: "Select first result matching criteria",
    code: `const results = await page.$$(".s-result-item");\nconst match = results.find(r => r.rating >= 4.0);\nawait match.click();`,
    type: "decision" as const,
    edge: "If no results match → notify user and suggest alternatives",
  },
  {
    id: 5,
    label: "Set quantity to 10",
    code: `await page.selectOption("#quantity", "10");\n// Assert: quantity dropdown shows "10"`,
    type: "action" as const,
  },
  {
    id: 6,
    label: "Add to cart and proceed to checkout",
    code: `await page.click("#add-to-cart-button");\nawait page.waitForSelector("#attach-sidesheet-checkout-button");\nawait page.click("#attach-sidesheet-checkout-button");`,
    type: "action" as const,
  },
  {
    id: 7,
    label: "Confirm shipping address and payment",
    code: `// Assert: saved address is pre-selected\n// Assert: saved payment method is available\nawait page.click("#submitOrderButtonId");`,
    type: "decision" as const,
    edge: "If address needs update → pause and request human input",
  },
];

export function SkillBuilderDemo() {
  const [viewMode, setViewMode] = useState<"sop" | "code">("sop");
  const [activeStep, setActiveStep] = useState<number>(1);
  const [showEdgeCase, setShowEdgeCase] = useState<number | null>(null);

  const currentStep = sopSteps.find((s) => s.id === activeStep);

  return (
    <div className="bg-white rounded-2xl border border-cream-200 shadow-soft overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-cream-50 border-b border-cream-200">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <div className="w-3 h-3 rounded-full bg-amber-300" />
            <div className="w-3 h-3 rounded-full bg-green-300" />
          </div>
          <span className="font-mono text-caption text-charcoal-400 ml-2">
            Skill Builder — Buy 10 Apples from Amazon
          </span>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-cream-100 rounded-lg p-0.5">
          <button
            onClick={() => setViewMode("sop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-caption font-medium transition-all ${
              viewMode === "sop"
                ? "bg-white text-navy-800 shadow-sm"
                : "text-charcoal-400 hover:text-navy-700"
            }`}
          >
            <Eye size={12} />
            SOP View
          </button>
          <button
            onClick={() => setViewMode("code")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-caption font-medium transition-all ${
              viewMode === "code"
                ? "bg-white text-navy-800 shadow-sm"
                : "text-charcoal-400 hover:text-navy-700"
            }`}
          >
            <Code size={12} />
            Code View
          </button>
        </div>
      </div>

      {/* Split Pane */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* Left: Steps List */}
        <div className="p-4 border-r border-cream-200">
          <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
            Workflow Steps
          </p>
          <div className="space-y-1.5">
            {sopSteps.map((step) => (
              <div key={step.id}>
                <motion.button
                  onClick={() => {
                    setActiveStep(step.id);
                    setShowEdgeCase(null);
                  }}
                  className={`w-full text-left flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    activeStep === step.id
                      ? "bg-amber-50 border border-amber-200"
                      : "hover:bg-cream-50 border border-transparent"
                  }`}
                  whileTap={{ scale: 0.99 }}
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                      activeStep === step.id
                        ? "bg-amber-500 text-white"
                        : "bg-cream-200 text-charcoal-500"
                    }`}
                  >
                    {step.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-body-sm ${
                        activeStep === step.id
                          ? "text-navy-800 font-semibold"
                          : "text-charcoal-600"
                      }`}
                    >
                      {step.label}
                    </p>
                    {step.type === "decision" && (
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowEdgeCase(showEdgeCase === step.id ? null : step.id);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowEdgeCase(showEdgeCase === step.id ? null : step.id);
                          }
                        }}
                        className="flex items-center gap-1 mt-1 text-caption text-amber-600 hover:text-amber-700 cursor-pointer"
                      >
                        <GitBranch size={10} />
                        Decision Point
                        <ChevronRight
                          size={10}
                          className={`transition-transform ${
                            showEdgeCase === step.id ? "rotate-90" : ""
                          }`}
                        />
                      </span>
                    )}
                  </div>
                </motion.button>

                {/* Edge Case Expansion */}
                <AnimatePresence>
                  {showEdgeCase === step.id && step.edge && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden ml-9"
                    >
                      <div className="flex items-start gap-2 px-3 py-2 mt-1 rounded-lg bg-amber-50/60 border border-amber-100">
                        <AlertTriangle
                          size={12}
                          className="text-amber-500 mt-0.5 flex-shrink-0"
                        />
                        <p className="text-caption text-amber-700">
                          {step.edge}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Detail View */}
        <div className="p-4">
          <AnimatePresence mode="wait">
            {viewMode === "sop" ? (
              <motion.div
                key="sop"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
                  Step Detail — What the AI Does
                </p>
                {currentStep && (
                  <div className="bg-cream-50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px] font-bold">
                        {currentStep.id}
                      </span>
                      <h4 className="font-semibold text-body-md text-navy-800">
                        {currentStep.label}
                      </h4>
                    </div>
                    <p className="text-body-sm text-charcoal-500 leading-relaxed">
                      The agent navigates to the target and performs this action.
                      {currentStep.type === "decision" &&
                        " This step includes decision logic for edge cases that may require human judgment."}
                    </p>
                    {currentStep.type === "decision" && currentStep.edge && (
                      <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
                        <p className="text-caption font-semibold text-amber-700 mb-1">
                          Edge Case Handling:
                        </p>
                        <p className="text-caption text-amber-600">
                          {currentStep.edge}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
                  Generated Deterministic Code
                </p>
                {currentStep && (
                  <div className="bg-navy-900 rounded-xl p-4 overflow-x-auto">
                    <pre className="font-mono text-body-sm text-navy-100 whitespace-pre leading-relaxed">
                      <span className="text-charcoal-400">
                        {`// Step ${currentStep.id}: ${currentStep.label}\n`}
                      </span>
                      {currentStep.code}
                    </pre>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
