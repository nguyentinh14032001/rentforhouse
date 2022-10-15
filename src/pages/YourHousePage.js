import { Button } from "components/button";
import Heading from "components/common/Heading";
import LayoutPage from "layout/LayoutPage";
import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import HouseGrid from "modules/house/HouseGrid";
import YourHouse from "modules/house/part/YourHouse";
import React from "react";

const YourHousePage = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <LayoutPage>
          <div className="mb-10 flex items-center justify-between py-8 px-10 rounded-3xl bg-lite ">
            <div className="flex items-start gap-x-6">
              <div className="bg-secondary opacity-60 text-white flex h-14 w-14 items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="text-[22px] font-semibold mb-2">New house</h1>
                <p className="text-sm text-text-3 mb-2">Bạn muốn bán nhà? Chúng tôi sẽ giúp bạn</p>
                <a href="/" className="text-primary text-sm">
                    Need any more? Learn more...
                </a>
              </div>
            </div>
            <Button type="button" kind="ghost" className="px-8" href="/sell-house" >Đăng bài</Button>
          </div>
          <Heading number={4}>Your House</Heading>
          <HouseGrid type="secondary">
            <YourHouse></YourHouse>
            <YourHouse></YourHouse>
            <YourHouse></YourHouse>
            <YourHouse></YourHouse>
          </HouseGrid>
        </LayoutPage>
      </div>
    </>
  );
};

export default YourHousePage;
