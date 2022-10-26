import React from "react";
import CategoryHouse from "./CategoryHouse";
import HouseDesc from "./HouseDesc";
import HouseImage from "./HouseImage";
import HouseMeta from "./HouseMeta";
import HouseTitle from "./HouseTitle";

const YourHouse = () => {
  return (
    <div className="flex w-full min-w-[1048px] items-center gap-x-8">
      <HouseImage className="h-[266px] flex-1"></HouseImage>
      <div className="max-w-[435px] flex-1">
        <CategoryHouse text="Căn hộ cao cấp" className="mb-4"></CategoryHouse>
        <HouseTitle className="font-bold"></HouseTitle>
        <HouseDesc className="mb-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          commodi aperiam alias magnam eos molestiae quam enim corporis voluptas
          similique. Nihil beatae alias maiores blanditiis tempore veritatis
          iste ullam repellat?
        </HouseDesc>
        <HouseMeta></HouseMeta>
      </div>
    </div>
  );
};

export default YourHouse;
