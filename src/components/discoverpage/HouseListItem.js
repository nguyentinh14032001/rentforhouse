import React from "react";
import { IconHouse } from "components/icons";
import { Link } from "react-router-dom";

const HouseListItem = ({ houses }) => {
  return (
    <div className="mt-4 flex w-full">
      <Link to={`/detail/:${houses?.id}`}>
        <img
          src="https://thietkenoithatblog.com/wp-content/uploads/2020/03/thiet-ke-cai-tao-noi-that-chung-cu-55m2-3.jpg"
          alt=""
          className="h-[32vh] w-[36vw] rounded-lg"
        />
      </Link>
      <div className="ml-6 mt-2 flex w-[30vw] flex-col">
        <div className="flex font-bold text-text-3">
          <IconHouse className="h-5 w-5"></IconHouse>
          <small className="ml-2 text-[16px]">{houses?.typeNames}</small>
        </div>
        <Link
          to={`/detail/:${houses?.id}`}
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
              {houses?.price}
              <span> vnđ</span>
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
