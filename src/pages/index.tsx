import "@src/styles/reset.css";
import "@src/styles/global.scss";
import "@fontsource/megrim";
import "@fontsource/lato";

import React from "react";
import { Helmet } from "react-helmet";

import appleTouchIcon from "../images/apple-touch-icon.png";
import favicon16 from "../images/favicon-16x16.png";
import favicon32 from "../images/favicon-32x32.png";
import faviconSvg from "../images/favicon.svg";
import { HeroSection } from "@src/components/hero-section/hero-section";
import { Layout } from "@src/components/layout/layout";
// import { ProjectsSection } from "@src/components/projects-section/projects-section";

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="mask-icon" href={faviconSvg} />
      </Helmet>
      <main>
        <Layout>
          <HeroSection />
          {/* <ProjectsSection /> */}
        </Layout>
      </main>
    </>
  );
};

export default IndexPage;
