"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ServiceShapeCanvas = dynamic(() => import("./ServiceShapeCanvas"), {
  ssr: false,
});

export default function ClientServiceShape(props: {
  type: "torus" | "cube" | "sphere" | "knot" | "dodecahedron";
  color?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full min-h-[160px] bg-black/40 rounded-2xl animate-pulse" />;
  }

  return <ServiceShapeCanvas {...props} />;
}
