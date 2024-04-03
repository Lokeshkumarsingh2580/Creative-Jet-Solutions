import React from "react";
import Cards from "../../Json/Cards.json/Cards.json";

const Box5 = () => {
  return (
    <>
      <div className="p-16 mt-10 text-4xl md:text-5xl">
        <h1>Capabilites</h1>
      </div>
      <div className="grid w-full md:h-[900px] gap-10 sm:gap-0 my-4 md:grid-cols-3 place-items-center">
        {Cards.map((data, index) => {
          return (
            <div
              key={index}
              className="container flex flex-col items-center py-6 h-[280px] gap-4 border rounded-lg shadow-md w-[300px] "
            >
              <img src={data.icon} width={60} />
              <div className="flex flex-col items-center gap-2">
                <h2 className="font-bold">{data.title}</h2>
                <p className="px-6">{data.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Box5;
