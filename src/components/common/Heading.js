import React from "react";

const Heading = ({ onClick = {}, children, className = "", number = null }) => {
  return (
    <h2 className={`my-3  ${className} text-lg font-semibold text-text-1`}>
      {children}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

export default Heading;
