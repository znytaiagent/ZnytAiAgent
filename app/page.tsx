import React from "react";

import { BorderBeam } from "@/components/ui";

import GraphComponent from "./_components";
import LoginButton from "./_components/login-button";

//#74ff71

const Graph = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen pt-16 pb-4">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="text-4xl font-bold text-[#74ff71]">
              Meet ZnytAi Agent
            </h1>
            <p className="">
              A modular network of interoperable DeFi agents built for decision
              making.
            </p>
            <LoginButton />
          </div>
          <div className="w-full flex-1 max-w-2xl rounded-md border border-neutral-200 dark:border-neutral-700 relative">
            <GraphComponent />
            <BorderBeam />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
