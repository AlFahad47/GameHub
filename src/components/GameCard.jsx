import React from "react";
import { Link, Navigate } from "react-router";
import ratingImg from "../assets/star.png";
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";

const GameCard = ({ game }) => {
  function shortDes(text) {
    if (typeof text !== "string") return "";
    const cleaned = text.replace(/\s+/g, " ").trim();
    return cleaned.length > 70 ? cleaned.slice(0, 70) + "..." : cleaned;
  }
  return (
    <div>
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="lg:w-[340px] md:w-[320px] w-[260px] max-h-[650px] bg-[#DC2626] rounded-md flex flex-col justify-between  "
      >
        <div>
          <img
            className="rounded-t-md lg:h-[420px] md:h-[360px] h-[280px] object-cover w-full"
            src={game.coverPhoto}
            alt=""
          />
          <h2 className="text-white font-medium mt-2.5 mx-auto w-11/12 ">
            {game.title}
          </h2>
          <h2 className="text-gray-300 font-normal mt-2.5 mx-auto w-11/12 ">
            {shortDes(game.description)}
          </h2>

          <div className="flex justify-between mx-auto w-11/12  items-center py-2.5">
            <div className="pl-2  pb-2 lg:pb-4">
              <div className="flex py-1.5  gap-2  items-center">
                <IoIosStar className=" text-white" alt="" />
                <p className="text-white">{game.ratings}</p>
              </div>
            </div>
            <Link to={`/game/${game.id}`} className="btn btn-dash text-white">
              View Details
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameCard;
