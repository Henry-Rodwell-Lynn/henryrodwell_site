import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Papacetamol = () => {
  const papacetamol = useGLTF("./logo-test/logo-test.glb");
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.000;
  });

  return (
    <group ref={meshRef}>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 0]}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[20, 50, 0]}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, 0, 50]}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={papacetamol.scene}
        scale={5}
        position={[0, 0, 0]}
        rotation={[0, 1.5, 0]}
      />
    </group>
  );
};

const PapacetamolCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [50, 0, 0], fov: 12.5 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.2} />
        <OrbitControls enableZoom={true} />
        <Papacetamol />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PapacetamolCanvas;
