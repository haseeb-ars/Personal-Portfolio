"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/lib/store";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const { cursorVariant, cursorText } = useAppStore();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible || cursorVariant === "hidden") return null;

  const isExpanded = cursorVariant === "drag" || cursorVariant === "view" || cursorVariant === "hover";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      animate={{
        x: position.x - (isExpanded ? 35 : 8),
        y: position.y - (isExpanded ? 35 : 8),
        width: isExpanded ? 70 : 16,
        height: isExpanded ? 70 : 16,
        backgroundColor: "rgba(242, 240, 235, 0.95)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.2,
      }}
    >
      {isExpanded && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[11px] font-bold uppercase tracking-widest text-black select-none text-center px-1"
        >
          {cursorText || (cursorVariant === "drag" ? "Drag" : cursorVariant === "view" ? "View" : "Open")}
        </motion.span>
      )}
    </motion.div>
  );
}
