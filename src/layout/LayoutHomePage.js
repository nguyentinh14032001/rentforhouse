import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const LayoutHomePage = ({ children }) => {
  return (
    <div className="min-h-screen bg-lite py-10 px-[52px]">
      {/* <div className="overlay fixed inset-0 z-30 bg-black bg-opacity-10"> </div> */}
        <Navbar></Navbar>
        <div className="lg:flex block items-start gap-x-10">
          <Sidebar></Sidebar>
          
          <div className="flex-1">{children}</div>
        </div>
    </div>
  );
};

export default LayoutHomePage;
