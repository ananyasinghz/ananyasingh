import { motion, useReducedMotion } from "framer-motion";
import { outcomes } from "../data/projects";
import "./Outcomes.css";

const MotionDiv = motion.div;

export default function Outcomes() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section outcomes" aria-label="Selected outcomes">
      <p className="section-label">Selected outcomes</p>
      <div className="outcomes-row">
        {outcomes.map((item, i) => (
          <MotionDiv
            key={item.label}
            className="outcome"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="outcome-value">{item.value}</span>
            <span className="outcome-label">{item.label}</span>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
