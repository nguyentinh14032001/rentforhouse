import React from "react";

import Overview from "components/detailpage/Overview";
import DetailInfo from "components/detailpage/DetailInfo";
import SellerInfo from "components/detailpage/SellerInfo";
import Comments from "components/detailpage/Comments";
import SimilarPlaces from "components/detailpage/SimilarPlaces";
import Footer from "layout/Footer";
import LayoutPage from "layout/LayoutPage";
import Sidebar from "layout/Sidebar";
import Navbar from "layout/Navbar";

const DetailPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-start gap-x-6">
        <Sidebar></Sidebar>
        <LayoutPage>
          <Overview />
          <DetailInfo />
          <SellerInfo />
          {/* <Comments /> */}
          {/* <SimilarPlaces /> */}
        </LayoutPage>
      </div>

      <Footer />
    </div>
  );
};

export default DetailPage;
