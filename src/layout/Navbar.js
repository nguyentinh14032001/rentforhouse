import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../api/axios";
import Button from "../components/button/Button";
import SearchHomePage from "../modules/homepage/SearchHomePage";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [image, setImage] = useState();
  const [profile, setProfile] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/profiles/`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            setProfile(response?.data?.data);
            setImage(response?.data?.data?.image);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

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
          <Link to="/manage/user">Quản lý</Link>
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
          <div className="flex flex-col">
            <div
              className={
                image != null
                  ? "flex items-center p-2 shadow-xl"
                  : "flex items-baseline p-2 shadow-xl"
              }
              onClick={handleShow}
            >
              {image && image != "http://localhost:8086/api/file/null" ? (
                <img
                  src={image}
                  alt=""
                  className="mr-2 flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full object-cover"
                />
              ) : (
                <div className="mr-2 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#000] text-white">
                  <i className="fa-regular fa-user text-[13px]"></i>
                </div>
              )}

              <div className="text-[13px] font-bold capitalize">
                {profile?.lastName} {profile?.firstName}
              </div>
              <i className="fa-solid fa-caret-down ml-2"></i>
            </div>
            {show == true && (
              <Link
                to="/profile"
                className="absolute -bottom-2 border-b-2 bg-white p-2"
              >
                Xem chi tiết
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
