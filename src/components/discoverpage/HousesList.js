import React from "react";
import HouseListItem from "./HouseListItem";

const HousesList = ({ products }) => {
  return (
    <div>
      {products &&
        products.map((item) => <HouseListItem key={item.id} products={item} />)}
    </div>
  );
};

export default HousesList;
