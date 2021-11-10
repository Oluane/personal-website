import React from "react";

import placeholder from "./placeholder.jpg";
import {
  section,
  container,
  projects,
  inView,
} from "@src/components/projects-section/projects-section.module.scss";
import { useIntersectionObserver } from "@src/utils/observer";

const ProjectsSection: React.FC = () => {
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  });

  return (
    <section className={section} id="projects" ref={containerRef}>
      <h2 className={isVisible ? inView : ""}>Projects</h2>
      <div className={container}>
        <div className={projects}>
          <img src={placeholder} alt="" />
        </div>
        <div className={projects}>
          <img src={placeholder} alt="" />
        </div>
        <div className={projects}>
          <img src={placeholder} alt="" />
        </div>
        <div className={projects}>
          <img src={placeholder} alt="" />
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };
