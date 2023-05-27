import React from "react";
import { Link } from "react-router-dom";
import { IconHouse } from "../../../components/icons";

const CategoryHouse = ({ text = "Chung cư", className = "text-sm" }) => {
  return (
    <div>
      <Link
        to={"/"}
        className={`${className} mb-[16px] flex items-center gap-x-3  font-medium text-text-3`}
      >
        <IconHouse className="h-[20px] w-[20px]"></IconHouse>
        <span className="block">{text}</span>
      </Link>
    </div>
  );
};

export default CategoryHouse;
