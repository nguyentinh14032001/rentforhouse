import React from "react";

const HouseTitle = ({
  name = "Hưng Thịnh Land",
  className = "font-semibold",
}) => {
  return (
    <h3 className={`${className} mb-4 font-semibold text-text-1`}>{name}</h3>
  );
};

export default HouseTitle;
