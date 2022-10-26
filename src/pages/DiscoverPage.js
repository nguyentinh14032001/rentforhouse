import React, { useState } from "react";
import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import LayoutHomePage from "layout/LayoutPage";
import Sort from "components/discoverpage/Sort";
import HousesList from "components/discoverpage/HousesList";
import DiscoverPagination from "components/discoverpage/DiscoverPagination";
import Footer from "layout/Footer";

const DiscoverPage = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <LayoutHomePage>
          <Sort />
          <HousesList products={products} />
          <DiscoverPagination setProducts={(p) => setProducts(p)} />
        </LayoutHomePage>
      </div>
    </>
  );
};

export default DiscoverPage;
