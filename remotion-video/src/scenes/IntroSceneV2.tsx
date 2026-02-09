import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Particles } from "../components/magic-ui/particles";
import { TypingAnimation } from "../components/magic-ui/typing-animation";
import { BorderBeam } from "../components/magic-ui/border-beam";

export const IntroSceneV2: React.FC = () => {
  const frame = useCurrentFrame();

  // Logo fade in and scale
  const logoOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoScale = interpolate(frame, [20, 60], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tagline animation
  const taglineOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Particles converging effect
  const particleVx = interpolate(frame, [0, 40], [2, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const particleVy = interpolate(frame, [0, 40], [2, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0A2540 0%, #1A3769 50%, #6631D7 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Animated Particles Background */}
      <Particles
        quantity={150}
        staticity={30}
        color="#FE9F4D"
        vx={particleVx}
        vy={particleVy}
      />

      {/* Overlay gradient for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 37, 64, 0.5) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        {/* Logo */}
        <h1
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: "#FFFFFF",
            margin: 0,
            marginBottom: 20,
            textShadow: "0 0 40px rgba(254, 159, 77, 0.5)",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Agent School
        </h1>

        {/* Tagline with typing animation */}
        <div style={{ opacity: taglineOpacity }}>
          {frame >= 70 ? (
            <div
              style={{
                fontSize: 42,
                color: "#FE9F4D",
                fontWeight: 600,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              <TypingAnimation
                text="AI That Learns Once, Runs Repeatedly"
                duration={40}
                delay={0}
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Border beam around the frame */}
      <div
        style={{
          position: "absolute",
          inset: 20,
          borderRadius: 20,
          pointerEvents: "none",
        }}
      >
        <BorderBeam color="#FE9F4D" duration={3} size={200} />
      </div>
    </AbsoluteFill>
  );
};
