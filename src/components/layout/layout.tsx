import React from "react";

import {
  container,
  horizontalWrapper,
} from "@src/components/layout/layout.module.css";
// import { Navbar } from "@src/components/navbar/navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className={container}>
        <div className={horizontalWrapper}>{children}</div>
      </div>
    </div>
  );
};

export { Layout };
