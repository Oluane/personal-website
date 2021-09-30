import React from "react";

import { Hero } from "@src/components/hero";
import { SecondPart } from "@src/components/second-part";

import "@src/styles/global.css";

const IndexPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <SecondPart />
    </main>
  );
};

export default IndexPage;
