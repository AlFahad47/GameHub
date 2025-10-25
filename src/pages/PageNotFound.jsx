import React from "react";
import { useTitle } from "../hooks/useTitle";
import errorImg from "../assets/error.png";
import { Link } from "react-router";

const PageNotFound = () => {
  useTitle("Page not Found | GameHub");

  return (
    <div className="flex flex-col justify-center items-center  h-screen bg-red-700">
      <img src={errorImg} className="text-white" alt="" />
      <div className="text-black text-center mt-5">
        <h2 className="font-bold text-4xl">GAME OVER</h2>
        <p className="mt-2.5">OOPS PAGE NOT FOUND</p>
      </div>
      <Link
        to="/"
        className="bg-black px-5 py-2.5 mt-2.5 text-red-600  font-semibold"
      >
        Return Home
      </Link>
    </div>
  );
};

export default PageNotFound;
