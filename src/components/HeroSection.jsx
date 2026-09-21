import { motion, useReducedMotion } from "framer-motion";
import { LINKS } from "../data/projects";
import "./HeroSection.css";

const MotionDiv = motion.div;

function PipelineGraphic() {
  return (
    <svg
      className="hero-pipeline"
      viewBox="0 0 800 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pipeGrad" x1="0" y1="0" x2="800" y2="0">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#d4a574" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M40 160 H200 L260 100 H380 L440 160 H600 L660 220 H760"
        stroke="url(#pipeGrad)"
        strokeWidth="2"
      />
      {[
        { x: 40, label: "Prompt" },
        { x: 230, label: "Embed" },
        { x: 410, label: "Retrieve" },
        { x: 620, label: "Answer" },
      ].map(({ x, label }) => (
        <g key={label}>
          <circle cx={x} cy={label === "Embed" ? 100 : label === "Answer" ? 220 : 160} r="6" fill="#d4a574" fillOpacity="0.7" />
          <text
            x={x}
            y={label === "Embed" ? 80 : label === "Answer" ? 250 : 140}
            textAnchor="middle"
            fill="#d4a574"
            fillOpacity="0.55"
            fontSize="12"
            fontFamily="Instrument Sans, sans-serif"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero section" id="top">
      <PipelineGraphic />
      <MotionDiv
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="hero-name">Ananya Singh</h1>
        <p className="hero-line">
          Building retrieval systems, data pipelines, and measurable ML
        </p>
        <p className="hero-support">VIT CSE · CasavaTech · IEEE</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#work">
            Featured work
          </a>
          <a
            className="btn btn-ghost"
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </MotionDiv>
    </section>
  );
}
