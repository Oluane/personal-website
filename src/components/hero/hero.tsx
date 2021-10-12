import React from "react";

import { wip } from "@src/components/hero/hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gradient-radial-ellipse-b from-lighter-eigengrau to-eigengrau flex">
      <div className="w-4/5 m-auto flex justify-center">
        <p className={`text-gray-100 font-megrim tracking-widest ${wip}`}>
          Work in progress
        </p>
        <div className="flex items-end ml-6 pb-3 overflow-hidden">
          <span className="w-2 h-2.5 rounded-sm bg-gray-100 mr-4" />
          <span className="w-2.5 h-2.5 rounded-sm bg-gray-100 mr-4" />
          <span className="w-2.5 h-2.5 rounded-sm bg-gray-100 mr-4" />
        </div>
      </div>
    </div>
  );
};

export { Hero };
