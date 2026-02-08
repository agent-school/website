export type Complexity = "simple" | "multi_step" | "complex";
export type CurrentMethod = "manual" | "rpa" | "ai_agent";

export interface CalcInputs {
  complexity: Complexity;
  frequencyPerWeek: number;
  currentMethod: CurrentMethod;
  employees: number;
  hourlyRate: number;
}

export interface CalcResults {
  currentTimeMinutes: number;
  agentSchoolTimeSeconds: number;
  currentCostPerExecution: number;
  agentSchoolCostPerExecution: number;
  weeklyTimeSavedHours: number;
  monthlyTimeSavedHours: number;
  yearlyCostSavings: number;
  breakEvenWeeks: number;
  speedMultiplier: number;
  currentReliability: number;
  agentSchoolReliability: number;
}

const TIME_MAP: Record<Complexity, Record<CurrentMethod, number>> = {
  simple: { manual: 5, rpa: 1, ai_agent: 0.5 },
  multi_step: { manual: 15, rpa: 5, ai_agent: 3 },
  complex: { manual: 30, rpa: 15, ai_agent: 8 },
};

const AGENT_SCHOOL_TIME_SECONDS: Record<Complexity, number> = {
  simple: 3,
  multi_step: 20,
  complex: 45,
};

const AGENT_SCHOOL_COST: Record<Complexity, number> = {
  simple: 0.01,
  multi_step: 0.05,
  complex: 0.15,
};

const SETUP_COST: Record<Complexity, number> = {
  simple: 2000,
  multi_step: 5000,
  complex: 10000,
};

const RELIABILITY: Record<CurrentMethod, number> = {
  manual: 95,
  rpa: 99,
  ai_agent: 87,
};

const AGENT_SCHOOL_RELIABILITY: Record<Complexity, number> = {
  simple: 99.5,
  multi_step: 98,
  complex: 96,
};

export function calculateROI(inputs: CalcInputs): CalcResults {
  const currentTimeMinutes = TIME_MAP[inputs.complexity][inputs.currentMethod];
  const agentSchoolTimeSeconds = AGENT_SCHOOL_TIME_SECONDS[inputs.complexity];

  const currentCostPerExecution =
    (currentTimeMinutes / 60) * inputs.hourlyRate;
  const agentSchoolCostPerExecution = AGENT_SCHOOL_COST[inputs.complexity];

  const savingsPerExecution =
    currentCostPerExecution - agentSchoolCostPerExecution;

  const totalExecutionsPerWeek = inputs.frequencyPerWeek * inputs.employees;
  const weeklySavings = savingsPerExecution * totalExecutionsPerWeek;

  const weeklyTimeSavedMinutes =
    (currentTimeMinutes - agentSchoolTimeSeconds / 60) * totalExecutionsPerWeek;
  const weeklyTimeSavedHours = weeklyTimeSavedMinutes / 60;
  const monthlyTimeSavedHours = weeklyTimeSavedHours * 4.33;

  const yearlyCostSavings = weeklySavings * 52 - SETUP_COST[inputs.complexity];

  const breakEvenWeeks =
    weeklySavings > 0
      ? Math.ceil(SETUP_COST[inputs.complexity] / weeklySavings)
      : 999;

  const speedMultiplier = Math.round(
    (currentTimeMinutes * 60) / agentSchoolTimeSeconds
  );

  return {
    currentTimeMinutes,
    agentSchoolTimeSeconds,
    currentCostPerExecution,
    agentSchoolCostPerExecution,
    weeklyTimeSavedHours,
    monthlyTimeSavedHours,
    yearlyCostSavings: Math.max(0, yearlyCostSavings),
    breakEvenWeeks,
    speedMultiplier,
    currentReliability: RELIABILITY[inputs.currentMethod],
    agentSchoolReliability: AGENT_SCHOOL_RELIABILITY[inputs.complexity],
  };
}
