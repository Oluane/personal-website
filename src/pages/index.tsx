import "@src/styles/reset.css";
import "@src/styles/global.scss";
import "@fontsource/megrim";
import "@fontsource/lato";

import React from "react";

import { HeroSection } from "@src/components/hero-section/hero-section";
import { Layout } from "@src/components/layout/layout";
// import { ProjectsSection } from "@src/components/projects-section/projects-section";

const IndexPage: React.FC = () => {
  return (
    <main>
      <Layout>
        <HeroSection />
        {/* <ProjectsSection /> */}
      </Layout>
    </main>
  );
};

export default IndexPage;
