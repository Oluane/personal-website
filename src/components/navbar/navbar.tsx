import React from "react";

import { menuIcon, activated, menuTransition } from "./navbar.module.css";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className="fixed top-10 right-10 z-10">
        <button
          type="button"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          className="w-10 h-10 relative z-10"
        >
          <span className={`${menuIcon} ${isNavOpen ? activated : ""}`} />
          <span className={`${menuIcon} ${isNavOpen ? activated : ""}`} />
          <span className={`${menuIcon} ${isNavOpen ? activated : ""}`} />
        </button>
        <nav
          className={`absolute -right-40 rounded-full bg-eigengrau shadow-menu-decorators ${
            isNavOpen ? "-top-28 w-160 h-160" : "-top-40 w-0 h-0 shadow-none"
          } ${menuTransition}`}
        >
          <ul
            className={`text-gray-100 w-4/5 font-megrim text-right text-3xl pr-24 pt-48 ${
              isNavOpen ? `opacity-100 ${activated}` : "opacity-0"
            }`}
          >
            <li className={`mb-16 ${isNavOpen ? activated : ""}`}>
              <a href="#">ABOUT</a>
            </li>
            <li className={`mb-16 relative ${isNavOpen ? activated : ""}`}>
              <a href="#">SKILLS</a>
            </li>
            <li className={`mb-16 relative ${isNavOpen ? activated : ""}`}>
              <a href="#">PROJECTS</a>
            </li>
            <li className="">
              <a href="#">RANDOM</a>
            </li>
          </ul>
        </nav>
      </div>
      {isNavOpen ? (
        <div
          className="w-screen h-screen bg-transparent absolute"
          onClick={() => setIsNavOpen(false)}
        />
      ) : null}
    </>
  );
};

export { Navbar };
