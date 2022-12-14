import React from "react";
import Slider from "react-slick";

import house from "../../assets/images/house.jpg";
import house2 from "../../assets/images/house2.jpg";

const CarouselHomePage = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="carousel-home-page">
      <Slider {...settings}>
        <img src={house} alt="" />

        <div className="content-carousel">
          <p className="mb-1 text-2xl font-semibold italic text-primary ">
            Cần nơi ở?
          </p>
          <p className="mb-4 text-2xl font-semibold uppercase text-text-2">
            Liên hệ với chúng tôi
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur eos porro sunt, molestias odio veritatis ullam quam
            laboriosam eum facilis, ipsum explicabo id, placeat aperiam.
            Consequuntur expedita modi quasi vitae!
          </p>
        </div>

        <img src={house2} alt="" />

        <div className="content-carousel">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur eos porro sunt, molestias odio veritatis ullam quam
            laboriosam eum facilis, ipsum explicabo id, placeat aperiam.
            Consequuntur expedita modi quasi vitae!
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselHomePage;
