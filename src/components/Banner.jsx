import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerImg1 from "../assets/banner4.webp";
import bannerImg2 from "../assets/banner2.jpg";
import bannerImg3 from "../assets/banner3.jpg";
const Banner = () => {
  const slides = [
    { id: 1, img: bannerImg2 },
    { id: 2, img: bannerImg1 },
    { id: 3, img: bannerImg3 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className=" lg:w-full w-11/12 mx-auto lg:h-[290px]  md:h-60 h-[115px] max-w-[1090px] mt-10 rounded-2xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              className="w-full    object-center  object-cover"
              src={slide.img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
