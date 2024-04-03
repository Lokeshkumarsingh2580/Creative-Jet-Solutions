import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className=" bg-black  w-full h-auto grid grid-cols-2 pl-8 p-[2px] items-center  place-content-around  md:px-[13px] md:py-4 ">
        <div className="  flex flex-col md:gap-6 gap-4 text-white   md:px-[180px] ">
          <h2 className="md:text-[30px] text-[25px] leading-7  font-semibold 2xl:font-bold tracking-wider  ">
            Creative Jet Solutions
          </h2>
          <p className="text-medium md:text-sm">
            Want to learn more about in-housing and how to supercharge your
            marketing ecosystem? Contact us today for more information on how we
            can transform your business.
          </p>
          <div className=" w-[150px] bg-white text-[15px] md:text-[17px] p-2 text-black 2xl:font-bold font-semibold md:p-4">
            <button>
              <a href="/contact" target="_blank">
                Get in Touch {">"}
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:h-full">
          <h3 className="flex items-center gap-3 text-lg text-white">
            Facebook
            <a
              href="https://www.facebook.com/profile.php?id=100076685897966&mibextid=b06tZ0"
              target="_blank"
            >
              <FaFacebook color="white" />{" "}
            </a>
          </h3>
          <h3 className="flex items-center gap-4 text-lg text-white">
            LinkedIn
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
          </h3>
          <h3 className="flex items-center gap-3 text-lg text-white">
            Instagram
            <a
              href="https://instagram.com/creativejetsolutions?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <FaInstagram color="white" />
            </a>
          </h3>
        </div>
      </div>
      <div className="text-white  text-[12px] md:text-[16px] flex px-8 gap-2 bg-black md:gap-8  md:px-[190px] py-2 items-center ">
        <p>© 2023 · All rights reserved. </p>
        <p>Privacy Policy </p>
        <p>Modern Slavery Statement.</p>
        <p>Indian Policy 2022.</p>
        <p>Tax Strategy.</p>
      </div>
    </>
  );
};

export default Footer;
