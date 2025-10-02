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
    autoplaySpeed: 2500,
    arrows: false,
    adaptiveHeight: true, // adjusts height based on image
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-[80px] px-4 md:px-6 lg:px-8">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2 md:px-4">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
