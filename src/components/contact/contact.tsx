import React from "react";

import { GithubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import {
  iconDropFilter,
  scaleHover,
} from "@src/components/contact/contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-10 h-36 flex flex-col-reverse justify-around">
      <a href="https://github.com/Oluane" target="_blank" rel="noreferrer">
        <GithubIcon className={iconDropFilter + " " + scaleHover} />
      </a>
      <a
        href="https://www.linkedin.com/in/rochepauline1/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon className={iconDropFilter + " " + scaleHover} />
      </a>
    </div>
  );
};

export { Contact };
