import React from "react";
import LayoutHomePage from "./DashBoardPage";
import Overview from "components/detailpage/Overview";
import DetailInfo from "components/detailpage/DetailInfo";
import SellerInfo from "components/detailpage/SellerInfo";
import Comments from "components/detailpage/Comments";
import SimilarPlaces from "components/detailpage/SimilarPlaces";
import Footer from "layout/Footer";

const DetailPage = () => {
  return (
    <div>
      <LayoutHomePage />
      <Overview />
      <DetailInfo />
      <SellerInfo />
      <Comments />
      <SimilarPlaces />
      <Footer />
    </div>
  );
};

export default DetailPage;
