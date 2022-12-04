import React from "react";

import Sidebar from "./Sidebar";

const BackgroundLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="col-span-10 col-start-3 flex flex-col">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
