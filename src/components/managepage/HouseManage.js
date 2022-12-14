import React, { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../pages/ManagePage";

import HouseList from "./HouseList";

const HouseManage = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

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
