import React from "react";

const HomeSection = () => {
  return (
    <div>
      <div className="h-[180px] md:h-[620px] ">
        <img
          className="relative top-0 left-0 w-screen max-h-screen -z-10"
          src="ourpeople.png"
          alt="Our_people_Img"
        />
      </div>
      <div className=" md:ml-[180px] ml-[40px] flex flex-col absolute md:top-[350px] top-[140px] w-1/3   ">
        <h1 className="md:text-[40px] text-[14px] font-normal leading-tight -z-10	 text-white">
          Great brands need a great team
        </h1>
      </div>
    </div>
  );
};

export default HomeSection;
