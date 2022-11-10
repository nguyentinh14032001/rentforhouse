import React from "react";
import "../../assets/sass/detailpage/Overview.scss";

import image1 from "../../assets/images/6.png";

const Overview = ({ data }) => {
  return (
    <>
      <div className="overview flex justify-between">
        <div className="flex w-[35%] flex-col justify-between">
          <div className="flex flex-col p-4">
            <h1 className="mb-4  text-lg font-[600]">{data?.name}</h1>
            <div className="flex">
              <i className="fa-solid fa-location-dot mr-2"></i>
              <p>{data?.address}</p>
            </div>
          </div>
          <div className="h-[70%] w-full bg-black"></div>
        </div>
        {/* end left */}

        <div className="ml-[5%] flex h-[50vh] w-[60%] flex-col justify-between">
          <div className="h-[75%] w-full">
            <img
              src={image1}
              alt=""
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex h-[20%] justify-between">
            <img src={image1} alt="" className="view-images" />
            <img src={image1} alt="" className="view-images" />
            <img src={image1} alt="" className="view-images" />
            <img src={image1} alt="" className="view-images" />
          </div>
        </div>
      </div>
      {/* end overview */}
    </>
  );
};

export default Overview;
