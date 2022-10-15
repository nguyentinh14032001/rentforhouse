import Heading from "components/common/Heading";
import Footer from "layout/Footer";
import LayoutHomePage from "layout/LayoutPage";
import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import CarouselHomePage from "modules/homepage/CarouselHomePage";
import HouseGrid from "modules/house/HouseGrid";
import HouseItem from "modules/house/HouseItem";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const HomePage = () => {
  const [heightSidebar, setHeightSidebar] = useState(false);
  // useEffect(() => {
  //   const footer = document.querySelector(".footer");
  //   const fixNav = () => {

  //     if (footer) {
  //       setHeightSidebar(window.scrollY = footer?.offsetHeight);
  //     }
  //   };
  //   window.addEventListener("scroll", fixNav);
  // }, [navActive]);
  // console.log();
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <LayoutHomePage>
          <div className="w-full rounded-3xl bg-slate-100">
            <CarouselHomePage></CarouselHomePage>
          </div>
          <Heading>Phổ biến</Heading>
          <HouseGrid>
            {Array(4)
              .fill(0)
              .map((item) => (
                <HouseItem key={v4()}></HouseItem>
              ))}
          </HouseGrid>
        </LayoutHomePage>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default HomePage;
