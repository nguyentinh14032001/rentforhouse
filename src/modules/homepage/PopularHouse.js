import React from "react";
import { IconHouse } from "components/icons";
import { Link } from "react-router-dom";

const PopularHouse = ({ house }) => {
  return (
    <>
      {house && (
        <div className="mb-[20px] flex grid grid-rows-2 flex-col  bg-white ">
          {/* house image */}
          <div className="overflow-hidden ">
            <Link to={`/detail/${house?.id}`}>
              <img
                src={house?.image}
                alt=""
                className="h-full w-full transform object-cover transition-all duration-300 hover:scale-125"
              />
            </Link>
          </div>

          {/* House content */}
          <div className="mt-2 flex flex-col justify-between p-2">
            {/* div top */}
            <div>
              <div className="flex text-[gray]">
                <IconHouse className="mr-2 h-5 w-5"></IconHouse>
                <span>{house?.houseType?.name}</span>
              </div>
              <Link
                to={`/detail/${house?.id}`}
                className="my-2 block text-[20px] font-bold capitalize"
              >
                {house?.name}
              </Link>
            </div>

            {/* div bottom */}
            <div>
              <small className="mx-2 text-[gray]">Quy Nhơn</small>

              <div className="m-2 flex justify-between font-bold ">
                <p>
                  {house?.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  VND
                </p>
                <p>{house?.view} view</p>
              </div>

              <div className="my-2 flex items-center">
                <img
                  className="mr-2 h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1665405139017-b0e8a1687f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
                <p className="font-bold capitalize text-[gray]">
                  {house?.user?.lastName} {house?.user?.firstName}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularHouse;
