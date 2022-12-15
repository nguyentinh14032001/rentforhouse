import React from "react";
import LayoutPage from "../layout/LayoutPage";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import HouseAddNew from "../modules/house/part/HouseAddNew";
import BackgroundLayout from "layout/BackgroundLayout";
import PostHouse from "components/postsellhouse/PostHouse";

const PostSellHouse = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <BackgroundLayout>
        <PostHouse />
      </BackgroundLayout> */}
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <div className="flex-1">
          <LayoutPage>
            <HouseAddNew></HouseAddNew>
          </LayoutPage>
        </div>
      </div>
    </div>
  );
};

export default PostSellHouse;
