import React from "react";
import { Link } from "react-router-dom";
import { IconHouse } from "../../../components/icons";

const CategoryHouse = ({ text = "Chung cư", className = "text-sm" }) => {
  return (
    <div>
      <Link
        to={"/"}
        className={`${className} mb-4 flex items-center gap-x-3  font-medium text-text-3`}
      >
        <IconHouse className="h-5 w-5"></IconHouse>
        <span className="block">{text}</span>
      </Link>
    </div>
  );
};

export default CategoryHouse;
