import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import LayoutHomePage from "layout/LayoutPage";
import Sort from "components/discoverpage/Sort";
import HousesList from "components/discoverpage/HousesList";
import Footer from "layout/Footer";
import GLPagination from "layout/GLPagination";
import { baseURL } from "api/axios";

const DiscoverPage = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  const [houses, setHouses] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get(`${baseURL}/api/houses/status/true`, {
            params: {
              limit: 10,
              page: page,
            },
            headers: {
              Authorization: userData.access_token,
            },
          })
          .then((res) => {
            setPages(res.data.data);
            setHouses(res.data.data.houses);
            console.log(res.data.data);
          });
      } catch (error) {}
    };
    fetchApi();
  }, [page]);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <LayoutHomePage>
          {/* <Sort /> */}
          <HousesList houses={houses} />
          <GLPagination pages={pages} setPage={setPage} />
        </LayoutHomePage>
      </div>
    </>
  );
};

export default DiscoverPage;
