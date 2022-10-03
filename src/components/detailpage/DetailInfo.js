import React from "react";
import "../../assets/detailpage/DetailInfo.scss";

const DetailInfo = () => {
  return (
    <>
      <div className="info container my-[7vh] flex items-baseline justify-between">
        <div className="left flex w-[70%] flex-col">
          <h1>Mô tả</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, whva vav ava vcạc bajbc jabc jabc jabc jabc jabc avkav bavbaa
            vknak jvbakv nkab vkavbkab vka bvakv bakvbavka kvavnka nvkakvan
            bkvab kvnakvn aklvn avkan vka nvav kav.
          </p>
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
            <p>50m2</p>
          </div>
          <div className="flex">
            <h1>Giá</h1>
            <p>5.000.000 / tháng</p>
          </div>
          <div className="flex">
            <h1>Loại</h1>
            <p>Nhà trọ</p>
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
