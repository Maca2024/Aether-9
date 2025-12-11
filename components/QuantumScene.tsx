/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { useRef, useMemo, type FC, Component, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, Icosahedron, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Error Boundary for Canvas components
class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Canvas rendering error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center h-full bg-void-light/50 border border-white/5 rounded-lg">
          <p className="text-stone-500 text-sm font-mono">3D Rendering niet beschikbaar</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// --- AETHER FIELD (Background Particles) ---
const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  // INCREASED: 5000 * 1.25 = 6250 particles
  const count = 6250;
  
  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45; // Slightly wider spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 45;
    }
    return [positions];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      // INCREASED SPEED BY ~30%
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.011;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.016;
    }
  });

  return (
    // @ts-ignore - R3F group component typing
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.016} 
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

export const AetherField: FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <CanvasErrorBoundary>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          {/* @ts-ignore - R3F fog component has complex typing that conflicts with JSX intrinsic elements */}
          <fog attach="fog" args={['#030303', 2, 14]} />
          <ParticleField />
        </Canvas>
      </CanvasErrorBoundary>
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
    // @ts-ignore - R3F group component typing
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
                {/* @ts-ignore - R3F material component typing */}
                <meshBasicMaterial color="#000" />
            </Icosahedron>
        </Float>
    </group>
  );
}

export const SingularityScene: FC = () => {
  return (
    <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden border border-white/5 bg-void-light/50">
      <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent z-10 opacity-50"></div>
      <CanvasErrorBoundary>
        <Canvas camera={{ position: [0, 0, 4] }}>
          {/* @ts-ignore - R3F light component typing */}
          <ambientLight intensity={0.5} />
          {/* @ts-ignore - R3F light component typing */}
          <pointLight position={[10, 10, 10]} color="#7000FF" intensity={2} />
          {/* @ts-ignore - R3F light component typing */}
          <pointLight position={[-10, -10, -10]} color="#00F0FF" intensity={2} />
          <MorphingVoid />
        </Canvas>
      </CanvasErrorBoundary>
      <div className="absolute bottom-4 right-4 text-[9px] font-mono text-white/20 tracking-widest z-20">
        FIG 1.0: POTENTIALITEIT
      </div>
    </div>
  );
};

// --- QUANTUM LATTICE (Visualizing the "Mycelium/Microtubuli") ---
const LatticeStructure = () => {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const count = 40;
    const tempObject = new THREE.Object3D();
    
    useFrame((state) => {
        if(!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        
        let idx = 0;
        // Create a spiral/helix structure representing microtubules
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 8;
            const radius = 1.5 + Math.sin(time * 0.5 + i * 0.1) * 0.2;
            const x = Math.cos(angle) * radius;
            const y = (i / count) * 6 - 3;
            const z = Math.sin(angle) * radius;
            
            tempObject.position.set(x, y, z);
            tempObject.rotation.set(time * 0.2, angle, 0);
            
            // Pulse effect
            const scale = 1 + Math.sin(time * 2 + i) * 0.3;
            tempObject.scale.set(scale, scale, scale);
            
            tempObject.updateMatrix();
            meshRef.current.setMatrixAt(idx++, tempObject.matrix);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
        meshRef.current.rotation.y = time * 0.1;
    });

    return (
        // @ts-ignore - R3F instancedMesh component typing
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            {/* @ts-ignore - R3F geometry component typing */}
            <dodecahedronGeometry args={[0.15, 0]} />
            {/* @ts-ignore - R3F material component typing */}
            <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.4} />
        {/* @ts-ignore - R3F component closing tag */}
        </instancedMesh>
    );
};

export const QuantumLattice: FC = () => {
    return (
        <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden border border-white/5 bg-void-light/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-aether-violet/10 via-transparent to-transparent z-0"></div>
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [0, 0, 6] }}>
                  {/* @ts-ignore - R3F light component typing */}
                  <ambientLight intensity={0.5} />
                  <LatticeStructure />
                  {/* Connecting lines abstract */}
                  <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                      <Sphere args={[2, 4, 2]} scale={[1,1,1]}>
                           {/* @ts-ignore - R3F material component typing */}
                           <meshBasicMaterial color="#7000FF" wireframe transparent opacity={0.1} />
                      </Sphere>
                  </Float>
              </Canvas>
            </CanvasErrorBoundary>
            <div className="absolute bottom-4 right-4 text-[9px] font-mono text-white/20 tracking-widest z-20">
                FIG 2.0: MICROTUBULI NETWERK
            </div>
        </div>
    );
};