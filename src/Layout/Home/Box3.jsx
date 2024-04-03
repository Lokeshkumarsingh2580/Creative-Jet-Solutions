import React from "react";
import Box1 from "./Box1";

const Box3 = () => {
  return (
    <>
      <section className="md:h-[270px]  2xl:pl-58 2xl:h-[350px] text-white gap-8 md:pl-48 md:pr-40 pl-10 pr-10 bg-black flex  md:gap-[16px] flex-col items-center justify-center p-8 ">
        <h2 className=" flex place-self-start text-[45px] md:text-[42px] font-bold  ">
          The internal rim
        </h2>
        <p className=" md:text-sm 2xl:text-[20px] 2xl:mb-2 2xl:leading-7 text-[15px] ">
          With a specialized team from CJS at your disposal, they're not just
          internal; they seamlessly integrate with your company, deeply
          understanding your operations. This collaborative effort allows us to
          leverage our extensive worldwide talent pool, curating the ideal team
          for your brand. Additionally, you have the option to utilize our
          exclusive technology, the CJS Marketing Gateway, for a substantial
          boost in achieving your marketing transformation
        </p>
        <div className="border py-3 px-6 md:text-[18px] text-[15px] pr-10 flex place-self-start bg-white text-black font-bold   ">
          <button>
            The manner in which we've addressed our clients' business obstacles.{" "}
            {">"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Box3;
