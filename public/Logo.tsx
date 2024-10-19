import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";

import { Logo } from "./3D_Models";

import CanvasLoader from "../Loader";

const LogoCanvas = () => {
  return (
      <Canvas
        camera={{ position: [0, 0, 12], fov: 12.5 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight />
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            
           />
          <Logo />
        </Suspense>
        <Preload all />
      </Canvas>
      
  );
};

export default LogoCanvas;
