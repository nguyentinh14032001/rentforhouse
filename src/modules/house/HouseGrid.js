import React from "react";

const HouseGrid = ({ children }) => {
  return <div className="grid grid-cols-4 gap-x-10">{children}</div>;
};

export default HouseGrid;
