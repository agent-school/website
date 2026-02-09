import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  color?: string;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
  borderWidth?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 50,
  duration = 6,
  delay = 0,
  color,
  colorFrom = color || "#ffaa40",
  colorTo = color || "#9c40ff",
  reverse = false,
  borderWidth = 1,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        className={cn(className)}
        style={{
          position: "absolute",
          inset: `-${borderWidth}px`,
          background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          backgroundSize: `${size}% 100%`,
          animation: `border-beam ${duration}s linear infinite ${delay}s`,
          animationDirection: reverse ? "reverse" : "normal",
          maskImage: `linear-gradient(to right, transparent, white ${size}%, white ${100 - size}%, transparent)`,
          WebkitMaskImage: `linear-gradient(to right, transparent, white ${size}%, white ${100 - size}%, transparent)`,
        }}
      />
    </div>
  );
};
