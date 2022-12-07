import React, { useEffect, useState } from "react";
import axios from "axios";

import { baseURL } from "api/axios";
import Heading from "components/common/Heading";
import PopularHouse from "./PopularHouse";

const PopularHouses = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [houses, setHouses] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios.get(`${baseURL}/api/houses/top-5`).then((res) => {
          setHouses(res?.data?.data);
          console.log(res?.data);
        });
      } catch (error) {}
    };
    fetchApi();
  }, []);

  return (
    <div className="mb-10 mt-4">
      <Heading>Phổ biến</Heading>
      <div className="grid grid-cols-4 gap-4">
        {houses &&
          houses.map((house) => <PopularHouse key={house?.id} house={house} />)}
      </div>
    </div>
  );
};

export default PopularHouses;
