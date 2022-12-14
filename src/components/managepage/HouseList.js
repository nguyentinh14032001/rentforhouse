import React, { useState } from "react";
import axios from "axios";

import { baseURL } from "../../api/axios";
import { IconHouse } from "../icons";

const HouseList = ({ house, setIsChange }) => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  // const [changeStatus, setChangeStatus] = useState();

  const deleteHouse = async () => {
    try {
      await axios
        .delete(`${baseURL}/api/houses/${house?.id}`, {
          headers: {
            Authorization: userData.access_token,
          },
        })
        .then((res) => {
          if (res?.data?.data?.message == "successful delete") {
            setIsChange(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async () => {
    try {
      await axios({
        method: "put",
        url: `${baseURL}/api/houses/house/${
          house?.id
        }/status/${!house?.status}`,
        headers: {
          Authorization: userData.access_token,
        },
      })
        .then(function (response) {
          setIsChange(true);
        })
        .catch(function (response) {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-[50px] grid w-[80vw] grid-cols-7">
        <img
          src="https://thietkenoithatblog.com/wp-content/uploads/2020/03/thiet-ke-cai-tao-noi-that-chung-cu-55m2-3.jpg"
          alt=""
          className=""
        />
        <div className="col-span-6 ml-[20px] grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex font-bold text-text-3">
              <IconHouse className="h-5 w-5"></IconHouse>
              <small className="ml-2 text-[16px]">{house?.typeNames}</small>
            </div>
            <p className="font-bold">{house?.name}</p>
            <p className="whitespace-nowrap font-bold text-[#91910b]">
              6500000 <span> vnđ</span>
            </p>
          </div>

          <div className="flex grid grid-cols-3 items-center">
            {house?.status == true ? (
              <span className="ml-2 mr-4 whitespace-nowrap rounded-lg bg-[#00800061] px-4 py-2 text-center text-[green]">
                Đã xác nhận
              </span>
            ) : (
              <span className="ml-2 mr-4 whitespace-nowrap rounded-lg bg-[#ff000057] px-4 py-2 text-center text-[red]">
                Chưa xác nhận
              </span>
            )}
            <div className="col-start-2 flex">
              {house?.status == true ? (
                <button
                  className="mr-2 whitespace-nowrap  rounded-lg px-4 py-2 font-bold text-[#ff9f03]"
                  onClick={changeStatus}
                >
                  Huỷ đăng
                </button>
              ) : (
                <button
                  className="mr-2 whitespace-nowrap  rounded-lg px-4 py-2 font-bold text-[green]"
                  onClick={changeStatus}
                >
                  Chấp nhận
                </button>
              )}
              <button
                className="rounded-lg px-4 py-2 text-[red]"
                onClick={deleteHouse}
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseList;
