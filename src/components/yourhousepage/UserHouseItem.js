import React from "react";

import axios from "axios";
import { baseURL } from "api/axios";
import { toast } from "react-toastify";
import { IconHouse } from "components/icons";
import { Link, useNavigate } from "react-router-dom";

const UserHouseItem = ({ house, userData, setIsChange }) => {
  const navigate = useNavigate();
  const deleteHouse = async (id) => {
    try {
      await axios({
        method: "delete",
        url: `${baseURL}/api/houses/${id}`,
        headers: {
          Authorization: userData.access_token,
        },
      })
        .then(function (response) {
          console.log(response?.data?.message);
          setIsChange(true);
        })
        .catch(function (response) {
          toast.error("a");
        });
    } catch (error) {
      console.log("Failed to delete:", error);
    }
  };
  return (
    <>
      {house && (
        <div className="my-4 grid grid-cols-5 gap-8">
          <Link to={`/detail/${house?.id}`} className="col-span-2">
            {house?.image ? (
              <img
                src={house?.image}
                alt=""
                className=" h-full w-full rounded-2xl object-cover"
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className=" h-full w-full rounded-2xl object-cover"
              />
            )}
          </Link>

          <div className="col-span-2 flex flex-col justify-around">
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
              <small className=" text-[gray]">Quy Nhơn</small>

              <div className="my-2 flex justify-between font-bold ">
                <p>
                  {house?.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  VND
                </p>
                <p>{house?.view} view</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end ">
            <button
              onClick={() => navigate(`/sell-house/${house?.id}`)}
              className="mb-2 transform rounded-lg bg-[#EDE9FD] py-2 px-4 font-bold text-white text-[#6F49FD] active:scale-90"
            >
              Edit
            </button>
            <button
              onClick={() => deleteHouse(house?.id)}
              className="transform rounded-lg bg-[red] py-2 px-4 font-bold text-white active:scale-90"
            >
              Xoá
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserHouseItem;
