import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <h2 className="mt-10 font-bold text-xl md:text-2xl lg:text-4xl text-center">Popular Games</h2>
      <div className="flex lg:gap-8 md:gap-3 gap-2 justify-center mt-3 lg:mt-5 w-11/12 mx-auto">
        {data
          .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
          .slice(0, 3)
          .map((game) => (
            <GameCard game={game}></GameCard>
          ))}
      </div>
    </div>
  );
};

export default Home;
