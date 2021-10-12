import "@src/styles/global.css";
import "@fontsource/megrim";
import "@fontsource/lato";

import React from "react";

import { Hero } from "@src/components/hero/hero";
import { Layout } from "@src/components/layout/layout";
// import { SecondPart } from "@src/components/second-part";

const IndexPage: React.FC = () => {
  return (
    <main className="h-screen overflow-y-hidden ">
      <Layout>
        <Hero />
        {/* <SecondPart /> */}
      </Layout>
    </main>
  );
};

export default IndexPage;
