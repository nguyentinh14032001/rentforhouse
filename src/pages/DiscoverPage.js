import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "layout/Header";
import HousesList from "components/discoverpage/HousesList";
import Footer from "layout/Footer";
import GLPagination from "layout/GLPagination";
import { baseURL } from "api/axios";

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
              limit: 4,
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

  return (
    <>
      <Header />
      {/* <Sort /> */}
      <div className="container grid grid-cols-3">
        <HousesList houses={houses} />
        <GLPagination pages={pages} setPage={setPage} />
      </div>
      <Footer />
    </>
  );
};

export default DiscoverPage;
