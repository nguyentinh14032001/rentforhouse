import React, { useContext } from "react";
<<<<<<< HEAD
import "../../assets/sass/detailpage/SellerInfo.scss";
=======

import { DetailContext } from "pages/DetailPage";
>>>>>>> homepage2

import "../../assets/sass/detailpage/SellerInfo.scss";
import sellerAva from "../../assets/images/demoAva.jpg";
import { DetailContext } from "../../pages/DetailPage";

const SellerInfo = () => {
  const value = useContext(DetailContext);
  const { houses } = value;
  return (
    <>
      <div className="seller my-[7vh] grid grid-cols-6">
        <div className="col-span-2 flex">
          <img src={sellerAva} alt="" className="mr-4 rounded-lg" />
          <div className="flex flex-col">
            <h1 className="my-[5px] text-xl font-bold capitalize">
              {houses?.user?.lastName + " "}
              {houses?.user?.firstName}
            </h1>
            <p className="my-[10px] font-bold">{houses?.user?.email}</p>
            <small className="my-[10px] text-lg font-bold">
              {houses?.user?.phone}
            </small>
            <a
              href="/detail"
              className="w-fit rounded-xl bg-[#0828d2] py-3 px-10 font-bold text-white hover:bg-[#1359C1] "
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="right col-span-2 col-start-4 flex flex-col">
          <div className="flex">
            <h1>Lượt xem</h1>
            <p>{houses?.view}</p>
          </div>
          <div className="flex">
            <h1>Bình luận</h1>
            <p>10</p>
          </div>
          <div className="flex">
            <h1>Yêu thích</h1>
            <p>10</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerInfo;
