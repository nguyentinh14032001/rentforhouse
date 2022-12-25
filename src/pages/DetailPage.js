import React, { createContext, useEffect, useState } from "react";
import Header from "layout/Header";
import DetailCarousel from "components/detailpage/DetaiCarousel";
import DetailContent from "components/detailpage/DetailContent";
import RightNavbar from "components/detailpage/RightNavbar";
import SimilarPlaces from "components/detailpage/SimilarPlaces";
import Discover from "layout/Discover";
import Footer from "layout/Footer";

import { useParams } from "react-router-dom";
// import SimpleBreadcrumbs from "../components/global-components/SimpleBreadcrumbs";
import axios from "axios";
import { baseURL } from "api/axios";

export const DetailContext = createContext();

function DetailPage() {
  const [house, setHouse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //increasing view
    async function putView() {
      try {
        await axios({
          method: "put",
          url: `${baseURL}/api/houses/viewPlus/${id}`,
        })
          .then(function (response) {})
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
          url: `${baseURL}/api/houses/${id}`,
        })
          .then(function (response) {
            setHouse(response?.data?.data);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  const value = { house, id };

  return (
    <DetailContext.Provider value={value}>
      <div className="DetailPage">
        <Header id={id} />
        {/* <SimpleBreadcrumbs title="Chi tiết nhà ở" /> */}
        <DetailCarousel />

        <div className="container">
          <div className="row">
            <DetailContent />
            <RightNavbar />
          </div>
        </div>

        {/* <SimilarPlaces id={id} /> */}
        {/* <Discover /> */}
        <Footer />
      </div>
    </DetailContext.Provider>
  );
}

export default DetailPage;
