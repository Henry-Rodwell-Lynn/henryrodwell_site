import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";

import CanvasLoader from "../Loader";

const Stopple = () => {
  const stopple = useGLTF("./logo-test/3D2.glb");
  const meshRef = useRef();
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 1.2 : 1,
    config: config.default,
  });
  useFrame((  ) => {
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <animated.mesh
      scale={scale}
      // onClick={() => setActive(!active)}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      ref={meshRef}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-50, 50, 0]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[50, 50, 0]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, 0, 100]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, 0, -100]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={meshRef}
        object={stopple.scene}
        scale={0.7}
        position={[0, -30, 0]}
        rotation={[100, 0, 0]}
      />
    </animated.mesh>
  );
};

const StoppleCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [500, 0, 0], fov: 12.5 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={3} />
        <OrbitControls enableZoom={false} />
        <Stopple />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default StoppleCanvas;
