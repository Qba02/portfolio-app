import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("./models/koperta.glb");
  return <primitive object={scene} position={[0, -0.25, 0]} scale={1} rotation-x={1.57} />;
};

const FixedLight = () => {
  return (
    <>
      <pointLight position={[-1.2, -1, 1.2]} intensity={5} />;
      <pointLight position={[1.2, 1, -1]} intensity={4} />;
    </>
  );
};

const EnvelopeCanvas = () => {
  const isLowPerformance = window.devicePixelRatio < 2;

  return (
    <Canvas
      shadows={false}
      frameloop="demand"
      camera={{ position: [2, 3.4, 2], fov: 60 }}
      dpr={isLowPerformance ? 1 : [1, 2]}
    >
      <FixedLight />
      <Model />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={2}
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
};

export default EnvelopeCanvas;
