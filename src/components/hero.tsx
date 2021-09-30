import React from "react";

import classes from "./hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-radial-ellipse-b from-lighter-eigengrau to-eigengrau">
      <div className={classes.starsSmall}></div>
      <div className={classes.starsMedium}></div>
    </div>
  );
};

export { Hero };
