import React from "react";
import { useContext } from "react";
import { DetailContext } from "pages/DetailPage";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/sass/detailpage/DetaiCarousel.scss";

function DetaiCarousel() {
  const value = useContext(DetailContext);
  const { house } = value;

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    speed: 500,
  };
  return (
    <div className="container-fluid container-carousel">
      <Slider {...settings}>
        <div>
          <img src={house?.image} alt="" />
        </div>
        <div>
          <img src={house?.image2} alt="" />
        </div>
        <div>
          <img src={house?.image3} alt="" />
        </div>
        <div>
          <img src={house?.image4} alt="" />
        </div>
        <div>
          <img src={house?.image5} alt="" />
        </div>
      </Slider>
    </div>
    /* End container */
  );
}

export default DetaiCarousel;
