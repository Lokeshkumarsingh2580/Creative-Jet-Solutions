import React from "react";

const Box1 = () => {
  return (
    <>
      <section className="md:h-[300px] h-auto mt-[-25px] md:mt-[-92px] pl-9 md:pl-48 2xl:pl-58  p-4 2xl:h-[350px] text-white bg-black flex gap-4 md:gap-[20px] flex-col items-center justify-center ">
        <h2 className=" flex text-[38px] 2xl:hidden  place-self-start tracking-widest md:text-[42px] font-bold  ">
          Welcome to CJS
        </h2>
        <h2 className="  text-[38px] hidden 2xl:block mb-1 2xl:justify-center  place-self-start md:text-[42px] font-bold  ">
          Welcome to Creative Jet Solutions
        </h2>

        <p className=" leadig-8 mb-2 2xl:text-[20px]  2xl:mb-2 2xl:leading-7 pr-8 md:pr-40 text-[18px] md:text-sm ">
          As pioneers in the industry, we stand alone as the premier firm
          dedicated to crafting and managing unique in-house agencies and
          marketing systems for brands. With 8 years of transformative
          partnerships, spanning various sectors, we've consistently achieved an
          average 30% reduction in marketing expenses through enhanced workflows
          and impactful creativity. Are you prepared to infuse your business
          with this innovative approach?
        </p>
        <div className="md:py-2 md:px-6 md:text-[18px] text-[20px] px-6 py-4 flex place-self-start bg-white text-black font-bold">
          <button>
            <a href="/contact">Get in touch with a representatives {">"}</a>{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default Box1;
