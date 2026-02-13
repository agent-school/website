"use client";

import { type CSSProperties } from "react";

/* ─── types ─────────────────────────────────────────── */
export type AgentVariant =
  | "atlas" | "bolt" | "cipher" | "drift" | "echo" | "flux"
  | "glitch" | "haze" | "iris" | "jolt" | "koda" | "lumen"
  | "morph" | "nova" | "orbit" | "pulse" | "quasar" | "ripple"
  | "spark" | "torque" | "unity" | "volt" | "warp" | "xenon"
  | "yonder" | "zephyr";

interface AgentConfig {
  bg: string;
  size: number;
  radius: string;
  glow: string;
  eyeStyle?: "robot" | "wide" | "tiny" | "sleepy";
}

interface AgentProps {
  variant: AgentVariant;
  scale?: number;
  className?: string;
}

/* ─── all 26 agent configs (A-Z) ────────────────────── */
const VARIANTS: Record<AgentVariant, AgentConfig> = {
  atlas: { bg: "#00B4D8", size: 100, radius: "60% 40% 55% 45% / 55% 50% 50% 45%", glow: "rgba(0,180,216,0.3)" },
  bolt: { bg: "#F77F00", size: 95, radius: "50% 50% 40% 60% / 45% 55% 45% 55%", glow: "rgba(247,127,0,0.3)", eyeStyle: "tiny" },
  cipher: { bg: "#7209B7", size: 120, radius: "60% 40% 30% 70% / 60% 30% 70% 40%", glow: "rgba(114,9,183,0.3)" },
  drift: { bg: "#90BE6D", size: 108, radius: "55% 45% 50% 50% / 40% 60% 40% 60%", glow: "rgba(144,190,109,0.3)", eyeStyle: "sleepy" },
  echo: { bg: "#FF9F1C", size: 112, radius: "45% 55% 65% 35% / 55% 40% 60% 45%", glow: "rgba(255,159,28,0.3)" },
  flux: { bg: "#70E000", size: 118, radius: "50% 50% 35% 65% / 40% 65% 35% 60%", glow: "rgba(112,224,0,0.3)", eyeStyle: "robot" },
  glitch: { bg: "#E63946", size: 105, radius: "70% 30% 50% 50% / 45% 60% 40% 55%", glow: "rgba(230,57,70,0.3)", eyeStyle: "wide" },
  haze: { bg: "#457B9D", size: 115, radius: "35% 65% 55% 45% / 65% 35% 65% 35%", glow: "rgba(69,123,157,0.3)" },
  iris: { bg: "#F72585", size: 98, radius: "55% 45% 40% 60% / 50% 55% 45% 50%", glow: "rgba(247,37,133,0.3)", eyeStyle: "wide" },
  jolt: { bg: "#FFBE0B", size: 90, radius: "65% 35% 45% 55% / 50% 50% 50% 50%", glow: "rgba(255,190,11,0.3)", eyeStyle: "tiny" },
  koda: { bg: "#4361EE", size: 130, radius: "40% 60% 45% 55% / 60% 40% 55% 45%", glow: "rgba(67,97,238,0.3)", eyeStyle: "sleepy" },
  lumen: { bg: "#F4A261", size: 102, radius: "55% 45% 60% 40% / 45% 55% 40% 60%", glow: "rgba(244,162,97,0.3)" },
  morph: { bg: "#7678ED", size: 110, radius: "65% 35% 60% 40% / 35% 65% 40% 60%", glow: "rgba(118,120,237,0.3)" },
  nova: { bg: "#06D6A0", size: 116, radius: "45% 55% 50% 50% / 60% 45% 55% 40%", glow: "rgba(6,214,160,0.3)" },
  orbit: { bg: "#8338EC", size: 125, radius: "50% 50% 55% 45% / 55% 45% 50% 50%", glow: "rgba(131,56,236,0.3)", eyeStyle: "wide" },
  pulse: { bg: "#FF006E", size: 97, radius: "60% 40% 35% 65% / 45% 55% 55% 45%", glow: "rgba(255,0,110,0.3)", eyeStyle: "tiny" },
  quasar: { bg: "#3A86FF", size: 122, radius: "40% 60% 65% 35% / 55% 45% 45% 55%", glow: "rgba(58,134,255,0.3)" },
  ripple: { bg: "#2EC4B6", size: 104, radius: "55% 45% 45% 55% / 65% 35% 55% 45%", glow: "rgba(46,196,182,0.3)", eyeStyle: "sleepy" },
  spark: { bg: "#FB5607", size: 93, radius: "45% 55% 55% 45% / 50% 50% 45% 55%", glow: "rgba(251,86,7,0.3)", eyeStyle: "robot" },
  torque: { bg: "#264653", size: 132, radius: "55% 45% 40% 60% / 40% 60% 55% 45%", glow: "rgba(38,70,83,0.3)" },
  unity: { bg: "#E9C46A", size: 108, radius: "50% 50% 60% 40% / 55% 45% 50% 50%", glow: "rgba(233,196,106,0.3)" },
  volt: { bg: "#00F5D4", size: 100, radius: "65% 35% 50% 50% / 40% 60% 50% 50%", glow: "rgba(0,245,212,0.3)", eyeStyle: "robot" },
  warp: { bg: "#9B5DE5", size: 114, radius: "40% 60% 50% 50% / 60% 40% 45% 55%", glow: "rgba(155,93,229,0.3)" },
  xenon: { bg: "#00BBF9", size: 106, radius: "55% 45% 35% 65% / 50% 50% 60% 40%", glow: "rgba(0,187,249,0.3)", eyeStyle: "wide" },
  yonder: { bg: "#FEE440", size: 96, radius: "60% 40% 45% 55% / 45% 55% 50% 50%", glow: "rgba(254,228,64,0.3)", eyeStyle: "sleepy" },
  zephyr: { bg: "#9EF01A", size: 110, radius: "45% 55% 55% 45% / 55% 45% 45% 55%", glow: "rgba(158,240,26,0.3)" },
};

/* ─── ordered list of all 26 ────────────────────────── */
export const ALL_VARIANTS: AgentVariant[] = [
  "atlas", "bolt", "cipher", "drift", "echo", "flux",
  "glitch", "haze", "iris", "jolt", "koda", "lumen",
  "morph", "nova", "orbit", "pulse", "quasar", "ripple",
  "spark", "torque", "unity", "volt", "warp", "xenon",
  "yonder", "zephyr",
];

/* ─── map variants to the 4 journey steps ───────────── */
export const JOURNEY_AGENTS: AgentVariant[] = ["echo", "cipher", "orbit", "flux"];

/* ─── scoped styles (injected once) ─────────────────── */
const STYLE_ID = "agent-characters-styles";

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    .ag-glossy { position: relative; overflow: hidden; }
    .ag-glossy::after {
      content: '';
      position: absolute;
      top: 5%; left: 5%;
      width: 30%; height: 20%;
      background: linear-gradient(180deg, rgba(255,255,255,0.8), transparent);
      border-radius: 50%;
      filter: blur(1px);
    }

    .ag-agent {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: ag-breathe 4s infinite ease-in-out;
      box-shadow:
        inset 10px 10px 20px rgba(255,255,255,0.4),
        inset -10px -10px 20px rgba(0,0,0,0.1),
        0 15px 25px rgba(0,0,0,0.15);
      transition: transform 0.3s ease;
      cursor: default;
    }

    .ag-agent:hover {
      transform: scale(1.08) !important;
    }

    /* Eyes — default */
    .ag-eyes { display: flex; gap: 12px; }
    .ag-eye {
      width: 12px; height: 20px;
      background: #1F2937;
      border-radius: 10px;
      position: relative;
    }
    .ag-eye::after {
      content: '';
      position: absolute;
      top: 4px; left: 3px;
      width: 4px; height: 4px;
      background: white;
      border-radius: 50%;
    }

    /* Robot eyes */
    .ag-eyes--robot { background: #111; padding: 8px 20px; border-radius: 4px; gap: 20px; }
    .ag-eyes--robot .ag-eye  { background: #00FF00; box-shadow: 0 0 5px #00FF00; width: 8px; height: 8px; border-radius: 50%; }
    .ag-eyes--robot .ag-eye::after { display: none; }

    /* Wide eyes */
    .ag-eyes--wide .ag-eye { width: 16px; height: 16px; border-radius: 50%; }
    .ag-eyes--wide .ag-eye::after { top: 3px; left: 4px; width: 5px; height: 5px; }

    /* Tiny eyes */
    .ag-eyes--tiny .ag-eye { width: 6px; height: 6px; border-radius: 50%; }
    .ag-eyes--tiny .ag-eye::after { display: none; }

    /* Sleepy eyes */
    .ag-eyes--sleepy .ag-eye { width: 14px; height: 6px; border-radius: 10px; }
    .ag-eyes--sleepy .ag-eye::after { top: 1px; left: 3px; width: 3px; height: 3px; }

    @keyframes ag-breathe {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      25%      { transform: translateY(-4px) rotate(-1deg); }
      50%      { transform: translateY(-6px) rotate(0deg); }
      75%      { transform: translateY(-3px) rotate(1deg); }
    }
  `;
  document.head.appendChild(style);
}

/* ─── Individual Agent component ────────────────────── */
export function Agent({ variant, scale = 1, className = "" }: AgentProps) {
  injectStyles();

  const cfg = VARIANTS[variant];
  // Capitalize first letter for the display name
  const displayName = variant.charAt(0).toUpperCase() + variant.slice(1);

  const agentStyle: CSSProperties = {
    background: cfg.bg,
    width: cfg.size,
    height: cfg.size,
    borderRadius: cfg.radius,
    boxShadow: `
      inset 10px 10px 20px rgba(255,255,255,0.4),
      inset -10px -10px 20px rgba(0,0,0,0.1),
      0 15px 25px ${cfg.glow}
    `,
  };

  const wrapperStyle: CSSProperties =
    scale !== 1 ? { transform: `scale(${scale})`, transformOrigin: "center center" } : {};

  const eyeClass = cfg.eyeStyle ? `ag-eyes ag-eyes--${cfg.eyeStyle}` : "ag-eyes";

  return (
    <div className={className} style={wrapperStyle}>
      <div
        className="ag-agent ag-glossy"
        style={agentStyle}
        data-agent-name={displayName}
        title={displayName}
      >
        <div className={eyeClass}>
          <div className="ag-eye" />
          <div className="ag-eye" />
        </div>
      </div>
    </div>
  );
}

/* ─── All agents together ───────────────────────────── */
interface AgentCharactersProps {
  variants?: AgentVariant[];
  gap?: number;
  scale?: number;
  className?: string;
}

export function AgentCharacters({
  variants = ALL_VARIANTS,
  gap = 40,
  scale = 1,
  className = "",
}: AgentCharactersProps) {
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", gap: `${gap}px`, flexWrap: "wrap", justifyContent: "center" }}
    >
      {variants.map((v) => (
        <Agent key={v} variant={v} scale={scale} />
      ))}
    </div>
  );
}
