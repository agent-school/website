"use client";

import { Agent, AgentVariant } from "@/components/AgentCharacters";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CardSpotlight } from "@/components/aceternity/CardSpotlight";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURES } from "@/lib/constants";
import { SkillBuilderDemo } from "@/components/interactive/SkillBuilderDemo";
import { CertificationDemo } from "@/components/interactive/CertificationDemo";
import { ScriptViewerDemo } from "@/components/interactive/ScriptViewerDemo";
import { SelfHealingDemo } from "@/components/interactive/SelfHealingDemo";
import { SpeedRaceDemo } from "@/components/interactive/SpeedRaceDemo";

const featureAgents: AgentVariant[] = [
  "nova",   // Skill Builder (Create/Mint)
  "echo",   // Certification (Reliable/Shield)
  "glitch", // Script Viewer (Code/Analyze)
  "morph",  // Self Healing (Adapt/Evolve)
  "atlas",  // Observability (See all)
  "volt",   // Speed (Fast)
];

const featureDemos = [
  SkillBuilderDemo,
  CertificationDemo,
  ScriptViewerDemo,
  SelfHealingDemo,
  null, // Observability — static visual
  SpeedRaceDemo,
];

function ObservabilityVisual() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="font-mono text-xs text-slate-600 dark:text-slate-400 ml-2">
          Observability Dashboard
        </span>
      </div>

      <div className="p-6">
        {/* Activity Feed */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
            Live Activity Feed
          </p>
          <div className="space-y-2">
            {[
              { status: "green", task: "Invoice #4821 processed", time: "2s ago" },
              { status: "green", task: "CRM updated — Acme Corp deal", time: "15s ago" },
              { status: "amber", task: "Guest check-in — pending approval", time: "1m ago" },
              { status: "green", task: "Report generated — Weekly ops", time: "3m ago" },
              { status: "red", task: "Payment retry — escalated to human", time: "5m ago" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <div
                  className={`w-2 h-2 rounded-full ${item.status === "green"
                    ? "bg-green-500"
                    : item.status === "amber"
                      ? "bg-amber-500"
                      : "bg-red-500"
                    }`}
                />
                <span className="text-sm text-slate-900 dark:text-slate-100 flex-1">
                  {item.task}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Guardrails */}
        <div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
            Active Guardrails
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Rate Limiting", enabled: true },
              { label: "Human Approval >$1000", enabled: true },
              { label: "Data Validation", enabled: true },
              { label: "PII Redaction", enabled: false },
            ].map((guard) => (
              <div
                key={guard.label}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <span className="text-xs text-slate-900 dark:text-slate-100">
                  {guard.label}
                </span>
                <div
                  className={`w-8 h-5 rounded-full relative transition-colors ${guard.enabled ? "bg-orange-500" : "bg-slate-300 dark:bg-slate-600"
                    }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full bg-white absolute top-[3px] transition-all shadow-sm ${guard.enabled ? "right-[3px]" : "left-[3px]"
                      }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type FeatureId = (typeof FEATURES)[number]["id"];
const FEATURE_IDS: FeatureId[] = FEATURES.map((f) => f.id);

function isFeatureId(s: string): s is FeatureId {
  return (FEATURE_IDS as string[]).includes(s);
}

export function Features() {
  const [expandedFeature, setExpandedFeature] = useState<FeatureId | null>(null);

  // Deep-link: open and scroll to feature when URL hash matches (e.g. #skill-builder, #certification, #self-healing)
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (hash && isFeatureId(hash)) {
      setExpandedFeature(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    const onHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash && isFeatureId(newHash)) setExpandedFeature(newHash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            overline="Core Capabilities"
            title="Everything You Need to Automate Reliably"
            description="Six integrated capabilities that take you from workflow recording to certified, self-healing automation. Simple by default, powerful when you need it."
          />
        </ScrollReveal>

        <div className="space-y-8 mt-16">
          {FEATURES.map((feature, i) => {
            const AgentVariant = featureAgents[i];
            const DemoComponent = featureDemos[i];
            const isExpanded = expandedFeature === feature.id;
            const isEven = i % 2 === 0;

            return (
              <ScrollReveal key={feature.id} delay={i * 0.05}>
                <CardSpotlight
                  id={feature.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 scroll-mt-24"
                >
                  {/* Feature Header — always visible */}
                  <div
                    className={`grid grid-cols-1 ${
                      DemoComponent || i === 4
                        ? isExpanded
                          ? isEven
                            ? "lg:grid-cols-[minmax(320px,1fr)_2fr]"
                            : "lg:grid-cols-[2fr_minmax(320px,1fr)]"
                          : "lg:grid-cols-2"
                        : "lg:grid-cols-1"
                    } gap-0`}
                  >
                    {/* Text */}
                    <div
                      className={`p-8 lg:p-10 ${!isEven && (DemoComponent || i === 4)
                        ? "lg:order-2"
                        : ""
                        }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center -ml-2">
                          <Agent variant={AgentVariant} scale={0.5} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                            {feature.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-base text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                        {feature.description}
                      </p>

                      <ul className="space-y-2.5">
                        {feature.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Expand/Collapse for demo (mobile only) */}
                      {(DemoComponent || i === 4) && (
                        <button
                          onClick={() =>
                            setExpandedFeature(
                              isExpanded ? null : feature.id
                            )
                          }
                          className="flex lg:hidden items-center gap-1.5 mt-6 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors group"
                        >
                          {isExpanded
                            ? "Hide Interactive Demo"
                            : "Try Interactive Demo"}
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="group-hover:translate-y-0.5 transition-transform"
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>
                      )}
                    </div>

                    {/* Right side: Preview when collapsed, Demo when expanded (desktop only) */}
                    {(DemoComponent || i === 4) && (
                      <div
                        className={`hidden lg:flex items-center justify-center p-8 ${
                          isExpanded
                            ? "bg-slate-50 dark:bg-slate-900/50"
                            : "bg-orange-50/50 dark:bg-orange-950/20 cursor-pointer hover:bg-orange-100/50 dark:hover:bg-orange-950/30 transition-colors"
                        } ${!isEven ? "lg:order-1" : ""}`}
                        onClick={() => {
                          if (!isExpanded) {
                            setExpandedFeature(feature.id);
                          }
                        }}
                      >
                        {isExpanded ? (
                          // Show demo on desktop when expanded
                          <div className="w-full relative flex items-center justify-center">
                            <div className="w-full max-w-3xl relative">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedFeature(null);
                                }}
                                className="absolute -top-4 -right-4 z-10 p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
                                aria-label="Close demo"
                              >
                                <X size={16} className="text-slate-600 dark:text-slate-400" />
                              </button>
                              {DemoComponent ? (
                                <DemoComponent />
                              ) : i === 4 ? (
                                <ObservabilityVisual />
                              ) : null}
                            </div>
                          </div>
                        ) : (
                          // Show preview when collapsed - clickable to expand
                          <div className="w-full max-w-md text-center">
                            <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                              <Agent variant={AgentVariant} scale={0.6} />
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Click to explore the interactive demo
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Expanded Demo (mobile only - dropdown below) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                          {DemoComponent ? (
                            <DemoComponent />
                          ) : i === 4 ? (
                            <ObservabilityVisual />
                          ) : null}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardSpotlight>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
