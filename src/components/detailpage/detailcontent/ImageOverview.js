import React, { useContext } from "react";
import { DetailContext } from "pages/DetailPage";

import "assets/sass/detailpage/ImageOverview.scss";

function ImageOverview() {
  const value = useContext(DetailContext);
  const { house } = value;

  return (
    <div className="my-10">
      <h1 className="mb-[30px] border-l-[3px] border-[#FF5A3C] pl-[10px] text-[20px] font-bold">
        Hình ảnh
      </h1>
      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1 grid grid-rows-2 gap-1">
            <img
              src={house?.image}
              alt=""
              className="row-span-1 h-[200px] w-full object-cover"
            />

            <img
              src={house?.image2}
              alt=""
              className="row-span-1 h-[200px] w-full object-cover"
            />
          </div>

          <div className="col-span-1">
            <img
              src={house?.image3}
              alt=""
              className="h-full h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    /* End col image-overview*/
  );
}

export default ImageOverview;
