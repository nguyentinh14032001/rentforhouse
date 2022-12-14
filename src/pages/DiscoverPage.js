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
import BackgroundLayout from "layout/BackgroundLayout";

const DiscoverPage = () => {
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
          })
          .then((res) => {
            setPages(res.data.data);
            setHouses(res.data.data.houses);
          });
      } catch (error) {}
    };
    fetchApi();
  }, [page]);
  console.log(houses);
  return (
    <>
      <Navbar />
      <BackgroundLayout>
        {/* <Sort /> */}
        <HousesList houses={houses} />
        <GLPagination pages={pages} setPage={setPage} />
      </BackgroundLayout>
      <Footer />
    </>
  );
};

export default DiscoverPage;
