import React, { useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

const Logo = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./logo-test/logo-test.glb");
  const { actions } = useAnimations(animations, group);
  const { size, viewport } = useThree();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = ((event.clientY / window.innerHeight) * 2 - 1); // Note the negative sign here
      group.current.rotation.set(y / 3, x / 3, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" rotation={[0, 0, 0]}>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          position={[0.048, -0.045, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={11.552}
        >
          <meshStandardMaterial color={"#ffffff"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          position={[0.471, 0.063, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={11.552}
        >
          <meshStandardMaterial color={"#ffffff"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          position={[-0.555, -0.063, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={11.552}
        >
          <meshStandardMaterial color={"#ffffff"} />
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload("./logo-test/logo-test.glb");
export default Logo;
