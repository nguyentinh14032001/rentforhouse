import React, { createContext, useState } from "react";

import Header from "layout/Header";
import HomepageCarousel from "modules/homepage/HomepageCarousel";
import PopularHouses from "modules/homepage/PopularHouses";
import Footer from "layout/Footer";
export const HomeContext = createContext();

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <div className="w-full rounded-3xl bg-slate-100">
        <HomepageCarousel></HomepageCarousel>
      </div>
      <PopularHouses />
      <Footer></Footer>
    </>
  );
};

export default HomePage;
