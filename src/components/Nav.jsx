import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="nav-mark">
        Ananya Singh
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
