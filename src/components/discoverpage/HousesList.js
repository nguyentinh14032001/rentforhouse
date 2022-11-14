import React from "react";
import HouseListItem from "./HouseListItem";

const HousesList = ({ houses }) => {
  return (
    <div>
      {houses &&
        houses.map((item) => <HouseListItem key={item.id} houses={item} />)}
    </div>
  );
};

export default HousesList;
