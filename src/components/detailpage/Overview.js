import React, { useContext } from "react";
import { DetailContext } from "pages/DetailPage";

import "../../assets/sass/detailpage/Overview.scss";

const Overview = () => {
  const value = useContext(DetailContext);
  const { newData } = value;
  return (
    <>
      {value && (
        <div className="overview flex justify-between">
          <div className="flex w-[35%] flex-col justify-between">
            <div className="flex flex-col p-4">
              <h1 className="mb-4 text-[36px] font-[600]">{newData.name}</h1>
              <div className="flex">
                <i className="fa-solid fa-location-dot mr-2"></i>
                <p>{newData.address}</p>
              </div>
            </div>
            <div className="h-[70%] w-full bg-black"></div>
          </div>
          {/* end left */}

          <div className="ml-[5%] flex h-[50vh] w-[60%] flex-col justify-between">
            <div className="h-[75%] w-full">
              <img
                src={newData?.image[0]}
                alt=""
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex h-[20%] justify-between">
              {newData?.image.map((item, index) => (
                <img src={item} key={index} alt="" className="view-images" />
              ))}
              <img src={newData?.image[0]} alt="" className="view-images" />
            </div>
          </div>
        </div>
      )}
      {/* end overview */}
    </>
  );
};

export default Overview;
