import React from "react";

import { container } from "@src/components/projects-section/projects-section.module.scss";

const ProjectsSection: React.FC = () => {
  return (
    <section className={container}>
      <h2 className={`font-megrim text-6xl text-eigengrau`}>Projects</h2>
    </section>
  );
};

export { ProjectsSection };
