import React from "react";
import HouseListItem from "./HouseListItem";

const HousesList = ({ houses }) => {
  return (
    <div className="col-span-2">
      {houses &&
        houses.map((item) => <HouseListItem key={item?.id} houses={item} />)}
    </div>
  );
};

export default HousesList;
