import React, { useEffect, useState } from "react";

import Overview from "components/detailpage/Overview";
import DetailInfo from "components/detailpage/DetailInfo";
import SellerInfo from "components/detailpage/SellerInfo";
import Comments from "components/detailpage/Comments";
import SimilarPlaces from "components/detailpage/SimilarPlaces";
import Footer from "layout/Footer";
import LayoutPage from "layout/LayoutPage";
import Sidebar from "layout/Sidebar";
import Navbar from "layout/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "api/axios";

const DetailPage = () => {
  const [house, setHouse] = useState({});

  const { id } = useParams();
  const idHouse = Number(id);
  console.log(idHouse);
  useEffect(() => {
    async function fetchData() {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/houses/${idHouse}`,
        })
          .then(function (response) {
            setHouse(response?.data);
            console.log(response.data.data);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [idHouse]);
  console.log(house);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-start gap-x-6">
        <Sidebar></Sidebar>
        <LayoutPage>
          <Overview data={house?.data} />
          <DetailInfo data={house?.data} />
          <SellerInfo data={house?.data} />
          {/* <Comments /> */}
          {/* <SimilarPlaces /> */}
        </LayoutPage>
      </div>

      <Footer />
    </div>
  );
};

export default DetailPage;
