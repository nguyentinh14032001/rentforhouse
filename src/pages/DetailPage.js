import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";

import { baseURL } from "api/axios";
import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import LayoutPage from "layout/LayoutPage";
import Overview from "components/detailpage/Overview";
import DetailInfo from "components/detailpage/DetailInfo";
import SellerInfo from "components/detailpage/SellerInfo";
import Comments from "components/detailpage/Comments";
import SimilarPlaces from "components/detailpage/SimilarPlaces";
import Footer from "layout/Footer";

export const DetailContext = createContext();
const DetailPage = () => {
  const [house, setHouse] = useState({});
  const { id } = useParams();
  const idHouse = Number(id);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/houses/${idHouse}`,
        })
          .then(function (response) {
            setHouse(response?.data);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [idHouse]);
  const houses = house.data;
  const value = { houses };

  return (
    <>
      <DetailContext.Provider value={value}>
        <Navbar></Navbar>
        <div className="flex items-start gap-x-6">
          <Sidebar></Sidebar>
          <LayoutPage>
            <Overview />
            <DetailInfo />
            <SellerInfo />
            <Comments />
            {/* <SimilarPlaces /> */}
          </LayoutPage>
        </div>
        <Footer />
      </DetailContext.Provider>
    </>
  );
};

export default DetailPage;
