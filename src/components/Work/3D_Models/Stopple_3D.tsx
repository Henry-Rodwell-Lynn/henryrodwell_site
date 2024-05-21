import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

const Stopple3D = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./logo-test/Stopple.glb");
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    actions.LID_A.play();
    actions.LID_B.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" rotation={[0, 0, 100]}>
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
        <mesh
          name="LID_A"
          castShadow
          receiveShadow
          geometry={nodes.LID_A.geometry}
          material={materials["Black Plastic"]}
          scale={0.08}
        />
        <mesh
          name="LID_B"
          castShadow
          receiveShadow
          geometry={nodes.LID_B.geometry}
          material={materials["Black Plastic"]}
          scale={0.08}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./logo-test/Stopple.glb");

export default Stopple3D;
