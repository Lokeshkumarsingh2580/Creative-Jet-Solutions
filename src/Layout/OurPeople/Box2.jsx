import React from "react";

const Box2 = () => {
  return (
    <>
      <section className=" text-white md:h-[500px] p-8 md:p-48 justify-center bg-black flex gap-[20px] md:gap-10 flex-col">
        <h2 className="  md:text-[42px] text-[30px] font-normal  ">
          Welcome to Creativte Jet Solutions
        </h2>
        <p className="text-sm ">
          “In 46 countries across hundreds of sites, 3,000 of us are building
          brands all around the world. And it’s a team that is expanding by
          about 20 people every week. That led AdWeek to place us at #1 in their
          Fastest Growing list in 2020 – and means we proudly attract nothing
          but the very best talent on the planet.
        </p>
        <p>
          Though your bespoke in-house CJS team are firmly part of your brand,
          importantly they’ll always remain closely connected to our wider CJS
          culture too. And given our humble beginnings from a team of 3 people,
          unlike the traditional corporate networks, we have a genuine sense of
          family here.”
        </p>
        <p>
          Our employees make us who we are, which is why we offer an attractive
          range of benefits for everyone who works for us. From the fun stuff to
          the practical stuff, there’s plenty of perks to enjoy. It’s our way of
          saying thanks for doing a great job – you can read more about our UK
          employee benefits{" "}
        </p>
        <div className="">
          <button className="border py-4 px-4 md:text-[15px] text-sm bg-white text-black font-semibold">
            Speak to a member of our teamLike to be the latest member of our
            team? We’d love to hear from you {">"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Box2;
