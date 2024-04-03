import React from "react";
// import Cards from "../Json/Cards.json";

const Box2 = () => {
  return (
    <>
      <div className=" grid grid-cols-2  gap-32 p-48 md:px-[180px]  ">
        <div className="flex flex-col gap-2 ">
          <img src="brand/philips.jpg" alt="philipsLogo" />
          <div className="flex justify-center w-[92%]">
            <h2 className="md:text-[30px]">Philips | CJS</h2>
          </div>

          <p className=" md:text-[15px] text-[10px]">
            Philips a health technology company improving people's health and
            well-being through meaningful innovation..
          </p>

          <a
            className="flex self-start py-2 border-b-2 border-red-500"
            href="#"
          >
            Show More {">>"}
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <img src="brand/amazonacademy.jpg" alt="Amazon" />
          <div className="flex justify-center ">
            <h2 className="md:text-[30px] ">Amazon | CJS</h2>
          </div>
          <p className="md:text-[15px] text-[10px]">
            Amazon Academy, formerly JEE Ready, is an online learning platform
            for engineering students to prepare for competitive exams like the
            Joint Entrance Examination (JEE), launched by Amazon India.
          </p>
          <a
            className="flex self-start py-2 border-b-2 border-red-500"
            href="#"
          >
            Show More {">>"}
          </a>
        </div>
        <div className="flex flex-col items-center ">
          <img src="brand/dabur.jpg" alt="Dabur" />
          <h2 className="md:text-[30px] mr-12">Dabur | CJS</h2>
          <p className="md:text-[15px] text-[10px]">
            Dabur Ltd is an Indian multinational consumer goods company. It
            manufactures Ayurvedic medicine and natural consumer products, and
            is one of the largest fast-moving consumer goods (FMCG) companies in
            India.
          </p>
          <a
            className="flex self-start py-2 border-b-2 border-red-500"
            href="#"
          >
            Show More {">>"}
          </a>
        </div>
        <div className="flex flex-col items-center ">
          <img src="brand/muthootfinance.jpg" alt="Muthoot" />
          <h2 className="md:text-[30px] mr-32 ">Muthoot Finance | CJS</h2>
          <p className="md:text-[15px] text-[10px]">
            Muthoot Finance is India's No. 1 Most Trusted Financial Services
            Brand by Power of Trust, TRA's Brand Trust Report for 6 years since
            2016.
          </p>
          <a
            className="flex self-start py-2 border-b-2 border-red-500"
            href="#"
          >
            Show More {">>"}
          </a>
        </div>
        <div className="flex flex-col items-center ">
          <img src="brand/evelynlearning.jpg" alt="Evelyn" />
          <h2 className="md:text-[30px]">Evelyn | CJS</h2>
          <p className="md:text-[15px] text-[10px]">
            Evelyn Learning is a leading brand that creates educational content
            development across all STEM, Business and Healthcare subjects to
            engage and inspire.
          </p>
          <a
            className="flex self-start py-2 border-b-2 border-red-500"
            href="#"
          >
            Show More {">>"}
          </a>
        </div>
        <div className="flex flex-col items-center ">
          <img src="brand/nestle.jpg" alt="Nestle" />
          <h2 className="md:text-[30px]">Nestle | CJS</h2>
          <p className="md:text-[15px] text-[10px]">
            Nestle is the world’s largest food and beverage company & is driven
            by a simple aim: unlocking the power of food to enhance quality of
            life for everyone, today and for generations to come
          </p>
          <a
            className="flex self-start py-2 border-b-2 border-red-500"
            href="#"
          >
            Show More {">>"}
          </a>
        </div>
        <div className="flex flex-col items-center ">
          <img src="brand/hdfcbank.jpg" alt="HDFC" />
          <h2 className="md:text-[30px]">HDFC | CJS</h2>
          <p className="md:text-[15px] text-[10px]">
            HDFC Bank Limited (also known as HDB) is an Indian banking and
            financial services company headquartered in Mumbai. It is India's
            largest private sector bank....
          </p>
          <a
            className="flex self-start py-2 border-b-2 border-red-500"
            href="#"
          >
            Show More {">>"}
          </a>
        </div>
        <div className="flex flex-col items-center ">
          <img src=" brand/atriumgenomics.jpg" alt="Atrium" />
          <h2 className="md:text-[30px]">Atrium | CJS</h2>
          <p className="md:text-[15px] text-[10px]">
            Atrium Genomics vision of innovating healthcare and improving
            lifestyle choices by using the latent knowledge of genomics and data
            science.
          </p>
          <a
            className="flex self-start py-2 border-b-2 border-red-500"
            href="#"
          >
            Show More {">>"}
          </a>
        </div>
      </div>
    </>
  );
};

export default Box2;
