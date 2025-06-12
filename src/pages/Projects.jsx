import "./Projects.css";

const projects = [
  {
    name: "DetectionofAnomalies",
    desc: "Real-time anomaly-detection system that uses ML to monitor CPU, memory, disk I/O, and network traffic—alerting on system deviations instantly.",
    url: "https://github.com/ananyasinghz/DetectionofAnomalies",
    color: "#00f5d4",
  },
  {
    name: "newsit",
    desc: "A Next.js-based news aggregator platform featuring responsive UI, dynamic routing, and server-side rendering for fast content delivery.",
    url: "https://github.com/ananyasinghz/newsit",
    color: "#ff6f91",
  },
  {
    name: "createyourQR",
    desc: "Next.js QR-code generator app—type any URL or text, instantly get a downloadable QR code, with clean UX and live preview.",
    url: "https://github.com/ananyasinghz/createyourQR",
    color: "#845ec2",
  },
  {
    name: "ECOHARVEST",
    desc: "A full-stack Food-Waste Reduction Platform with authentication, donation/request flows, inventory tracking, and notifications to connect donors with recipients.",
    url: "https://github.com/ananyasinghz/EcoHarvest",
    color: "#ffc75f",
  },
  {
    name: "V-NEWS",
    desc: "College-centric news & events platform: covers club recruits, exam schedules, events, and announcements in one dynamic Next.js site.",
    url: "https://github.com/ananyasinghz/VNEWS",
    color: "#0081cf",
  },
  {
    name: "Bail Reckoner",
    desc: "A Legal Decision Support Tool built for the Ministry of Law & Justice—features bail eligibility checker, case-law refs, and AI-powered suggestions.",
    url: "https://github.com/ananyasinghz/Bail-Reckoner",
    color: "#ff9671",
  },
  {
    name: "Pacman Clone",
    desc: "Classic Pac‑Man clone coded purely in JavaScript—features responsive controls, maze logic, ghost AI movement, and score tracking.",
    url: "https://github.com/ananyasinghz/pacman",
    color: "#00c9a7",
  },
  {
    name: "Fresh to Home",
    desc: "An e‑commerce platform built with React frontend and Vendure backend—supports product listings, cart flow, and checkout integration.",
    url: "https://github.com/ananyasinghz/fresh-to-home",
    color: "#f9f871",
  },
  {
    name: "Knowledge Graph",
    desc: "Built a Neo4j‑backed knowledge graph with embedded nodes—useful for semantic search, relationship mapping, and visual data querying.",
    url: "https://github.com/ananyasinghz/Neo4j-KnowledgeGraph",
    color: "#c34a36",
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="cards-grid">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            style={{ borderTop: `4px solid ${p.color}` }}
          >
            <h3 style={{ color: p.color }}>{p.name}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
