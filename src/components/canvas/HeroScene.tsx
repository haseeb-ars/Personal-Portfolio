"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useAppStore } from "@/lib/store";

export default function HeroScene() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  const { scrollProgress } = useAppStore();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Mouse parallax target
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, delta * 2);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, delta * 2);

    // Scroll driven z-displacement and rotation
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, -scrollProgress * 8, delta * 3);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, scrollProgress * 4, delta * 3);

    // Continuous floating rotations
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.4;
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.x -= delta * 0.2;
      cubeRef.current.rotation.z += delta * 0.3;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Iridescent Torus Knot */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={torusRef} position={[0, 0.2, 0]} scale={1.2}>
          <torusKnotGeometry args={[1.1, 0.35, 128, 32]} />
          <meshPhysicalMaterial
            color="#C6FF3D"
            metalness={0.2}
            roughness={0.1}
            transmission={0.8}
            thickness={1.2}
            ior={1.4}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#C6FF3D"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Floating Surrounding Geometric Cube */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh ref={cubeRef} position={[-2.4, -0.8, -1.2]} scale={0.8}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshPhysicalMaterial
            color="#1A1A1A"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            reflectivity={1}
          />
        </mesh>
      </Float>

      {/* Glossy Accent Sphere */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <mesh ref={sphereRef} position={[2.5, 1.2, -1]} scale={0.7}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial
            color="#C6FF3D"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            emissive="#C6FF3D"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>

      {/* Small Ambient Orbs */}
      <Float speed={4} floatIntensity={3}>
        <mesh position={[-1.8, 1.8, -2]} scale={0.35}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
      <Float speed={3.5} floatIntensity={2.5}>
        <mesh position={[1.9, -1.6, -2]} scale={0.4}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#C6FF3D" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}
