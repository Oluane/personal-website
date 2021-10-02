import React from "react";

import { menuIcon } from "./navbar.module.css";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  return (
    <div className="bg-gray-800 bg-opacity-10 absolute -right-24 -top-24 w-60 h-60 rounded-full flex items-end pb-16 pl-16">
      <button
        type="button"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        className="w-12 h-10 relative"
      >
        <span className={menuIcon} />
      </button>
    </div>
  );
};

export { Navbar };