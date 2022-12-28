import React, { useEffect, useState } from "react";

import axios from "axios";
import { baseURL } from "api/axios";
import UserHouseItem from "./UserHouseItem";
import GLPagination from "layout/GLPagination";
const SpecifiedUserHouse = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [houses, setHouses] = useState();
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get(`${baseURL}/api/houses/user`, {
            params: {
              id: 2,
              limit: 4,
              page: page,
            },
            headers: {
              Authorization: userData.access_token,
            },
          })
          .then((res) => {
            setHouses(res?.data?.data?.houses);
            setPages(res?.data?.data);
            setIsChange(false);
          });
      } catch (error) {}
    };
    fetchApi();
  }, [page, isChange == true]);
  console.log(isChange);
  return (
    <>
      {houses &&
        houses.map((house) => (
          <UserHouseItem
            key={house?.id}
            house={house}
            userData={userData}
            setIsChange={setIsChange}
          />
        ))}
      <GLPagination pages={pages} setPage={setPage} />
    </>
  );
};

export default SpecifiedUserHouse;
