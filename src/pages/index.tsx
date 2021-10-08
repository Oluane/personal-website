import "@src/styles/global.css";
import "@fontsource/megrim";
import "@fontsource/lato";

import React from "react";

import { Hero } from "@src/components/hero/hero";
// import { Navbar } from "@src/components/navbar/navbar";
// import { SecondPart } from "@src/components/second-part";

const IndexPage: React.FC = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      {/* <SecondPart /> */}
    </main>
  );
};

export default IndexPage;
