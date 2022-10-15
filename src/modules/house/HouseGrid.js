import React from "react";

const HouseGrid = ({ children,type="default" }) => {
  if(type!== 'default') return <div className="grid grid-cols-1 gap-y-10">{children}</div>
  return <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10">{children}</div>;
};

export default HouseGrid;
