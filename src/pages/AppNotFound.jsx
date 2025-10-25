import React from "react";
import { useTitle } from "../hooks/useTitle";
import errorImg from "../assets/error.png";
import { Link } from "react-router";

const AppNotFound = () => {
  useTitle("Page not Found | GameHub");

  return (
    <div className="flex flex-col justify-center items-center   bg-red-700">
      <img src={errorImg} className="text-white mt-30" alt="" />
      <div className="text-black text-center mt-5">
        <h2 className="font-bold text-4xl">GAME OVER</h2>
        <p className="mt-2.5"> APP NOT FOUND</p>
      </div>
      <Link
        to="/"
        className="bg-black px-5 py-2.5 mt-2.5 text-red-600  font-semibold mb-30"
      >
        Return Home
      </Link>
    </div>
  );
};

export default AppNotFound;
