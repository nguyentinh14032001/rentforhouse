import { Button } from "components/button";

import React from "react";

import HouseTitle from "./HouseTitle";
import moment from "moment";
import axios, { baseURL } from "api/axios";
const HouseModal = ({ onClick = {}, showButton = true, data = "" }) => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const currentDate = moment(data?.createdDate).format("DD/MM/YYYY");
  console.log(currentDate);
  const handleClickShowPost = async (id) => {
    try {
      await axios({
        method: `put`,
        url: `${baseURL}/api/houses/set-hide-post/?hide=true&id=${id}`,

        headers: {
          Authorization: userData.access_token,
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="shadow-1 rounded-xl bg-white">
        <img
          src={data?.image}
          onClick={onClick}
          className=" h-[232px] w-full  cursor-pointer rounded-xl  object-cover transition duration-300 hover:opacity-70"
          alt=""
        />
        <div className="p-3">
          <span className=" inline-block rounded-sm bg-secondary px-3 py-1 text-xs font-medium text-white">
            {data?.houseType?.name}
          </span>
          <HouseTitle
            name={data?.name}
            className="text-xl font-semibold"
          ></HouseTitle>
          <div className="flex items-center gap-x-3">
            <p>Giá:</p>{" "}
            <span className="text-text1 text-xl font-bold">{data?.price}</span>{" "}
            {/* <span className="text-sm font-medium text-error line-through">
              $1,504 USD
            </span>
            <span className="text-sm font-medium text-error">(12% OFF)</span> */}
          </div>
          <div className="flex flex-col gap-y-1">
            <strong>{`Liên hệ: ${data?.user?.lastName} ${data?.user?.firstName}, ${data?.user?.phone}`}</strong>{" "}
            <span className="text-text2">{`Ngày rao bán: ${currentDate}`}</span>
            <Button
              onClick={() => {
                handleClickShowPost(data?.id);
              }}
              className="h-[40px] w-full "
              kind="ghost"
            >
              Hiện bài viết
            </Button>
          </div>
          {/* <p className="text-text2 mb-4">
            <strong className="text-text1">05</strong> claimed
          </p>
          <p className="text-text2">Ships worldwide</p> */}
        </div>
      </div>

      {/* {showButton && (
        <div className="m-3">
          <Button className="w-full bg-secondary text-white">Trở về</Button>
        </div>
      )} */}
      <hr className="mb-3"></hr>
    </div>
  );
};

export default HouseModal;
