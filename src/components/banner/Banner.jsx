import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import banner5 from "../../assets/banner5.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner6 from "../../assets/banner6.jpg";
import banner from "../../assets/banner.jpg"
const Banner = () => {
  const images = [ banner4, banner6,banner];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    // Change image every second
  };

  return (
    <div className="w-full max-w-4xl mx-auto  justify-center items-center mt-20">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Banner ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
