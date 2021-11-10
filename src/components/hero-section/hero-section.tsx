import React from "react";

import {
  container,
  wipWrapper,
  dotsWrapper,
  dots,
} from "@src/components/hero-section/hero-section.module.scss";

const HeroSection: React.FC = () => {
  return (
    <div className={container}>
      <div className={wipWrapper}>
        <p>Work in progress</p>
        <div className={dotsWrapper}>
          <span className={dots} />
          <span className={dots} />
          <span className={dots} />
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
