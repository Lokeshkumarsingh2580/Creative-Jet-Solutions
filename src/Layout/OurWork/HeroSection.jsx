import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="md:h-[670px]">
        <img
          className="relative top-0 left-0 w-screen md:h-screen -z-10"
          src="workhome.png"
          alt="Work-Image"
        />
      </div>
      <div className=" md:ml-[180px]  ml-[40px] flex flex-col  top-[130px] absolute md:top-[250px] md:w-1/3 ">
        <h1 className="md:text-[60px] text-xs font-normal md:leading-[65px]	-z-10 text-white">
          Purposeful and <br /> beautiful work <br />
          for the world’s <br /> best-loved brands
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
