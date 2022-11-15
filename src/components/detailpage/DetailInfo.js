import React, { useContext } from "react";
import { DetailContext } from "pages/DetailPage";
import "../../assets/sass/detailpage/DetailInfo.scss";

const DetailInfo = () => {
  const value = useContext(DetailContext);
  const { houses } = value;
  return (
    <>
      <div className="info my-[7vh] flex items-baseline justify-between">
        <div className="left flex w-[70%] flex-col">
          <h1>Mô tả</h1>

          <p>{houses?.description}</p>
          <div className="facilities flex flex-col">
            <h1>Tiện ích</h1>
            <div className=" flex">
              <small>Có Wi-fi</small>
              <small>Có tủ lạnh</small>
              <small>Có máy giặt</small>
            </div>
          </div>
        </div>
        <div className="right flex flex-col">
          <div className="flex">
            <h1>Diện tích</h1>

            <p>{houses?.area}</p>
          </div>
          <div className="flex">
            <h1>Giá</h1>
            <p>{`${houses?.price}`}</p>
          </div>
          <div className="flex">
            <h1>Loại</h1>
            <p>{houses?.typeNames}</p>
          </div>
          <div className="flex">
            <h1>Số phòng</h1>
            <p>2 phòng</p>
          </div>
          <div className="flex">
            <h1>Lầu</h1>
            <p>Có gác lỡ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailInfo;
