import Heading from "components/common/Heading";
import LayoutHomePage from "layout/LayoutHomePage";
import HouseGrid from "modules/house/HouseGrid";
import HouseItem from "modules/house/HouseItem";
import React from "react";
import {v4} from "uuid"

const HomePage = () => {
  return (
    <LayoutHomePage>
    <Heading number={4}>Dành cho bạn </Heading>
    <Heading>Phổ biến</Heading>
    <HouseGrid>
      {Array(4).fill(0).map((item)=>(<HouseItem key={v4()}></HouseItem>))}
    </HouseGrid>
    </LayoutHomePage>
  );
};

export default HomePage;
