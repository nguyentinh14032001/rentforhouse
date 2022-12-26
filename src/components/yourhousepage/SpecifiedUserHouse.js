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
          });
      } catch (error) {}
    };
    fetchApi();
  }, [page]);

  return (
    <>
      {houses &&
        houses.map((house) => (
          <UserHouseItem key={house?.id} house={house} userData={userData} />
        ))}
      <GLPagination pages={pages} setPage={setPage} />
    </>
  );
};

export default SpecifiedUserHouse;
