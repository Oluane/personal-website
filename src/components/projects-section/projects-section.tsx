import React from "react";

import { container } from "@src/components/projects-section/projects-section.module.scss";

const ProjectsSection: React.FC = () => {
  return (
    <section className={container} id="projects">
      <h2>Projects</h2>
    </section>
  );
};

export { ProjectsSection };
