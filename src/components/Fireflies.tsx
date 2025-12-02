import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Firefly {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

export const Fireflies = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const flies: Firefly[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 4 + Math.random() * 4,
    }));
    setFireflies(flies);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          className="absolute rounded-full bg-accent blur-[2px]"
          style={{
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            width: firefly.size,
            height: firefly.size,
            boxShadow: `0 0 ${firefly.size * 3}px hsl(var(--accent))`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: firefly.duration,
            repeat: Infinity,
            delay: firefly.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
