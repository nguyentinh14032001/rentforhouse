import React from "react";
import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import LayoutHomePage from "layout/LayoutPage";
import Sort from "components/discoverpage/Sort";
import HousesList from "components/discoverpage/HousesList";
import Footer from "layout/Footer";

const DiscoverPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <LayoutHomePage>
          <Sort />
          <HousesList />
        </LayoutHomePage>
      </div>
    </>
  );
};

export default DiscoverPage;
