import React from "react";

const Box2 = () => {
  return (
    <>
      <div className="w-screen h-auto grid-cols-2 -mt-1 md:grid">
        <div className="bg-gray-100 ">
          <img className="w-screen h-auto " src="map.jpg" alt="World Map" />
        </div>
        <div className="flex flex-col gap-6 p-8 2xl:gap-8 ">
          <h2 className="text-[32px] 2xl:text-[40px] md:px-4 px-2 leading-10 md:w-[85%] w-full font-semibold">
            The paradigm-shifting approach that shattered conventions
          </h2>
          <p className="md:w-[80%] text-sm px-5 2xl:text-[18px] 2xl:leading-6 font-medium ">
            From the outset, we held a strong belief that the conventional
            agency- client needed a refresh. Today's businesses require
            innovation across all operations, prompting our distinct approach
            that sparks transformative marketing changes from within. By
            optimizing resources, we empower your investments and facilitate the
            development of superior solutions, systems, and brands.
          </p>
          <p className="md:w-[80%] text-sm px-5 2xl:text-[18px] 2xl:leading-6 font-medium ">
            Having initially disrupted the norm, our approach has now
            custom-crafted solutions for 100+ clients across 12 nations. We
            persist in refining and advancing it to drive their growth,
            prominence, and mission.
          </p>
          <p className=" md:w-[80%] text-sm px-5 font-medium 2xl:text-[18px] 2xl:leading-6 ">
            This methodology has also earned us accolades – notably, we've been
            honored as Campaign's Digital Innovation Network of the Year by
            Global Excellence Forum.
          </p>
          <button className="md:w-[80%] border border-black 2xl:text-lg p-4 font-bold">
            See how our model could transform your marketing {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Box2;
