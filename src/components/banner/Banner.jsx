import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import banner5 from "../../assets/banner5.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner6 from "../../assets/banner6.jpg";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  const images = [banner4, banner6, banner];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // slower transition looks better
    arrows: false,
  };

  return (
    <div className="w-[90%] mx-[40px] mt-[60px] ">
 {/* Removed max-w and mx-auto */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-10">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-[15px] "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
