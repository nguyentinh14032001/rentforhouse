import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "api/axios";
import Header from "layout/Header";
import Heading from "components/common/Heading";
import SpecifiedUserHouse from "components/yourhousepage/SpecifiedUserHouse";
import Footer from "layout/Footer";
import HouseGrid from "modules/house/HouseGrid";
import HouseItem from "modules/house/HouseItem";
import GLPagination from "layout/GLPagination";
import { useState } from "react";

import ModalThisBack from "components/modal/ModalThisBack";
import Overlay from "components/common/Overlay";
import ModalPending from "components/modal/ModalPending";

const YourHousePage = ({ children }) => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [houses, setHouses] = useState();
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [isChange, setIsChange] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get(`${baseURL}/api/houses/user`, {
            params: {
              id: 2,
              limit: 4,
              page: page,
            },
            headers: {
              Authorization: userData.access_token,
            },
          })
          .then((res) => {
            setHouses(res?.data?.data?.houses);
            setPages(res?.data?.data);
            setIsChange(false);
          });
      } catch (error) {}
    };
    fetchApi();
  }, [page, isChange == true]);

  console.log(isChange);
  const handleClickDetail = (house) => {
    // console.log(item);
    navigate(`/detail/${house?.id}`);
  };
  const HandleClickToFeatered = (house) => {
    // console.log(item);
    navigate(`/housefeature`);
  };
  return (
    <>
      <Header></Header>
      <div className="mx-[15vw] mb-[12px] pt-[10vh]">
        <div className="mb-[40px] flex items-center justify-between rounded-3xl bg-lite py-[32px] px-[40px] ">
          <div className="flex items-start gap-x-6">
            <div className="flex-1">
              <h1 className="mb-[8px] text-[22px] font-semibold">
                Tạo bài đăng bán nhà
              </h1>
              <p className="mb-[8px] text-sm text-text-3">
                Bạn muốn bán nhà? Chúng tôi sẽ giúp bạn
              </p>
              <a href="/" className="text-sm text-primary">
                Bạn cần gì nữa không? Tìm hiểu thêm...
              </a>
            </div>
          </div>
          <Link
            to="/sell-house"
            className="rounded-xl bg-[#2ff06e] px-[16px] py-[12px] font-bold text-white hover:opacity-80"
          >
            Đăng bài
          </Link>
        </div>
        <Heading
          onClick={() => HandleClickToFeatered()}
          className="mb-[16px] w-[350px] cursor-pointer rounded-xl bg-purple-500 py-[8px] text-center text-white hover:text-opacity-70 "
        >
          Quản lý các bài viết đã đăng
        </Heading>
        <ModalThisBack></ModalThisBack>

        <Overlay></Overlay>
        <Heading number={4}>Your House</Heading>

        <SpecifiedUserHouse />
        {/* <HouseGrid type="secondary">
          {houses &&
            houses.map((house) => (
              <HouseItem
                onClick={() => handleClickDetail(house)}
                key={house?.id}
                house={house}
                userData={userData}
                setIsChange={setIsChange}
              />
            ))}
        </HouseGrid> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default YourHousePage;
