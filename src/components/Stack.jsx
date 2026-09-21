import { stackGroups } from "../data/projects";
import "./Stack.css";

export default function Stack() {
  return (
    <section className="section stack" id="stack" aria-label="Technical stack">
      <p className="section-label">Stack</p>
      <h2 className="section-title">Systems, not icon salads</h2>
      <div className="stack-grid">
        {stackGroups.map((group) => (
          <div key={group.title} className="stack-group">
            <h3>{group.title}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
