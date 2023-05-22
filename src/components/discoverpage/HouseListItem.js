import React from "react";

import { Link } from "react-router-dom";
import IconHouse from "../icons/IconHouse";

const HouseListItem = ({ houses }) => {
  return (
    <div className="mt-4 flex w-full">
      <Link to={`/detail/${houses?.id}`}>
        <img
          src={houses?.image}
          alt=""
          className="h-[40vh] w-[36vw] rounded-lg transition duration-300 ease-in-out hover:scale-95"
        />
      </Link>
      <div className="ml-6 mt-2 flex w-[30vw] flex-col">
        <div className="flex font-bold text-text-3">
          <IconHouse className="h-5 w-5"></IconHouse>
          <small className="ml-2 text-[16px]">{houses?.houseType?.name}</small>
        </div>
        <Link
          to={`/detail/${houses?.id}`}
          className="my-2 text-[20px] font-bold"
        >
          {houses?.name}
        </Link>
        <small className="word-break leading-5 text-text-3">
          {houses?.description}
        </small>
        <div className="mt-4 flex flex-col">
          <p className="text-text-3">{houses?.address}</p>
          <div className="mt-2 flex justify-between font-[550]">
            <p>
              {houses?.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <p className="text-text-3">
              {houses?.view} <span>view</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseListItem;
