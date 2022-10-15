import { Button } from "components/button";
import SearchHomePage from "modules/homepage/SearchHomePage";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        {/* <Button
          className="w-full max-w-[140px] px-7"
          href="/sign-in"
          kind="primary"
          type="button"
        >
          Login
        </Button> */}
        <img
          className="h-[40px] w-[40px] rounded-full object-cover lg:h-[52px] lg:w-[52px]"
          alt=""
          srcSet="https://images.unsplash.com/photo-1664293282001-0363011a3cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
        />
      </div>
    </div>
  );
};

export default Navbar;
