import React, { useEffect, useState } from "react";
import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import LayoutHomePage from "layout/LayoutPage";
import Sort from "components/discoverpage/Sort";
import HousesList from "components/discoverpage/HousesList";
import Footer from "layout/Footer";
import GLPagination from "layout/GLPagination";
import productApi from "api/housesApi";

const DiscoverPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { page: 3, limit: 5 };
        const response = await productApi.getAll(params);
        console.log("Fetch products successfully: ", response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <LayoutHomePage>
          <Sort />
          <HousesList products={products} />
          <GLPagination setProducts={(p) => setProducts(p)} />
        </LayoutHomePage>
      </div>
    </>
  );
};

export default DiscoverPage;
