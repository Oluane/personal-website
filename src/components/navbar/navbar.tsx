import React from "react";

import { container, overlay, activated } from "./navbar.module.scss";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className={container}>
        <button
          type="button"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <span className={isNavOpen ? activated : ""} />
          <span className={isNavOpen ? activated : ""} />
          <span className={isNavOpen ? activated : ""} />
        </button>
        <nav className={isNavOpen ? activated : ""}>
          <ul className={isNavOpen ? activated : ""}>
            <li
              className={`mb-16 ${isNavOpen ? activated : ""}`}
              onClick={() => setIsNavOpen(false)}
            >
              <a href="#">ABOUT</a>
            </li>
            <li
              className={isNavOpen ? activated : ""}
              onClick={() => setIsNavOpen(false)}
            >
              <a href="#">SKILLS</a>
            </li>
            <li
              className={isNavOpen ? activated : ""}
              onClick={() => setIsNavOpen(false)}
            >
              <a href="#projects">PROJECTS</a>
            </li>
            {/* <li className="">
              <a href="#">RANDOM</a>
            </li> */}
          </ul>
        </nav>
      </div>
      {isNavOpen ? (
        <div className={overlay} onClick={() => setIsNavOpen(false)} />
      ) : null}
    </>
  );
};

export { Navbar };
