import React from "react";

const HouseTitle = ({
  name = "Hưng Thịnh Land",
  className = "font-semibold",
}) => {
  return (
    <h3 className={`mb-2 ${className}  font-semibold text-text-1`}>{name}</h3>
  );
};

export default HouseTitle;
