import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

const Rig = () => {
  const { camera, pointer } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    const targetX = pointer.x * 3;
    const targetY = pointer.y * 3;
    const scrollZ = scrollY * 0.015; // Fly forward as user scrolls
    
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 15 - scrollZ, 0.05);
    camera.lookAt(0, 0, -scrollZ);
  });
  return null;
};

const ParticleSwarm = () => {
  const count = 2000;
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    
    // Add subtle rotation to the whole system
    mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color="#22d3ee" roughness={0.1} metalness={0.8} />
    </instancedMesh>
  );
};

const FloatingShapes = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={[-6, 2, -10]}>
        <mesh>
          <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
          <meshStandardMaterial color="#3b82f6" opacity={0.3} transparent wireframe />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={2} position={[6, -4, -12]}>
        <mesh>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#8b5cf6" opacity={0.4} transparent wireframe />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={1} floatIntensity={3} position={[8, 5, -15]}>
        <mesh>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#22d3ee" opacity={0.2} transparent wireframe />
        </mesh>
      </Float>
    </>
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={75} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#22d3ee" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={2} />
        
        <Rig />

        <React.Suspense fallback={null}>
          <ParticleSwarm />
          <FloatingShapes />
        </React.Suspense>

        <EffectComposer>
          <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Background3D;
