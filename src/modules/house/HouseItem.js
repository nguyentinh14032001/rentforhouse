import React from "react";
import CategoryHouse from "./part/CategoryHouse";
import HouseImage from "./part/HouseImage";
import HouseMeta from "./part/HouseMeta";
import HouseSeller from "./part/HouseSeller";
import HouseTitle from "./part/HouseTitle";

import { Button } from "components/button";

const HouseItem = ({ onClick = {}, house }) => {
  console.log("house: ", house);
  return (
    <div onClick={onClick} className="flex w-full max-w-[1048px] items-center">
      <HouseImage
        className="h-[300px] w-[400px]"
        image={house?.image}
      ></HouseImage>
      <div className="ml-[20px] max-w-[435px] flex-1">
        <CategoryHouse text={house?.houseType?.name}></CategoryHouse>
        <HouseTitle
          name={house?.name}
          className="text-xl font-bold"
        ></HouseTitle>

        <HouseMeta
          size="big"
          price={house?.price}
          address={house?.address}
          view={house?.view}
        ></HouseMeta>
        <HouseSeller
          className="mb-[8px]"
          image={house?.user?.image}
          seller={`${house?.user?.lastName} ${house?.user?.firstName}`}
          phone={`${house?.user?.phone}`}
        ></HouseSeller>
        {/* <Button kind="ghost">Ẩn bài viết</Button> */}
      </div>
    </div>
  );
};

export default HouseItem;
