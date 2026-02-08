"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export function TabGroup({ tabs }: { tabs: Tab[] }) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const [direction, setDirection] = useState(0);

  function handleTabChange(newId: string) {
    const oldIndex = tabs.findIndex((t) => t.id === activeId);
    const newIndex = tabs.findIndex((t) => t.id === newId);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActiveId(newId);
  }

  const active = tabs.find((t) => t.id === activeId)!;

  return (
    <div>
      <div className="flex gap-1 bg-cream-100 p-1.5 rounded-xl mb-10 max-w-fit mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`relative z-10 px-5 py-2.5 text-body-sm font-semibold rounded-lg transition-colors duration-200 ${
              tab.id === activeId
                ? "text-navy-800"
                : "text-charcoal-500 hover:text-navy-700"
            }`}
          >
            {tab.id === activeId && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-white rounded-lg shadow-soft"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={activeId}
            custom={direction}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -300, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {active.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
