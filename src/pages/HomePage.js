import Heading from "components/common/Heading";
import LayoutHomePage from "layout/LayoutHomePage";
import CarouselHomePage from "modules/homepage/CarouselHomePage";
import HouseGrid from "modules/house/HouseGrid";
import HouseItem from "modules/house/HouseItem";
import React from "react";
import { v4 } from "uuid";

const HomePage = () => {
  return (
    <LayoutHomePage>
      <div className="w-full bg-slate-100 rounded-3xl">
        <CarouselHomePage></CarouselHomePage>
      </div>
      <Heading>Phổ biến</Heading>
      <HouseGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <HouseItem key={v4()}></HouseItem>
          ))}
      </HouseGrid>
    </LayoutHomePage>
  );
};

export default HomePage;
