import React from "react";
import { IconHouse } from "components/icons";
import { Link } from "react-router-dom";

const HouseListItem = ({ product }) => {
  return (
    <div className="mt-4 flex w-full">
      <Link to={`/detail/:${product?.id}`}>
        <img
          src={product?.image[0]}
          alt=""
          className="h-[32vh] w-[36vw] rounded-lg"
        />
      </Link>
      <div className="ml-6 mt-2 flex w-[30vw] flex-col">
        <div className="flex font-bold text-text-3">
          <IconHouse className="h-5 w-5"></IconHouse>
          <small className="ml-2 text-[16px]">{product?.type}</small>
        </div>
        <Link
          to={`/detail/:${product?.id}`}
          className="my-2 text-[20px] font-bold"
        >
          {product?.name}
        </Link>
        <small className="word-break text-text-3">{product?.description}</small>
        <div className="mt-2 flex flex-col">
          <p className="text-text-3">{product?.address}</p>
          <div className="mt-2 flex justify-between font-[550]">
            <p>
              {product?.price}
              <span>đ</span>
            </p>
            <p className="text-text-3">
              {product?.view} <span>view</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseListItem;
