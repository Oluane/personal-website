import React from "react";

import { sectionTitle } from "@src/components/projects-section/projects-section.module.css";

const ProjectsSection: React.FC = () => {
  return (
    <section className="h-screen w-screen bg-pink-900">
      <h2 className={`font-megrim text-6xl text-eigengrau ${sectionTitle}`}>
        Projects
      </h2>
    </section>
  );
};

export { ProjectsSection };
