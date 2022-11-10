import React from "react";
import HouseListItem from "./HouseListItem";

const HousesList = ({ products }) => {
  return (
    <div>
      {products &&
        products.map((item) => <HouseListItem key={item.id} product={item} />)}
    </div>
  );
};

export default HousesList;
