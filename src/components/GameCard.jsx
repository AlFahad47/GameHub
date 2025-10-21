import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="w-[370px] max-h-[550px] bg-[#AD2B2B] rounded-md flex flex-col justify-between">
      <img className="rounded-t-md" src={game.coverPhoto} alt="" />
      <div className="pl-2 lg:pl-4 pb-2 lg:pb-4">
        <h2 className="text-white font-medium mt-2.5">{game.title}</h2>
        <p className="">{game.ratings}</p>
      </div>
    </div>
  );
};

export default GameCard;
