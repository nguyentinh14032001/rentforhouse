import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "layout/Navbar";
import BackgroundLayout from "layout/BackgroundLayout";
import CarouselHomePage from "modules/homepage/CarouselHomePage";
import PopularHouses from "modules/homepage/PopularHouses";
import Footer from "layout/Footer";

const HomePage = () => {
  const [divHeight, setDivHeight] = useState(0);
  const [isFixed, setIsFixed] = useState();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const homePageref = useRef(null);
  useEffect(() => {
    console.log(divHeight);
  }, []);

  useEffect(() => {
    console.log(window.height);
  }, []);

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

      <BackgroundLayout>
        <div className="w-full rounded-3xl bg-slate-100">
          <CarouselHomePage></CarouselHomePage>
        </div>
        <PopularHouses />
      </BackgroundLayout>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
