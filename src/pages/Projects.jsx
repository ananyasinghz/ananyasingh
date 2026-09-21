import { Link } from "react-router-dom";
import { archiveProjects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="archive-page">
      <header className="archive-header">
        <Link to="/" className="archive-back">
          ← Home
        </Link>
        <h1>Earlier work</h1>
        <p>Older experiments and campus projects — kept for the trail, not the pitch.</p>
      </header>
      <ul className="archive-list">
        {archiveProjects.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
            <span>{p.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
