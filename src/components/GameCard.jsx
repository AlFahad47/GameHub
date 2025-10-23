import React from "react";
import { Link, Navigate } from "react-router";
import ratingImg from "../assets/star.png";
import { motion } from "framer-motion";

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="w-[340px]  max-h-[550px] bg-[#AD2B2B] rounded-md flex flex-col justify-between cursor-pointer "
      >
        <div>
          <img
            className="rounded-t-md h-[420px] object-cover w-full"
            src={game.coverPhoto}
            alt=""
          />
          <div className="pl-2 lg:pl-4 pb-2 lg:pb-4">
            <h2 className="text-white font-medium mt-2.5">{game.title}</h2>
            <div className="flex py-1.5  gap-2  items-center">
              <img src={ratingImg} className="w-4 h-4" alt="" />
              <p className="">{game.ratings}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default GameCard;
