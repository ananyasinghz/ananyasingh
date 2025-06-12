import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";

function LaptopScene() {
  const { scene } = useGLTF("/models/3d_clipart_webdev.glb");
  return <primitive object={scene} scale={1.2} position={[0, -1.2, -1.5]} />;
}

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="full-screen-container">
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1.5} />
        <Suspense fallback={null}>
          <LaptopScene />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="overlay-header"
      >
        <h1>Hi, I'm Ananya 👋</h1>
        <p>Creative Developer | Tech Enthusiast | Lifelong Learner</p>
        <div className="socials">
          <a href="https://github.com/ananyasinghz" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ananya-singh-21853628a"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <button className="mini-button" onClick={() => navigate("/projects")}>
          See My Projects
        </button>
      </motion.header>
    </div>
  );
}
