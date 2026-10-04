"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import HeroScene from "./HeroScene";
import FooterScene from "./FooterScene";

export default function SceneContainer() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 15, 10]} intensity={2.0} color="#FFFFFF" />
        <directionalLight position={[-10, -10, -5]} intensity={1.0} color="#00D4FF" />
        <pointLight position={[0, 0, 5]} intensity={1.5} color="#C6FF3D" />

        <Suspense fallback={null}>
          <HeroScene />
          <FooterScene />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
