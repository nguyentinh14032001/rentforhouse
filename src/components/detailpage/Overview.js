<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React, { useContext, useEffect, useState } from "react";

import { DetailContext } from "pages/DetailPage";
import Slider from "react-slick";
>>>>>>> homepage2

import "../../assets/sass/detailpage/Overview.scss";
import { DetailContext } from "../../pages/DetailPage";

const Overview = () => {
  const value = useContext(DetailContext);
  const { houses } = value;
  console.log(houses);
  const [houseImages, setHouseImages] = useState([]);

  useEffect(() => {
    if (houses) {
      setHouseImages((prev) => [...prev, houses?.image]);
      if (
        houses?.image2 !=
        "http://rentforhouse-env.eba-sypmxta3.ap-southeast-1.elasticbeanstalk.com/api/file/load/null"
      ) {
        setHouseImages((prev) => [...prev, houses?.image2]);
      }
      if (
        houses?.image3 !=
        "http://rentforhouse-env.eba-sypmxta3.ap-southeast-1.elasticbeanstalk.com/api/file/load/null"
      ) {
        setHouseImages((prev) => [...prev, houses?.image3]);
      }
      if (
        houses?.image4 !=
        "http://rentforhouse-env.eba-sypmxta3.ap-southeast-1.elasticbeanstalk.com/api/file/load/null"
      ) {
        setHouseImages((prev) => [...prev, houses?.image4]);
      }
      if (
        houses?.image5 !=
        "http://rentforhouse-env.eba-sypmxta3.ap-southeast-1.elasticbeanstalk.com/api/file/load/null"
      ) {
        setHouseImages((prev) => [...prev, houses?.image5]);
      }
    }
  }, [houses]);
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
            {houseImages.map((item, index) => (
              <div key={index}>
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
