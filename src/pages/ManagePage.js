import React, { useState } from "react";

import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import LayoutHomePage from "layout/LayoutPage";
import UserList from "components/managepage/UserList";

const ManagePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <LayoutHomePage>
          <div className="flex">
            <UserList />
          </div>
        </LayoutHomePage>
      </div>
    </>
  );
};

export default ManagePage;
