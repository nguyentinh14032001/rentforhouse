import React, { useContext } from "react";

import { DetailContext } from "pages/DetailPage";

import "../../assets/sass/detailpage/DetailInfo.scss";

const DetailInfo = () => {
  const value = useContext(DetailContext);
  const { houses } = value;
  return (
    <>
      <div className="info mt-[5vh] grid grid-cols-6">
        <div className="col-span-12  grid grid-cols-6 ">
          <div className="my-2 flex flex-col border-y-[1px] py-2">
            <span className="opacity-60">Mức giá</span>
            <p className="block w-fit text-[18px] font-[600]">
              {houses?.price} / tháng
            </p>
          </div>
          <div className="my-2 flex flex-col border-y-[1px] py-2">
            <span className="opacity-60">Diện tích</span>
            <p className="block w-fit text-[18px] font-[600]">
              {houses?.area} m2
            </p>
          </div>
          <div className="my-2 flex flex-col border-y-[1px] py-2">
            <span className="opacity-60">Số phòng</span>
            <p className="block w-fit text-[18px] font-[600]">
              {houses?.roomNumber} phòng
            </p>
          </div>
        </div>
        <div className="left col-span-6 col-start-1 mr-[30px] flex grid w-[70%] grid-cols-6 flex-col">
          <div className="col-span-12">
            <h1>Mô tả</h1>
            <p className="break-words">{houses?.description}</p>
          </div>

          <div className="col-span-4 col-start-1 my-4 flex grid grid-cols-4 items-baseline">
            <h1>Diện tích</h1>
            <p>{houses?.area} m2</p>
            <h1>Mức giá</h1>
            <p>{houses?.price} vnd</p>
            <h1>Loại</h1>
            {houses?.houseTypes.map((item) => (
              <p>{item?.name}</p>
            ))}
            <h1>Số phòng</h1>
            <p>{houses?.roomNumber} phòng</p>
            <h1>Lầu</h1>
            <p>Có gác lỡ</p>
            <h1>Toilet</h1>
            <p>2</p>
          </div>

          <div className="facilities col-span-3 col-start-1 flex flex-col">
            <h1>Tiện ích</h1>
            <div className=" flex">
              <small>Có Wi-fi</small>
              <small>Có tủ lạnh</small>
              <small>Có máy giặt</small>
            </div>
          </div>
        </div>

        <div className="right col-span-2 col-start-1 flex flex-col"></div>
      </div>
    </>
  );
};

export default DetailInfo;
