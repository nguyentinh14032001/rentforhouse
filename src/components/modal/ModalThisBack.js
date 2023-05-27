import axios, { baseURL } from "api/axios";
import { Button } from "components/button";
import Heading from "components/common/Heading";
import Overlay from "components/common/Overlay";
import SearchHomePage from "modules/homepage/SearchHomePage";
import HouseModal from "modules/house/part/HouseModal";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

const ModalThisBack = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [houses, setHouses] = useState("");
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const navigate = useNavigate();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get(`${baseURL}/api/houses/get-hide-posts/${userData?.id}`, {
            headers: {
              Authorization: userData.access_token,
            },
          })
          .then((res) => {
            console.log(res);
            setHouses(res?.data?.data);
          });
      } catch (error) {}
    };
    fetchApi();
  }, [userData.access_token, userData?.id]);
  const handleViewPost = (house) => {
    console.log(house?.id);
    navigate(`/detail/${house?.id}`);
  };
  console.log(houses);
  return (
    <div>
      <Heading
        onClick={() => openModal()}
        className="mb-4 cursor-pointer hover:text-opacity-70 "
        number={houses?.length}
      >
        Các bài viết bạn đã ẩn
      </Heading>
      <ReactModal
        isOpen={modalIsOpen}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content scroll-hidden relative max-h-[90vh] w-full max-w-[521px] overflow-y-auto rounded-2xl bg-white p-10 outline-none"
      >
        <button
          onClick={() => closeModal()}
          className="text-text1 absolute right-10 top-[10px] z-10 flex h-11 w-11 cursor-pointer items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className=" text-center text-[25px] font-bold">
          Danh sách bài viết đã ẩn
        </h2>

        <SearchHomePage className="mt-3"></SearchHomePage>
        <div className="mt-[50px]"></div>

        {houses &&
          houses.map((house) => (
            <HouseModal
              onClick={() => {
                handleViewPost(house);
              }}
              data={house}
              key={house?.id}
            ></HouseModal>
          ))}
      </ReactModal>
    </div>
  );
};

export default ModalThisBack;
