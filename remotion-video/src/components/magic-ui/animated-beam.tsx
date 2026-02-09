import { useCurrentFrame } from "remotion";
import { interpolate } from "remotion";

interface AnimatedBeamProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  duration?: number;
  delay?: number;
  color?: string;
  width?: number;
  curvature?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  fromX,
  fromY,
  toX,
  toY,
  duration = 60,
  delay = 0,
  color = "#FE9F4D",
  width = 2,
  curvature = 0,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame - delay,
    [0, duration],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Calculate curve control point
  const midX = (fromX + toX) / 2;
  const midY = (fromY + toY) / 2 + curvature;

  // Create curved path
  const path = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;

  // Calculate beam position along path
  const beamLength = 100;
  const dashOffset = (1 - progress) * beamLength;

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      width="100%"
      height="100%"
    >
      {/* Path line */}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={width}
        opacity={0.2}
      />
      
      {/* Animated beam */}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={width * 2}
        opacity={progress > 0 ? 0.8 : 0}
        strokeDasharray={`${beamLength / 2} ${beamLength}`}
        strokeDashoffset={dashOffset}
      />
    </svg>
  );
};
