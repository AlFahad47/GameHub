import React from "react";
import { Link, Navigate } from "react-router";

const GameCard = ({ game }) => {
    const handleClick=()=>{
        
    }
  return (
    <Link to={`/game/${game.id}`} className="w-[370px] max-h-[550px] bg-[#AD2B2B] rounded-md flex flex-col justify-between">
      <img className="rounded-t-md" src={game.coverPhoto} alt="" />
      <div className="pl-2 lg:pl-4 pb-2 lg:pb-4">
        <h2 className="text-white font-medium mt-2.5">{game.title}</h2>
        <p className="">{game.ratings}</p>
      </div>
    </Link>
  );
};

export default GameCard;
