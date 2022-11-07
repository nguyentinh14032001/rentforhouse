import React, { createContext } from "react";
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
import housesData from "../assets/data/houses.json";
export const DetailContext = createContext();

const DetailPage = () => {
  const { id } = useParams();
  const newId = id.replace(":", "");
  const newData = housesData.find((item) => item.id == newId);
  const value = { newData, newId };
  return (
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
  );
};

export default DetailPage;
