import React from "react";
import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";
import { useTitle } from "../hooks/useTitle";

const AllGames = () => {
  const data = useLoaderData();
  useTitle("All Games | GameHub");
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 justify-items-center">
      {data.map((game) => (
        <GameCard game={game}></GameCard>
      ))}
    </div>
  );
};

export default AllGames;
