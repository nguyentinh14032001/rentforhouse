import React, { useContext, useEffect, useState } from "react";

import { baseURL } from "api/axios";
import { HeaderContext } from "layout/Header";
import { Link, NavLink } from "react-router-dom";

const HeaderLists = () => {
  const authorUser = JSON.parse(localStorage.getItem("user"));
  const value = useContext(HeaderContext);
  const { image, show, setShow, navActive } = value;

  const handleShow = () => {
    setShow(!show);
  };

  const [windowURL, setWindowURL] = useState();
  useEffect(() => {
    setWindowURL(window.location.href);
  }, []);
  console.log();
  return (
    <>
      <ul className="navbar-nav mt-2 mr-4 flex items-center">
        {windowURL == "http://localhost:3000/" ? (
          <NavLink to="/" className="mr-6">
            <li className="nav-item">Trang chủ</li>
            <div className="progress-bar"></div>
          </NavLink>
        ) : (
          <NavLink to="/home" className="mr-6">
            <li className="nav-item">Trang chủ</li>
            <div className="progress-bar"></div>
          </NavLink>
        )}

        <NavLink to="/discover" className="mr-6">
          <li className="nav-item">Khám phá</li>
          <div className="progress-bar"></div>
        </NavLink>

        {authorUser == null ? (
          <NavLink to="/sign-in">
            <li className="nav-item">Đăng nhập</li>
            <div className="progress-bar"></div>
          </NavLink>
        ) : (
          <>
            <NavLink to="/your-house" className="mr-6">
              <li className="nav-item">Nhà của bạn</li>
              <div className="progress-bar"></div>
            </NavLink>

            <div className="mb-[2px] flex flex-col">
              <div
                className={
                  image != null
                    ? "relative flex items-center hover:opacity-80"
                    : "relative flex items-baseline hover:opacity-80"
                }
                onClick={handleShow}
              >
                {image && image != `${baseURL}/api/file/null` ? (
                  <img
                    src={image}
                    alt=""
                    className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full object-cover"
                  />
                ) : (
                  <div
                    className={
                      navActive
                        ? "flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-black"
                        : "flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#000] text-white"
                    }
                  >
                    <i className="fa-regular fa-user text-[13px]"></i>
                  </div>
                )}
                <i className="fa-solid fa-chevron-down absolute right-0 bottom-0 z-10 rounded-full bg-[#3A3B3C] text-[10px] text-white"></i>
              </div>
            </div>
          </>
        )}
      </ul>
    </>
  );
};

export default HeaderLists;
