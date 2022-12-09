import React, { useContext, useState } from "react";

import { DetailContext } from "pages/DetailPage";
import Slider from "react-slick";

import house from "assets/images/house.jpg";
import house1 from "assets/images/chungcu.png";
import house2 from "assets/images/house2.jpg";
import "../../assets/sass/detailpage/Overview.scss";
import { useEffect } from "react";

const Overview = () => {
  const value = useContext(DetailContext);
  const { houses } = value;
  const [houseImages, setHouseImages] = useState([
    house,
    house,
    house,
    house2,
    house2,
  ]);

  houseImages.map((item) => console.log(item));

  console.log(houseImages);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={houseImages[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="overview flex grid grid-cols-6 flex-col">
        <div className="col-span-4 flex flex-col justify-between">
          <div className="flex flex-col justify-around">
            <h1 className="mb-4  text-lg font-[600] capitalize">
              {houses?.name}
            </h1>

            <div className="flex">
              <i className="fa-solid fa-location-dot mr-2"></i>
              <p>{houses?.address}</p>
            </div>
          </div>
        </div>
        {/* end detail content */}

        <div className="col-span-4 col-start-1">
          <Slider {...settings}>
            {houseImages.map((item) => (
              <div>
                <img src={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Overview;
