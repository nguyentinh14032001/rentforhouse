import React from "react";
import { Link } from "react-router-dom";

import Header from "layout/Header";
import Heading from "components/common/Heading";
import SpecifiedUserHouse from "components/yourhousepage/SpecifiedUserHouse";
import Footer from "layout/Footer";

const YourHousePage = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="mx-[15vw] pt-[10vh]">
        <div className="mb-10 flex items-center justify-between rounded-3xl bg-lite py-8 px-10 ">
          <div className="flex items-start gap-x-6">
            <div className="flex-1">
              <h1 className="mb-2 text-[22px] font-semibold">New house</h1>
              <p className="mb-2 text-sm text-text-3">
                Bạn muốn bán nhà? Chúng tôi sẽ giúp bạn
              </p>
              <a href="/" className="text-sm text-primary">
                Need any more? Learn more...
              </a>
            </div>
          </div>
          <Link
            to="/sell-house"
            className="rounded-xl bg-[#2ff06e] px-4 py-3 font-bold text-white hover:opacity-80"
          >
            Đăng bài
          </Link>
        </div>

        <Heading number={4}>Your House</Heading>
        <SpecifiedUserHouse />
      </div>
      <Footer></Footer>
    </>
  );
};

export default YourHousePage;
