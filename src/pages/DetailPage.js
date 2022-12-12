import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { baseURL } from "api/axios";
import Navbar from "layout/Navbar";
import BackgroundLayout from "layout/BackgroundLayout";
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
    //increasing view
    async function putView() {
      try {
        await axios({
          method: "put",
          url: `${baseURL}/api/houses/viewPlus/${idHouse}`,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    putView();
    //get a list of houses
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
  }, []);

  const houses = house.data;
  const value = { houses, idHouse };

  return (
    <>
      <DetailContext.Provider value={value}>
        <Navbar />
        <div className="flex items-start gap-x-6">
          <BackgroundLayout>
            <Overview />
            <DetailInfo />
            <SellerInfo />
            <Comments idHouse={idHouse} />
            {/* <SimilarPlaces /> */}
          </BackgroundLayout>
        </div>
        <Footer />
      </DetailContext.Provider>
    </>
  );
};

export default DetailPage;
