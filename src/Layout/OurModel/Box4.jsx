import { React, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Box4 = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  });

  const carousel = [
    "./logos/1.png",
    "./logos/2.png",
    "./logos/3.png",
    "./logos/4.png",
    "./logos/5.png",
    "./logos/6.png",
    "./logos/7.png",
    "./logos/8.png",
    "./logos/9.png",
    "./logos/10.png",
    "./logos/11.png",
    "./logos/12.png",
    "./logos/13.png",
    "./logos/14.png",
    "./logos/15.png",
    "./logos/16.png",
    "./logos/17.png",
    "./logos/18.png",
    "./logos/19.png",
    "./logos/20.png",
    "./logos/21.png",
    "./logos/22.png",
    "./logos/23.png",
    "./logos/24.png",
    "./logos/25.png",
    "./logos/26.png",
    "./logos/27.png",
    "./logos/28.png",
    "./logos/29.png",
    "./logos/30.png",
    "./logos/31.png",
    "./logos/32.png",
    "./logos/33.png",
    "./logos/34.png",
    "./logos/35.png",
    "./logos/36.png",
    "./logos/37.png",
    "./logos/38.png",
    "./logos/39.png",
    "./logos/40.png",
  ];

  return (
    <>
      <div className="mb-4 ">
        <h1 className="md:text-[40px]  text-[30px] p-4 md:px-[65px]">
          Our Clients
        </h1>
      </div>
      <div className="w-[80%] mx-auto grayscale relative -z-30 overflow-hidden">
        <Slider {...settings}>
          {carousel.map((logo, index) => (
            <div key={index}>
              <img src={logo} width={280} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Box4;
