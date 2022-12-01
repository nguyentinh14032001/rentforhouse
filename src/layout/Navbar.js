import { Button } from "components/button";
import SearchHomePage from "modules/homepage/SearchHomePage";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  useEffect(() => {
    if (!userData) navigate("/sign-in");

    console.log(user);
  }, [navigate, user, userData]);
  return (
    <div className="sticky top-0 z-10 mb-8 flex w-full items-center justify-between border-b bg-white py-8 px-6">
      <div className="flex flex-1 items-center gap-x-10">
        <Link to="/" className="inline-block">
          <img
            srcSet="logo.png 2x"
            className="h-[50px] w-[50px] object-cover"
            alt="logo"
          />
        </Link>
        <div className="w-full max-w-[458px]">
          <SearchHomePage></SearchHomePage>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end gap-x-10">
        {userData && userData.roles == "ROLE_ADMIN" ? (
          <Link to="/manage/usersmanage">Dashboard</Link>
        ) : null}
        {userData == null ? (
          <Button
            className="w-full max-w-[140px] px-7"
            href="/sign-in"
            kind="primary"
            type="button"
          >
            Login
          </Button>
        ) : (
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#000] text-white">
            <i className="fa-regular fa-user"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
