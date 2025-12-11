/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Icosahedron, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Add type definitions for R3F intrinsic elements to satisfy TypeScript
// Augment React's JSX namespace for modern setups
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      fog: any;
      meshBasicMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// Augment global JSX namespace as fallback
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      fog: any;
      meshBasicMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// --- AETHER FIELD (Background Particles) ---
const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  // MASSIVE EXPANSION: Increased to 5000 for deep cosmic density
  const count = 5000;
  
  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Extended range for more depth (spread from 25 to 40)
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return [positions];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      // Slower, heavier rotation for scale
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.01;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

export const AetherField: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#030303', 2, 12]} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

// --- SINGULARITY SCENE (Abstract Geometry) ---
const MorphingVoid = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
    if (glowRef.current) {
        glowRef.current.scale.setScalar(1.2 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05);
        glowRef.current.rotation.z = state.clock.getElapsedTime() * -0.1;
    }
  });

  return (
    <group>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {/* Core Object */}
            <Icosahedron ref={meshRef} args={[1.5, 0]}>
                <MeshDistortMaterial
                    color="#1a1a1a"
                    emissive="#00F0FF"
                    emissiveIntensity={0.1}
                    roughness={0.1}
                    metalness={1}
                    distort={0.4}
                    speed={1.5}
                    wireframe={true}
                />
            </Icosahedron>
            
            {/* Inner Glow */}
            <Icosahedron args={[0.8, 2]}>
                <meshBasicMaterial color="#000" />
            </Icosahedron>
        </Float>
    </group>
  );
}

export const SingularityScene: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden border border-white/5 bg-void-light/50">
      <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent z-10 opacity-50"></div>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#7000FF" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#00F0FF" intensity={2} />
        <MorphingVoid />
      </Canvas>
      <div className="absolute bottom-4 right-4 text-[9px] font-mono text-white/20 tracking-widest z-20">
        FIG 1.0: POTENTIALITEIT
      </div>
    </div>
  );
};