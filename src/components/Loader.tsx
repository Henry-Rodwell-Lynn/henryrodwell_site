import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p 
          style={{
            fontSize: 14,
            color: '#bebebe',
            marginTop: 0,
          }}
        >[{progress.toFixed(2)}%]</p>
      </span>
    </Html>
  );
};

export default Loader;
