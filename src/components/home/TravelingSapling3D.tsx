"use client";

import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Decal, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProceduralSapling() {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) {
        // Master Parallax Track: Moving the actual 3D object down the Y axis
        // as the user scrolls from top of the page to bottom.
        // It starts in the center of the Hero Section, then moves down.
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            }
        });

        // Drift downwards and rotate dramatically over the span of the entire screen
        tl.to(groupRef.current.position, {
            y: -18,       // Drift down across the viewport
            x: 5,         // Drift right horizontally
            z: 2,         // Push slightly forward 
            ease: "none"
        }, 0);

        tl.to(groupRef.current.rotation, {
            y: Math.PI * 6, // Spin multiple times over the scroll length
            x: Math.PI / 8, // slight tilt
            ease: "none"
        }, 0);
    }
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={[1.2, 1.2, 1.2]}>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.5}>
        
        {/* Pot Base */}
        <mesh position={[0, -1.8, 0]}>
          <cylinderGeometry args={[0.9, 0.6, 1.2, 32]} />
          <meshStandardMaterial color="#FFB74D" roughness={0.4} metalness={0.1} />
        </mesh>
        {/* Pot Rim */}
        <mesh position={[0, -1.15, 0]}>
          <torusGeometry args={[0.95, 0.15, 16, 32]} />
          <meshStandardMaterial color="#F9C846" roughness={0.5} />
        </mesh>
        
        {/* Stem */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.18, 2.5, 16]} />
          <meshStandardMaterial color="#2D8C4E" />
        </mesh>

        {/* Leaves Array - Colored with Deep Magenta Theme */}
        
        {/* Bottom Left Leaf */}
        <mesh position={[-1.2, 0.2, 0]} rotation={[0, 0, Math.PI/3]} scale={[1, 0.3, 1]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#F06292" roughness={0.3} />
        </mesh>
        
        {/* Middle Right Leaf */}
        <mesh position={[1.2, 0.8, 0.2]} rotation={[Math.PI/6, 0, -Math.PI/3]} scale={[1, 0.3, 1]}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="#9C6DD8" roughness={0.3} />
        </mesh>
        
        {/* Top Leaf Cluster */}
        <mesh position={[0, 1.6, 0]} scale={[1, 1.2, 0.8]}>
          <sphereGeometry args={[1.1, 32, 32]} />
          <meshStandardMaterial color="#F06292" roughness={0.2} metalness={0.1} />
        </mesh>
        
      </Float>
    </group>
  );
}

export default function TravelingSapling3D() {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 45 }}
        dpr={[1, 2]} // High DPI support
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#9C6DD8" />
        <Environment preset="city" />
        <ProceduralSapling />
      </Canvas>
    </div>
  );
}
