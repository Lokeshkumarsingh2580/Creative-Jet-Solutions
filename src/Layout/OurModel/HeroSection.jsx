import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="overflow-hidden">
        <img
          className="relative top-0 left-0 w-screen md:h-screen -z-10"
          src="ourmodel.jpg"
          alt="Our_Model_image"
        />
      </div>
      <div className="">
        <h1 className="absolute text-white md:w-[450px] md:text-[30px] -z-10 left-12 md:leading-[45px] font-semibold md:left-[180px] lg:text-[40px] top-[150px] md:top-[400px] w-[180px] md:h-[200px] md:bottom-[20px] ">
          Flipping the marketing landscape upside down, <br /> and Inside Out.
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
