import React from "react";
import CategoryHouse from "./part/CategoryHouse";
import HouseImage from "./part/HouseImage";
import HouseMeta from "./part/HouseMeta";
import HouseSeller from "./part/HouseSeller";
import HouseTitle from "./part/HouseTitle";

const HouseItem = () => {
  return (
    <div>
     <HouseImage></HouseImage>
      <div className="py-4">
      <CategoryHouse></CategoryHouse>
      <HouseTitle></HouseTitle>
        <HouseMeta></HouseMeta>
       <HouseSeller></HouseSeller>
      </div>
    </div>
  );
};

export default HouseItem;
