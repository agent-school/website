"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, Clock, Cpu, DollarSign } from "lucide-react";

const timelineSteps = [
  {
    time: "00:02",
    action: "Navigate to URL",
    code: `await browser.navigate("https://amazon.com");\n\n// Assertion: page loaded successfully\nassert(page.title.includes("Amazon"));`,
    metrics: { duration: "340ms", llmCalls: 0 },
  },
  {
    time: "00:05",
    action: "Click search bar",
    code: `const searchBar = await page.waitForSelector(\n  "#twotabsearchtextbox",\n  { timeout: 5000 }\n);\n\n// Assertion: search bar is visible and enabled\nassert(searchBar.isVisible());\nassert(searchBar.isEnabled());\n\nawait searchBar.click();`,
    metrics: { duration: "120ms", llmCalls: 0 },
  },
  {
    time: "00:08",
    action: 'Type "Organic Apples"',
    code: `await page.fill(\n  "#twotabsearchtextbox",\n  "Organic Apples"\n);\n\n// Assertion: input value matches\nassert(\n  page.inputValue("#twotabsearchtextbox")\n  === "Organic Apples"\n);`,
    metrics: { duration: "280ms", llmCalls: 0 },
  },
  {
    time: "00:10",
    action: "Submit search",
    code: `await page.click("#nav-search-submit-button");\nawait page.waitForNavigation();\n\n// Assertion: search results loaded\nassert(\n  page.url().includes("k=Organic+Apples")\n);`,
    metrics: { duration: "1200ms", llmCalls: 0 },
  },
  {
    time: "00:14",
    action: "Apply filters",
    code: `// Guard: if filter panel not visible,\n// click "Show more" first\nif (!await page.isVisible('[data-filter]')) {\n  await page.click(".a-expander-header");\n}\n\nawait page.click('[aria-label="4 Stars & Up"]');\nawait page.waitForTimeout(500);`,
    metrics: { duration: "890ms", llmCalls: 0 },
  },
  {
    time: "00:18",
    action: "Select best result",
    code: `const items = await page.$$(".s-result-item");\n\n// Guard: if no items match criteria,\n// escalate to human review\nif (items.length === 0) {\n  throw new EscalationError(\n    "No matching products found"\n  );\n}\n\nconst best = items[0];\nawait best.click();`,
    metrics: { duration: "450ms", llmCalls: 1 },
  },
];

export function ScriptViewerDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const step = timelineSteps[activeStep];

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    let current = activeStep;

    const interval = setInterval(() => {
      current++;
      if (current >= timelineSteps.length) {
        clearInterval(interval);
        setIsPlaying(false);
        return;
      }
      setActiveStep(current);
    }, 1500);
  };

  const handleNext = () => {
    if (activeStep < timelineSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
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
            Script Viewer: Deterministic Execution
          </span>
        </div>

        {/* Playback controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlay}
            className="p-1.5 rounded-md bg-cream-100 text-navy-800 hover:bg-cream-200 transition-colors"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 rounded-md bg-cream-100 text-navy-800 hover:bg-cream-200 transition-colors"
            disabled={activeStep >= timelineSteps.length - 1}
          >
            <SkipForward size={14} />
          </button>
          <span className="font-mono text-caption text-charcoal-400">
            Step {activeStep + 1}/{timelineSteps.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* Left: Timeline */}
        <div className="p-4 border-r border-cream-200">
          <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
            Recording Timeline
          </p>
          <div className="space-y-1">
            {timelineSteps.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all border ${
                  activeStep === i
                    ? "bg-navy-50 border-navy-200"
                    : "border-transparent hover:bg-cream-50"
                }`}
                animate={
                  activeStep === i
                    ? { backgroundColor: "rgba(27, 41, 81, 0.05)" }
                    : {}
                }
              >
                <span className="font-mono text-caption text-charcoal-400 w-10 flex-shrink-0">
                  {s.time}
                </span>
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    activeStep === i
                      ? "bg-amber-500"
                      : i < activeStep
                        ? "bg-green-400"
                        : "bg-cream-300"
                  }`}
                />
                <span
                  className={`text-body-sm ${
                    activeStep === i
                      ? "text-navy-800 font-semibold"
                      : "text-charcoal-600"
                  }`}
                >
                  {s.action}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right: Code */}
        <div className="p-4 flex flex-col">
          <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
            Generated Certified Code
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
              <div className="bg-navy-900 rounded-xl p-4 overflow-x-auto h-full">
                <pre className="font-mono text-body-sm text-navy-100 whitespace-pre leading-relaxed">
                  {step.code.split("\n").map((line, i) => {
                    let className = "";
                    if (line.includes("// Assertion") || line.includes("assert("))
                      className = "code-assertion";
                    else if (line.includes("// Guard") || line.includes("if ("))
                      className = "code-guard";
                    else if (line.trim().startsWith("//"))
                      className = "code-comment";

                    return (
                      <span key={i} className={className}>
                        {line}
                        {"\n"}
                      </span>
                    );
                  })}
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Metrics Bar */}
          <div className="flex items-center gap-6 mt-3 pt-3 border-t border-cream-200">
            <div className="flex items-center gap-1.5 text-caption text-charcoal-500">
              <Clock size={12} />
              <span>{step.metrics.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-caption text-charcoal-500">
              <Cpu size={12} />
              <span>LLM calls: {step.metrics.llmCalls}</span>
            </div>
            <div className="flex items-center gap-1.5 text-caption text-charcoal-500">
              <DollarSign size={12} />
              <span>
                ${step.metrics.llmCalls > 0 ? "0.003" : "0.000"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
