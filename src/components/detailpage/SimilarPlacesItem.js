import React from "react";

import sellerAva from "../../assets/images/demoAva.jpg";
import image1 from "../../assets/images/6.png";

const SimilarPlacesItem = () => {
  return (
    <>
      <div className="mx-2">
        <div className="image-box">
          <img src={image1} alt="" className="rounded-lg" />
        </div>
        <div className="mt-4">
          <h1 className="text-[20px] font-bold">Tính's Vilas</h1>
          <div className="flex items-baseline justify-between">
            <p className="mt-[10px] font-[550] text-[#40CA87]">
              5.000.000đ / tháng
            </p>
            <p className="font-[550]">
              Diện tích: <span className="font-[550] text-[#40CA87]">50m2</span>
            </p>
          </div>
          <small className="mt-2 tracking-wide opacity-80">
            Lorem Ipsum is simply dummy text of the printing and Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quo, tempora alias.
            Velit, ut provident libero nulla fuga magnam aliquam maiores
          </small>
          <div className="flex items-center">
            <img
              src={sellerAva}
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className="ml-2 font-bold">Nguyên Tính</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarPlacesItem;
