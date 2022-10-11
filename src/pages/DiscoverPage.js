import React from "react";
import Navbar from "layout/Navbar";
import Search from "components/discoverpage/Search";
import Filter from "components/discoverpage/Filter";
import Footer from "layout/Footer";

const DiscoverPage = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Search />
        <Filter />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default DiscoverPage;
