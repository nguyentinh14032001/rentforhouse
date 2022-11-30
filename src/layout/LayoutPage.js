import React from "react";

const LayoutPage = ({ children, setDivHeight }) => {
  return (
    <div>
      {/* <div className="overlay fixed inset-0 z-30 bg-black bg-opacity-10"> </div> */}
      <div className=""> {children}</div>
    </div>
  );
};

export default LayoutPage;
