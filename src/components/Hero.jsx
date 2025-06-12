import LaptopModel from "./LaptopModel";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-wrapper">
      <div className="hero-text">
        <h1>Hi, I'm Ananya 🚀</h1>
        <p>Full Stack Developer | Space Tech Enthusiast</p>
        <div className="links">
          <a href="https://github.com/ananyasinghz" target="_blank">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ananya-singh-21853628a"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <button className="cta-button" onClick={() => navigate("/projects")}>
          See My Projects
        </button>
      </div>
      <div className="hero-3d">
        <LaptopModel />
      </div>
    </div>
  );
}
