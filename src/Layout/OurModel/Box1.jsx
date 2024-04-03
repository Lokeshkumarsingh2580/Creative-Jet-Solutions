import React from "react";

const Box1 = () => {
  return (
    <>
      <div className=" flex flex-col h-[300px] gap-4 px-6 py-6 md:h-[300px] md:gap-6 md:px-[120px]  md:justify-center  bg-black text-white">
        <h2 className="md:text-[40px] text-[20px]">
          We achieve superior outcomes with greater speed
        </h2>
        <p className=" md:text-sm text-[12px]">
          Our straightforward commitment is supported by a robust solution. Our
          approach customizes our model to each client's business, utilizing a
          distinctive combination of Talent, Collaboration, and Technology. Over
          the course of 8 years, we've leveraged our accumulated knowledge and
          expertise to enhance efficiency. This ensures that you receive
          exceptional creativity that's not only delivered promptly but also
          generates impactful outcomes.
        </p>
        <div className="button">
          <button className="md:p-3 bg-white text-[10px] p-2 md:text-[20px] text-black font-semibold">
            Discuss customizing your marketing strategies and solutions with our
            team{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Box1;
