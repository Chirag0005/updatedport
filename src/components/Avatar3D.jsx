import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment, Stars } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#0f172a"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          emissive="#22d3ee"
          emissiveIntensity={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const Avatar3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-10 cursor-pointer pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <React.Suspense fallback={null}>
          <AnimatedShape />
        </React.Suspense>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
