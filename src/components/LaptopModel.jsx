import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

export default function LaptopModel() {
  const { scene } = useGLTF("/models/3d_clipart_webdev.glb");
  return (
    <Canvas className="laptop-canvas">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1.5} />
      <Suspense fallback={null}>
        <primitive object={scene} scale={2} position={[0, -1.2, 0]} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
