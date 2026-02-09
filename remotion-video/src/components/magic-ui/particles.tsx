import { useCurrentFrame } from "remotion";
import { useMemo } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
  const frame = useCurrentFrame();

  const particles = useMemo(() => {
    return Array.from({ length: quantity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      velocityX: (Math.random() - 0.5) * 0.5,
      velocityY: (Math.random() - 0.5) * 0.5,
    }));
  }, [quantity, refresh]);

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        {particles.map((particle) => {
          const x =
            particle.x +
            (particle.velocityX * frame) / (staticity / 10) +
            vx;
          const y =
            particle.y +
            (particle.velocityY * frame) / (staticity / 10) +
            vy;

          return (
            <circle
              key={particle.id}
              cx={`${x % 100}%`}
              cy={`${y % 100}%`}
              r={particle.radius}
              fill={color}
              opacity={particle.opacity}
            />
          );
        })}
      </svg>
    </div>
  );
};
