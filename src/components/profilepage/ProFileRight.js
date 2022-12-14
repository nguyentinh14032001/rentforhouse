import React, { useEffect, useState } from "react";

import "../../assets/sass/profilepage/ProFileRight.scss";
import axios from "axios";
import { baseURL } from "../../api/axios";

const ProFileRight = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [profile, setProfile] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get(`${baseURL}/api/users/${userData?.id}`, {
            headers: {
              Authorization: userData.access_token,
            },
          })
          .then((res) => {
            setProfile(res.data.data);
            console.log(res.data.data);
          });
      } catch (error) {}
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="col-span-2 px-4">
        <div className="mt-8 flex">
          <div className="text-[24px] font-bold capitalize">
            {profile?.lastName} {profile?.firstName}
          </div>
          <div className="ml-4 text-[14px] text-[#969696]">
            <i className="fa-solid fa-location-dot mr-2"></i>
          </div>
        </div>

        {/* <div className="mt-8 flex text-[14px]">
          <button className="font-bold">
            <i className="fa-solid fa-message mr-2"></i>Send Message
          </button>
          <button className="ml-4 font-bold text-[#969696]">Report User</button>
        </div> */}

        <div className="flex flex-col">
          <div className="text-divider mt-4 mb-2">Thông tin liên lạc</div>
          <div className="flex flex-col">
            <div className="grid w-fit grid-cols-4">
              <p className="col-start-1">Điện thoại</p>
              <p>{profile?.phone}</p>
              <p className="col-start-1">Địa chỉ</p>
              <p></p>
              <p className="col-start-1">Email</p>
              <p>{profile?.email}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-divider mt-4 mb-2">Thông tin cơ bản</div>
          <div className="flex flex-col">
            <div className="grid w-fit grid-cols-4">
              <p className="col-start-1">Ngày sinh</p>
              <p></p>
              <p className="col-start-1">Giới tính</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProFileRight;
