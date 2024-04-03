import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [notactive, setactive] = useState(false);

  const NavCss = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  const [colour, changecolour] = useState(
    "fixed flex items-center justify-between w-full h-24 px-8 bg-black 2xl:p-16 md:px-12 bg-transparent md:h-20"
  );

  window.onscroll = () => {
    let tmp = "";
    let top = window.scrollY;

    if (top > 100) {
      tmp =
        "fixed flex items-center transition-all ease-in duration-300 justify-between w-full h-24 px-8 bg-black 2xl:p-16 md:px-12 md:h-20";
    } else {
      tmp =
        "fixed flex items-center justify-between w-full h-24 px-8  transition-all ease-out duration-300 2xl:p-16 md:px-12 bg-transparent md:h-20";
    }
    {
      return changecolour(tmp);
    }
  };

  return (
    <>
      <div className="w-screen Container">
        <nav className={colour}>
          <NavLink to="/">
            <img
              className="md:w-[110px] 2xl:w-[130px] lg:w-[100px] w-[60px]"
              src="logo.png"
              alt="logo"
            />
          </NavLink>
          <ul
            className={`h-[100vh] flex justify-center z-50 gap-28 text-xl md:gap-0 flex-col md:items-center absolute ${
              notactive ? "block" : "hidden"
            } md:text-[14px] 2xl:text-xl top-0 right-0 w-1/2 items-center text-white font-semibold bg-[#000000ff] md:bg-transparent md:w-[50%] transition-all ease-in  md:static md:flex md:flex-row md:h-20 md:justify-around`}
          >
            <NavLink style={NavCss} to="ourmodel">
              Our Model
            </NavLink>
            <NavLink style={NavCss} to="ourwork">
              Our Work
            </NavLink>
            <NavLink style={NavCss} to="ourpeople">
              Our People
            </NavLink>
            <NavLink style={NavCss} to="Contact">
              Contact
            </NavLink>
          </ul>
          <div className=" md:hidden">
            <GiHamburgerMenu
              color="white"
              size="30px"
              onClick={() => setactive(!notactive)}
            />
          </div>
          <div
            className={`bg-white z-50 absolute right-10 md:hidden ${
              notactive ? "block" : "hidden"
            } `}
          >
            <GrClose size="20px" onClick={() => setactive(false)} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
