import React from "react";
import Slider from "react-slick";
import "CarouselHomePage.scss";
import house from "../../assets/images/house.jpg"
import house2 from "../../assets/images/house2.jpg"

const CarouselHomePage = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
 
  };

  return (
    <div>
      <Slider {...settings}>
        <img
          src={house}
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
