import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../data/projects";
import "./Experience.css";

const MotionLi = motion.li;

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section experience" id="experience">
      <p className="section-label">Experience</p>
      <h2 className="section-title">Where the systems got real</h2>
      <ol className="timeline">
        {experience.map((job, i) => (
          <MotionLi
            key={job.org + job.role}
            className="timeline-item"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="timeline-meta">
              <span className="timeline-period">{job.period}</span>
            </div>
            <div className="timeline-body">
              <h3>
                {job.role}
                <span className="timeline-org"> — {job.org}</span>
              </h3>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </MotionLi>
        ))}
      </ol>
    </section>
  );
}
