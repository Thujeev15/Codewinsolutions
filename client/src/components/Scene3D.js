import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

// Modular Cube Component with Premium Materials
const ModularCube = ({ position, delay }) => {
  const meshRef = useRef();
  const edgesRef = useRef();
  const glowRef = useRef();
  const innerGlowRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (meshRef.current) {
      // Very slow, relaxing floating animation
      meshRef.current.position.y = position[1] + Math.sin(t * 0.2 + delay) * 0.18;
      meshRef.current.position.x = position[0] + Math.cos(t * 0.15 + delay) * 0.12;
      meshRef.current.position.z = position[2] + Math.sin(t * 0.18 + delay) * 0.1;
      
      // Gentle, smooth rotation - very slow for calming effect
      meshRef.current.rotation.x = Math.sin(t * 0.05 + delay) * 0.2;
      meshRef.current.rotation.y = t * 0.08 + delay;
      meshRef.current.rotation.z = Math.cos(t * 0.04 + delay) * 0.15;
    }

    // Subtle, smooth pulsing glow effect
    if (glowRef.current) {
      const pulse = (Math.sin(t * 0.8 + delay) * 0.5 + 0.5);
      glowRef.current.intensity = 0.3 + pulse * 0.2;
    }

    // Soft edge glow pulsing
    if (edgesRef.current) {
      const edgePulse = Math.sin(t * 1.2 + delay) * 0.2 + 0.75;
      edgesRef.current.material.opacity = edgePulse;
    }

    // Gentle inner glow rotation
    if (innerGlowRef.current) {
      innerGlowRef.current.rotation.x = -t * 0.15;
      innerGlowRef.current.rotation.y = t * 0.12;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Premium glass cube with reflections */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshPhysicalMaterial
          color="#0a0a15"
          transparent
          opacity={0.15}
          metalness={0.95}
          roughness={0.05}
          transmission={0.98}
          thickness={0.8}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Soft teal/cyan edges with gentle glow */}
      <lineSegments ref={edgesRef}>
        <edgesGeometry args={[new THREE.BoxGeometry(0.82, 0.82, 0.82)]} />
        <lineBasicMaterial 
          color="#00d9ff" 
          transparent 
          opacity={0.75}
          linewidth={2}
        />
      </lineSegments>

      {/* Inner rotating glow core in teal */}
      <mesh ref={innerGlowRef} scale={0.5}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial 
          color="#00d4d4" 
          transparent 
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Soft volumetric glow sphere */}
      <mesh scale={0.4}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial 
          color="#00d9ff" 
          transparent 
          opacity={0.06}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Point light for soft volumetric lighting in cyan */}
      <pointLight 
        ref={glowRef} 
        color="#00d9ff" 
        intensity={0.4} 
        distance={4}
        decay={2}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-bias={-0.0001}
      />
    </group>
  );
};

// Enhanced Data Stream with realistic flow
const DataStream = ({ start, end, delay }) => {
  const lineRef = useRef();
  const particleRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (particleRef.current) {
      // Very slow, smooth particle movement with gentle easing
      const progress = ((t * 0.2 + delay) % 1);
      const eased = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const x = start[0] + (end[0] - start[0]) * eased;
      const y = start[1] + (end[1] - start[1]) * eased;
      const z = start[2] + (end[2] - start[2]) * eased;
      particleRef.current.position.set(x, y, z);
      
      // Gentle particle glow intensity
      const glowIntensity = Math.sin(progress * Math.PI) * 0.5 + 0.5;
      particleRef.current.scale.setScalar(0.7 + glowIntensity * 0.3);
    }
  });

  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  }, [start, end]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <group>
      {/* Connection line with soft gradient effect */}
      <line ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial 
          color="#00d4d4" 
          transparent 
          opacity={0.22} 
          linewidth={1}
          blending={THREE.AdditiveBlending}
        />
      </line>
      
      {/* Moving particle with gentle glow */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial 
          color="#00d9ff"
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Soft particle light trail */}
      <pointLight 
        color="#00d9ff" 
        intensity={0.25} 
        distance={1.5}
        position={particleRef.current?.position}
      />
    </group>
  );
};

// Gentle Floating Light Particles (Background Atmosphere)
const FloatingParticles = () => {
  const particlesRef = useRef();
  const particleCount = 35;
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6 - 2
        ],
        delay: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.4,
        size: 0.015 + Math.random() * 0.025
      });
    }
    return temp;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        const p = particles[i];
        particle.position.y = p.position[1] + Math.sin(t * p.speed + p.delay) * 0.8;
        particle.position.x = p.position[0] + Math.cos(t * p.speed * 0.5 + p.delay) * 0.4;
        
        // Subtle opacity pulsing
        const opacity = (Math.sin(t * 0.5 + p.delay) * 0.3 + 0.5);
        particle.material.opacity = opacity * 0.3;
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshBasicMaterial 
            color={i % 3 === 0 ? "#00d9ff" : i % 3 === 1 ? "#00c9c9" : "#ffffff"}
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

// Main Cube System
const ModularCubeSystem = () => {
  const groupRef = useRef();

  // Very subtle, calming group rotation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.06) * 0.12;
      groupRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.04) * 0.05;
    }
  });

  // Cube positions forming a clean, balanced structure
  const cubePositions = [
    [0.3, 0, 0],       // Center-right bias
    [1.8, 0.5, 0.2],   // Right side
    [-1.2, -0.4, 0.3], // Left side (fewer)
    [0.5, 1.4, 0.4],   // Top right
    [0.2, -1.3, -0.3], // Bottom center
    [1.4, 1.1, 0.2],   // Upper right
    [-0.8, -1.1, -0.2],// Lower left
    [2.1, -0.6, 0.1],  // Far right
    [0.7, 0.8, -0.4],  // Mid right
  ];

  // Data stream connections
  const connections = [
    { start: [0, 0, 0], end: [1.5, 0.5, 0] },
    { start: [0, 0, 0], end: [-1.5, -0.5, 0] },
    { start: [0, 0, 0], end: [0, 1.5, 0.5] },
    { start: [0, 0, 0], end: [0, -1.5, -0.5] },
    { start: [1.5, 0.5, 0], end: [1.2, 1.2, 0.3] },
    { start: [-1.5, -0.5, 0], end: [-1.2, -1.2, -0.3] },
  ];

  return (
    <group ref={groupRef}>
      {/* Render cubes */}
      {cubePositions.map((pos, index) => (
        <ModularCube key={index} position={pos} delay={index * 0.3} />
      ))}
      
      {/* Render data streams */}
      {connections.map((conn, index) => (
        <DataStream 
          key={`stream-${index}`} 
          start={conn.start} 
          end={conn.end} 
          delay={index * 0.5}
        />
      ))}
    </group>
  );
};

const Scene3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas 
        camera={{ position: [2, 0.3, 8], fov: 42 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          stencil: false
        }}
      >
        {/* Premium HDRI environment for reflections */}
        <Environment preset="city" />
        
        {/* Soft ambient lighting */}
        <ambientLight intensity={0.12} />
        
        {/* Key light with soft cyan glow */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.35} 
          color="#00d9ff"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        
        {/* Gentle teal fill light */}
        <pointLight position={[-5, -3, -5]} intensity={0.2} color="#00c9c9" />
        
        {/* Soft white rim light for clean reflections */}
        <directionalLight 
          position={[0, 0, -10]} 
          intensity={0.12} 
          color="#f0f8ff" 
        />
        
        {/* Subtle cyan top light */}
        <pointLight position={[0, 8, 0]} intensity={0.18} color="#00d4d4" />
        
        {/* Modular cube system */}
        <ModularCubeSystem />
        
        {/* Gentle floating particles for atmospheric depth */}
        <FloatingParticles />
        
        {/* Soft volumetric fog for depth and calm atmosphere */}
        <fog attach="fog" args={['#000000', 6, 18]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
