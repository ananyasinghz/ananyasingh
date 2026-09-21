import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { featuredProjects, FILTERS } from "../data/projects";
import "./FeaturedWork.css";

const MotionArticle = motion.article;

export default function FeaturedWork() {
  const [filter, setFilter] = useState("All");
  const reduceMotion = useReducedMotion();

  const visible =
    filter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.tags.includes(filter));

  return (
    <section className="section featured" id="work">
      <p className="section-label">Featured systems</p>
      <h2 className="section-title">Work worth retrieving</h2>

      <div className="query-bar" role="tablist" aria-label="Filter by theme">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`query-chip${filter === f ? " is-active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="featured-list">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <MotionArticle
              key={project.id}
              className="featured-item"
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="featured-head">
                <h3>{project.name}</h3>
                <span className="featured-tags">{project.tags.join(" · ")}</span>
              </div>
              <dl className="featured-meta">
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{project.approach}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.stack.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Metric</dt>
                  <dd className="featured-metric">{project.metric}</dd>
                </div>
              </dl>
              <a
                className="featured-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            </MotionArticle>
          ))}
        </AnimatePresence>
      </div>

      <p className="featured-archive">
        Looking for earlier experiments?{" "}
        <Link to="/projects">Browse the archive</Link>
      </p>
    </section>
  );
}
