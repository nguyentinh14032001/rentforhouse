

import React from "react";
import Navbar from "./Navbar";

const LayoutDashboard = ({ children }) => {
  return <div className="bg-lite py-10 px-[52px]">
  <Navbar></Navbar>
  {children}</div>;
};

export default LayoutDashboard;
