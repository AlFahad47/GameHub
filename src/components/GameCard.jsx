import React from "react";
import { Link, Navigate } from "react-router";
import ratingImg from "../assets/star.png";

const GameCard = ({ game }) => {
  const handleClick = () => {};
  return (
    <Link
      to={`/game/${game.id}`}
      className="w-[370px] max-h-[550px] bg-[#AD2B2B] rounded-md flex flex-col justify-between cursor-pointer "
    >
      <img
        className="rounded-t-md h-[420px] object-cover"
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
    </Link>
  );
};

export default GameCard;
