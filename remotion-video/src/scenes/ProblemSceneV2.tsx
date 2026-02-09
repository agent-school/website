import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EcommerceMockup } from "../components/mockups/ecommerce-mockup";
import { CRMMockup } from "../components/mockups/crm-mockup";

export const ProblemSceneV2: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade in
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Show error on left side
  const showLeftError = frame > 80;

  // Show thinking on right side
  const showRightThinking = frame > 60;

  return (
    <AbsoluteFill
      style={{
        background: "#FAF9F7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
        opacity,
      }}
    >
      {/* Title */}
      <div
        style={{
          marginBottom: 40,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#FE9F4D",
            marginBottom: 16,
            fontFamily: "monospace",
          }}
        >
          THE AUTOMATION PROBLEM
        </div>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#0A2540",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Traditional Solutions Fall Short
        </h2>
      </div>

      {/* Split Screen */}
      <div
        style={{
          display: "flex",
          gap: 40,
          width: "100%",
          maxWidth: 1600,
        }}
      >
        {/* Left: RPA Failure */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#EF4444",
              textAlign: "center",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            ❌ Traditional RPA
          </div>
          <EcommerceMockup showError={showLeftError} />
          <div
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "#666",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Breaks with every UI change
          </div>
        </div>

        {/* Right: Expensive AI */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#FBBF24",
              textAlign: "center",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            💸 Generic AI Agents
          </div>
          <CRMMockup showThinking={showRightThinking} />
          <div
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "#666",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Expensive and slow (45-60s per task)
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
