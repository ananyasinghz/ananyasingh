import { LINKS } from "../data/projects";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let&apos;s connect</h2>
      <p className="contact-copy">
        Open to software, data, and AI roles where systems and measurable outcomes
        matter.
      </p>
      <div className="contact-links">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span className="contact-sep" aria-hidden="true">
          ·
        </span>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <p className="contact-foot">© {new Date().getFullYear()} Ananya Singh</p>
    </section>
  );
}
