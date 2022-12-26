import React, { useEffect, useState } from "react";
import axios from "axios";

import { baseURL } from "api/axios";
import Heading from "components/common/Heading";
import PopularHouse from "./PopularHouse";

const PopularHouses = () => {
  const [houses, setHouses] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios.get(`${baseURL}/api/houses/top-6`).then((res) => {
          setHouses(res?.data?.data);
        });
      } catch (error) {}
    };
    fetchApi();
  }, []);
  console.log(houses);

  return (
    <div className="mb-10 bg-[#EBEEEF] py-4">
      <span className="mx-auto block w-fit rounded-xl bg-[#FFE4DB] px-10 py-[5px] text-center text-[13px] text-[#FF5A3C]">
        Phổ biến
      </span>
      <h1 className="my-[30px] text-center text-[30px] font-bold">
        Những căn nhà với lượt xem cao nhất
      </h1>
      <div className="mx-[15vw] grid grid-cols-3 gap-4">
        {houses &&
          houses.map((house) => <PopularHouse key={house?.id} house={house} />)}
      </div>
    </div>
  );
};

export default PopularHouses;
