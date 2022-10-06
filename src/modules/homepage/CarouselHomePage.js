import React from "react";
import Slider from "react-slick";
import "CarouselHomePage.scss";
const CarouselHomePage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveWidth: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <img
          src="https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
         
        />

        <div className="content-carousel">
        <p className="text-2xl font-semibold text-primary mb-1 italic ">Cần nơi ở?</p>
          <p className="text-2xl font-semibold text-text-2 uppercase mb-4" >Liên hệ với chúng tôi</p>
          <p>
           
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur eos porro sunt, molestias odio veritatis ullam quam
            laboriosam eum facilis, ipsum explicabo id, placeat aperiam.
            Consequuntur expedita modi quasi vitae!
          </p>
        </div>

   <img src="" alt="" />

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
