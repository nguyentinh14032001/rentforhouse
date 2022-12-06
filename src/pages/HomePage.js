import React, { createContext, useState } from "react";

import Navbar from "layout/Navbar";
import BackgroundLayout from "layout/BackgroundLayout";
import CarouselHomePage from "modules/homepage/CarouselHomePage";
import PopularHouses from "modules/homepage/PopularHouses";
import Footer from "layout/Footer";
export const HomeContext = createContext();

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <BackgroundLayout>
        <div className="w-full rounded-3xl bg-slate-100">
          <CarouselHomePage></CarouselHomePage>
        </div>
        <PopularHouses />
      </BackgroundLayout>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
