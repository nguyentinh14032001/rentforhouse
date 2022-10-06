import React from "react";

const LayoutPage = ({ children }) => {
  return (
    <div className="min-h-screen   pl-[7vw] pr-6">
      {/* <div className="overlay fixed inset-0 z-30 bg-black bg-opacity-10"> </div> */}
       <div className=""> {children}</div>
    </div>
  );
};

export default LayoutPage;
