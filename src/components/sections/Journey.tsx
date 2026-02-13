"use client";

import { Timeline } from "@/components/aceternity/Timeline";
import { Agent, JOURNEY_AGENTS } from "@/components/AgentCharacters";
import { JOURNEY_STAGES } from "@/lib/constants";


export function Journey() {
  // Transform JOURNEY_STAGES data into Timeline format with custom content
  const timelineData = JOURNEY_STAGES.map((stage, index) => {
    const variant = JOURNEY_AGENTS[index];

    return {
      title: stage.number,
      content: (
        <div className="space-y-6 pb-8">
          {/* Agent character */}
          <Agent variant={variant} scale={0.45} />

          {/* Stage title */}
          <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            {stage.title}
          </h3>

          {/* Stage description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {stage.description}
          </p>

          {/* Visual accent line */}
          <div className="w-24 h-1 rounded-full bg-orange-500" />
        </div>
      ),
    };
  });

  return (
    <section
      id="journey"
      className="relative bg-white dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-orange-500/10 dark:bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-orange-500/10 dark:bg-orange-500/5 blur-3xl" />
      </div>

      {/* Custom header section */}
      <div className="relative z-10 max-w-7xl mx-auto pt-20 md:pt-32 px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-widest text-orange-600 dark:text-orange-500 mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Four Steps to Certified Automation
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            From teaching your first workflow to monitoring self-healing agents in
            production. The entire journey is designed for reliability.
          </p>
        </div>
      </div>

      {/* Timeline component */}
      <div className="relative z-10">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
