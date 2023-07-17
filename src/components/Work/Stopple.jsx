import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";

import { Stopple3D } from "./3D_Models";

import CanvasLoader from "../Loader";

const StoppleCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [70, 0, 0], fov: 12.5 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          autoRotate
         />
        <Stopple3D />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default StoppleCanvas;
