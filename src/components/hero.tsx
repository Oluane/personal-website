import React from "react";

import { starsSmall, starsMedium } from "./hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-radial-ellipse-b from-lighter-eigengrau to-eigengrau">
      <div className={starsSmall}></div>
      <div className={starsMedium}></div>
    </div>
  );
};

export { Hero };
