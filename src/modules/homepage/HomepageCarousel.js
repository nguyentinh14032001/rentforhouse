import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/sass/homepage/HomepageCarousel.scss";

import a from "assets/image-custom/1.png";
import b from "assets/image-custom/2.png";
import c from "assets/image-custom/3.png";

const HomepageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="homepage-carousel">
      <Slider {...settings}>
        <div className="grid w-full grid-cols-2">
          <div className="col-span-1">
            <p className="carousel-title">Bất động sản Quy Nhơn</p>
            <h1 className="mainText">
              Hiện thực hoá <span style={{ color: "#ff5a3c" }}>ước mơ</span> về
              căn nhà của bạn
            </h1>
            <div className="summary">
              Kênh thông tin tìm nhà ở số 1 Quy Nhơn <br />
              Website đăng tin cho thuê phòng trọ, nhà bán, nhà cho thuê
              <br />
              Chuyên trang bất động sản số 1 Quy Nhơn
            </div>
            <Link to="/discover">See more</Link>
          </div>

          <img src={a} alt="carousel1.jpg" className="col-span-1 col-start-2" />
        </div>

        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default HomepageCarousel;
