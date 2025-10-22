import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0B0B0B] text-white">
      <div className="flex mx-20 justify-between pt-10 mt-10">
        <p>contact</p>

        <h2>Subscribe</h2>
      </div>
      <div>
        <div className="flex lg:flex-row md:flex-row flex-col ml-20 justify-start text-[#EBEBEB] font-normal text-[14px] lg:gap-3.5 md:gap-2.5 gap-1.5  my-12">
          <p>Privacy</p>
          <p>Cookie Settings</p>
          <p>Cookie Policy</p>
          <p>Legal</p>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between text-[#989898] font-normal text-[14px] pb-10 mx-20">
          <h2>Game hub</h2>
          <div className="flex lg:flex-row md:flex-row flex-col lg:my-0 md:my-0 my-1.5 lg:gap-3.5 md:gap-2.5 gap-1.5 justify-between">
            <p>About</p>
            <p>Game news</p>
            <p>wish list</p>
            <p>findings</p>
          </div>
          <h2>New Games</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
