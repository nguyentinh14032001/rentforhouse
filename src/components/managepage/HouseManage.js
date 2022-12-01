import React, { useContext } from "react";

import HouseList from "./HouseList";
import { DashboardContext } from "pages/ManagePage";

const HouseManage = () => {
  const value = useContext(DashboardContext);
  const { houses, setIsChange } = value;
  return (
    <>
      <div className="">
        {houses &&
          houses.map((item) => (
            <HouseList key={item?.id} house={item} setIsChange={setIsChange} />
          ))}
      </div>
    </>
  );
};

export default HouseManage;
