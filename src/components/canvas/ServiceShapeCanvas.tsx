"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface ServiceShapeProps {
  type: "torus" | "cube" | "sphere" | "knot" | "dodecahedron";
  color?: string;
}

function ServiceShapeMesh({ type, color = "#C6FF3D" }: ServiceShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.0}>
        {type === "torus" && <torusGeometry args={[0.7, 0.28, 32, 64]} />}
        {type === "knot" && <torusKnotGeometry args={[0.6, 0.22, 64, 16]} />}
        {type === "cube" && <boxGeometry args={[1.0, 1.0, 1.0]} />}
        {type === "sphere" && <sphereGeometry args={[0.8, 32, 32]} />}
        {type === "dodecahedron" && <dodecahedronGeometry args={[0.8]} />}

        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function ServiceShapeCanvas(props: ServiceShapeProps) {
  return (
    <div className="w-full h-full min-h-[160px]">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#C6FF3D" />

        <Suspense fallback={null}>
          <ServiceShapeMesh {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
}
