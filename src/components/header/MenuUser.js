import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { baseURL } from "api/axios";
import { HeaderContext } from "layout/Header";

const MenuUser = () => {
  const authorUser = JSON.parse(localStorage.getItem("user"));

  const value = useContext(HeaderContext);
  let navigate = useNavigate();

  const { image, profile, setProfile, setShow } = value;
  const signOut = () => {
    localStorage.clear();
    setProfile();
    setShow(false);
    navigate("/");
  };
  return (
    <>
      <div className="fixed right-[10px] top-[12vh] z-[100] w-[25vw] rounded-xl bg-[#242526] p-4">
        <Link
          to="/profile"
          className={
            image != null
              ? "mr-2 flex items-center hover:opacity-80"
              : "mr-2 flex items-baseline hover:opacity-80"
          }
        >
          {image && image != `${baseURL}/api/file/null` ? (
            <img
              src={image}
              alt=""
              className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full object-cover"
            />
          ) : (
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#000] text-white">
              <i className="fa-regular fa-user text-[13px]"></i>
            </div>
          )}
          <div className="ml-2 text-[18px] font-bold capitalize text-white">
            {profile?.lastName} {profile?.firstName}
          </div>
        </Link>
        <div className="my-2 h-[2px] w-full bg-white"></div>

        {authorUser && authorUser.roles == "ROLE_ADMIN" ? (
          <Link
            to="/manage/dashboard"
            className="my-2 flex w-fit items-baseline border-b-[1px] border-white pb-2 text-white hover:opacity-80"
          >
            <i className="fa-solid fa-clipboard mr-2"></i>
            Quản lý
          </Link>
        ) : null}

        <button
          onClick={signOut}
          className="flex w-fit items-baseline border-b-[1px] border-white pb-2 text-white hover:opacity-80"
        >
          <i className="fa-solid fa-right-from-bracket mr-2 "></i>
          Đăng xuất
        </button>
      </div>
    </>
  );
};

export default MenuUser;
