import React from "react";

const Heading = ({ children, className = "", number=null }) => {
  return (
    <h2 className={`mb-5 text-lg font-semibold text-text-1 ${className}"`}>
      {children}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

export default Heading;
