import { useRef, useMemo } from "react";
import { MeshPortalMaterial, MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import { RedFormat, DataTexture } from "three";

const TickTock3D = (props) => {
  const { nodes } = useGLTF("./logo-test/untitled8.glb");
  const toneMap = useMemo(() => {
    const format = RedFormat;
    const colors = new Uint8Array(4);
    for (let c = 0; c <= colors.length; c++) {
      colors[c] = (c / colors.length) * 256;
    }
    const gradientMap = new DataTexture(colors, colors.length, 1, format);
    gradientMap.needsUpdate = true;
    return gradientMap;
  }, []);

  return (
    <group {...props} dispose={null}>
      <spotLight position={[20, 1, 10]} />
      <spotLight position={[20, -10, 10]} intensity={2} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      >
        <meshToonMaterial gradientMap={toneMap} color={"#f97300"} />
      </mesh>
    </group>
  );
};

useGLTF.preload("./logo-test/untitled8.glb");

export default TickTock3D;
