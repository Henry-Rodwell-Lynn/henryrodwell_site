import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { TickTock3D } from "./3D_Models";

import CanvasLoader from "../Loader";

const TickTockCanvas = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        frameLoop="demand"
        shadows
        camera={{ position: [25, 0, 0], fov: 12.5 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight />
          <OrbitControls enablePan={false} enableZoom={true} autoRotate />
          <TickTock3D />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default TickTockCanvas;
