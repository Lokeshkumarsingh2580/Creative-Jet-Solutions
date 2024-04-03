import React from "react";

const HeroSection = () => {
  return (
    <>
      <img
        className="relative w-screen object-fit md:h-screen -z-10"
        src="/hero-image.jpg"
        alt="homeimage"
      />

      <h1 className=" absolute sm:top-48 max-w-sm mx-auto text-white  left-10 sm:bottom-[200px] md:text-[60px]   lg:text-[40px] 2xl:text-[60px] md:left-[100px] font-bold -z-10 ">
        Where in-house expertise thrives
      </h1>
    </>
  );
};

export default HeroSection;
