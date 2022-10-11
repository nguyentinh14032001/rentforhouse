import { IconHouse } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CategoryHouse = ({text="Căn hộ cao cấp"}) => {
  return (
    <div>
      <Link
        to={"/"}
        className="mb-4 flex items-center gap-x-3 text-sm font-medium text-text-3"
      >
        <IconHouse className="h-5 w-5"></IconHouse>
        <span className="block">{text}</span>
      </Link>
    </div>
  );
};

export default CategoryHouse;
