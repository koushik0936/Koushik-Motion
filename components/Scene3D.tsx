
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Define intrinsic elements as component constants to bypass JSX.IntrinsicElements type errors
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const PlaneGeometry = 'planeGeometry' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

const FloatingElements = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, scrollProgress * Math.PI * 2, 0.05);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, -scrollProgress * 10, 0.05);
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.002;
      sphereRef.current.rotation.z += 0.001;
    }
  });

  return (
    <Group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, -2]}>
          <MeshDistortMaterial
            color="#111"
            speed={2}
            distort={0.4}
            radius={1}
            emissive="#0066ff"
            emissiveIntensity={0.2}
            roughness={0}
            metalness={1}
          />
        </Sphere>
      </Float>
      
      {/* Background film-like frames */}
      {[...Array(10)].map((_, i) => (
        <Mesh key={i} position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, -5 - Math.random() * 20]}>
          <PlaneGeometry args={[2, 1.2]} />
          <MeshBasicMaterial color="#ffffff" transparent opacity={0.05} side={THREE.DoubleSide} />
        </Mesh>
      ))}
    </Group>
  );
};

const Scene3D: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} intensity={1} color="#0066ff" />
        <PointLight position={[-10, -10, -10]} intensity={1} color="#ff0066" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingElements scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
