import React from "react";
import { Link } from "react-router";
import logoImg from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="bg-[#0B0B0B] text-white">
      <div className="flex mx-20 justify-between pt-10 ">
        <Link to="/contact">contact</Link>

        <HashLink to="/#subscribe">Subscribe</HashLink>
      </div>
      <div>
        <div className="flex lg:flex-row md:flex-row flex-col ml-20 justify-start text-[#EBEBEB] font-normal text-[14px] lg:gap-3.5 md:gap-2.5 gap-1.5  my-12">
          <HashLink to="/about#Privacy">Privacy</HashLink>
          <HashLink to="/about#cookieSettings">Cookie Settings</HashLink>
          <HashLink to="/about#cookiePolicy">Cookie Policy</HashLink>
          <HashLink to="/about#Legal">Legal</HashLink>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between text-[#989898] font-normal text-[14px] pb-10 mx-20">
          <Link
            to="/"
            className="flex justify-center items-center  md:ml-2 font-bold btn-ghost pl-0  text-xl text-white"
          >
            {" "}
            <img
              className="mr-1 lg:mr-2 md:mr-2  "
              src={logoImg}
              alt=""
            /> Game <span className="text-[#DC2626]">Hub</span>{" "}
          </Link>
          <div className="flex lg:flex-row md:flex-row flex-col lg:my-0 md:my-0 my-1.5 lg:gap-3.5 md:gap-2.5 gap-1.5 justify-between">
            <Link to="/about">About</Link>
            <HashLink to="/about#Our Mission">Our Mission</HashLink>
            <HashLink to="/about#Technology">Technology</HashLink>
          </div>
          <HashLink to="/#new-games">Popular Games</HashLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
