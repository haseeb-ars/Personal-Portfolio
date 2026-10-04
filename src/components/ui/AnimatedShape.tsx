"use client";

interface AnimatedShapeProps {
  type: "torus" | "cube" | "sphere" | "knot" | "dodecahedron";
  color?: string;
}

export default function AnimatedShape({ type, color }: AnimatedShapeProps) {
  const shapeStyles: Record<string, React.CSSProperties> = {
    torus: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      border: "8px solid transparent",
      borderTopColor: "#C6FF3D",
      borderRightColor: "#00D4FF",
      background: "radial-gradient(circle at 30% 30%, rgba(198,255,61,0.15), transparent 60%)",
    },
    cube: {
      width: 70,
      height: 70,
      borderRadius: 14,
      background: "linear-gradient(135deg, rgba(198,255,61,0.25), rgba(0,212,255,0.15))",
      border: "1.5px solid rgba(198,255,61,0.4)",
      backdropFilter: "blur(10px)",
    },
    sphere: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      background: "radial-gradient(circle at 35% 30%, rgba(0,212,255,0.5), rgba(198,255,61,0.2) 50%, transparent 70%)",
      border: "1.5px solid rgba(0,212,255,0.3)",
    },
    knot: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      background: "conic-gradient(from 0deg, #C6FF3D, #00D4FF, #FF2D6F, #C6FF3D)",
      WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 10px), #fff calc(100% - 9px))",
      mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), #fff calc(100% - 9px))",
    },
    dodecahedron: {
      width: 72,
      height: 72,
      clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
      background: "linear-gradient(180deg, rgba(255,45,111,0.4), rgba(198,255,61,0.3))",
    },
  };

  const glowColors: Record<string, string> = {
    torus: "rgba(198,255,61,0.4)",
    cube: "rgba(198,255,61,0.35)",
    sphere: "rgba(0,212,255,0.4)",
    knot: "rgba(255,45,111,0.3)",
    dodecahedron: "rgba(255,45,111,0.35)",
  };

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ perspective: 600 }}>
      <div
        className="relative"
        style={{
          animation: "shape-float 4s ease-in-out infinite, shape-rotate 8s linear infinite",
        }}
      >
        {/* Glow backdrop */}
        <div
          className="absolute inset-[-20px] rounded-full blur-[30px] opacity-60"
          style={{
            background: `radial-gradient(circle, ${glowColors[type]}, transparent 70%)`,
            animation: "shape-pulse 3s ease-in-out infinite",
          }}
        />

        {/* Shape */}
        <div style={shapeStyles[type]} />
      </div>

      <style jsx>{`
        @keyframes shape-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes shape-rotate {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(15deg); }
        }
        @keyframes shape-pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
